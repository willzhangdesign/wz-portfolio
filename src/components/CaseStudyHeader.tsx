import { useState, useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router";
import { Logo } from "./Logo";

interface Section {
  id: string;
  label: string;
}

const PROJECTS = [
  { name: "nyc.gov Redesign", path: "/case-study/nyc-redesign" },
  { name: "Bus pole digital signage", path: "/case-study/rtpi-pole" },
  { name: "Bus shelter digital signage", path: "/case-study/bus-shelter" },
];

const HEADER_H = 52;

export function CaseStudyHeader({
  projectName,
  sections,
}: {
  projectName: string;
  sections: Section[];
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [projectOpen, setProjectOpen] = useState(false);
  const [sectionOpen, setSectionOpen] = useState(false);

  const projectRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdowns on outside click / Escape
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (projectRef.current && !projectRef.current.contains(e.target as Node))
        setProjectOpen(false);
      if (sectionRef.current && !sectionRef.current.contains(e.target as Node))
        setSectionOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setProjectOpen(false);
        setSectionOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Section tracking — listens to the card's scroll event (window doesn't scroll)
  useEffect(() => {
    const card = headerRef.current?.closest(".page-shell-body");
    if (!card) return;

    // Threshold: section becomes active when its top is within OFFSET below the
    // card's top edge (which sits at viewport y=24). HEADER_H (52) + 28 buffer.
    const OFFSET = HEADER_H + 28;
    function onScroll() {
      if (!card) return;
      const cardTop = card.getBoundingClientRect().top;
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top - cardTop <= OFFSET)
          current = s.id;
      }
      setActiveSection(current);
    }
    card.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      card.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  const currentLabel =
    sections.find((s) => s.id === activeSection)?.label ?? "";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-white border-b border-black self-stretch"
      style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 16, lineHeight: 1.2 }}
    >
      <div className="flex items-center justify-between h-[52px] px-5">
        {/* Project dropdown */}
        <div ref={projectRef} className="relative flex-1 min-w-0">
          <button
            onClick={() => {
              setProjectOpen((v) => !v);
              setSectionOpen(false);
            }}
            className="flex items-center gap-1.5 py-1.5 px-2 -ml-2 rounded-md hover:bg-black/[0.04] transition-colors cursor-pointer max-w-full"
          >
            <span className="sm:hidden font-bold text-black shrink-0">
              Project
            </span>
            <span className="hidden sm:inline text-[#888] shrink-0">
              Project:
            </span>
            <span className="hidden sm:inline font-bold text-black truncate">
              {projectName}
            </span>
            <Chevron open={projectOpen} />
          </button>

          {projectOpen && (
            <DropdownMenu>
              {PROJECTS.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  viewTransition
                  onClick={() => setProjectOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-white no-underline transition-colors hover:bg-white/10 ${
                    p.name === projectName ? "font-bold" : ""
                  }`}
                >
                  {p.name === projectName && (
                    <span className="shrink-0">→</span>
                  )}
                  <span>{p.name}</span>
                </Link>
              ))}
            </DropdownMenu>
          )}
        </div>

        {/* Logo */}
        <Link
          to="/"
          viewTransition
          className="shrink-0 mx-4"
          aria-label="Back to homepage"
        >
          <Logo height="clamp(32px, 4vw, 40px)" />
        </Link>

        {/* Section dropdown */}
        <div
          ref={sectionRef}
          className="relative flex-1 min-w-0 flex justify-end"
        >
          <button
            onClick={() => {
              setSectionOpen((v) => !v);
              setProjectOpen(false);
            }}
            className="flex items-center gap-1.5 py-1.5 px-2 -mr-2 rounded-md hover:bg-black/[0.04] transition-colors cursor-pointer max-w-full"
          >
            <span className="sm:hidden font-bold text-black shrink-0">
              Section
            </span>
            <span className="hidden sm:inline text-[#888] shrink-0">
              Section:
            </span>
            <span className="hidden sm:inline font-bold text-black truncate">
              {currentLabel}
            </span>
            <Chevron open={sectionOpen} />
          </button>

          {sectionOpen && (
            <DropdownMenu align="right">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSectionOpen(false);
                    document
                      .getElementById(s.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`w-full text-left flex items-center gap-2 px-4 py-2.5 text-white transition-colors hover:bg-white/10 cursor-pointer ${
                    s.id === activeSection ? "font-bold" : ""
                  }`}
                >
                  {s.id === activeSection && (
                    <span className="shrink-0">→</span>
                  )}
                  <span>{s.label}</span>
                </button>
              ))}
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}

function DropdownMenu({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`absolute top-full ${
        align === "right" ? "right-0" : "left-0"
      } mt-1 bg-[#1a1a1a] rounded-[8px] py-2 min-w-[240px] shadow-[0_8px_32px_rgba(0,0,0,0.24)] z-50`}
    >
      {children}
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
