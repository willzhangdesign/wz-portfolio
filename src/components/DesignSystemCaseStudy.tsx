import { useState, useEffect, useRef } from "react";
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
  useHoverVideo,
} from "./shared";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { AnimatedLink } from "./AnimatedLink";
import imgHero from "../assets/design-system/designSystem_hero.png";
import imgProblem from "../assets/design-system/designSystem_problem.png";
import imgOutcomes from "../assets/design-system/designSystem_Outcomes.png";
import imgDirection1 from "../assets/design-system/designSystem_Vis Direction-direction1.mov";
import imgDirection2 from "../assets/design-system/designSystem_Vis Direction-direction2.mov";
import imgVisDirection1 from "../assets/design-system/designSystem_VisDirection 1.png";
import imgVisDirection2 from "../assets/design-system/designSystem_Vis Direction 2.png";
import imgImageGuidelines from "../assets/design-system/designSystem_ImageGuidelines.png";
import imgCarousel1 from "../assets/design-system/designSystem_carousel1.png";
import imgCarousel2 from "../assets/design-system/designSystem_carousel2.png";
import imgCarousel3 from "../assets/design-system/designSystem_carousel3.png";
import imgBrandFoundation from "../assets/design-system/designSystem_BrandFoundation last.png";
import imgUserStory1 from "../assets/design-system/designSystem_UserStory 1.png";
import imgUserStory2 from "../assets/design-system/designSystem_UserStory 2.png";
import imgUserStory3 from "../assets/design-system/designSystem_UserStory 3.png";
import imgMediaCreditPhoto from "../assets/design-system/media-credit-photo.png";
import imgProjectNycRedesign from "../assets/home/projCard-nycRedesign.png";
import imgProjectRTPI from "../assets/home/projCard-RTPI.png";

/* ── Title + intro ── */

function TitleSection() {
  return (
    <div id="overview" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <p className="typo-display text-black w-full">
        Building a design system that scales across 45+ agency sites
      </p>

      <div className="flex flex-col min-[900px]:flex-row gap-5 min-[900px]:gap-10 items-start w-full">
        <div className="typo-body text-black flex-1 min-w-0 leading-[1.2]">
          <p className="mb-4">
            A New Yorker testing the old nyc.gov asked us a simple question: was the site for New Yorkers, or for the people who work for the government?
          </p>
          <p className="mb-4">
            It looked bureaucratic, dated, impersonal, and unsure of who it served. As we rebuilt nyc.gov from the ground up, we started with new brand foundations in color, typefaces, and imagery that would make 1.8 million monthly visitors feel the website was designed for them.
          </p>
          <p>
            I then carried those foundations into a{" "}
            <AnimatedLink href="https://designsystem.nyc.gov" external className="underline">design system</AnimatedLink>
            {" "}that agency sites could share, so the new look would hold as it scaled across government. The design system is first being adopted by{" "}
            <AnimatedLink href="https://www.nyc.gov/content/mayorsoffice/pages/" external className="underline">Mayoral agencies</AnimatedLink>
            {" "}because they own and operate high-traffic, high-impact digital services.
          </p>
        </div>

        <InfoCard
          items={[
            { label: "Timeline", content: <p className="font-bold">5 months, 2024—2025</p> },
            { label: "Skills", content: <>Brand strategy,<br />Design system,<br />UX research</> },
            {
              label: "Team",
              content: (
                <>
                  Chief Digital Strategy Officer,<br />
                  Design Director,<br />
                  💁🏻 <strong>Product Design Lead</strong>,<br />
                  Content Strategy Lead,<br />
                  Engineering Lead,<br />
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
  const userStories = [
    {
      img: imgUserStory1,
      alt: "User story 1",
      text: "A low-vision resident looking for CTAs, but every button in their journey looked different, making it hard to identify the actions at each step",
    },
    {
      img: imgUserStory2,
      alt: "User story 2",
      text: "A resident looking for social benefits navigates through multiple sites, but each one appears differently, so they're not sure they're in the right place.",
    },
    {
      img: imgUserStory3,
      alt: "User story 3",
      text: "A first-time visitor applying for a business permit, but the homepage looks a decade out of date, so they second-guess whether it's current or even real",
    },
  ];

  return (
    <div id="problem" className="flex flex-col gap-10 items-start w-full scroll-mt-16">
      <SectionHeader
        label="PROBLEM"
        title="nyc.gov looked like bureaucracy, and New Yorkers couldn't tell it was built for them."
      />

      <img alt="Old nyc.gov agency sites showing inconsistent designs" className="block w-full rounded-[12px]" src={imgProblem} loading="lazy" decoding="async" />

      {/* User stories */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">User stories</p>
        <p className="typo-body text-black w-full max-w-[860px]">
          Picture yourself in the shoes of one of these New Yorkers below:
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <ContentCard title="Outdated UI and templates">
            <p>The last redesign was 12 years ago with rigid, hard-to-use templates. CSAT feedback called the look and feel dated at every level.</p>
          </ContentCard>
          <ContentCard title="No visual or brand hierarchy">
            <p>Each agency site looked and behaved differently, fragmenting the nyc.gov experience into siloes. Page layouts lacked content and image hierarchy.</p>
          </ContentCard>
          <ContentCard title="Complicated content">
            <p><strong>No content strategy north star</strong> for all of government, decentralizing style, voice, tone, and vocabulary for <strong>100+ agencies</strong>.</p>
          </ContentCard>
          <ContentCard title="Imagery didn't represent the city">
            <p>The imagery didn't look like they belonged to New Yorkers or represented the diversity of the five boroughs.</p>
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
        title="The redesign gave nyc.gov a visual identity New Yorkers recognized as their own, and proved it could scale across the government."
      />

      <img alt="Redesigned nyc.gov homepage" className="block w-full rounded-[12px]" src={imgOutcomes} loading="lazy" decoding="async" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        <OutcomeCard title="A design language 100% of users called modern, approachable, and official">
          <p>The look-and-feel testing tied design exploration to task-completion metrics, so the final direction wasn't a matter of taste.</p>
        </OutcomeCard>
        <OutcomeCard title="13-point jump in customer satisfaction">
          <p>CSAT rose after launch, with users specifically praising the cleanliness of the new visual design.</p>
        </OutcomeCard>
        <OutcomeCard title="A city-wide design system, mandated by policy">
          <p>I helped write and implement a policy requiring mayoral agencies to adopt the design system, turning a one-site redesign into shared infrastructure now rolling out across multiple agencies.</p>
        </OutcomeCard>
        <OutcomeCard title="The city's first centralized and participatory photo library">
          <p>The imagery guidelines and an internal photo competition produced a shared library that lets every agency show the real diversity of the five boroughs instead of stock imagery.</p>
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
        <JumpLink id="visual-direction" label="Visual direction" description="What do New Yorkers want their website to look like?" />
        <JumpLink id="brand-foundations" label="Brand foundations" description="How can we create brand guidelines that are flexible enough to scale to over 50 agencies and their digital properties?" />
      </div>
    </div>
  );
}

/* ── 1. Visual direction ── */

function VisualDirectionSection() {
  const video1 = useHoverVideo();
  const video2 = useHoverVideo();

  return (
    <div id="visual-direction" className="flex flex-col gap-16 items-start w-full scroll-mt-16">
      <SectionNumber number={1} title="Visual direction" />

      {/* Product north star */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">
          A user told us "It's unclear who this site is for – is it for New Yorkers in general or people that work for the government?".{" "}
          This became our product north star.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-4">
            <strong>I led the City government's first design workshop</strong>, engaging product teams from 12 agencies across the government to go out to community-based organizations — like libraries, non-profits, or community centers — to understand people's website experience, relationship to our government, and what it means to be a New Yorker.
          </p>
          <p>
            Initial design explorations used the careers page so that the <strong>look-and-feel feedback</strong> can be tied to <strong>task-completion metrics</strong>. This helped anchor our broad design explorations across colors, typefaces, and trends.
          </p>
        </div>

        <img alt="Career page design explorations" className="block w-full rounded-[12px]" src={imgVisDirection1} loading="lazy" decoding="async" />
      </div>

      {/* Two directions */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h3 font-bold text-black w-full">
          From wide explorations, two directions emerged. I focused on developing Direction 2, landing a design language 100% of users called modern, approachable, and official.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-3">
            Coming out of COVID, people wanted a government that felt supportive, not punishing. A Bed-Stuy resident put it best: they wanted <strong>"more of nature, serenity, and growth."</strong>
          </p>
          <p>
            We carried the warmth of Direction 2 into the final designs, while drawing on the structural clarity of Direction 1.
          </p>
        </div>

        {/* Direction cards side by side — hover to play */}
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
                <video ref={video1.videoRef} loop muted playsInline preload="auto" className="w-full h-full object-contain rounded-[8px]" src={imgDirection1} />
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
                <video ref={video2.videoRef} loop muted playsInline preload="auto" className="w-full h-full object-contain rounded-[8px]" src={imgDirection2} />
              </div>
              <p className="typo-caption text-black">
                Capturing the intimate, local experience of living here, through warm golden hour colors, serif typography, and a friendlier tone.
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#999] inset-0 pointer-events-none rounded-[8px] transition-all group-hover/card2:border-2 group-hover/card2:border-black group-hover/card2:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]" />
          </div>
        </div>
      </div>

      {/* Additional explorations */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-body text-black w-full max-w-[860px]">
          Additional explorations aimed to integrate elements of Direction 1 into the look and feel of Direction 2, such as strong and bold typography, large format photography, and solid surfaces.
        </p>
        <img alt="Additional design explorations combining both directions" className="block w-full rounded-[12px]" src={imgVisDirection2} loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

/* ── Color swatch ── */

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

/* ── Typography — Noto Sans card ── */

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let interval: ReturnType<typeof setInterval> | null = null;
    const start = () => { if (!interval) interval = setInterval(() => setIndex((i) => (i + 1) % notoLanguages.length), 2500); };
    const stop = () => { if (interval) { clearInterval(interval); interval = null; } };
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) start(); else stop(); }, { threshold: 0.25 });
    observer.observe(el);
    return () => { observer.disconnect(); stop(); };
  }, []);

  return (
    <div ref={containerRef} className="flex-1 flex flex-col gap-3">
      <p className="typo-caption font-medium text-[#666]">Body font</p>
      <p className="typo-intro font-bold text-black">Noto Sans</p>
      <div className="bg-black rounded-[8px] p-6 flex-1 min-h-[280px] flex items-center">
        <div className="relative w-full" style={{ height: "8rem" }}>
          {notoLanguages.map((lang, i) => (
            <p
              key={lang.label}
              className="text-white text-[24px] font-medium leading-[1.3] absolute top-0 left-0 w-full"
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                transition: "opacity 0.3s ease",
                opacity: i === index ? 1 : 0,
              }}
            >
              {lang.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Media credit demo ── */

function MediaCreditDemo({ defaultExpanded = false }: { defaultExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="relative w-full rounded-[8px] overflow-hidden">
      <img
        alt="Two people sitting inside a metallic public art installation in NYC"
        className="block w-full h-auto"
        src={imgMediaCreditPhoto}
      />
      <button
        onClick={() => setExpanded(!expanded)}
        className="absolute bottom-2 right-2 h-8 bg-black/70 backdrop-blur-sm border border-[#555] rounded-[6px] flex items-center cursor-pointer hover:bg-black/85 transition-all"
        aria-label="Image credits"
        aria-expanded={expanded}
      >
        {expanded ? (
          <>
            <span className="text-white text-[11px] whitespace-nowrap pl-2.5 pr-1">Photo by Jane Doe</span>
            <span className="border-l border-white/30 h-full flex items-center px-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </span>
          </>
        ) : (
          <span className="w-8 h-8 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 2.625H4.5C4.00272 2.625 3.52581 2.82254 3.17417 3.17417C2.82254 3.52581 2.625 4.00272 2.625 4.5V19.5C2.625 19.9973 2.82254 20.4742 3.17417 20.8258C3.52581 21.1775 4.00272 21.375 4.5 21.375H19.5C19.9973 21.375 20.4742 21.1775 20.8258 20.8258C21.1775 20.4742 21.375 19.9973 21.375 19.5V4.5C21.375 4.00272 21.1775 3.52581 20.8258 3.17417C20.4742 2.82254 19.9973 2.625 19.5 2.625ZM19.125 4.875V10.8488L17.4506 9.17438C17.099 8.82287 16.6222 8.6254 16.125 8.6254C15.6278 8.6254 15.151 8.82287 14.7994 9.17438L4.875 19.0988V4.875H19.125ZM8.03063 19.125L16.125 11.0306L19.125 14.0306V19.125H8.03063ZM7.125 9C7.125 8.62916 7.23497 8.26665 7.44099 7.95831C7.64702 7.64996 7.93986 7.40964 8.28247 7.26773C8.62508 7.12581 9.00208 7.08868 9.36579 7.16103C9.72951 7.23337 10.0636 7.41195 10.3258 7.67417C10.588 7.9364 10.7666 8.27049 10.839 8.63421C10.9113 8.99792 10.8742 9.37492 10.7323 9.71753C10.5904 10.0601 10.35 10.353 10.0417 10.559C9.73335 10.765 9.37084 10.875 9 10.875C8.50272 10.875 8.02581 10.6775 7.67417 10.3258C7.32254 9.97419 7.125 9.49728 7.125 9Z" fill="white"/>
            </svg>
          </span>
        )}
      </button>
    </div>
  );
}

/* ── 2. Brand foundations ── */

function BrandFoundationsSection() {
  const carouselImages = [imgCarousel1, imgCarousel2, imgCarousel3];
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <div id="brand-foundations" className="flex flex-col gap-16 items-start w-full scroll-mt-16">
      <SectionNumber number={2} title="Brand foundations" />

      {/* Typography */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We chose typefaces that are accessible, open-source, and translate into NYC's 10 official languages.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-3">
            We selected Clash Grotesk for headers because of its open, wide forms to balance government authority with the warmth of NYC's communities.
          </p>
          <p>
            We selected Noto Sans for everything else. It's a global font supporting nearly every script in the world, and a requirement under{" "}
            <AnimatedLink href="https://www.nyc.gov/site/immigrants/about/local-law-30.page" external className="underline">Local Law 30</AnimatedLink>
            , which mandates city services be accessible in at least 10 languages.
          </p>
        </div>

        {/* Font preview cards — side by side */}
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

      {/* Imagery guidelines */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We created new imagery guidelines that reflect the diversity and aspirations of New Yorkers.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-3">
            As one lifelong resident put it: they wanted to see <strong>"people of all ages and points of view."</strong>
          </p>
          <p>
            We translated that into a set of{" "}
            <AnimatedLink href="https://designsystem.nyc.gov/brand/photography" external className="underline">photo guidelines</AnimatedLink>
            {" "}grounded in both research and our values.
          </p>
        </div>

        <img alt="Image guidelines showing Easy for everyone, Trustworthy, and Future-forward categories" className="block w-full rounded-[12px]" src={imgImageGuidelines} loading="lazy" decoding="async" />

        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p>
            Using those guidelines, we ran an internal photography competition with city employees (our "Super New Yorkers") to build the city's first centralized photo library. We wanted their perspectives: people who navigate this city daily, serve their communities, and represent its full diversity across all five boroughs.
          </p>
        </div>

        <div className="bg-[#eee] rounded-[8px] p-6 flex flex-col sm:flex-row gap-6 items-center w-full">
          <div className="typo-body text-black sm:w-1/3 shrink-0">
            <p>To celebrate <strong>the humans behind the imagery</strong> on nyc.gov, I designed a component to give them credit.</p>
            <p className="mt-2">Try it out! Click the image icon in the bottom right corner.</p>
          </div>
          <div className="sm:w-2/3 min-w-0">
            <MediaCreditDemo />
          </div>
        </div>
      </div>

      {/* Color palette */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          We simplified the foundational brand color palette to address navigability, usability, modernity, and complexity.
        </p>
        <p className="typo-body text-black w-full max-w-[860px]">
          <strong>I also had to solve for scaling the palette</strong> in a design system that fits with dozens of sub-brands (government agencies) and all their service contexts and use-cases. These colors represent the umbrella brand, and agencies have additional accents to represent the secondary brands of nyc.gov.
        </p>

        {/* Color swatches */}
        <div className="flex flex-row gap-3 sm:gap-6 w-full">
          <ColorSwatch name="Black" hex="#000000" bg="#000000" color="#FFFFFF" />
          <ColorSwatch name="White" hex="#FFFFFF" bg="#FFFFFF" color="#000000" border />
          <ColorSwatch name="Action blue" hex="#103FEF" bg="#103FEF" color="#FFFFFF" />
        </div>

        {/* Color rationale cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <ContentCard title="Brand stratification">
            <p>Black <strong>anchors the primary nyc.gov brand</strong>, distinguishing it from agency brands. An energizing "Action" blue, drawn from the NYC flag, <strong>marks every CTA</strong> across the site to drive user task completion.</p>
          </ContentCard>
          <ContentCard title="Maximize legibility">
            <p>Black and white <strong>maximize legibility</strong> for low-vision users. The shade of Action blue is selected for its high contrast, making it <strong>instantly identifiable</strong> site-wide.</p>
          </ContentCard>
          <ContentCard title="Visual modernization">
            <p>The modern blue, <strong>paired with</strong> contemporary typefaces and intentional white space, brings nyc.gov into the present.</p>
          </ContentCard>
          <ContentCard title="Function-first">
            <p>All colors must have a function.</p>
            <p>Fewer colors means less to interpret, keeping focus on the content.</p>
          </ContentCard>
        </div>
      </div>

      {/* Homepage and main pages */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-h2 font-bold text-black w-full">
          I designed the homepage and main pages with the new brand foundations to prioritize action, clarity, and wayfinding.
        </p>

        {/* Carousel */}
        <div className="flex flex-col gap-4 w-full">
          <div className="rounded-[12px] overflow-hidden bg-[#F5F5F5] aspect-[2402/1740] relative p-6">
            <img
              alt={`Annotated page design ${carouselIndex + 1} of 3`}
              className="absolute inset-6 w-[calc(100%-48px)] h-[calc(100%-48px)] object-contain"
              src={carouselImages[carouselIndex]}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex items-center gap-3 justify-center">
            <button
              onClick={() => setCarouselIndex((i) => Math.max(0, i - 1))}
              disabled={carouselIndex === 0}
              className="w-8 h-8 rounded-full border border-black flex items-center justify-center disabled:opacity-30 cursor-pointer disabled:cursor-default hover:bg-black/5 transition-colors"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 3.5L5 7L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <span className="typo-body text-black tabular-nums">{carouselIndex + 1} of 3</span>
            <button
              onClick={() => setCarouselIndex((i) => Math.min(2, i + 1))}
              disabled={carouselIndex === 2}
              className="w-8 h-8 rounded-full border border-black flex items-center justify-center disabled:opacity-30 cursor-pointer disabled:cursor-default hover:bg-black/5 transition-colors"
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 3.5L9 7L5.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Design system site */}
      <div className="flex flex-col gap-6 items-start w-full">
        <p className="typo-body text-black w-full max-w-[860px]">
          The new foundations are now live on the{" "}
          <AnimatedLink href="https://designsystem.nyc.gov" external className="underline">NYC Digital Design System</AnimatedLink>
          {" "}site with 4.5K+ active users since launch.
        </p>
        <div className="typo-body text-black w-full max-w-[860px] leading-[1.4]">
          <p className="mb-3">
            <strong>I designed the NYC Digital Design System site</strong>, which houses all the new brand, component, and content guidelines.
          </p>
          <p>
            Currently, multiple agencies are getting set up and adopting the new system – creating an <strong>opportunity to refresh and improve site-wide UX</strong> for hundreds of services and thousands of content pages.
          </p>
        </div>

        <img alt="NYC Digital Design System website showing Brand section" className="block w-full rounded-[12px]" src={imgBrandFoundation} loading="lazy" decoding="async" />
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
        title="An nyc.gov that New Yorkers can call theirs."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        <OutcomeCard title="A design language 100% of users called modern, approachable, and official">
          <p>The look-and-feel testing tied design exploration to task-completion metrics, so the final direction wasn't a matter of taste.</p>
        </OutcomeCard>
        <OutcomeCard title="13-point jump in customer satisfaction">
          <p>CSAT rose after launch, with users specifically praising the cleanliness of the new visual design.</p>
        </OutcomeCard>
        <OutcomeCard title="A city-wide design system, mandated by policy">
          <p>I helped write and implement a policy requiring mayoral agencies to adopt the design system, turning a one-site redesign into shared infrastructure now rolling out across multiple agencies.</p>
        </OutcomeCard>
        <OutcomeCard title="The city's first centralized and participatory photo library">
          <p>The imagery guidelines and an internal photo competition produced a shared library that lets every agency show the real diversity of the five boroughs instead of stock imagery.</p>
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
          to="/case-study/nyc-redesign"
          image={imgProjectNycRedesign}
          title="nyc.gov Redesign"
          description="The 2025 nyc.gov redesign is the first major overhaul of the city's website in over a decade, making nyc.gov more trustworthy, accessible, and future-forward."
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

const DESIGN_SYSTEM_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "outcomes", label: "Outcomes" },
  { id: "visual-direction", label: "Process: Visual direction" },
  { id: "brand-foundations", label: "Process: Brand foundations" },
  { id: "final-outcomes", label: "Outcomes" },
];

export function DesignSystemCaseStudy() {
  return (
    <PageShell
      variant="case-study"
      header={<CaseStudyHeader projectName="NYC Design System" sections={DESIGN_SYSTEM_SECTIONS} />}
    >
      <img alt="NYC Digital Design System hero" className="block w-full rounded-[12px]" src={imgHero} fetchPriority="high" />

      <TitleSection />

      <Divider />
      <ProblemSection />

      <Divider />
      <TopOutcomesSection />

      <Divider />
      <ProcessSection />

      <Divider />
      <VisualDirectionSection />

      <Divider />
      <BrandFoundationsSection />

      <Divider />
      <FinalOutcomesSection />

      <Divider />
      <RelatedProjectsSection />
    </PageShell>
  );
}
