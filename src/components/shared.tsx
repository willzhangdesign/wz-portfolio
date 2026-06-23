import { useRef, useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import { WoodGrainBackground } from "./WoodGrainBackground";
import imgLogoBlack from "../assets/home/logo-black.png";

/* ── Page shell ──
   Wraps every page: wood-grain background + centered card container.
   variant="home"       → no padding, items-start (sections handle their own padding)
   variant="case-study" → padded, centered, with vertical gap between sections */

export function PageShell({
  children,
  variant = "home",
  header,
}: {
  children: ReactNode;
  variant?: "home" | "case-study";
  header?: ReactNode;
}) {
  const isCaseStudy = variant === "case-study";

  if (isCaseStudy) {
    return (
      <div className="w-full h-screen bg-white overflow-hidden">
        <div className="page-shell-body fixed top-[12px] bottom-[12px] sm:top-[16px] sm:bottom-[16px] left-1/2 -translate-x-1/2 w-[1440px] max-w-[calc(100vw-32px)] sm:max-w-[85vw] border border-black bg-[rgba(255,255,255,0.8)] backdrop-blur-[5px] rounded-[8px] overflow-y-auto overflow-x-hidden flex flex-col items-center">
          {header}
          <div className="flex flex-col gap-8 sm:gap-16 items-center w-full max-w-[1200px] p-[2vh] sm:p-[3.5vh]">
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Home layout: untouched
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <WoodGrainBackground />
      <div className="relative z-10 flex justify-center items-start min-h-screen py-10">
        <div className="page-shell-body border border-black bg-[rgba(255,255,255,0.8)] backdrop-blur-[5px] flex flex-col items-start relative w-[1272px] max-w-[80vw] rounded-[8px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Case study logo (links home) ── */

export function CaseStudyLogo() {
  return (
    <Link
      to="/"
      viewTransition
      className="block h-16 overflow-clip relative shrink-0 w-[92px]"
      aria-label="Back to homepage"
    >
      <div
        className="absolute flex items-center justify-center"
        style={{ width: 100.8, height: 71.8, left: -5.96, top: -4.22 }}
      >
        <img
          alt="Will Zhang Logo"
          className="w-[91px] h-[51px] rotate-[-14.03deg] object-cover pointer-events-none"
          src={imgLogoBlack}
        />
      </div>
    </Link>
  );
}

/* ── Divider ── */

export function Divider() {
  return <hr className="w-full border-0 h-px bg-black" />;
}

/* ── Section header (label + title) ──
   Used for PROBLEM, OUTCOMES, PROCESS, etc. */

export function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <>
      <p className="typo-body font-bold text-[#888] w-full">{label}</p>
      <p className="typo-h1 font-medium text-black w-full">{title}</p>
    </>
  );
}

/* ── Numbered section heading ──
   e.g. "1. Brand design" */

export function SectionNumber({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-2 w-full">
      <p className="typo-h2 font-medium text-black">{number}.</p>
      <p className="typo-h2 font-medium text-black">{title}</p>
    </div>
  );
}

/* ── Blue outcome card ── */

export function OutcomeCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-[#0046DC] flex flex-col gap-3 p-6 rounded-[8px]">
      <p className="typo-intro font-bold text-white">{title}</p>
      <div className="typo-body text-white">{children}</div>
    </div>
  );
}

/* ── Gray content card ── */

export function ContentCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-[#eee] flex flex-col gap-3 p-4 rounded-[8px]">
      <p className="typo-intro font-bold text-black">{title}</p>
      <div className="typo-body text-black">{children}</div>
    </div>
  );
}

/* ── Side-by-side images (responsive row) ── */

export function ImageRow({
  images,
  caption,
  aspectRatio,
}: {
  images: { src: string; alt: string }[];
  caption?: string;
  /** Optional CSS aspect-ratio string (e.g. "4/3", "16/9"). When set, all
   *  images are cropped to this ratio so the row stays a uniform height. */
  aspectRatio?: string;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-1 min-w-0 rounded-[12px] overflow-hidden"
            style={aspectRatio ? { aspectRatio } : undefined}
          >
            <img
              alt={img.alt}
              className="block w-full h-full rounded-[12px]"
              style={aspectRatio ? { objectFit: "cover" } : undefined}
              src={img.src}
            />
          </div>
        ))}
      </div>
      {caption && (
        <p className="typo-caption font-medium text-[#666] w-full">{caption}</p>
      )}
    </div>
  );
}

/* ── Info sidebar card (Timeline / Skills / Team) ── */

export function InfoCard({
  items,
}: {
  items: { label: string; content: ReactNode }[];
}) {
  return (
    <div className="bg-[#F5F5F5] rounded-[12px] p-6 flex flex-col gap-5 w-full min-[900px]:w-[300px] min-[900px]:shrink-0">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <p className="typo-caption font-bold text-[#666]">{item.label}</p>
          <div className="typo-body text-black leading-[1.3]">{item.content}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Jump link (process section) ── */

export function JumpLink({
  id,
  label,
  description,
}: {
  id: string;
  label: string;
  description: string;
}) {
  return (
    <a href={`#${id}`} className="no-underline w-full">
      <div className="bg-[#F5F5F5] hover:bg-[#eee] transition-colors rounded-[12px] p-6 w-full flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="typo-intro font-medium text-black">{label}</p>
          <span className="typo-intro text-black">↓</span>
        </div>
        <p className="typo-body text-black">{description}</p>
      </div>
    </a>
  );
}

/* ── Related project card ── */

export function RelatedProjectCard({
  to,
  image,
  title,
  description,
}: {
  to: string;
  image: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="bg-white hover:bg-[#222] w-full sm:flex-1 sm:min-w-0 self-stretch transition-colors group no-underline cursor-pointer rounded-[12px] overflow-hidden border border-black"
    >
      <div className="aspect-[16/9] relative w-full overflow-hidden">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          src={image}
        />
      </div>
      <div className="flex flex-col gap-3 p-4 text-black group-hover:text-white transition-colors">
        <p className="typo-intro font-bold">{title}</p>
        <p className="typo-body">{description}</p>
      </div>
    </Link>
  );
}

/* ── Hover-to-play video hook (pauses when scrolled out of view) ── */

export function useHoverVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const play = () => ref.current?.play().catch(() => {});
  const pause = () => {
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  };
  return {
    videoRef: ref,
    hoverHandlers: {
      onMouseEnter: play,
      onMouseLeave: pause,
      onFocus: play,
      onBlur: pause,
    },
  };
}

/* ── Intersection-driven autoplay hook ── */

export function useVideoIntersection(threshold = 0.25) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
