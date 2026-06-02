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
  useHoverVideo,
} from "./shared";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { AnimatedLink } from "./AnimatedLink";
import imgHero from "../assets/home/RTPI_Hero-Pole.png";
import imgPilotEye from "../assets/rtpi-pole/RTPI_Pilot-eye.png";
import imgPilotFlag from "../assets/rtpi-pole/RTPI_Pilot-flag.png";
import imgUIPrototypes1 from "../assets/rtpi-pole/RTPI_Pole_UI Prototypes.png";
import imgFinalDesignTop1 from "../assets/rtpi-pole/RTPI_Pole_Final design top 1.png";
import imgFinalDesignTop2 from "../assets/rtpi-pole/RTPI_Pole_Final design top 2.png";
import imgFinalDesignBottom from "../assets/rtpi-pole/RTPI_Pole_Final design bottom.png";
import imgPoleDefault from "../assets/rtpi-pole/RTPI_Pole - Default - Arriving.png";
import imgTTSbefore from "../assets/rtpi-pole/RTPI_Pole_TTS-before.mov";
import imgTTSafter from "../assets/rtpi-pole/RTPI_Pole_TTS-after.mov";
import imgArtHarring from "../assets/rtpi-pole/RTPI_Art-Harring.png";
import imgArtRinggold from "../assets/rtpi-pole/RTPI_Art-Ringgold.png";
import imgPoleFinalLarge from "../assets/rtpi-pole/RTPI_Pole_Final large.png";
import imgOutcomes1 from "../assets/rtpi-pole/RTPI_Pole_Outcomes 1.png";
import imgOutcomes2 from "../assets/rtpi-pole/RTPI_Pole_Outcomes 2.png";
import imgPoleNoSA from "../assets/rtpi-pole/RTPI_Pole - Default - No SA.png";
import imgCurrentSigns from "../assets/rtpi-pole/RTPI_Pole_current signs.png";
import imgSpecDiagram from "../assets/rtpi-pole/RTPI_Pole_spec diagram.png";
import imgPeerDevices from "../assets/rtpi-pole/RTPI_Pole_Peer devices.png";
import imgUserStory1 from "../assets/rtpi-pole/RTPI_Pole_user story 1.png";
import imgUserStory2 from "../assets/rtpi-pole/RTPI_Pole_user story 2.png";
import imgUserStory3 from "../assets/rtpi-pole/RTPI_Pole_user story 3.png";
import imgProjectShelter from "../assets/home/RTPI_Hero-shelter.png";
import imgProjectNyc from "../assets/home/projCard-nycRedesign.png";

/* ── Title + intro ── */

function TitleSection() {
  return (
    <div id="overview" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <p className="typo-display text-black w-full">
        New digital signage system to show bus arrival times and routes
      </p>

      <div className="flex flex-col min-[900px]:flex-row gap-5 min-[900px]:gap-10 items-start w-full">
        <div className="typo-body text-black flex-1 min-w-0 leading-[1.2]">
          <p className="mb-4">
            New York City has over 15,000 bus stops, but only a fraction have real-time passenger information (RTPI) signs that display upcoming bus arrivals. The NYC Department of Transportation (DOT) installed its first generation of these signs at roughly 700 stops between 2013 and 2019, but expanding that coverage has proven difficult.  To find a more scalable path forward, DOT launched two pilots in 2025: one testing new signage integrated into existing bus shelters, and another testing solar-powered e-ink signs that attach directly to bus poles.
          </p>
          <p className="mb-4">
          In my team’s efforts to improve all digital experiences with the NYC government, we leveraged our past collaborations with the DOT and facilitated this opportunity to design the digital signage experience for their bus shelters and bus poles. 
           </p>
          <p>
            I led the digital and hardware design for both form factors. I worked with my Design Director on research and end-to-end UX. We collaborated with DOT's Transit Planning team and the hardware vendors to optimize the display information, interactions, and UI.
          </p>
        </div>

        <InfoCard
          items={[
            { label: "Timeline", content: <p className="font-bold">4 months, 2025–26</p> },
            { label: "Skills", content: <>Design system,<br />UI/UX,<br />Hardware design,<br />Accessibility design</> },
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
    <div id="problem" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionHeader
        label="PROBLEM"
        title="Current bus arrival signs reach just 5% of stops — and the ones that exist are hard to read, inaccurate, and costly to expand."
      />

      <img
        alt="Current RTPI pilot signs at bus stops"
        className="block w-full rounded-[12px]"
        src={imgCurrentSigns}
        loading="lazy"
        decoding="async"
      />

      {/* User stories */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">User stories</p>
        <p className="typo-body text-black w-full max-w-[860px]">
          These are <strong>3 New Yorkers out of the 67+</strong> we spoke to through on-the-ground intercept interviews as well as online user testing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {[
            { img: imgUserStory1, alt: "Health aid helping elderly passenger at bus stop", text: "A health aid helping an elderly passenger get to a doctor's appointment who has to explain the sign's information." },
            { img: imgUserStory2, alt: "Text-to-speech button on bus pole", text: "A blind commuter unable to find the text-to-speech button because it doesn't have an identifying sound beacon." },
            { img: imgUserStory3, alt: "Low-vision commuter trying to read RTPI sign", text: "A low-vision commuter unable to read the information on the display due to its non-ADA-compliant type sizes." },
          ].map((story, i) => (
            <div key={i} className="flex flex-col gap-3 items-start">
              <img src={story.img} alt={story.alt} className="w-full rounded-[8px] object-cover" loading="lazy" decoding="async" />
              <p className="typo-body text-black">{story.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pain points */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">Top pain points</p>
        <div className="flex flex-col gap-5 w-full">
          <ContentCard title="Features don't reflect needs">
            <p>
              Riders just need 3 things: <strong>Bus route + service type, Destination,</strong> and <strong>Arrival time</strong>
              <br />
              Excess information bloats the screen real-estate and buttons.
            </p>
          </ContentCard>
          <ContentCard title="Hard to read">
            <p>
              Typography within the displays are <strong>smaller than ADA's guidance</strong> on minimum size.
              <br />
              Fonts are mono-spaced and in all-caps, <strong>eliminating information hierarchy.</strong>
            </p>
          </ContentCard>
          <ContentCard title="Too many design variants">
            <p>
              Riders are <strong>accustomed to NY Metropolitan Trans Authority (MTA)'s</strong> digital signage system and UI for subways.
              <br />
              Introducing new UI elements <strong>forces riders to relearn patterns</strong> to understand the same information.
            </p>
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
        title="Designed a scalable, accessible RTPI system that clearly communicates bus arrivals and feels like a cohesive part of NYC's transit network."
      />

      <ImageRow
        images={[
          { src: imgPoleDefault, alt: "RTPI pole sign — bus arriving" },
          { src: imgPoleNoSA, alt: "RTPI pole sign — default state" },
        ]}
      />

      <div className="flex flex-col gap-5 w-full">
        <OutcomeCard title="Clear information hierarchy">
          <p>We visually prioritized the <strong>3 things riders needed</strong> – bus route, destination, and time – and made the design as <strong>simple</strong> and <strong>clear</strong> as possible.</p>
        </OutcomeCard>
        <OutcomeCard title="ADA-compliant typography">
          <p>Created a <strong>type scale</strong> for both the bus pole and bus shelter RTPI that is just as clear 1 foot away as well as 10 feet away.</p>
        </OutcomeCard>
        <OutcomeCard title="Unified UI with MTA">
          <p>Typography, colors, and UI elements like service tags <strong>all follow MTA's existing styles</strong> so riders using transit apps like the MTA App already know what to look for.</p>
        </OutcomeCard>
      </div>
    </div>
  );
}

/* ── Process (jump links) ── */

function ProcessSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <SectionHeader label="PROCESS" title="I was responsible for answering 3 questions:" />

      <div className="flex flex-col gap-4 items-start w-full">
        <JumpLink id="peer-analysis" label="Peer analysis" description="What are best-in-class examples of clear information hierarchy in a multi-platform system?" />
        <JumpLink id="ui-design" label="UI design" description="How do we design within the constraints of the technology?" />
        <JumpLink id="end-to-end-ux" label="End-to-end UX" description="What information gaps can we fill in the end-to-end journey?" />
      </div>
    </div>
  );
}

/* ── 1. Peer analysis ── */

function PeerAnalysisSection() {
  return (
    <div id="peer-analysis" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionNumber number={1} title="Peer analysis" />

      {/* Two display types */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We designed for two display types, with the goal of arriving at one recommended display type for large-scale installation.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-4">
            The DOT piloted two hardware forms for the bus pole that communicates the 3 information elements riders look for: route, destination, and arrival time. However, the pilot devices used default, out-of-the-box interface designs that are bogged down by the same readability issues as the previous generation.
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Flag-mounted (Left)</strong>: an elevated unit that is double-sided</li>
            <li><strong>Eye-level (Right)</strong>: an easy-to-access unit that can be customized for interaction</li>
          </ol>
        </div>

        <ImageRow
          aspectRatio="3/4"
          images={[
            { src: imgPilotFlag, alt: "Flag-mounted pilot sign" },
            { src: imgPilotEye, alt: "Eye-level pilot sign" },
          ]}
        />
      </div>

      {/* Other transit authorities */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We learned how other complex transit authorities designed their bus pole units through landscape analyses and conversations with digital teams from{" "}
          <AnimatedLink href="https://tid.mbta.com/work/" external className="underline">Massachusetts</AnimatedLink>
          ,{" "}
          <AnimatedLink href="https://www.metro.net/about/organization/#customer-experience" external className="underline">Los Angeles</AnimatedLink>
          , and{" "}
          <AnimatedLink href="https://www.moviatrafik.dk/" external className="underline">Copenhagen</AnimatedLink>
          . Here were our learnings:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <ContentCard title="Discourage vandalism">
            <p>Vertical hardware forms reduce obstruction and discourage vandalism — as does community-sourced art.</p>
          </ContentCard>
          <ContentCard title="Word choice matters">
            <p>Careful wording around arrival times builds rider confidence when the data lags.</p>
          </ContentCard>
          <ContentCard title="Design for familiarity">
            <p>Strongest implementations extend a consistent design language from physical signs into their digital products and apps.</p>
          </ContentCard>
        </div>

        <img
          alt="RTPI signs from MBTA, LA Metro, and Copenhagen Movia"
          className="block w-full rounded-[12px]"
          src={imgPeerDevices}
          loading="lazy"
          decoding="async"
        />
        <p className="typo-caption font-medium text-[#666] w-full">
          RTPI signs from MBTA, LA Metro, and Copenhagen Movia
        </p>
      </div>
    </div>
  );
}

/* ── 2. UI design ── */

function UIDesignSection() {
  return (
    <div id="ui-design" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionNumber number={2} title="UI design" />

      {/* Hardware constraints */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          I needed to follow 3 hardware constraints: grayscale palette, limited battery supply, and data refresh rate.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-4">
            In order to scale quickly and economically, the DOT chose to use e-ink display technology for their independence from the power grid, which allows for easier installation, maintenance, and replacement. Below are the technical constraints and how we design around them:
          </p>
          <ol className="list-decimal list-outside pl-5 flex flex-col gap-2">
            <li><strong>Grayscale display:</strong> Clear visual and typographic hierarchy, especially around information that usually get color-coded.</li>
            <li><strong>No animation:</strong> Changes on screen need to be expected and simple.</li>
            <li><strong>Low refresh rate:</strong> Simplify the types of content to display – for example, a live map tracking the bus location would quickly deplete the device's battery.</li>
          </ol>
        </div>
        <img
          alt="RTPI pole spec diagram"
          className="block w-full rounded-[12px]"
          src={imgSpecDiagram}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Layout & typography exploration */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          I experimented layout and typography to accommodate long bus route numbers, longer destination names, and 5 different types of bus services – all on an A4-sized e-ink screen.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-4">
            On a digital sign that's just slightly larger than letter-sized paper, screen real-estate is one of the biggest constraints I designed around.
          </p>
          <p className="mb-4">
            I also had to ensure content meets ADA's signage font requirements, which determine the <strong>type size, layout, and component designs.</strong>
          </p>
          <p>
            So I utilized ChatGPT and Claude to audit MTA's lists of 15,000+ stops in NYC to find the <strong>longest destination names by character count</strong>. For example, a very long bus on the RTPI screen could be the Express service bus <strong>BxM10</strong> going to <strong>Williamsbridge Boston Rd via Morris Park Av / Eastchester Rd,</strong> at a whopping 61 characters.
          </p>
        </div>

        <img alt="Early UI explorations for RTPI pole sign" className="block w-full rounded-[12px]" src={imgUIPrototypes1} loading="lazy" decoding="async" />

        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-4">The design explorations prioritized 2 user needs:</p>
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li><strong>Identify the bus route number and service type</strong>. Special services like Limited, Select-Bus Service, and Rush required their respective tags LTD, SBS, and RUSH.</li>
            <li><strong>Know when your bus is coming</strong>. Time and bus route numbers have the same type size, or time gets a bigger treatment to be more easily identifiable in rushed moments.</li>
          </ol>
          <p>Other elements explored were type sizing for destinations, usage of widely-accepted abbreviations, bus crowding indicators, and pagination.</p>
        </div>

      </div>

      {/* Final designs */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          For the final designs, I utilized large type to draw attention to the high priority information, and grayscale to communicate arrival status, crowdedness, and special service types.
        </p>

        {/* Gray container wrapping both annotated final design screens */}
        <div className="bg-[#F5F5F5] rounded-[12px] p-6 flex flex-col gap-4 w-full">
          <div className="flex-1 min-w-0">
            <img
              alt="Final UI design — top screen with annotations"
              className="block w-full rounded-[8px]"
              src={imgFinalDesignTop1}
            />
          </div>
          <div className="flex-1 min-w-0">
            <img
              alt="Final UI design — top screen v2 with annotations"
              className="block w-full rounded-[8px]"
              src={imgFinalDesignTop2}
            />
          </div>
        </div>

        <p className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          More often than not, governments like to pack as much information as possible onto a screen, like a <strong>"love-bombing" of information for every scenario</strong>. So I also focused on utilizing negative space more effectively – to <strong>draw the eyes to the information that matters most</strong>, and allow content to breathe.
        </p>
      </div>
    </div>
  );
}

/* ── 3. End-to-end UX ── */

function EndToEndUXSection() {
  const videoBefore = useHoverVideo();
  const videoAfter = useHoverVideo();

  return (
    <div id="end-to-end-ux" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionNumber number={3} title="End-to-end UX" />

      {/* User testing → second screen */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          After conducting user testing at bus stations, rider feedback sent us in a new direction in hardware to show more relevant information about their journeys ahead.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-4">
            We conducted intercept user testing at bus stations during rush hours to understand what people look at for arrival information, and how they want to plan their trips.
          </p>
          <p className="mb-4">
            New Yorkers told us they want to see a map or higher-level route information – so we pivoted our hardware design to accommodate this need. We moved forward with the eye-level unit in response to accommodate a key rider request: <strong>the ability to plan for their trip.</strong>
          </p>
          <p>This called for <strong>a second screen</strong> to show additional route information like upcoming stops, transfers, and service alerts.</p>
        </div>

        {/* Gray container with annotated bottom screen design */}
        <div className="bg-[#F5F5F5] rounded-[12px] p-6 w-full">
          <img
            alt="Final UI design — bottom screen with annotations"
            className="block w-full rounded-[8px]"
            src={imgFinalDesignBottom}
          />
        </div>
      </div>

      {/* TTS button redesign */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We also had to ensure that blind or low-vision riders are able to use the device's text-to-speech (TTS) functions
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-3">There were 3 reasons the pilot TTS buttons didn't work well for low-vision users in testing:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Unfamiliar sound beacon</strong>: low-vision users needed to hear that the button exists first – but the identifying beacon audio wasn't familiar, and was too quiet.</li>
            <li><strong>Detached hardware</strong>: visually separating the device also mentally separates its function from the RTPI signage</li>
            <li><strong>Foreign design</strong>: uncommon in NYC, which mostly uses circular, metal buttons</li>
          </ol>
        </div>

        {/* Before / After — hover to play. items-stretch (default) ensures equal card height.
            Video wrapper is flex-1 + overflow-hidden so media fills remaining space and crops. */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">

          {/* Before card */}
          <div
            className="flex-1 min-w-0 bg-[#F5F5F5] border border-black rounded-[12px] p-4 flex flex-col gap-3 cursor-pointer"
            tabIndex={0}
            {...videoBefore.hoverHandlers}
          >
            <div className="shrink-0">
              <p className="typo-caption text-[#888]">Before</p>
              <p className="typo-h3 font-bold text-black">Plastic banana</p>
            </div>
            <div className="flex-1 min-h-0 rounded-[8px] overflow-hidden">
              <video
                ref={videoBefore.videoRef}
                className="block w-full h-full object-cover"
                src={imgTTSbefore}
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>

          {/* After card */}
          <div
            className="flex-1 min-w-0 bg-[#F5F5F5] border border-black rounded-[12px] p-4 flex flex-col gap-3 cursor-pointer"
            tabIndex={0}
            {...videoAfter.hoverHandlers}
          >
            <div className="shrink-0">
              <p className="typo-caption text-[#888]">After</p>
              <p className="typo-h3 font-bold text-black">ADA-compliant</p>
            </div>
            <div className="flex-1 min-h-0 rounded-[8px] overflow-hidden">
              <video
                ref={videoAfter.videoRef}
                className="block w-full h-full object-cover"
                src={imgTTSafter}
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>

        </div>


        <p className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          Introducing the screen also meant additional hardware complexities, such as new button configurations, added weight from a second battery pack, and custom hardware casing. We worked with the hardware vendor to ensure the physics was possible, and the new constraints didn't hinder the user experience.
        </p>
      </div>

      {/* Final 2-screen design */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          The final design has 2 screens to show riders the right information, in the right place, at the right time.
        </p>
        <img alt="Final 2-screen design" className="block w-full rounded-[12px]" src={imgPoleFinalLarge} loading="lazy" decoding="async" />
      </div>

      {/* Art */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          New Yorkers love making "art"; the DOT hates vandalism. We bridged both needs.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-3">Artwork on the RTPI units served practical purposes:</p>
          <ul className="list-disc ml-6 space-y-1 mb-3">
            <li>Increases identifiability, engaging more riders</li>
            <li>Discourages vandalism by making the canvas more difficult to work with</li>
          </ul>
          <p>
            So we proposed a new <strong>community-oriented open call</strong> for New Yorkers to submit artwork, which can be wrapped onto the bus pole units. I created renderings in Autodesk Fusion to show the DOT Art team some examples.
          </p>
        </div>

        <ImageRow
          images={[
            { src: imgArtRinggold, alt: "RTPI pole with Faith Ringgold-inspired art wrap" },
            { src: imgArtHarring, alt: "RTPI pole with Keith Haring-inspired art wrap" },
          ]}
        />
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
        title="A new RTPI signage system that clearly and concisely informs riders regardless of ability or digital access."
      />

      <ImageRow
        images={[
          { src: imgOutcomes1, alt: "RTPI pole deployed" },
          { src: imgOutcomes2, alt: "RTPI pole sign close-up" },
        ]}
      />

      <div className="flex flex-col gap-5 w-full">
        <OutcomeCard title="Clear information hierarchy">
          <p>We visually prioritized the <strong>3 things riders needed</strong> – bus route, destination, and time – and made the design as <strong>simple</strong> and <strong>clear</strong> as possible.</p>
        </OutcomeCard>
        <OutcomeCard title="ADA-compliant typography">
          <p>Created a <strong>type scale</strong> for both the bus pole and bus shelter RTPI that is just as clear 1 foot away as well as 10 feet away.</p>
        </OutcomeCard>
        <OutcomeCard title="Unified UI with MTA">
          <p>Typography, colors, and UI elements like service tags <strong>all follow MTA's existing styles</strong> so riders using transit apps like the MTA App already know what to look for.</p>
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
          to="/case-study/bus-shelter"
          image={imgProjectShelter}
          title="Bus shelter RTPI design"
          description="Designed a clear and concise UI system and experience for bus shelters that are accessible and familiar to all New Yorkers."
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

const RTPI_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "outcomes", label: "Outcomes" },
  { id: "peer-analysis", label: "Process: Peer analysis" },
  { id: "ui-design", label: "Process: UI design" },
  { id: "end-to-end-ux", label: "Process: End-to-end UX" },
  { id: "final-outcomes", label: "Outcomes" },
];

export function RtpiPoleCaseStudy() {
  return (
    <PageShell
      variant="case-study"
      header={<CaseStudyHeader projectName="Bus pole digital signage" sections={RTPI_SECTIONS} />}
    >
      <img alt="RTPI bus pole hero" className="block w-full rounded-[12px]" src={imgHero} fetchPriority="high" />

      <TitleSection />

      <Divider />
      <ProblemSection />

      <Divider />
      <TopOutcomesSection />

      <Divider />
      <ProcessSection />

      <Divider />
      <PeerAnalysisSection />

      <Divider />
      <UIDesignSection />

      <Divider />
      <EndToEndUXSection />

      <Divider />
      <FinalOutcomesSection />

      <Divider />
      <RelatedProjectsSection />
    </PageShell>
  );
}
