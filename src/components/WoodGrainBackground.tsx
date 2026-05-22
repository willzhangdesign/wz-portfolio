import { useState, useEffect, useRef } from 'react';

export function WoodGrainBackground() {
  const strokeWidth = 1;
  const animationRadius = 200;
  const innerRadius = 32;

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [time, setTime] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [gutterDistance, setGutterDistance] = useState(24);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track viewport size and update canvas dimensions and gutter
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
      
      // Set gutter based on viewport width
      if (width >= 1024) {
        setGutterDistance(24);
      } else {
        setGutterDistance(16);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    // Listen on document to ensure events are captured
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 0.07);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // Generate vertical lines
  const verticalLines = [];
  for (let x = 0; x <= dimensions.width; x += gutterDistance) {
    verticalLines.push(x);
  }

  // Generate horizontal lines
  const horizontalLines = [];
  for (let y = 0; y <= dimensions.height; y += gutterDistance) {
    horizontalLines.push(y);
  }

  // Function to calculate wood grain path for vertical lines
  const getVerticalPath = (x: number) => {
    const segments = 200;
    const stepSize = dimensions.height / segments;
    let path = `M ${x} 0`;
    
    let prevOffset = 0;
    let prevFrequency = 0;

    for (let i = 1; i <= segments; i++) {
      const y = i * stepSize;
      const dx = mousePos.x - x;
      const dy = mousePos.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let offset = 0;
      let frequency = 0;
      let influence = 0;

      if (distance < animationRadius) {
        influence = 1 - (distance / animationRadius);
        influence = influence * influence * (3 - 2 * influence);
        
        const angle = Math.atan2(dy, dx);
        
        if (distance < innerRadius) {
          frequency = 0.08;
        } else {
          const normalizedDistance = (distance - innerRadius) / (animationRadius - innerRadius);
          frequency = 0.08 * (1 - normalizedDistance);
        }
        
        const baseAmplitude = influence * 12;
        const positionSeed = x * 0.01 + y * 0.01;
        
        const grainFlow = Math.sin(y * frequency * 0.4 + time * 0.5 + positionSeed) * baseAmplitude * 1.2;
        const irregularity1 = Math.sin(y * frequency * 0.15 + time * 0.3 + angle * 2 + positionSeed * 1.5) * baseAmplitude * 0.8;
        const irregularity2 = Math.sin(y * frequency * 0.25 + time * 0.4 + Math.cos(angle * 3) + positionSeed * 2) * baseAmplitude * 0.5;
        const swirl = Math.sin(angle * 3 + time * 0.6 + distance * 0.05) * baseAmplitude * 0.3 * Math.max(0, 1 - distance / innerRadius);
        const asymmetric1 = Math.sin(y * frequency * 0.12 + Math.cos(time * 0.35 + positionSeed * 3)) * baseAmplitude * 0.6;
        const asymmetric2 = Math.cos(y * frequency * 0.18 + Math.sin(time * 0.45 + angle)) * baseAmplitude * 0.4;
        const detail = Math.sin(y * frequency * 1.5 + time * 0.8 + distance * 0.02) * baseAmplitude * 0.15;
        
        offset = grainFlow + irregularity1 + irregularity2 + swirl + asymmetric1 + asymmetric2 + detail;
      }

      const prevY = (i - 1) * stepSize;
      const currX = x + offset;
      const prevX = x + prevOffset;
      
      const prevDy = mousePos.y - prevY;
      const prevDistance = Math.sqrt(dx * dx + prevDy * prevDy);
      let prevInfluence = 0;
      if (prevDistance < animationRadius) {
        prevInfluence = 1 - (prevDistance / animationRadius);
        prevInfluence = prevInfluence * prevInfluence * (3 - 2 * prevInfluence);
      }
      
      const derivative = Math.cos(y * frequency + time) * frequency * (influence * 12);
      const prevDerivative = Math.cos(prevY * prevFrequency + time) * prevFrequency * (prevInfluence * 12);
      
      const cp1X = prevX + prevDerivative * stepSize / 3;
      const cp1Y = prevY + stepSize / 3;
      const cp2X = currX - derivative * stepSize / 3;
      const cp2Y = y - stepSize / 3;
      
      path += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${currX} ${y}`;
      
      prevOffset = offset;
      prevFrequency = frequency;
    }

    return path;
  };

  // Function to calculate wood grain path for horizontal lines
  const getHorizontalPath = (y: number) => {
    const segments = 200;
    const stepSize = dimensions.width / segments;
    let path = `M 0 ${y}`;
    
    let prevOffset = 0;
    let prevFrequency = 0;

    for (let i = 1; i <= segments; i++) {
      const x = i * stepSize;
      const dx = mousePos.x - x;
      const dy = mousePos.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let offset = 0;
      let frequency = 0;
      let influence = 0;

      if (distance < animationRadius) {
        influence = 1 - (distance / animationRadius);
        influence = influence * influence * (3 - 2 * influence);
        
        const angle = Math.atan2(dy, dx);
        
        if (distance < innerRadius) {
          frequency = 0.08;
        } else {
          const normalizedDistance = (distance - innerRadius) / (animationRadius - innerRadius);
          frequency = 0.08 * (1 - normalizedDistance);
        }
        
        const baseAmplitude = influence * 12;
        const positionSeed = x * 0.01 + y * 0.01;
        
        const grainFlow = Math.sin(x * frequency * 0.4 + time * 0.5 + positionSeed) * baseAmplitude * 1.2;
        const irregularity1 = Math.sin(x * frequency * 0.15 + time * 0.3 + angle * 2 + positionSeed * 1.5) * baseAmplitude * 0.8;
        const irregularity2 = Math.sin(x * frequency * 0.25 + time * 0.4 + Math.cos(angle * 3) + positionSeed * 2) * baseAmplitude * 0.5;
        const swirl = Math.sin(angle * 3 + time * 0.6 + distance * 0.05) * baseAmplitude * 0.3 * Math.max(0, 1 - distance / innerRadius);
        const asymmetric1 = Math.sin(x * frequency * 0.12 + Math.cos(time * 0.35 + positionSeed * 3)) * baseAmplitude * 0.6;
        const asymmetric2 = Math.cos(x * frequency * 0.18 + Math.sin(time * 0.45 + angle)) * baseAmplitude * 0.4;
        const detail = Math.sin(x * frequency * 1.5 + time * 0.8 + distance * 0.02) * baseAmplitude * 0.15;
        
        offset = grainFlow + irregularity1 + irregularity2 + swirl + asymmetric1 + asymmetric2 + detail;
      }

      const prevX = (i - 1) * stepSize;
      const currY = y + offset;
      const prevY = y + prevOffset;
      
      const prevDx = mousePos.x - prevX;
      const prevDistance = Math.sqrt(prevDx * prevDx + dy * dy);
      let prevInfluence = 0;
      if (prevDistance < animationRadius) {
        prevInfluence = 1 - (prevDistance / animationRadius);
        prevInfluence = prevInfluence * prevInfluence * (3 - 2 * prevInfluence);
      }
      
      const derivative = Math.cos(x * frequency + time) * frequency * (influence * 12);
      const prevDerivative = Math.cos(prevX * prevFrequency + time) * prevFrequency * (prevInfluence * 12);
      
      const cp1X = prevX + stepSize / 3;
      const cp1Y = prevY + prevDerivative * stepSize / 3;
      const cp2X = x - stepSize / 3;
      const cp2Y = currY - derivative * stepSize / 3;
      
      path += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${x} ${currY}`;
      
      prevOffset = offset;
      prevFrequency = frequency;
    }

    return path;
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        {/* Vertical lines */}
        {verticalLines.map((x, index) => (
          <path
            key={`vertical-${index}`}
            d={getVerticalPath(x)}
            stroke="#CCCCCC"
            strokeWidth={strokeWidth}
            fill="none"
          />
        ))}

        {/* Horizontal lines */}
        {horizontalLines.map((y, index) => (
          <path
            key={`horizontal-${index}`}
            d={getHorizontalPath(y)}
            stroke="#CCCCCC"
            strokeWidth={strokeWidth}
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
}
