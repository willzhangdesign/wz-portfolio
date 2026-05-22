import imgLogoBlack1 from "../assets/home/logo-black.png";

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
            <img
              alt="Will Zhang Logo"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgLogoBlack1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
