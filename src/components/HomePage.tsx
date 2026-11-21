import { Logo } from "./Logo";
import { ProjectCard } from "./ProjectCard";
import { AnimatedLink } from "./AnimatedLink";
import { PageShell } from "./shared";
import imgProject01 from "../assets/home/projCard-nycRedesign.png";
import imgProject02 from "../assets/home/projCard-DDS.png";
import imgProject03 from "../assets/home/RTPI_Hero-Pole.png";
import imgProject05 from "../assets/home/RTPI_Hero-shelter.png";

export function HomePage() {
  return (
    <PageShell variant="home">
      {/* Header */}
      <div className="shrink-0 w-full border-b border-[#999]">
        <div className="flex flex-col gap-8 items-start p-6 sm:p-10 md:p-16">
          {/* Title row */}
          <div className="flex flex-wrap gap-x-4 gap-y-4 items-center justify-between w-full">
            <div className="flex gap-4 items-center min-w-0">
              <Logo />
              <p
                className="typo-display whitespace-nowrap text-black"
                style={{ fontSize: "clamp(28px, 5.5vw, 64px)", lineHeight: 1.05 }}
              >
                Will Zhang
              </p>
            </div>

            <div className="flex gap-4 items-center whitespace-nowrap font-['Satoshi',sans-serif] typo-body">
              <AnimatedLink href="mailto:will@willzhang.design" className="underline shrink-0">Email</AnimatedLink>
              <span className="shrink-0">/</span>
              <AnimatedLink href="https://drive.google.com/file/d/1JWV-7mHHV336bQQTnCYB5BtklalTCFlb/view?usp=sharing" external className="underline shrink-0">Resume</AnimatedLink>
              <span className="shrink-0">/</span>
              <AnimatedLink href="https://www.linkedin.com/in/wizdesign/" external className="underline shrink-0">LinkedIn</AnimatedLink>
            </div>
          </div>

          {/* Bio */}
          <div className="typo-body text-black w-[835px] max-w-full">
            <p className="mb-2.5 leading-[1.2]">
              Product designer and strategist. I design how people get around cities, on the street and on screen.
            </p>
            <p className="mb-2.5 leading-[1.2]">
              I work at{" "}
              <AnimatedLink href="https://ridewithvia.com/" external className="underline">Via</AnimatedLink> on{" "}
              <AnimatedLink href="https://ridewithvia.com/products/remix" external className="underline">Remix</AnimatedLink>.{" "}
              Before that,{" "}
              <AnimatedLink href="https://www.nyc.gov/content/oti/pages/" external className="underline">New York City Government</AnimatedLink>, and before that,{" "}
              <AnimatedLink href="https://www.deloittedigital.com/us/en/accelerators/applied-design-innovation.html" external className="underline">Deloitte Digital</AnimatedLink>, with healthcare and finance clients.
            </p>
            <p className="leading-[1.2]">
              I also make{" "}
              <AnimatedLink href="https://www.instagram.com/wood.will.hunting/" external className="underline">furniture</AnimatedLink>.
            </p>
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <ProjectCard
        title="NYC Design System"
        organization="Office of Technology and Innovation"
        timeframe="2024–2025"
        description="First design system for NYC government capable of scaling with multitudes of different service and product contexts. Currently in city-wide adoption and scaling."
        image={imgProject02}
        innerShadow
        href="/case-study/design-system"
      />
      <ProjectCard
        title="nyc.gov Redesign"
        organization="Office of Technology and Innovation"
        timeframe="2023–2024"
        description="The 2025 nyc.gov redesign is the first major overhaul of the city's website in over a decade. The redesign makes nyc.gov more trustworthy, accessible, and future-forward. It is the blueprint to make all NYC websites easier for everyone."
        image={imgProject01}
        href="/case-study/nyc-redesign"
      />
      <ProjectCard
        title="Showing every New Yorker when their bus is coming"
        organization="Department of Transportation"
        timeframe="2025—2026"
        description="Designed a new real-time passenger information (RTPI) experience for NYC's 15,000+ stops to accurately and clearly communicate arrival times, focusing on 2 types of riders: those with disabilities and those with low technology or internet access."
        image={imgProject03}
        href="/case-study/rtpi-pole"
      />
      <ProjectCard
        title="Accessible bus information displays in bus shelters"
        organization="Department of Transportation"
        timeframe="2025—2026"
        description="Redesigned the RTPI display interface for over 3000 bus shelters across the 5 boroughs to improve find-ability and usability for New Yorkers with disabilities."
        image={imgProject05}
        href="/case-study/bus-shelter"
      />
    </PageShell>
  );
}
