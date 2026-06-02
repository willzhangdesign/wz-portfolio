import {
  PageShell,
  Divider,
  SectionHeader,
  SectionNumber,
  OutcomeCard,
  ContentCard,
  ImageRow,
  InfoCard,
  JumpLink,
  RelatedProjectCard,
} from "./shared";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { AnimatedLink } from "./AnimatedLink";
import imgHero from "../assets/home/RTPI_Hero-shelter.png";
import imgShelterPilot1 from "../assets/rtpi-shelter/RTPI_Shelter_pilot 1.png";
import imgShelterPilot2 from "../assets/rtpi-shelter/RTPI_Shelter_pilot 2.png";
import imgUserStory1 from "../assets/rtpi-shelter/RTPI_Shelter_User story 1.png";
import imgUserStory2 from "../assets/rtpi-shelter/RTPI_Shelter_User story 2.png";
import imgUserStory3 from "../assets/rtpi-shelter/RTPI_Shelter_User story 3.png";
import imgOutcomes from "../assets/rtpi-shelter/RTPI_Shelter_Outcomes.png";
import imgCountdownClock from "../assets/rtpi-shelter/RTPI_Shelter_Countdown clock.png";
import imgPrototypeScrolling from "../assets/rtpi-shelter/RTPI_Shelter_Prototype-scrolling.mov";
import imgPrototypePaging from "../assets/rtpi-shelter/RTPI_Shelter_Prototype-Paging.mov";
import imgFinalDesign from "../assets/rtpi-shelter/RTPI_Shelter_Final design labeled.png";
import imgShelterSA from "../assets/rtpi-shelter/RTPI_ShelterP2 - UI - SA.png";
import imgTTSBefore from "../assets/rtpi-shelter/RTPI_Shelter-TTS-before.png";
import imgTTSAfter from "../assets/rtpi-shelter/RTPI_Shelter-TTS-after.png";
import imgFinalSA from "../assets/rtpi-shelter/RTPI_Shelter_Final-SA.mov";
import imgProjectRTPI from "../assets/home/projCard-RTPI.png";
import imgProjectNyc from "../assets/home/projCard-nycRedesign.png";

/* ── Title + intro ── */

function TitleSection() {
  return (
    <div id="overview" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <p className="typo-display text-black w-full">
        Clear and accessible bus shelter information displays
      </p>

      <div className="flex flex-col min-[900px]:flex-row gap-5 min-[900px]:gap-10 items-start w-full">
        <div className="typo-body text-black flex-1 min-w-0 leading-[1.2]">
          <p className="mb-4">
            New York City has roughly 3,500 bus shelters, but none of them have real-time passenger information (RTPI) signs that display information about incoming buses. In order to address equitable access to bus arrival information, the NYC Department of Transportation (DOT) launched a pilot in 2025 to test new digital displays integrated into existing bus shelters.
          </p>
          <p className="mb-4">
            In my team's efforts to improve all digital experiences with the NYC government, we leveraged our past collaborations with the DOT and facilitated this opportunity to design the digital signage experience for their bus shelters and bus poles.
          </p>
          <p>
            I led the UI design for the overall shelter RTPI experience. I worked with my Design Director on research and end-to-end UX. We collaborated with{" "}
            <AnimatedLink href="https://www.jcdecauxna.com/nyc-bus-shelter-advertising" external className="underline">JCDecaux</AnimatedLink>
            , the hardware vendor, to test and launch the new designs, which will arrive at 90+ new shelters in 2026.
          </p>
        </div>

        <InfoCard
          items={[
            { label: "Timeline", content: <p className="font-bold">4 months, 2025–26</p> },
            { label: "Skills", content: <>Design system,<br />UI/UX,<br />Accessibility design</> },
            {
              label: "Team",
              content: (
                <>
                  Director of Transit Planning,<br />
                  Design Director,<br />
                  💁🏻 <strong>Product Design Lead</strong>,<br />
                  Transit Policy Analyst
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
  const userStories = [
    {
      img: imgUserStory1,
      alt: "User story 1",
      text: "A health aid helping an elderly passenger get to a doctor's appointment who has to explain the sign's information.",
    },
    {
      img: imgUserStory2,
      alt: "User story 2",
      text: "A blind commuter unable to find out which buses are coming because there's no text-to-speech feature.",
    },
    {
      img: imgUserStory3,
      alt: "User story 3",
      text: "A wheelchair user trying to see the sign inside the shelter but there are many other riders in the way.",
    },
  ];

  return (
    <div id="problem" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionHeader
        label="PROBLEM"
        title="Bus shelters retrofitted old LED displays to show RTPI information, raising accessibility issues."
      />

      <ImageRow
        images={[
          { src: imgShelterPilot1, alt: "Existing shelter pilot 1" },
          { src: imgShelterPilot2, alt: "Existing shelter pilot 2" },
        ]}
      />

      {/* User stories */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">User stories</p>
        <p className="typo-body text-black w-full max-w-[860px]">
          These are <strong>3 New Yorkers out of the 67+</strong> we spoke to through on-the-ground intercept interviews as well as online user testing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {userStories.map((story, i) => (
            <div key={i} className="flex flex-col gap-4 items-start">
              <img
                src={story.img}
                alt={story.alt}
                className="block w-full rounded-[12px]"
                loading="lazy"
                decoding="async"
              />
              <p className="typo-body text-black">{story.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pain points */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">Top pain points</p>
        <div className="flex flex-col gap-5 w-full">
          <ContentCard title="Unnoticeable">
            <p>
              <strong>79%</strong> of riders missed the signage at bus sheds.
              <br />
              Typography within the signage are all mono-spaced and always written in all-caps, <strong>eliminating information hierarchy.</strong>
            </p>
          </ContentCard>
          <ContentCard title="Hard-to-reach TTS button">
            <p>The text-to-speech (TTS) button reads aloud the arrival information for blind riders, but it's inside the shelter in a position that is <strong>difficult to reach</strong>.</p>
          </ContentCard>
          <ContentCard title="No information hierarchy">
            <p>Riders <strong>could not immediately distinguish the difference</strong> between bus route, service type, destination, and arrival times – which can be a make-or-break scenario for riders in a hurry.</p>
          </ContentCard>
        </div>
      </div>
    </div>
  );
}

/* ── Top outcomes ── */

function TopOutcomesSection() {
  return (
    <div id="outcomes" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionHeader
        label="OUTCOMES"
        title="Designed a clear and concise experience for bus shelters that are accessible to all New Yorkers."
      />

      <img alt="Shelter RTPI outcomes" className="block w-full rounded-[12px]" src={imgOutcomes} loading="lazy" decoding="async" />

      <div className="flex flex-col gap-5 w-full">
        <OutcomeCard title="Improved display technology">
          <p>New displays are higher-resolution and brighter, <strong>making information clear and visible</strong> in the sun glare and at night.</p>
        </OutcomeCard>
        <OutcomeCard title="New TTS button placement">
          <p>After working with an accessibility advocacy group, a new placement for buttons will be <strong>easier for wheelchair users</strong> to access.</p>
        </OutcomeCard>
        <OutcomeCard title="Clear information hierarchy">
          <p>We focused on the 3 things riders needed – bus route, destination, and time – and made the design as <strong>simple and clear as possible</strong>.</p>
        </OutcomeCard>
      </div>
    </div>
  );
}

/* ── Process (jump links) ── */

function ProcessSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <SectionHeader label="SOLUTION" title="I was responsible for answering 3 questions:" />

      <div className="flex flex-col gap-4 items-start w-full">
        <JumpLink id="field-research" label="Field research" description="What's not working with the current displays?" />
        <JumpLink id="design-system-adherence" label="Design System Adherence" description="How can the experience feel immediately familiar to drive find-ability?" />
        <JumpLink id="information-hierarchy" label="Information hierarchy and prioritization" description="How do we accessibly fit lengthy bus information in a screen?" />
      </div>
    </div>
  );
}

/* ── 1. Field research ── */

function FieldResearchSection() {
  return (
    <div id="field-research" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionNumber number={1} title="Field research" />

      <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
        <p className="mb-4">
          Bus shelters in NYC are owned and operated by{" "}
          <AnimatedLink href="https://www.jcdecauxna.com/nyc-bus-shelter-advertising" external className="underline">JCDecaux</AnimatedLink>
          , so we collaborated with their digital signage team to understand and prototype new designs for the shelter. These devices and designs also suffered the same 3 usability issues relating to findability, readability, and visual variation.
        </p>
        <p className="mb-4">
          My Design Director and I engaged our team to conduct intercept interviews at busy transit corridors during the morning and afternoon rush hours. We asked commuters questions to understand the following:
        </p>
        <ol className="list-decimal list-outside pl-5 flex flex-col gap-2">
          <li><strong>Competitive analysis:</strong> What tools and apps they normally use to plan a trip</li>
          <li><strong>RTPI Feedback:</strong> What works / doesn't work with the current RTPI displays</li>
          <li><strong>Ideation:</strong> How commuters would change the design and information if they could</li>
        </ol>
      </div>

      <ImageRow
        images={[
          { src: imgShelterPilot1, alt: "Shelter pilot 1" },
          { src: imgShelterPilot2, alt: "Shelter pilot 2" },
        ]}
      />
    </div>
  );
}

/* ── 2. Design system adherence ── */

function DesignSystemAdherenceSection() {

  return (
    <div id="design-system-adherence" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionNumber number={2} title="Design System Adherence" />

      {/* Countdown clocks */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We decided to mimic the visual language of MTA's "Countdown Clocks" for its simplicity and ubiquity, but make it suitable for buses.
        </p>
        <p className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          The layout and dimensions of these digital displays are similar to the{" "}
          <AnimatedLink href="https://www.adamfishercox.com/portfolio/mta-platform-screens/" external className="underline">countdown clocks</AnimatedLink>
          {" "}in NYC's subway stations, and they are highly recognizable due to their <strong>widespread availability and popularity</strong> across the 5 boroughs.
        </p>

        <ImageRow
          images={[{ src: imgCountdownClock, alt: "MTA subway countdown clock reference" }]}
          caption="Courtesy of Adam Fisher Cox"
        />
      </div>

      {/* TTS button */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          For blind or low-vision riders, we ensured that they'll be able to use the text-to-speech (TTS) function for bus info.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-3">There were 2 reasons the pilot TTS buttons didn't work well for low-vision users in testing:</p>
          <ol className="list-decimal list-outside pl-5 flex flex-col gap-2">
            <li><strong>Unfamiliar sound beacon:</strong> low-vision users couldn't hear the button's identifying beacon because it was inside the shelter, muffling the sound when riders look for it from outside.</li>
            <li><strong>Hard to reach placement:</strong> the button placed on the inside of the shelter was difficult to find, and there are often other people obstructing the button.</li>
          </ol>
        </div>

        {/* Before / After cards — vertically stacked, hover to play */}
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[#F5F5F5] rounded-[12px] p-6 flex flex-col gap-4">
            <div>
              <p className="typo-caption text-[#888]">Before</p>
              <p className="typo-h3 font-bold text-black">Inside shelter, low sound and odd features</p>
            </div>
            <img alt="TTS before — inside shelter" className="block w-full rounded-[8px]" src={imgTTSBefore} loading="lazy" decoding="async" />
            <p className="typo-body text-black max-w-[860px]">
              Users expressed having a hard time hearing the sound beacon, and the button not providing a haptic response to confirm that it was pressed – both causing confusion.
            </p>
          </div>

          <div className="bg-[#F5F5F5] rounded-[12px] p-6 flex flex-col gap-4">
            <div>
              <p className="typo-caption text-[#888]">After</p>
              <p className="typo-h3 font-bold text-black">Outside shelter, familiar design</p>
            </div>
            <img alt="TTS after — outside shelter" className="block w-full rounded-[8px]" src={imgTTSAfter} loading="lazy" decoding="async" />
            <p className="typo-body text-black max-w-[860px]">
              Users recommended that the button be placed on the outside for easy access, and that the button sounds and looks more familiar in shape, color, and material – such as a crosswalk signal button (APS).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 3. Information hierarchy ── */

function InformationHierarchySection() {
  return (
    <div id="information-hierarchy" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionNumber number={3} title="Information hierarchy and prioritization" />

      {/* Prototype explorations */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We worked with the Mayor's Office for People with Disabilities to explore animations that are clear for people with vision or intellectual disabilities.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-4">
            All the different names that come with buses are verbose – long bus route names made even longer with a special service, and drawn-out destination names. For example, a very long bus on the RTPI screen could be the <strong>Q114-RUSH going to Far Rockaway Seagirt Blvd via Brewer Blvd/ Nassau Expy</strong>, at a whopping 58 characters.
          </p>
          <p>
            We tried to accommodate the long strings of text by using scrolling or paging animations, but ultimately our MOPD stakeholders gave the feedback that simplifying the destination content is most accessible.
          </p>
        </div>

        {/* Scrolling prototype — autoplays */}
        <div className="bg-black rounded-[12px] p-8 flex flex-col gap-4 w-full">
          <div className="rounded-[8px] overflow-hidden">
            <video className="block w-full" src={imgPrototypeScrolling} autoPlay muted loop playsInline preload="metadata" />
          </div>
          <p className="typo-body text-white">
            Horizontal scrolling text is visually busy and hard to read, increasing cognitive load
          </p>
        </div>

        {/* Paging prototype — autoplays */}
        <div className="bg-black rounded-[12px] p-8 flex flex-col gap-4 w-full">
          <div className="rounded-[8px] overflow-hidden">
            <video className="block w-full" src={imgPrototypePaging} autoPlay muted loop playsInline preload="metadata" />
          </div>
          <p className="typo-body text-white">
            The start and end of a paging animation are difficult to track, and may confuse riders
          </p>
        </div>
      </div>

      {/* Final design */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          Our design reflected priority of information for riders – most look to this digital display as a high-level tracker, not a route-planning tool like the bus pole unit.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-4">
            Destination text would be shortened to communicate just the final stop, as most riders rely on this digital display more as a time tracker to see when their bus is coming. Riders would use their preferred route-planning tools like the MTA app or Google Maps for detailed information.
          </p>
          <p>
            We leveraged guidance from the ADA and International Code Council (ICC) on digital signage to arrive at the type sizing, layout, and scroll animation.
          </p>
        </div>

        {/* SA design — autoplays */}
        <div className="bg-black rounded-[12px] p-8 w-full">
          <video className="block w-full rounded-[8px]" src={imgFinalSA} autoPlay muted loop playsInline preload="metadata" />
        </div>

        {/* Labeled final design — full width */}
        <img alt="Shelter final design labeled" className="block w-full rounded-[12px]" src={imgFinalDesign} loading="lazy" decoding="async" />

        {/* SA design with service alert caption */}
        <div className="bg-[#F5F5F5] rounded-[12px] p-8 flex flex-col gap-4 w-full">
          <img alt="Shelter service alert design" className="block w-full rounded-[8px]" src={imgShelterSA} loading="lazy" decoding="async" />
          <p className="typo-body text-[#666]">
            Bus service alerts, much like those for the subway, are lengthy and complex. Instead of cramming long messages into a narrow screen, we decided to point users to the best experience, which is on the MTA website.
          </p>
        </div>

      </div>
    </div>
  );
}

/* ── Final outcomes ── */

function FinalOutcomesSection() {
  return (
    <div id="final-outcomes" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionHeader
        label="OUTCOMES"
        title="Designed a clear and concise experience for bus shelters that are accessible to all New Yorkers, coming to 90 shelters in 2026."
      />

      {/* TODO: 3 outdoor photo assets (IMG_5406 2, IMG_5421 2, IMG_5406 3) not yet in assets folder */}

      <div className="flex flex-col gap-5 w-full">
        <OutcomeCard title="Improved display technology">
          <p>New displays are higher-resolution and brighter, <strong>making information clear and visible</strong> in the sun glare and at night.</p>
        </OutcomeCard>
        <OutcomeCard title="New TTS button placement">
          <p>After working with an accessibility advocacy group, a new placement for buttons will be <strong>easier for wheelchair users</strong> to access.</p>
        </OutcomeCard>
        <OutcomeCard title="Clear information hierarchy">
          <p>We focused on the 3 things riders needed – bus route, destination, and time – and made the design as <strong>simple and clear as possible</strong>.</p>
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
          to="/case-study/rtpi-pole"
          image={imgProjectRTPI}
          title="Bus pole RTPI design"
          description="Designed a new scalable, accessible real-time passenger information (RTPI) system for bus poles that clearly communicates bus arrivals and feels like a cohesive part of NYC's transit network."
        />
        <RelatedProjectCard
          to="/case-study/nyc-redesign"
          image={imgProjectNyc}
          title="nyc.gov Redesign"
          description="The nyc.gov redesign is the first major overhaul of the city's website in over a decade. It is the blueprint to make all NYC websites easier for everyone."
        />
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   Main page
   ════════════════════════════════════ */

const SHELTER_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "outcomes", label: "Outcomes" },
  { id: "field-research", label: "Process: Field research" },
  { id: "design-system-adherence", label: "Process: Design System Adherence" },
  { id: "information-hierarchy", label: "Process: Information hierarchy" },
  { id: "final-outcomes", label: "Outcomes" },
];

export function BusShelterCaseStudy() {
  return (
    <PageShell
      variant="case-study"
      header={<CaseStudyHeader projectName="Bus shelter digital signage" sections={SHELTER_SECTIONS} />}
    >
      <img alt="Bus shelter RTPI hero" className="block w-full rounded-[12px]" src={imgHero} fetchPriority="high" />

      <TitleSection />

      <Divider />
      <ProblemSection />

      <Divider />
      <TopOutcomesSection />

      <Divider />
      <ProcessSection />

      <Divider />
      <FieldResearchSection />

      <Divider />
      <DesignSystemAdherenceSection />

      <Divider />
      <InformationHierarchySection />

      <Divider />
      <FinalOutcomesSection />

      <Divider />
      <RelatedProjectsSection />
    </PageShell>
  );
}
