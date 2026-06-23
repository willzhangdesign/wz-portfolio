import { Link } from "react-router";
import {
  PageShell,
  Divider,
  SectionHeader,
  SectionNumber,
  OutcomeCard,
  ContentCard,
  InfoCard,
  JumpLink,
  RelatedProjectCard,
} from "./shared";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { NycHeroAnimation } from "./NycHeroAnimation";

import imgOldNycGov from "../assets/nyc-redesign/nycRedesign_problem-oldnycgov.png";
import imgHomepage from "../assets/nyc-redesign/nycRedesign_Homepage.png";
import imgOutcomeNewNycGov from "../assets/nyc-redesign/nycRedesign_outcome-newnycgov.png";
import imgData from "../assets/nyc-redesign/NycRedesign_data.png";
import imgTouchpoints from "../assets/nyc-redesign/touchpoints.png";
import imgParkingTicket from "../assets/nyc-redesign/nycRedesign_ParkingTicket.png";
import imgNavLabeled from "../assets/nyc-redesign/nav-labled.png";
import imgProjectRTPI from "../assets/home/projCard-RTPI.png";
import imgProjectDDS from "../assets/home/projCard-DDS.png";
import imgProblemGraphic1 from "../assets/nyc-redesign/nycRedesign_problem-graphic1.png";
import imgProblemGraphic2 from "../assets/nyc-redesign/nycRedesign_problem-graphic2.png";
import imgProblemGraphic3 from "../assets/nyc-redesign/nycRedesign_problem-graphic3.png";
import imgDDSCard from "../assets/nyc-redesign/designSystem_project card.png";

/* ── Title + intro ── */

function TitleSection() {
  return (
    <div id="overview" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <p className="typo-display text-black w-full">
        Helping 1.8 million New Yorkers find what they came for
      </p>

      <div className="flex flex-col min-[900px]:flex-row gap-5 min-[900px]:gap-10 items-start w-full">
        <div className="typo-body text-black flex-1 min-w-0 leading-[1.2]">
          <p className="mb-4">
            New Yorkers come to nyc.gov to do something specific: pay a parking ticket, check for school closures, manage their SNAP benefits, and more. Too often, they couldn't find it. The site was organized around government structure, not people's needs. Information was hard to parse, services sat buried under layers of pages. At times, a task could start users at seven different entry points.
          </p>
          <p className="mb-4">
            One of our top UX priorities with the redesign was wayfinding: the site architecture, navigation, and layouts that decide whether 1.8 million monthly users can find a service, follow through, and finish it.
          </p>
          <p>
            We restructured the site around what people actually look for, using research and site analytics to guide every decision. The first step-by-step service page I designed cut 311 call volume by 48%.
          </p>
        </div>

        <InfoCard
          items={[
            { label: "Timeline", content: <p className="font-bold">6 months, 2023–2024</p> },
            {
              label: "Skills",
              content: <>Product strategy,<br />Product design,<br />UX research</>,
            },
            {
              label: "Team",
              content: (
                <>
                  Chief Digital Strategy Officer,<br />
                  Design Director,<br />
                  💁🏻 <strong>Product Design Lead</strong>,<br />
                  Service Design Lead,<br />
                  Content Strategy Lead,<br />
                  Engineering Lead<br />
                  Developer Consultants
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

/* ── Problem ── */

function ProblemSection() {
  return (
    <div id="problem" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionHeader
        label="PROBLEM"
        title="New Yorkers couldn't find what they needed. Those who did still struggled to complete their tasks."
      />

      <img
        alt="Old nyc.gov website"
        className="block w-full rounded-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]"
        src={imgOldNycGov}
        loading="lazy"
        decoding="async"
      />

      {/* User stories */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">User stories</p>
        <p className="typo-body text-black w-full max-w-[860px]">
          Picture yourself in the shoes of one of these New Yorkers below:
        </p>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {[
            { img: imgProblemGraphic1, text: "Helping your immigrant parents to manage SNAP benefits online, but the steps are confusing, filled with jargon, and sprawling" },
            { img: imgProblemGraphic2, text: "Visually impaired and trying to find a community event, but your screen reader is stuck in a carousel reading Eric Adam's \"accomplishments\"" },
            { img: imgProblemGraphic3, text: "A parent checking for school closures during a winter storm, but the site search isn't prioritizing the right pages" },
          ].map((story, i) => (
            <div key={i} className="flex flex-col gap-3 items-start">
              <img alt="" className="block w-full h-auto" src={story.img} loading="lazy" decoding="async" />
              <p className="typo-body text-black">{story.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top pain points */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">Top pain points</p>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 w-full">
          <ContentCard title="Unclear user flows">
            <p>Services were submerged under layers of pages organized around the silos of service owners, punting users around the site and adding unnecessary steps in their journeys.</p>
          </ContentCard>
          <ContentCard title="Dead-end pages">
            <p>Even when users found the right page, it often lacked clear next steps, leaving them unsure what to do next or where to go.</p>
          </ContentCard>
          <ContentCard title="Hard to use">
            <p>The site-wide performance score on mobile was <strong>25/100</strong> with many components failing WCAG standards. Most users prefer mobile viewport, and even the top 10 pages on mobile scored 53/100.</p>
          </ContentCard>
          <ContentCard title="Org-chart centered menus">
            <p>The site was built to mirror the government, not the task. Navigation labels read like an org chart, so a New Yorker who just wanted to pay a ticket had to first guess which agency owned their problem.</p>
          </ContentCard>
        </div>
      </div>
    </div>
  );
}

/* ── Top outcomes (after Problem) ── */

function TopOutcomesSection() {
  return (
    <div id="outcomes" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionHeader
        label="OUTCOMES"
        title="The redesign helps New Yorkers find, follow through, and finish their tasks."
      />

      <img
        alt="New nyc.gov homepage"
        className="block w-full rounded-[12px]"
        src={imgOutcomeNewNycGov}
        loading="lazy"
        decoding="async"
      />

      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 w-full">
        <OutcomeCard title="Decreased 311 call center calls for services we redesigned">
          <p><strong>↓ 48%</strong> parking ticket calls<br /><strong>↓ 32%</strong> rent increase calls</p>
        </OutcomeCard>
        <OutcomeCard title="13 points in improved customer satisfaction">
          <p>CSAT surveys reported positive feedback related to the navigability, the search experience, translations, and more.</p>
        </OutcomeCard>
        <OutcomeCard title="100% accessible">
          <p>All redesigned pages are <strong>100% WCAG 2.2 accessible</strong>, focused on making in-page navigation, links, and content working for keyboard and low-vision users.</p>
        </OutcomeCard>
        <OutcomeCard title="A repeatable model for services">
          <p>The Guide-page pattern and global navigation component are scaling across nyc.gov, so every agency can make services easier to find and complete, the same way.</p>
        </OutcomeCard>
      </div>
    </div>
  );
}

/* ── Process (jump links) ── */

function ProcessSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <SectionHeader label="PROCESS" title="I was responsible for answering 2 questions:" />

      <div className="flex flex-col gap-4 items-start w-full">
        <JumpLink id="helping-find" label="Helping people find what they need" description="What are most New Yorkers doing on nyc.gov?" />
        <JumpLink id="helping-finish" label="Helping people finish the task" description="How are New Yorkers completing their tasks on the site?" />
      </div>
    </div>
  );
}

/* ── 1. Helping people find what they need ── */

function HelpingFindSection() {
  return (
    <div id="helping-find" className="flex flex-col gap-14 items-start w-full scroll-mt-16">
      <SectionNumber number={1} title="Helping people find what they need" />

      {/* Data analysis */}
      <div className="flex flex-col gap-6 w-full">
        <p className="typo-h2 font-bold text-black w-full">
          GA4 data revealed the handful of tasks most New Yorkers come to do.
        </p>
        <div className="flex flex-col min-[900px]:flex-row gap-6 w-full">
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            <p className="typo-body text-black">
              Before designing anything, we needed to know where people were actually going. The data pointed us to the Department of Education, but they were on a different tech stack and infrastructure that created a walled garden for their own products and users, so we decided to revisit collaboration with the DOE later in the future.
            </p>
            <p className="typo-body text-black">
              So in order to move quickly on deciding which top services to feature on the homepage, we went with the next top action: paying a parking ticket. Additional actions included noise complaints, trash and recycling questions, birth certificates, managing SNAP benefits, and others.
            </p>
          </div>
          <img
            alt="GA4 data showing top tasks on nyc.gov"
            className="block w-full min-[900px]:w-[45%] rounded-[12px] object-contain self-start"
            src={imgData}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Navigation component */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          I designed a global navigation component to help users find services faster across 100+ agency sites
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-4">
            The old navigation mirrored government bureaucracy: no clear hierarchy, no clear path. Users would loop endlessly, starting at the homepage, landing on the wrong page, and struggling to find their way back.
          </p>
          <p className="mb-4">
            We restructured the information architecture around what users actually look for, using research insights and site analytics. I designed the navigation component, translating that strategy into four decisions:
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>NYC logo as home base</strong>: Links to the homepage, giving users a consistent anchor across the site.</li>
            <li><strong>Service-first menu</strong>: Popular services are surfaced in the global header and regularly updated, reachable from anywhere on nyc.gov.</li>
            <li><strong>Prominent search</strong>: Visually highlighted and improved on the backend.</li>
            <li><strong>Clear brand hierarchy</strong>: Agency headers sit below the global bar with a preset accessible color for secondary brand expression, so users always know where they are relative to nyc.gov.</li>
          </ol>
        </div>
        <div className="bg-[#eee] rounded-[12px] p-6 w-full">
          <img alt="" className="block w-full" src={imgNavLabeled} loading="lazy" decoding="async" />
        </div>
      </div>

      {/* Homepage */}
      <HomepageSubsection />
    </div>
  );
}

/* ── Homepage subsection ── */

function HomepageSubsection() {
  return (
    <div className="flex flex-col gap-6 items-start w-full">
      <p className="typo-h2 font-bold text-black w-full">
        The homepage became the fastest path to the city's most common tasks.
      </p>

      <img
        alt="Annotated nyc.gov homepage showing key sections"
        className="block w-full rounded-[12px]"
        src={imgHomepage}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/* ── 2. Helping people finish the task ── */

function HelpingFinishSection() {
  return (
    <div id="helping-finish" className="flex flex-col gap-14 items-start w-full scroll-mt-16">
      <SectionNumber number={2} title="Helping people finish the task" />

      {/* Parking ticket */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We restructured the site to make popular services easy to find, follow, and finish, beginning with the most common task: paying a parking ticket.
        </p>
        <p className="typo-body text-black w-full max-w-[860px]">
          Paying a parking ticket was our <strong>most popular task</strong>, and <strong>one of its most broken</strong>. The flow mirrored government structure instead of a simple checkout, and missteps could mean additional penalties. It was so convoluted that private companies (WinIt and Pay NYC Fines) built profitable workarounds, charging New Yorkers for something the city should offer free. <strong>This wasn't just a usability problem. It was an equity one.</strong>
        </p>
        <p className="typo-body text-black w-full max-w-[860px]">
          After a basic Google search to pay a ticket, users could <strong>arrive at 7 different city starting-points</strong>. This meant there was no single recommended path for users.
        </p>

        <div className="flex flex-col gap-2 items-start w-full">
          <div className="aspect-[2598/1724] relative rounded-[12px] w-full overflow-hidden">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgTouchpoints} loading="lazy" decoding="async" />
          </div>
          <p className="typo-caption font-medium text-[#666] w-full">
            Illustration of the 7 vastly different starting points New Yorkers could have to pay a parking ticket
          </p>
        </div>
      </div>

      {/* Guide page */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          I designed the first "Guide" page that cut 311 call volume by 48%.
        </p>
        <p className="typo-body text-black w-full max-w-[860px]">
          Agency sites on nyc.gov prioritize documenting every option a user could take, rather than the best one. Guides flip that approach: each page sets expectations, surfaces the right information, and points users to a clear next step.
        </p>
        <p className="typo-body text-black w-full max-w-[860px]">
          I designed the first Guide page, structuring content and layout so users could scan for what applies to them, understand what's required, and act without second-guessing. That clarity paid off in its first quarter after launch with a drop in 311 calls.
        </p>
        <img alt="" className="block w-full rounded-[12px]" src={imgParkingTicket} loading="lazy" decoding="async" />
      </div>

      {/* DDS card */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          I led the design of a city-wide design system so these wins could scale to every agency.
        </p>
        <p className="typo-body text-black w-full max-w-[860px]">
          nyc.gov spans hundreds of sites and thousands of pages. The work we'd done so far was meaningful, but without a shared design infrastructure, every agency would keep building inconsistently, and the improvements wouldn't hold.
        </p>
        <p className="typo-body text-black w-full max-w-[860px]">
          The design system grows with research into end-to-end user journeys and each redesigned service. I go in-depth on my role in the creation of the design system in the case study below:
        </p>

        <Link to="/case-study/nyc-design-system" className="no-underline w-full">
          <div className="bg-white border border-black rounded-[12px] flex flex-col w-full overflow-hidden cursor-pointer group/ds hover:bg-[#222] transition-colors duration-200">
            <div className="border-b border-black">
              <div className="aspect-[846/430] relative w-full bg-white">
                <img alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none p-8" src={imgDDSCard} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4 text-black group-hover/ds:text-white transition-colors duration-200">
              <p className="typo-intro font-bold">NYC Design System</p>
              <p className="typo-body">
                First design system for NYC government capable of scaling with multitudes of different service and product contexts. Currently in city-wide adoption and scaling.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

/* ── Final outcomes ── */

function FinalOutcomesSection() {
  return (
    <div id="final-outcomes" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionHeader label="OUTCOMES" title="Real results for real New Yorkers." />

      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 w-full">
        <OutcomeCard title="Decreased 311 call center calls for services we redesigned">
          <p><strong>↓ 48%</strong> parking ticket calls<br /><strong>↓ 32%</strong> rent increase calls</p>
        </OutcomeCard>
        <OutcomeCard title="13 points in improved customer satisfaction">
          <p>CSAT surveys reported positive feedback related to the navigability, the search experience, translations, and more.</p>
        </OutcomeCard>
        <OutcomeCard title="100% accessible">
          <p>All redesigned pages are <strong>100% WCAG 2.2 accessible</strong>, focused on making in-page navigation, links, and content working for keyboard and low-vision users.</p>
        </OutcomeCard>
        <OutcomeCard title="A repeatable model for services">
          <p>The Guide-page pattern and global navigation component are scaling across nyc.gov, so every agency can make services easier to find and complete, the same way.</p>
        </OutcomeCard>
      </div>
    </div>
  );
}

/* ── Related projects ── */

function RelatedProjectsSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <p className="typo-body font-bold text-[#888] w-full">RELATED PROJECTS</p>
      <div className="flex flex-col sm:flex-row gap-6 items-start w-full">
        <RelatedProjectCard
          to="/case-study/design-system"
          image={imgProjectDDS}
          title="NYC Design System"
          description="First design system for NYC government capable of scaling with multitudes of different service and product contexts. Currently in city-wide adoption and scaling."
        />
        <RelatedProjectCard
          to="/case-study/rtpi-pole"
          image={imgProjectRTPI}
          title="Bus pole RTPI design"
          description="Designed a new scalable, accessible real-time passenger information (RTPI) system for bus poles that clearly communicates bus arrivals and feels like a cohesive part of NYC's transit network."
        />
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   Main page
   ════════════════════════════════════ */

const NYC_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "outcomes", label: "Outcomes" },
  { id: "helping-find", label: "Process: Finding tasks" },
  { id: "helping-finish", label: "Process: Finishing tasks" },
  { id: "final-outcomes", label: "Outcomes" },
];

export function NycRedesignCaseStudy() {
  return (
    <PageShell
      variant="case-study"
      header={<CaseStudyHeader projectName="nyc.gov Redesign" sections={NYC_SECTIONS} />}
    >
      {/* Hero animation */}
      <NycHeroAnimation />

      <TitleSection />

      <Divider />
      <ProblemSection />

      <Divider />
      <TopOutcomesSection />

      <Divider />
      <ProcessSection />

      <Divider />
      <HelpingFindSection />

      <Divider />
      <HelpingFinishSection />

      <Divider />
      <FinalOutcomesSection />

      <Divider />
      <RelatedProjectsSection />
    </PageShell>
  );
}
