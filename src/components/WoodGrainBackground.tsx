import { useEffect, useRef } from 'react';

const STROKE_COLOR = '#DDDDDD';
const ANIMATION_RADIUS = 200;
const INNER_RADIUS = 32;
const SEGMENTS = 200;
const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const TIME_STEP = 0.07 * (FRAME_INTERVAL / 10);

export function WoodGrainBackground({ isStatic = false }: { isStatic?: boolean } = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    mouseX: -1000,
    mouseY: -1000,
    time: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    gutter: window.innerWidth >= 1024 ? 24 : 16,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const s = stateRef.current;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      s.width = window.innerWidth;
      s.height = window.innerHeight;
      s.gutter = s.width >= 1024 ? 24 : 16;
      canvas!.width = s.width * dpr;
      canvas!.height = s.height * dpr;
      canvas!.style.width = s.width + 'px';
      canvas!.style.height = s.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (isStatic) drawStatic(ctx, s);
    }

    resize();
    window.addEventListener('resize', resize);

    if (isStatic) {
      drawStatic(ctx, s);
      return () => window.removeEventListener('resize', resize);
    }

    function onMouseMove(e: MouseEvent) {
      s.mouseX = e.clientX;
      s.mouseY = e.clientY;
    }
    function onMouseLeave() {
      s.mouseX = -1000;
      s.mouseY = -1000;
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    let lastFrame = 0;
    let rafId = 0;

    function tick(now: number) {
      rafId = requestAnimationFrame(tick);
      if (now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;
      s.time += TIME_STEP;
      drawAnimated(ctx, s);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isStatic]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}

interface State {
  mouseX: number; mouseY: number; time: number;
  width: number; height: number; gutter: number;
}

function drawStatic(ctx: CanvasRenderingContext2D, s: State) {
  ctx.clearRect(0, 0, s.width, s.height);
  ctx.strokeStyle = STROKE_COLOR;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0; x <= s.width; x += s.gutter) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, s.height);
  }
  for (let y = 0; y <= s.height; y += s.gutter) {
    ctx.moveTo(0, y);
    ctx.lineTo(s.width, y);
  }
  ctx.stroke();
}

function drawAnimated(ctx: CanvasRenderingContext2D, s: State) {
  ctx.clearRect(0, 0, s.width, s.height);
  ctx.strokeStyle = STROKE_COLOR;
  ctx.lineWidth = 1;

  // vertical lines
  for (let x = 0; x <= s.width; x += s.gutter) {
    ctx.beginPath();
    drawVerticalPath(ctx, x, s);
    ctx.stroke();
  }
  // horizontal lines
  for (let y = 0; y <= s.height; y += s.gutter) {
    ctx.beginPath();
    drawHorizontalPath(ctx, y, s);
    ctx.stroke();
  }
}

function calcOffset(
  pos: number, crossPos: number, linePos: number,
  mouseMain: number, mouseCross: number, time: number,
) {
  const dx = mouseMain - linePos;
  const dy = mouseCross - pos;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist >= ANIMATION_RADIUS) return 0;

  let influence = 1 - dist / ANIMATION_RADIUS;
  influence = influence * influence * (3 - 2 * influence);
  const angle = Math.atan2(dy, dx);

  const freq = dist < INNER_RADIUS
    ? 0.08
    : 0.08 * (1 - (dist - INNER_RADIUS) / (ANIMATION_RADIUS - INNER_RADIUS));

  const amp = influence * 12;
  const seed = linePos * 0.01 + pos * 0.01;

  return (
    Math.sin(pos * freq * 0.4 + time * 0.5 + seed) * amp * 1.2 +
    Math.sin(pos * freq * 0.15 + time * 0.3 + angle * 2 + seed * 1.5) * amp * 0.8 +
    Math.sin(pos * freq * 0.25 + time * 0.4 + Math.cos(angle * 3) + seed * 2) * amp * 0.5 +
    Math.sin(angle * 3 + time * 0.6 + dist * 0.05) * amp * 0.3 * Math.max(0, 1 - dist / INNER_RADIUS) +
    Math.sin(pos * freq * 0.12 + Math.cos(time * 0.35 + seed * 3)) * amp * 0.6 +
    Math.cos(pos * freq * 0.18 + Math.sin(time * 0.45 + angle)) * amp * 0.4 +
    Math.sin(pos * freq * 1.5 + time * 0.8 + dist * 0.02) * amp * 0.15
  );
}

function drawVerticalPath(ctx: CanvasRenderingContext2D, x: number, s: State) {
  const step = s.height / SEGMENTS;
  ctx.moveTo(x, 0);
  let prevOff = 0;
  for (let i = 1; i <= SEGMENTS; i++) {
    const y = i * step;
    const off = calcOffset(y, x, x, s.mouseX, s.mouseY, s.time);
    const cy1 = (i - 1) * step + step / 3;
    const cy2 = y - step / 3;
    ctx.bezierCurveTo(x + prevOff, cy1, x + off, cy2, x + off, y);
    prevOff = off;
  }
}

function drawHorizontalPath(ctx: CanvasRenderingContext2D, y: number, s: State) {
  const step = s.width / SEGMENTS;
  ctx.moveTo(0, y);
  let prevOff = 0;
  for (let i = 1; i <= SEGMENTS; i++) {
    const x = i * step;
    const off = calcOffset(x, y, y, s.mouseY, s.mouseX, s.time);
    const cx1 = (i - 1) * step + step / 3;
    const cx2 = x - step / 3;
    ctx.bezierCurveTo(cx1, y + prevOff, cx2, y + off, x, y + off);
    prevOff = off;
  }
}
