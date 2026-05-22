import { Link } from "react-router";

interface ProjectCardProps {
  title: string;
  organization: string;
  timeframe: string;
  description: string;
  image?: string;
  innerShadow?: boolean;
  href?: string;
  tag?: string;
  disabled?: boolean;
}

export function ProjectCard({ title, organization, timeframe, description, image, innerShadow, href, tag, disabled }: ProjectCardProps) {
  // ─── Disabled state ───
  // Locked-in #EEEEEE surface, #333333 text. No hover, no transitions.
  // ─── Active state ───
  // White by default, transitions to #222 on hover with white text.
  const surfaceClass = disabled
    ? "bg-[#eee]"
    : "transition-colors duration-200 group-hover/card:bg-[#222]";

  const textClass = disabled
    ? "text-[#333]"
    : "text-black transition-colors duration-200 group-hover/card:text-white";

  const tagClass = disabled
    ? "bg-[#ddd] text-[#333]"
    : "bg-[#eee] text-black transition-colors duration-200 group-hover/card:text-white group-hover/card:bg-[#444]";

  const cardContent = (
    <div className={`relative shrink-0 w-full ${surfaceClass} border-b border-[#777]`}>
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] sm:p-[40px] md:p-[64px] relative w-full">
        {/* Headline title */}
        <p className={`typo-h2 font-medium leading-[1.15] w-full ${textClass}`}>
          {title}
        </p>

        {/* Image + description container */}
        <div className="flex flex-col gap-[32px] w-full">
          {/* Image — aspect ratio matches Figma's 1068×560 spec so it scales proportionally as the viewport narrows */}
          {image ? (
            <div className="aspect-[1068/560] relative rounded-[8px] shrink-0 w-full overflow-hidden">
              <img
                alt={title}
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
                src={image}
              />
              {innerShadow && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[8px] pointer-events-none"
                  style={{ boxShadow: "inset 0px 0px 10px 5px rgba(182, 219, 255, 0.15)" }}
                />
              )}
            </div>
          ) : (
            <div className="bg-[#d9d9d9] aspect-[1068/560] rounded-[8px] shrink-0 w-full" />
          )}

          {/* Description section */}
          <div className="flex flex-col gap-[16px]">
            {/* Organization + tag line — wraps so the text falls underneath the tag on narrow viewports */}
            <div className="flex flex-wrap items-center gap-x-[10px] gap-y-[6px]">
              {tag && (
                <span
                  className={`inline-block font-medium leading-[115%] rounded-[8px] text-[clamp(12px,1.2vw,16px)] px-[clamp(6px,0.6vw,8px)] py-[clamp(2px,0.3vw,4px)] whitespace-nowrap shrink-0 ${tagClass}`}
                >
                  {tag}
                </span>
              )}
              <p className={`typo-body font-bold ${textClass}`}>
                {organization} | {timeframe}
              </p>
            </div>

            {/* Description */}
            <p className={`typo-body w-full ${textClass}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Disabled card: no link, default cursor, no hover behavior
  if (disabled) {
    return (
      <div className="group/card relative shrink-0 w-full cursor-default" aria-disabled="true">
        {cardContent}
      </div>
    );
  }

  if (href) {
    return (
      <Link to={href} viewTransition className="group/card relative shrink-0 w-full cursor-pointer block no-underline text-inherit">
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="group/card relative shrink-0 w-full cursor-pointer">
      {cardContent}
    </div>
  );
}
