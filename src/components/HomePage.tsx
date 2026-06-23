import { Logo } from "./Logo";
import { ProjectCard } from "./ProjectCard";
import { AnimatedLink } from "./AnimatedLink";
import { PageShell } from "./shared";
import imgProject01 from "../assets/home/projCard-nycRedesign.png";
import imgProject02 from "../assets/home/projCard-DDS.png";
import imgProject03 from "../assets/home/projCard-RTPI.png";
import imgProject04 from "../assets/home/projCard-Vanguard.png";
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
              <AnimatedLink href="mailto:will@wizdesign.studio" className="underline shrink-0">Email</AnimatedLink>
              <span className="shrink-0">/</span>
              <AnimatedLink href="https://drive.google.com/file/d/1mNlVkRJaZU6q9Jya5UTzu077G0unlF9Y/view?usp=sharing" external className="underline shrink-0">Resume</AnimatedLink>
              <span className="shrink-0">/</span>
              <AnimatedLink href="https://www.linkedin.com/in/wizdesign/" external className="underline shrink-0">LinkedIn</AnimatedLink>
            </div>
          </div>

          {/* Bio */}
          <div className="typo-body text-black w-[835px] max-w-full">
            <p className="mb-2.5 leading-[1.2]">
              Product designer and strategist turning complex systems into services built for everyone.{" "}
              Currently designing for the people of{" "}
              <AnimatedLink href="https://www.nyc.gov/content/oti/pages/" external className="underline">New York City</AnimatedLink>.{" "}
              Previously designed products for new market entry at{" "}
              <AnimatedLink href="https://www.deloittedigital.com/us/en/accelerators/applied-design-innovation.html" external className="underline">Deloitte Digital</AnimatedLink>.
            </p>
            <p className="mb-2.5 leading-[1.2]">
              Past clients include{" "}
              <AnimatedLink href="https://www.camber.health/product" external className="underline">Camber Health</AnimatedLink>,{" "}
              <AnimatedLink href="https://www.edwardjones.com/us-en" external className="underline">Edward Jones</AnimatedLink>,{" "}
              <AnimatedLink href="https://ownyourfuture.vanguard.com/en/home/publogin" external className="underline">Vanguard</AnimatedLink>,{" "}
              <AnimatedLink href="https://www.anthem.com/medicare/medicare-advantage-plans" external className="underline">Anthem</AnimatedLink>, and{" "}
              <AnimatedLink href="https://www.consumerreports.org/" external className="underline">Consumer Reports</AnimatedLink>.
            </p>
            <p className="leading-[1.2]">
              I also{" "}
              <AnimatedLink href="https://www.instagram.com/wood.will.hunting/" external className="underline">make furniture</AnimatedLink>.
            </p>
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <ProjectCard
        title="Redesigning NYC government's digital infrastructure"
        organization="Office of Technology and Innovation"
        timeframe="2024–2025"
        description="The 2025 nyc.gov redesign is the first major overhaul of the city's website in over a decade. The redesign makes nyc.gov more trustworthy, accessible, and future-forward. It is the blueprint to make all NYC websites easier for everyone."
        image={imgProject01}
        href="/case-study/nyc-redesign"
      />
      <ProjectCard
        title="Creating a design system for every service context"
        organization="Office of Technology and Innovation"
        timeframe="2025—Present"
        description="First design system for NYC government capable of scaling with multitudes of different service and product contexts. Currently in city-wide adoption and scaling."
        image={imgProject02}
        innerShadow
        href="/case-study/design-system"
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
      <ProjectCard
        title="A simple retirement plan experience without jargon"
        organization="Vanguard, Retirement Plan Participants"
        timeframe="2022"
        description="Designed a new retirement planning service for individual investors that prioritizes financial literacy and fiscal confidence through emotional journey mapping."
        image={imgProject04}
        tag="🔒"
        href="/case-study/vanguard"
      />
    </PageShell>
  );
}
