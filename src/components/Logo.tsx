import { useState } from "react";
import imgLogoBlack from "../assets/home/logo-black.png";
import imgLogoGif from "../assets/_unused/logo-gif-black.gif";

interface LogoProps {
  /**
   * CSS height value. Accepts any CSS expression — px, clamp(), var(...), etc.
   * Inner positioning + dimensions scale proportionally to this height.
   * Defaults to a fluid clamp so the logo shrinks on small viewports and
   * caps at the original 56px on desktop.
   */
  height?: string;
  className?: string;
}

export function Logo({ height = "clamp(36px, 5vw, 56px)", className = "" }: LogoProps) {
  const [hovered, setHovered] = useState(false);

  // All values below were authored against an outer height of 56px.
  // Multiplying by `var(--logo-h) / 56` keeps every layer proportional.
  const cssVars = { "--logo-h": height } as React.CSSProperties;

  return (
    <div
      className={`overflow-clip relative shrink-0 ${className}`}
      style={{
        ...cssVars,
        height: "var(--logo-h)",
        width: "calc(var(--logo-h) * (80.889 / 56))",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute flex items-center justify-center"
        style={{
          height: "calc(var(--logo-h) * (61.043 / 56))",
          width: "calc(var(--logo-h) * (85.705 / 56))",
          left: "calc(var(--logo-h) * (-3.69 / 56))",
          top: "calc(var(--logo-h) * (-3.3 / 56))",
        }}
      >
        <div className="flex-none rotate-[-14.03deg] skew-x-[-0.05deg]">
          <div
            className="relative"
            style={{
              height: "calc(var(--logo-h) * (43.546 / 56))",
              width: "calc(var(--logo-h) * (77.502 / 56))",
            }}
          >
            {/* Static PNG — hidden on hover */}
            <img
              alt="Will Zhang Logo"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-opacity duration-150"
              style={{ opacity: hovered ? 0 : 1 }}
              src={imgLogoBlack}
            />
            {/* Animated GIF — shown on hover */}
            <img
              alt=""
              aria-hidden="true"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-opacity duration-150"
              style={{ opacity: hovered ? 1 : 0 }}
              src={imgLogoGif}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
