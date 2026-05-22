import { Link } from "react-router";
import {
  PageShell,
  CaseStudyLogo,
  Divider,
  SectionHeader,
  SectionNumber,
  OutcomeCard,
  ContentCard,
  ImageRow,
  InfoCard,
  JumpLink,
  RelatedProjectCard,
  useHoverVideo,
} from "./shared";
import imgHero from "../assets/home/RTPI_Hero-shelter.png";
import imgShelterPilot1 from "../assets/rtpi-shelter/RTPI_Shelter_pilot 1.png";
import imgShelterPilot2 from "../assets/rtpi-shelter/RTPI_Shelter_pilot 2.png";
import imgFinalDesign from "../assets/rtpi-shelter/RTPI_Shelter_Final design labeled.png";
import imgShelterDefault from "../assets/rtpi-shelter/RTPI_ShelterP2 - Default.png";
import imgShelterSA from "../assets/rtpi-shelter/RTPI_ShelterP2 - UI - SA.png";
import imgShelterDefault2 from "../assets/rtpi-shelter/RTPI_ShelterP2 - UI Default 2.png";
import imgShelterNoScroll from "../assets/rtpi-shelter/RTPI_ShelterP2 - White - No Scroll.mov";
import imgShelterNoScrollSA from "../assets/rtpi-shelter/RTPI_ShelterP2 - White - NoScroll SA.mov";
import imgProjectRTPI from "../assets/home/projCard-RTPI.png";
import imgProjectNyc from "../assets/home/projCard-nycRedesign.png";

/* ── Title + intro ── */

function TitleSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <p className="typo-display text-black w-full">
        Clear and accessible bus shelter information displays
      </p>

      <div className="flex flex-col min-[900px]:flex-row gap-5 min-[900px]:gap-10 items-start w-full">
        <div className="typo-body text-black flex-1 min-w-0 leading-[1.2]">
          <p className="mb-4">
            New York City has roughly 3,500 bus shelters, but none of them have real-time passenger information (RTPI) signs that display information about incoming buses.
          </p>
          <p className="mb-4">
            In order to address equitable access to bus arrival information, DOT launched a pilot in 2025 to test new digital displays integrated into existing bus shelters.
          </p>
          <p>
            I led the UI design for the overall shelter RTPI experience. I worked with my Design Director on research and end-to-end UX. We collaborated with{" "}
            <a className="cursor-pointer underline" href="https://www.jcdecauxna.com/nyc-bus-shelter-advertising" target="_blank" rel="noopener noreferrer">JCDecaux</a>
            , the hardware vendor, to test the new designs.
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
  return (
    <div className="flex flex-col gap-10 items-start w-full">
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
        <p className="typo-body text-black w-full">
          These are <strong>3 New Yorkers out of the 67+</strong> we spoke to through on-the-ground intercept interviews as well as online user testing.
        </p>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {[
            { emoji: "🧑‍⚕️", text: "A health aid helping an elderly passenger get to a doctor's appointment who has to explain the sign's information." },
            { emoji: "🧑‍🦯", text: "A blind commuter unable to find out which buses are coming because there's no text-to-speech feature." },
            { emoji: "🧑‍🦽", text: "A wheelchair user trying to see the sign inside the shelter but there are many other riders in the way." },
          ].map((story, i) => (
            <div key={i} className="flex flex-col gap-3 items-start">
              <div className="h-10 w-10 rounded-full bg-[#eee] flex items-center justify-center text-xl">{story.emoji}</div>
              <p className="typo-body text-black">{story.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pain points */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">Top pain points</p>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
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
            <p>Riders <strong>could not immediately distinguish</strong> <strong>the difference</strong> between bus route, service type, destination, and arrival times – which can be a make-or-break scenario for riders in a hurry.</p>
          </ContentCard>
        </div>
      </div>
    </div>
  );
}

/* ── Top outcomes ── */

function TopOutcomesSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <SectionHeader
        label="OUTCOMES"
        title="Designed a clear and concise experience for bus shelters that are accessible to all New Yorkers."
      />

      <img alt="Final shelter design" className="block w-full rounded-[12px]" src={imgShelterDefault} />

      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
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
    <div id="field-research" className="flex flex-col gap-10 items-start w-full scroll-mt-10">
      <SectionNumber number={1} title="Field research" />

      <p className="typo-body text-black w-full leading-[1.4]">
        Bus shelters in NYC are owned and operated by{" "}
        <a className="cursor-pointer underline" href="https://www.jcdecauxna.com/nyc-bus-shelter-advertising" target="_blank" rel="noopener noreferrer">JCDecaux</a>
        , so we collaborated with their digital signage team to understand and prototype new designs for the shelter. These devices and designs also suffered the same 3 usability issues relating to findability, readability, and visual variation.
      </p>

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
  const videoBefore = useHoverVideo();
  const videoAfter = useHoverVideo();

  return (
    <div id="design-system-adherence" className="flex flex-col gap-10 items-start w-full scroll-mt-10">
      <SectionNumber number={2} title="Design System Adherence" />

      {/* Countdown clocks */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We decided to mimic the visual language of MTA's "Countdown Clocks" for its simplicity and ubiquity, but make it suitable for buses.
        </p>
        <p className="typo-body text-black w-full leading-[1.4]">
          The layout and dimensions of these digital displays are similar to the{" "}
          <a className="cursor-pointer underline" href="https://www.adamfishercox.com/portfolio/mta-platform-screens/" target="_blank" rel="noopener noreferrer">countdown clocks</a>
          {" "}in NYC's subway stations, and they are highly recognizable due to their <strong>widespread availability and popularity</strong> across the 5 boroughs.
        </p>

        <ImageRow
          images={[{ src: imgShelterDefault2, alt: "MTA subway countdown clock reference" }]}
          caption="Courtesy of Adam Fisher Cox"
        />
      </div>

      {/* TTS button */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          For blind or low-vision riders, we ensured that they'll be able to use the text-to-speech (TTS) function for bus info.
        </p>
        <div className="typo-body text-black w-full leading-[1.4]">
          <p className="mb-3">There were 2 reasons the pilot TTS buttons didn't work well for low-vision users in testing:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Unfamiliar sound beacon</strong>: low-vision users couldn't hear the button's identifying beacon because it was inside the shelter, muffling the sound when riders look for it from outside.</li>
            <li><strong>Hard to reach placement</strong>: the button placed on the inside of the shelter was difficult to find, and there are often other people obstructing the button.</li>
          </ol>
        </div>

        {/* Before / After videos */}
        <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
          <div className="flex-1 min-w-0 flex flex-col gap-3 cursor-pointer" tabIndex={0} {...videoBefore.hoverHandlers}>
            <p className="typo-caption font-bold text-black">Before</p>
            <p className="typo-intro font-bold text-black">Inside shelter, low sound and odd features</p>
            <div className="rounded-[12px] overflow-hidden bg-black">
              <video ref={videoBefore.videoRef} className="block w-full" src={imgShelterNoScroll} muted loop playsInline />
            </div>
            <p className="typo-body text-black">
              Users expressed having a hard time hearing the sound beacon, and the button not providing a haptic response to confirm that it was pressed – both causing confusion.
            </p>
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-3 cursor-pointer" tabIndex={0} {...videoAfter.hoverHandlers}>
            <p className="typo-caption font-bold text-black">After</p>
            <p className="typo-intro font-bold text-black">Outside shelter, familiar design</p>
            <div className="rounded-[12px] overflow-hidden bg-black">
              <video ref={videoAfter.videoRef} className="block w-full" src={imgShelterNoScrollSA} muted loop playsInline />
            </div>
            <p className="typo-body text-black">
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
    <div id="information-hierarchy" className="flex flex-col gap-10 items-start w-full scroll-mt-10">
      <SectionNumber number={3} title="Information hierarchy and prioritization" />

      {/* Wordy data */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          Bus RTPI data is often wordy, and scrolling text makes information harder to read for low-vision users. So we had to simplify all content to fit the highest-priority segments.
        </p>
        <div className="typo-body text-black w-full leading-[1.4]">
          <p className="mb-4">
            As outlined in the{" "}
            <Link to="/case-study/rtpi-pole" className="underline cursor-pointer">bus pole RTPI section</Link>
            , all the different names that come with buses are verbose – long bus route names made even longer with a special service, and drawn-out destination names.
          </p>
          <p>We worked with the DOT Transit Planning team to optimize and shorten content.</p>
        </div>

        <img alt="Shelter final design labeled" className="block w-full rounded-[12px]" src={imgFinalDesign} />

        <ImageRow
          images={[{ src: imgShelterSA, alt: "Shelter SA design" }]}
          caption="Bus service alerts, much like those for the subway, are lengthy and complex. Instead of cramming long messages into a narrow screen, we decided to point users to the best experience, which is on the MTA website."
        />
      </div>

      {/* Final design */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          The final design integrates accessibility best practices and systemic familiarity to show New Yorkers the essentials.
        </p>
        <p className="typo-body text-black w-full leading-[1.4]">
          We leveraged guidance from the ADA and International Code Council (ICC) on digital signage to arrive at the type sizing, layout, and scroll animation.
        </p>

        <ImageRow
          images={[
            { src: imgShelterDefault, alt: "Shelter default" },
            { src: imgShelterDefault2, alt: "Shelter UI default 2" },
          ]}
        />
      </div>
    </div>
  );
}

/* ── Final outcomes ── */

function FinalOutcomesSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <SectionHeader
        label="OUTCOMES"
        title="Designed a clear and concise experience for bus shelters that are accessible to all New Yorkers."
      />

      <ImageRow
        images={[
          { src: imgShelterDefault, alt: "Shelter deployed" },
          { src: imgShelterSA, alt: "Shelter close-up" },
        ]}
      />

      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
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

export function BusShelterCaseStudy() {
  return (
    <PageShell variant="case-study">
      <CaseStudyLogo />
      <img alt="Bus shelter RTPI hero" className="block w-full rounded-[12px]" src={imgHero} />

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
