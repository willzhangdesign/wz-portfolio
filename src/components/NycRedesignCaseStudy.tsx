import { useRef, useState, useEffect } from "react";
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
import { NycHeroAnimation } from "./NycHeroAnimation";

import imgOldNycGov from "../assets/nyc-redesign/nycRedesign_problem-oldnycgov.png";
import imgNewNycGov from "../assets/nyc-redesign/nycRedesign_outcome-newnycgov.png";
import imgWorkshop1 from "../assets/nyc-redesign/workshop-1.png";
import imgWorkshop2 from "../assets/nyc-redesign/workshop-2.png";
import imgWorkshop3 from "../assets/nyc-redesign/workshop-3.png";
import imgInitialExplorations from "../assets/nyc-redesign/NycRedesign_initial explorations.png";
import imgDirection1 from "../assets/nyc-redesign/nycRedesign-direction1.mov";
import imgDirection2 from "../assets/nyc-redesign/nycRedesign-direction2.mov";
import imgPhotographyGuide from "../assets/nyc-redesign/photography-guideline.png";
import imgMediaCredit1 from "../assets/nyc-redesign/media-credit-1.png";
import imgMediaCredit2 from "../assets/nyc-redesign/media-credit-2.png";
import imgCarousel1 from "../assets/nyc-redesign/carousel1.png";
import imgCarousel2 from "../assets/nyc-redesign/carousel2.png";
import imgCarousel3 from "../assets/nyc-redesign/carousel3.png";
import imgTouchpoints from "../assets/nyc-redesign/touchpoints.png";
import imgParkingTicket from "../assets/nyc-redesign/nycRedesign_ParkingTicket.png";
import imgNavLabeled from "../assets/nyc-redesign/nav-labled.png";
import imgProjectDDS from "../assets/home/projCard-DDS.png";
import imgProjectRTPI from "../assets/home/projCard-RTPI.png";
import imgProjectShelter from "../assets/home/RTPI_Hero-shelter.png";
import imgProblemGraphic1 from "../assets/nyc-redesign/nycRedesign_problem-graphic1.png";
import imgProblemGraphic2 from "../assets/nyc-redesign/nycRedesign_problem-graphic2.png";
import imgProblemGraphic3 from "../assets/nyc-redesign/nycRedesign_problem-graphic3.png";

/* ── Title + intro ── */

function TitleSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <p className="typo-display text-black w-full">
        Redesigning NYC government's digital infrastructure
      </p>

      <div className="flex flex-col min-[900px]:flex-row gap-5 min-[900px]:gap-10 items-start w-full">
        <div className="typo-body text-black flex-1 min-w-0 leading-[1.2]">
          <p className="mb-4">
            1.8 million New Yorkers visit <span className="underline">nyc.gov</span> each month, but the site was designed around the needs of bureaucracy, not of the people. My team, the NYC Digital Service, set out to change that by rebuilding the technology, content, and design from the ground up, prioritizing the New Yorkers who need government services most but face the highest barriers to access them.
          </p>
          <p className="mb-4">
            I was responsible for the end-to-end UI/UX and creating the design system – but as a small team, I also worked on research, synthesis, brand exploration, and content strategy.
          </p>
          <p>
            This project was also a strategic shift in how the city builds digital products. Rather than designing around policy mandates and then outsourcing strategy and delivery to consultants, we set strategy in-house. We have a lean team of 8, so we partnered with the government service owners who knew their domains best, as well as collaborating with New Yorkers in community-based organizations.
          </p>
        </div>

        <InfoCard
          items={[
            { label: "Timeline", content: <p className="font-bold">6 months, 2024–2025</p> },
            {
              label: "Skills",
              content: <>Brand strategy,<br />Product design,<br />UX research</>,
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
    <div className="flex flex-col gap-10 items-start w-full">
      <SectionHeader
        label="PROBLEM"
        title="New Yorkers couldn't find what they needed. Those who did still struggled to complete their tasks."
      />

      <img
        alt="Old nyc.gov website"
        className="block w-full rounded-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]"
        src={imgOldNycGov}
      />

      {/* User stories */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">User stories</p>
        <p className="typo-body text-black w-full">
          Picture yourself in the shoes of one of these New Yorkers below:
        </p>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {[
            { img: imgProblemGraphic1, text: "Helping your immigrant parents to manage SNAP benefits online, but the steps are confusing, filled with jargon, and sprawling" },
            { img: imgProblemGraphic2, text: "Visually impaired and trying to find a community event, but your screen reader is stuck in a carousel reading Eric Adam's \"accomplishments\"" },
            { img: imgProblemGraphic3, text: "A parent checking for school closures during a winter storm, but the site search isn't prioritizing the right pages" },
          ].map((story, i) => (
            <div key={i} className="flex flex-col gap-3 items-start">
              <img alt="" className="block w-full h-auto" src={story.img} />
              <p className="typo-body text-black">{story.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top pain points */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">Top pain points</p>

        <div className="gap-6 grid grid-cols-2 [@media(max-width:400px)]:grid-cols-1 w-full">
          <ContentCard title="Confusing navigation">
            <p>The site was built around government structure, <strong>not New Yorkers' needs</strong>.</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>No <strong>visual or brand hierarchy</strong></li>
              <li>Lacked navigation features and elements</li>
              <li>Services submerged under layers of pages, elongating journeys</li>
            </ul>
          </ContentCard>
          <ContentCard title="Hard to use">
            <p>The average site performance score on mobile was <strong>25/100.</strong></p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Most users prefer mobile viewport</li>
              <li>Accessibility score for top 10 pages on mobile was 53/100.</li>
            </ul>
          </ContentCard>
          <ContentCard title="Outdated appearance">
            <p>The last redesign was <strong>12 years ago</strong>.</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>CSAT feedback noted visual look and feel felt dated at every level</li>
              <li>Didn't reflect the city it represented</li>
            </ul>
          </ContentCard>
          <ContentCard title="Complicated content">
            <p><strong>No content strategy north star</strong> for all of government, decentralizing style, voice, tone, and vocabulary for <strong>100+ agencies</strong>.</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Content was difficult to understand due to legalese and jargon.</li>
            </ul>
          </ContentCard>
        </div>
      </div>
    </div>
  );
}

/* ── Top outcomes (after Problem) ── */

function TopOutcomesSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <SectionHeader
        label="OUTCOMES"
        title="The redesign directly addressed all four problems we set out to solve, and the results reflected that."
      />

      <img
        alt="New nyc.gov website"
        className="block w-full rounded-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]"
        src={imgNewNycGov}
      />

      <div className="gap-6 grid grid-cols-2 [@media(max-width:400px)]:grid-cols-1 w-full">
        <OutcomeCard title="13 points in Improved customer satisfaction.">
          <p>CSAT surveys reported positive feedback related to the navigability, cleanliness of the new visual design, the search experience, and more.</p>
        </OutcomeCard>
        <OutcomeCard title="Decreased 311 call center calls for services we redesigned">
          <p><strong>↓ 41%</strong> parking ticket calls<br /><strong>↓ 28%</strong> rent increase calls</p>
        </OutcomeCard>
        <OutcomeCard title="100% accessible">
          <p>All redesigned pages are <strong>100% WCAG 2.2 accessible</strong>. New content style guide sets content strategy north star across government to write in plain language.</p>
        </OutcomeCard>
        <OutcomeCard title="Adoption and rollout">
          <p>Wrote and implemented a city-wide policy for all government agencies to <strong>adopt the design system</strong>. Currently scaling rollout with multiple agencies.</p>
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
        <JumpLink id="brand-design" label="Brand design" description="What do New Yorkers want their website to look like?" />
        <JumpLink id="information-architecture" label="Information architecture" description="What do New Yorkers need to do on nyc.gov?" />
      </div>
    </div>
  );
}

/* ── 1. Brand design ── */

function BrandDesignSection() {
  const video1 = useHoverVideo();
  const video2 = useHoverVideo();

  return (
    <div id="brand-design" className="flex flex-col gap-10 items-start w-full scroll-mt-10">
      <SectionNumber number={1} title="Brand design" />

      {/* North star quote */}
      <div className="flex flex-col gap-6 w-full">
        <p className="typo-h3 font-bold text-black w-full">
          A user told us "It's unclear who this site is for – is it for New Yorkers in general or people that work for the government?".
          <br />
          This became our product north star.
        </p>
        <p className="typo-body text-black w-full">
          <strong>I led the City government's first design workshop,</strong> engaging product teams from 12 agencies across the government to go out to community-based organizations – like libraries, non-profits, or community centers – to understand people's website experience, relationship to our government, and what it means to be a New Yorker.
        </p>
        <p className="typo-body text-black w-full">
          Initial design explorations used the careers page so that the <strong>look-and-feel</strong> <strong>feedback</strong> can be tied to <strong>task-completion metrics</strong>. This helped anchor our broad design explorations across colors, typefaces, and trends.
        </p>
        <div className="aspect-[972/500] relative rounded-[12px] overflow-hidden shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] w-full bg-[#e7f0fa]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgInitialExplorations} />
        </div>
      </div>

      {/* Two directions */}
      <div className="flex flex-col gap-6 w-full">
        <p className="typo-h3 font-bold text-black w-full">
          From wide explorations, two directions emerged. I focused on developing Direction 2 — landing a design language 100% of users called modern, approachable, and official.
        </p>
        <p className="typo-body text-black w-full">
          Coming out of COVID, people wanted a government that felt supportive — not punishing. A Bed-Stuy resident put it best: they wanted <strong>"more of nature, serenity, and growth."</strong>
          <br />
          We carried the warmth of Direction 2 into the final designs, while drawing on the structural clarity of Direction 1.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-start w-full">
          {/* Direction 1 */}
          <div
            className="bg-[#eee] flex-1 min-w-0 relative rounded-[8px] group/card1"
            tabIndex={0}
            {...video1.hoverHandlers}
          >
            <div className="flex flex-col gap-3 p-4 w-full">
              <p className="typo-caption font-bold text-[#666]">Direction 1</p>
              <p className="typo-intro font-bold text-black">"Architectural grit"</p>
              <div className="h-[500px] rounded-[8px] w-full bg-black overflow-hidden">
                <video ref={video1.videoRef} loop muted playsInline className="w-full h-full object-contain rounded-[8px]" src={imgDirection1} />
              </div>
              <p className="typo-caption text-black">
                Capturing the city's built environment and gravitas, through liberty green, sharp edges, textures, and bold typographic hierarchy.
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#999] inset-0 pointer-events-none rounded-[8px] transition-all group-hover/card1:border-2 group-hover/card1:border-black group-hover/card1:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]" />
          </div>

          {/* Direction 2 */}
          <div
            className="bg-[#eee] flex-1 min-w-0 relative rounded-[8px] self-stretch group/card2"
            tabIndex={0}
            {...video2.hoverHandlers}
          >
            <div className="flex flex-col gap-3 p-4 w-full h-full">
              <p className="typo-caption font-bold text-[#666]">Direction 2</p>
              <p className="typo-intro font-bold text-black">"Approachable spaces"</p>
              <div className="h-[500px] rounded-[8px] w-full bg-black overflow-hidden">
                <video ref={video2.videoRef} loop muted playsInline className="w-full h-full object-contain rounded-[8px]" src={imgDirection2} />
              </div>
              <p className="typo-caption text-black">
                Capturing the intimate, local experience of living here, through warm golden hour colors, serif typography, and a friendlier tone.
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#999] inset-0 pointer-events-none rounded-[8px] transition-all group-hover/card2:border-2 group-hover/card2:border-black group-hover/card2:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]" />
          </div>
        </div>
      </div>

      <TypographySubsection />
      <PhotographySubsection />
      <ColorPaletteSubsection />
      <CarouselSubsection />
    </div>
  );
}

/* ── Typography subsection ── */

const notoLanguages = [
  { label: "English", text: "The new nyc.gov was designed with 3 guiding values: easy for everyone, trustworthy, and future-forward." },
  { label: "Español", text: "El nuevo nyc.gov fue diseñado con 3 valores rectores: fácil para todos, confiable y orientado al futuro." },
  { label: "中文", text: "新版nyc.gov的设计秉承三大指导价值观：人人易用、值得信赖、面向未来。" },
  { label: "Русский", text: "Новый nyc.gov создан на основе трёх руководящих ценностей: удобство для всех, надёжность и ориентация на будущее." },
  { label: "বাংলা", text: "নতুন nyc.gov ৩টি নির্দেশক মূল্যবোধ নিয়ে ডিজাইন করা হয়েছে: সবার জন্য সহজ, নির্ভরযোগ্য, এবং ভবিষ্যৎমুখী।" },
  { label: "Kreyòl Ayisyen", text: "Nouvo nyc.gov la te fèt ak 3 valè gid: fasil pou tout moun, serye, ak pou lavni." },
  { label: "한국어", text: "새로운 nyc.gov는 세 가지 핵심 가치로 디자인되었습니다: 모두에게 쉽고, 신뢰할 수 있으며, 미래 지향적입니다." },
  { label: "العربية", text: "تم تصميم nyc.gov الجديد بثلاث قيم إرشادية: سهل للجميع، وموثوق، ومتطلع إلى المستقبل." },
  { label: "اردو", text: "نیا nyc.gov تین رہنما اقدار کے ساتھ ڈیزائن کیا گیا ہے: سب کے لیے آسان، قابلِ اعتماد، اور مستقبل کے لیے تیار۔" },
  { label: "Français", text: "Le nouveau nyc.gov a été conçu autour de 3 valeurs : facile pour tous, fiable et tourné vers l'avenir." },
];

function NotoSansCard() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % notoLanguages.length);
        setFading(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-3">
      <p className="typo-caption font-medium text-[#666]">Body font</p>
      <p className="typo-intro font-bold text-black">Noto Sans</p>
      <div className="bg-black rounded-[8px] p-6 flex-1 min-h-[280px] flex items-center">
        <p
          className="text-white text-[24px] font-medium leading-[1.3]"
          style={{
            fontFamily: "'Noto Sans', sans-serif",
            transition: "opacity 0.3s ease",
            opacity: fading ? 0 : 1,
          }}
        >
          {notoLanguages[index].text}
        </p>
      </div>
    </div>
  );
}

function TypographySubsection() {
  return (
    <div className="flex flex-col gap-6 items-start w-full">
      <p className="typo-h2 font-bold text-black w-full">
        We chose typefaces that were accessible, open-source, and can translate into NYC's 10 official languages.
      </p>
      <p className="typo-body text-black w-full">
        We selected Clash Grotesk for headers because of its open, wide forms to balance government authority with the warmth of NYC's communities.
        <br />
        We selected Noto Sans for everything else. It's a global font supporting nearly every script in the world, and a requirement under{" "}
        <a className="cursor-pointer underline" href="https://www.nyc.gov/site/law/about/language-access-plan.page" target="_blank" rel="noopener noreferrer">Local Law 30</a>
        , which mandates city services be accessible in at least 10 languages.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        {/* Clash Grotesk */}
        <div className="flex-1 flex flex-col gap-3">
          <p className="typo-caption font-medium text-[#666]">Header font</p>
          <p className="typo-intro font-bold text-black">Clash Grotesk</p>
          <div className="bg-black rounded-[8px] p-6 flex-1 min-h-[280px] flex items-center">
            <p className="text-white text-[40px] font-bold leading-[1.1]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Find what you need on nyc.gov
            </p>
          </div>
        </div>
        <NotoSansCard />
      </div>
    </div>
  );
}

/* ── Photography subsection ── */

function PhotographySubsection() {
  return (
    <div className="flex flex-col gap-6 items-start w-full">
      <p className="typo-h2 font-bold text-black w-full">
        We created new imagery guidelines that reflect the diversity and aspirations of New Yorkers.
      </p>
      <p className="typo-body text-black w-full">
        As one lifelong resident put it: they wanted to see <strong>"people of all ages and points of view."</strong> We translated that into a set of{" "}
        <a className="cursor-pointer underline" href="https://designsystem.nyc.gov/brand/photography.html" target="_blank" rel="noopener noreferrer">photo guidelines</a>
        {" "}grounded in both research and our values.
      </p>

      <div className="aspect-[1692/720] relative rounded-[12px] overflow-hidden w-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgPhotographyGuide} />
      </div>

      <p className="typo-body text-black w-full">
        Using those guidelines, we ran an internal photography competition with city employees (our "Super New Yorkers") to build the city's first centralized photo library. We wanted their perspectives: people who navigate this city daily, serve their communities, and represent its full diversity across all five boroughs.
      </p>

      <div className="bg-[#eee] rounded-[8px] p-6 flex flex-col gap-6 w-full">
        <p className="typo-body text-black">
          To celebrate <strong>the humans behind the imagery</strong> on nyc.gov, I designed a component to give them credit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="aspect-[4/5] relative rounded-[12px] overflow-hidden border border-black">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgMediaCredit1} />
          </div>
          <div className="aspect-[4/5] relative rounded-[12px] overflow-hidden border border-black">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgMediaCredit2} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Color palette subsection ── */

function ColorSwatch({ name, hex, bg, color, border }: { name: string; hex: string; bg: string; color: string; border?: boolean }) {
  return (
    <div
      className="flex-1 aspect-square rounded-[8px] flex flex-col justify-end p-4"
      style={{ backgroundColor: bg, color, border: border ? "1px solid #000" : undefined }}
    >
      <p className="typo-h3 font-medium" style={{ color }}>{name}</p>
      <p className="typo-body" style={{ color }}>{hex}</p>
    </div>
  );
}

function ColorPaletteSubsection() {
  return (
    <div className="flex flex-col gap-6 items-start w-full">
      <p className="typo-h2 font-bold text-black w-full">
        We simplified the foundational brand color palette to address navigability, usability, modernity, and complexity:
      </p>

      <div className="flex flex-row gap-3 sm:gap-6 w-full">
        <ColorSwatch name="Black" hex="#000000" bg="#000000" color="#FFFFFF" />
        <ColorSwatch name="White" hex="#FFFFFF" bg="#FFFFFF" color="#000000" border />
        <ColorSwatch name="Action blue" hex="#103FEF" bg="#103FEF" color="#FFFFFF" />
      </div>

      <div className="gap-6 grid grid-cols-2 [@media(max-width:400px)]:grid-cols-1 w-full">
        <ContentCard title="Brand stratification">
          <p>
            Black <strong>anchors the primary nyc.gov</strong> brand, distinguishing it from agency brands.
            <br />
            An energizing "Action" blue, drawn from the NYC flag, <strong>marks every CTA</strong> across the site to drive user task completion.
          </p>
        </ContentCard>
        <ContentCard title="Maximize legibility">
          <p>Black and white <strong>maximize legibility</strong> for low-vision users. The shade of Action blue is selected for its high contrast, making it <strong>instantly identifiable</strong> site-wide.</p>
        </ContentCard>
        <ContentCard title="Visual modernization">
          <p>The modern blue, <strong>paired with </strong>contemporary typefaces and intentional white space, brings nyc.gov into the present.</p>
        </ContentCard>
        <ContentCard title="Function-first">
          <p>All colors must have a function.<br />Fewer colors means less to interpret, keeping focus on the content.</p>
        </ContentCard>
      </div>

      <p className="typo-body text-black w-full">
        <strong>I also had to solve for scaling the palette</strong> in a design system that fits with hundreds of sub-brands – government agencies – and all their service contexts and use-cases. I expand on this in my{" "}
        <Link to="/case-study/nyc-design-system" className="underline cursor-pointer">NYC Digital Design System case study</Link>
        , as it was later developed.
      </p>
    </div>
  );
}

/* ── Carousel subsection ── */

function CarouselSubsection() {
  const slides = [
    { image: imgCarousel1, caption: "The homepage now emphasizes the most popular information to New Yorkers" },
    { image: imgCarousel2, caption: "The events page featuring improved imagery based on the new guidelines" },
    { image: imgCarousel3, caption: "An educational page that centralizes government structure information in one place to help New Yorkers understand their government" },
  ];

  const [current, setCurrent] = useState(0);
  const wheelLockRef = useRef(false);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const dx = e.deltaX;
    if (Math.abs(dx) < Math.abs(e.deltaY)) return;
    if (Math.abs(dx) < 24 || wheelLockRef.current) return;
    if (dx > 0) next(); else prev();
    wheelLockRef.current = true;
    window.setTimeout(() => { wheelLockRef.current = false; }, 600);
  };

  return (
    <div className="flex flex-col gap-6 items-start w-full">
      <p className="typo-h3 font-bold text-black w-full">
        I designed the homepage and main pages with the new brand foundations to prioritize action, clarity, and find-ability.
      </p>

      <div className="relative w-full overflow-hidden rounded-[12px]" onWheel={handleWheel} aria-roledescription="carousel">
        <div className="flex w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((s, i) => (
            <img key={i} alt={s.caption} src={s.image} className="block w-full shrink-0 rounded-[12px]" aria-hidden={i !== current} />
          ))}
        </div>
      </div>

      <p className="typo-caption font-medium text-[#666] w-full">{slides[current].caption}</p>

      <div className="flex items-center gap-4">
        <button onClick={prev} disabled={current === 0} aria-label="Previous slide" className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black bg-white hover:bg-[#eee] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10L12 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="typo-body text-black tabular-nums">{current + 1} of {slides.length}</span>
        <button onClick={next} disabled={current === slides.length - 1} aria-label="Next slide" className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black bg-white hover:bg-[#eee] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 4L14 10L8 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

/* ── 2. Information architecture ── */

function InformationArchitectureSection() {
  return (
    <div id="information-architecture" className="flex flex-col gap-10 items-start w-full scroll-mt-10">
      <SectionNumber number={2} title="Information architecture" />

      {/* Parking ticket */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We restructured the site to make popular services easy to find, start, and complete — beginning with the most common task: paying a parking ticket.
        </p>
        <p className="typo-body text-black w-full">
          Paying a parking ticket was our <strong>most popular task</strong>, and <strong>one of its most broken</strong>. The flow mirrored government structure instead of a simple checkout, and missteps could mean additional penalties. It was so convoluted that private companies (WinIt and Pay NYC Fines) built profitable workarounds, charging New Yorkers for something the city should offer free. <strong>This wasn't just a usability problem – it was an equity one.</strong>
          <br />
          After a basic Google search to pay a ticket, users could <strong>arrive at 7 different city starting-points</strong>. This meant there was no single recommended path for users.
        </p>

        <div className="flex flex-col gap-2 items-start w-full">
          <div className="aspect-[2598/1724] relative rounded-[12px] w-full overflow-hidden">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgTouchpoints} />
          </div>
          <p className="typo-caption font-medium text-[#666] w-full">
            Illustration of the 7 vastly different starting points New Yorkers could have to pay a parking ticket
          </p>
        </div>
      </div>

      {/* Guide page */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          I designed the first "Guide" page that cut 311 call volume by 41%.
        </p>
        <p className="typo-body text-black w-full">
          Agency sites on nyc.gov prioritize documenting every option a user could take, rather than the best one. Guides flip that approach: each page sets expectations, surfaces the right information, and points users to a clear next step.
          <br />
          I designed the first Guide page, structuring content and layout so users could scan for what applies to them, understand what's required, and act without second-guessing. That clarity paid off in its first quarter after launch with a drop in 311 calls.
        </p>
        <img alt="" className="block w-full rounded-[12px]" src={imgParkingTicket} />
      </div>

      {/* Navigation component */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          I designed a global navigation component to help users find services faster across 100+ agency sites
        </p>
        <div className="typo-body text-black w-full leading-[1.4]">
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
          <img alt="" className="block w-full" src={imgNavLabeled} />
        </div>
      </div>

      {/* DDS card */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          I led the design of the new city-wide design system to scale the redesign roll-out and grow our system contexts by simplifying numerous other complex services like paying for parking tickets.
        </p>
        <p className="typo-body text-black w-full">
          nyc.gov spans hundreds of sites and thousands of pages. The work we'd done so far was meaningful, but without a shared design infrastructure, every agency would keep building inconsistently, and the improvements wouldn't hold.
          <br />
          The design system grows with research into end-to-end user journeys and each redesigned service. I go in-depth on my role in the creation of the design system in the case study below:
        </p>

        <div className="bg-white border border-black rounded-[12px] flex flex-col w-full overflow-hidden hover:bg-[#eee] cursor-default group/ds">
          <div className="border-b border-black">
            <div className="aspect-[846/430] relative w-full">
              <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgProjectDDS} />
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 text-black group-hover/ds:text-[#333] transition-colors">
            <div className="flex items-center gap-2.5">
              <span className="text-[14px] font-medium leading-[115%] bg-[#eee] rounded-[8px] px-2 py-1 group-hover/ds:bg-[#ddd] whitespace-nowrap">Coming soon</span>
              <p className="typo-intro font-bold whitespace-nowrap">NYC Digital Design System</p>
            </div>
            <p className="typo-body">
              First design system for NYC government capable of scaling with multitudes of different service and product contexts. Currently in city-wide adoption and scaling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Final outcomes ── */

function FinalOutcomesSection() {
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      <SectionHeader label="OUTCOMES" title="Real results for real New Yorkers." />

      <div className="gap-6 grid grid-cols-2 [@media(max-width:400px)]:grid-cols-1 w-full">
        <OutcomeCard title="13 points in Improved customer satisfaction.">
          <p>CSAT surveys reported positive feedback related to the navigability, cleanliness of the new visual design, the search experience, and more.</p>
        </OutcomeCard>
        <OutcomeCard title="Decreased 311 call center calls for services we redesigned">
          <p><strong>↓ 41%</strong> parking ticket calls<br /><strong>↓ 28%</strong> rent increase calls</p>
        </OutcomeCard>
        <OutcomeCard title="Increased accessibility">
          <p>All redesigned pages are <strong>100% accessible</strong>. New content style guide sets content strategy north star across government to write in plain language.</p>
        </OutcomeCard>
        <OutcomeCard title="Adoption and rollout">
          <p>Wrote and implemented a city-wide policy for all government agencies to <strong>adopt the design system</strong>. Currently scaling rollout with multiple agencies.</p>
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
          to="/case-study/bus-shelter"
          image={imgProjectShelter}
          title="Bus shelter RTPI design"
          description="Redesigned the RTPI display interface for over 3000 bus shelters across the 5 boroughs to improve find-ability and usability for New Yorkers with disabilities."
        />
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   Main page
   ════════════════════════════════════ */

export function NycRedesignCaseStudy() {
  return (
    <PageShell variant="case-study">
      <CaseStudyLogo />

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
      <BrandDesignSection />

      <Divider />
      <InformationArchitectureSection />

      <Divider />
      <FinalOutcomesSection />

      <Divider />
      <RelatedProjectsSection />
    </PageShell>
  );
}
