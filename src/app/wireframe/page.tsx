/* ─────────────────────────────────────────────────────────────────────────────
   FISHBONE CREATIVE SOLUTIONS — UX WIREFRAME BLUEPRINT
   Mobile-first structural layout reference document
   ───────────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Globe,
  Share2,
  Palette,
  Bot,
  Zap,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";

/* ─── Shared wireframe primitives ─── */

function WireframeBox({
  label,
  className = "",
  children,
  height,
}: {
  label?: string;
  className?: string;
  children?: React.ReactNode;
  height?: string;
}) {
  return (
    <div
      className={`border-2 border-dashed border-neutral-400 bg-neutral-100 flex flex-col items-center justify-center relative ${height ?? ""} ${className}`}
    >
      {label && (
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest px-2 text-center">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

function Annotation({
  children,
  side = "right",
}: {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
}) {
  const sideClass =
    side === "left"
      ? "right-full mr-2"
      : side === "top"
      ? "bottom-full mb-2 left-0"
      : side === "bottom"
      ? "top-full mt-2 left-0"
      : "left-full ml-2";
  return (
    <span
      className={`absolute ${sideClass} text-[10px] font-mono text-amber-700 bg-amber-50 border border-amber-300 rounded px-1.5 py-0.5 whitespace-nowrap z-10 leading-tight`}
    >
      {children}
    </span>
  );
}

function SectionLabel({ number, name }: { number: string; name: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-7 h-7 rounded-full bg-neutral-800 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
        {number}
      </span>
      <span className="text-sm font-mono font-semibold text-neutral-700 uppercase tracking-wider">
        {name}
      </span>
      <div className="flex-1 border-t border-dashed border-neutral-400" />
    </div>
  );
}

function LayoutBadge({ label }: { label: string }) {
  return (
    <span className="inline-block text-[10px] font-mono bg-neutral-800 text-white px-2 py-0.5 rounded-full mr-1.5">
      {label}
    </span>
  );
}

function PlaceholderText({ lines = 2, short = false }: { lines?: number; short?: boolean }) {
  const widths = short
    ? ["w-24", "w-32", "w-20", "w-28"]
    : ["w-full", "w-5/6", "w-full", "w-4/5", "w-full", "w-3/4"];
  return (
    <div className="space-y-1.5 w-full">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`h-2.5 rounded bg-neutral-300 ${widths[i % widths.length]}`} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  MAIN WIREFRAME PAGE                                                        */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function WireframePage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-mono">

      {/* ── Document header ── */}
      <div className="bg-neutral-900 text-white px-4 py-3 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest">UX Wireframe Blueprint</p>
            <h1 className="text-sm font-bold tracking-tight">Fishbone Creative Solutions — Website v1</h1>
          </div>
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span className="flex items-center gap-1"><Smartphone size={12} /> Mobile-first</span>
            <span className="hidden sm:flex items-center gap-1"><Monitor size={12} /> Responsive</span>
            <Link href="/" className="text-amber-400 hover:text-amber-300 underline">← Back</Link>
          </div>
        </div>
      </div>

      {/* ── Legend ── */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px] font-mono text-neutral-600">
          <span className="font-semibold text-neutral-800">LEGEND:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-3 border-2 border-dashed border-neutral-400 bg-neutral-100 inline-block" />
            Content block
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-3 border-2 border-dashed border-neutral-600 bg-neutral-200 inline-block" />
            Interactive element
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-3 bg-amber-100 border border-amber-300 inline-block" />
            Annotation note
          </span>
          <span className="flex items-center gap-1.5">
            <LayoutBadge label="MOBILE" />
            <LayoutBadge label="DESKTOP" />
            Layout variant
          </span>
        </div>
      </div>

      {/* ── Wireframe canvas ── */}
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

        {/* ════════════════════════════════════════
            SECTION 1 — HEADER / NAVIGATION
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="01" name="Header / Navigation" />
          <div className="space-y-3">

            {/* Mobile header */}
            <div>
              <p className="text-[11px] text-neutral-500 mb-1.5">
                <LayoutBadge label="MOBILE" /> 375px — sticky, backdrop blur
              </p>
              <div className="border-2 border-dashed border-neutral-500 bg-white p-3 flex items-center justify-between relative">
                <Annotation side="top">z-index: 50 / position: sticky top-0</Annotation>
                <WireframeBox label="[LOGO]" className="w-32 h-10" />
                <WireframeBox className="w-10 h-10" label="">
                  <Menu size={18} className="text-neutral-500" />
                  <span className="text-[9px] text-neutral-400 mt-0.5">HAMBURGER</span>
                </WireframeBox>
              </div>
            </div>

            {/* Mobile nav open state */}
            <div>
              <p className="text-[11px] text-neutral-500 mb-1.5">
                <LayoutBadge label="MOBILE" /> Nav drawer — open state (full width overlay)
              </p>
              <div className="border-2 border-dashed border-neutral-500 bg-white p-3 relative">
                <Annotation>animated slide-down / fade</Annotation>
                <div className="flex justify-end mb-3">
                  <WireframeBox className="w-10 h-10">
                    <X size={14} className="text-neutral-500" />
                    <span className="text-[9px] text-neutral-400">CLOSE</span>
                  </WireframeBox>
                </div>
                <div className="space-y-2">
                  {["Home", "Services", "About", "Portfolio", "Contact"].map((item) => (
                    <WireframeBox key={item} className="w-full h-11">
                      <span className="text-sm font-semibold text-neutral-600">{item}</span>
                    </WireframeBox>
                  ))}
                  <WireframeBox className="w-full h-11 border-solid bg-neutral-800">
                    <span className="text-sm font-semibold text-neutral-300">Get a Free Quote — CTA</span>
                  </WireframeBox>
                </div>
              </div>
            </div>

            {/* Desktop header */}
            <div>
              <p className="text-[11px] text-neutral-500 mb-1.5">
                <LayoutBadge label="DESKTOP" /> 1280px — inline nav, right-aligned CTA
              </p>
              <div className="border-2 border-dashed border-neutral-500 bg-white p-3 flex items-center justify-between gap-4 relative">
                <WireframeBox label="[LOGO HORIZONTAL]" className="w-44 h-10 shrink-0" />
                <div className="flex items-center gap-4 flex-1 justify-center">
                  {["Services", "About", "Portfolio", "Process", "Contact"].map((item) => (
                    <WireframeBox key={item} className="px-3 h-8">
                      <span className="text-xs text-neutral-600">{item}</span>
                    </WireframeBox>
                  ))}
                </div>
                <WireframeBox className="w-36 h-9 border-solid bg-neutral-800 shrink-0">
                  <span className="text-xs text-neutral-300">Get Free Quote</span>
                </WireframeBox>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 2 — HERO
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="02" name="Hero Section" />
          <div className="space-y-3">

            {/* Mobile Hero */}
            <div>
              <p className="text-[11px] text-neutral-500 mb-1.5">
                <LayoutBadge label="MOBILE" /> 100svh, center-aligned, gradient overlay on background
              </p>
              <div className="border-2 border-dashed border-neutral-500 bg-neutral-200 relative min-h-[500px] flex flex-col items-center justify-center p-6 gap-5">
                <Annotation side="top">100svh / background: brand gradient (dark overlay) + abstract mesh</Annotation>
                <WireframeBox label="[HERO BACKGROUND IMAGE / GRADIENT MESH]" className="absolute inset-0 opacity-30" />
                <div className="relative z-10 w-full space-y-4 text-center">
                  <WireframeBox className="mx-auto w-48 h-8">
                    <span className="text-[10px] text-neutral-500">[ EYEBROW LABEL: Creative Agency ]</span>
                  </WireframeBox>
                  <div className="space-y-2">
                    <div className="h-10 rounded bg-neutral-400 w-full" />
                    <div className="h-10 rounded bg-neutral-400 w-5/6 mx-auto" />
                    <div className="h-8 rounded bg-neutral-300 w-2/3 mx-auto" />
                  </div>
                  <p className="text-xs text-neutral-500 italic">
                    &quot;We Build Digital Experiences That Drive Real Results&quot;
                    <br />
                    <span className="text-[10px]">Headline copy — display font, ~52–64px desktop, 36–42px mobile</span>
                  </p>
                  <div className="space-y-2 w-full">
                    <div className="h-3 rounded bg-neutral-300 w-full" />
                    <div className="h-3 rounded bg-neutral-300 w-4/5 mx-auto" />
                  </div>
                  <p className="text-[10px] text-neutral-500 italic">
                    Subheadline: &quot;From stunning websites to smart automation — we handle the tech so you can focus on growth.&quot;
                  </p>
                  <div className="flex flex-col gap-2 w-full">
                    <WireframeBox className="w-full h-12 border-solid bg-neutral-800">
                      <span className="text-xs text-neutral-300 flex items-center gap-1"><ArrowRight size={12} /> Start Your Project — PRIMARY CTA</span>
                    </WireframeBox>
                    <WireframeBox className="w-full h-12">
                      <span className="text-xs text-neutral-600">View Our Work — SECONDARY CTA</span>
                    </WireframeBox>
                  </div>
                </div>
                <div className="relative z-10 w-full">
                  <p className="text-[10px] text-neutral-500 text-center mb-2">[ SCROLL INDICATOR / ANIMATED ARROW ]</p>
                  <div className="flex justify-center">
                    <WireframeBox className="w-8 h-8 rounded-full">
                      <ChevronRight size={12} className="rotate-90 text-neutral-500" />
                    </WireframeBox>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Hero */}
            <div>
              <p className="text-[11px] text-neutral-500 mb-1.5">
                <LayoutBadge label="DESKTOP" /> Split layout: copy left (50%), visual right (50%)
              </p>
              <div className="border-2 border-dashed border-neutral-500 bg-neutral-200 relative h-72 flex">
                <div className="w-1/2 p-5 flex flex-col justify-center gap-3 border-r border-dashed border-neutral-400">
                  <WireframeBox className="w-36 h-6"><span className="text-[9px]">[ EYEBROW LABEL ]</span></WireframeBox>
                  <div className="space-y-1.5">
                    <div className="h-7 rounded bg-neutral-400 w-full" />
                    <div className="h-7 rounded bg-neutral-400 w-5/6" />
                  </div>
                  <PlaceholderText lines={3} />
                  <div className="flex gap-2">
                    <WireframeBox className="flex-1 h-10 border-solid bg-neutral-800">
                      <span className="text-[10px] text-neutral-300">Start Your Project</span>
                    </WireframeBox>
                    <WireframeBox className="flex-1 h-10">
                      <span className="text-[10px] text-neutral-600">View Our Work</span>
                    </WireframeBox>
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    {["50+ Projects", "98% Satisfaction", "5-Star Rated"].map((stat) => (
                      <div key={stat} className="text-center">
                        <div className="h-4 w-10 bg-neutral-400 rounded mb-1" />
                        <span className="text-[9px] text-neutral-500">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/2 relative">
                  <WireframeBox label="[HERO VISUAL: Abstract 3D shape / logo animation / device mockup]" className="absolute inset-0" />
                  <Annotation side="left">animated / parallax on scroll</Annotation>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 3 — SERVICES
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="03" name="Services" />
          <div className="space-y-3">
            <div className="border-2 border-dashed border-neutral-500 p-4 bg-white">
              <div className="text-center mb-5 space-y-2">
                <WireframeBox className="mx-auto w-36 h-7"><span className="text-[10px]">[ SECTION LABEL ]</span></WireframeBox>
                <div className="h-8 bg-neutral-300 rounded w-3/4 mx-auto" />
                <p className="text-[10px] text-neutral-500 italic">&quot;What We Do&quot; — Section headline, centered</p>
                <PlaceholderText lines={2} />
                <p className="text-[10px] text-neutral-400 italic">Subheadline: &quot;End-to-end digital services for ambitious brands&quot;</p>
              </div>

              <p className="text-[11px] text-neutral-500 mb-2">
                <LayoutBadge label="MOBILE" /> 1 column stack &nbsp;
                <LayoutBadge label="TABLET" /> 2 columns &nbsp;
                <LayoutBadge label="DESKTOP" /> 3 cols top row + 2 cols bottom row (centered)
              </p>

              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { icon: <Globe size={20} />, title: "Website Development", desc: "Custom, fast, SEO-optimised websites built to convert visitors into clients." },
                  { icon: <Share2 size={20} />, title: "Social Media Management", desc: "Strategy, content creation, scheduling, and community management across all major platforms." },
                  { icon: <Palette size={20} />, title: "Graphic Design", desc: "Brand identities, marketing collateral, and visuals that stop the scroll." },
                  { icon: <Bot size={20} />, title: "AI Integration", desc: "Embed AI tools into your business — chatbots, content generation, data analysis." },
                  { icon: <Zap size={20} />, title: "Workflow Automation", desc: "Connect your tools and eliminate repetitive tasks with smart automation pipelines." },
                ].map((service) => (
                  <div key={service.title} className="border-2 border-dashed border-neutral-400 bg-neutral-50 p-4 space-y-3 relative">
                    <WireframeBox className="w-12 h-12 rounded-xl">
                      <span className="text-neutral-400">{service.icon}</span>
                      <span className="text-[8px] text-neutral-400 mt-0.5">[ICON]</span>
                    </WireframeBox>
                    <div>
                      <div className="h-4 bg-neutral-400 rounded w-3/4 mb-2" />
                      <p className="text-[10px] font-semibold text-neutral-600 italic">{service.title}</p>
                    </div>
                    <PlaceholderText lines={3} />
                    <p className="text-[9px] text-neutral-400 italic leading-relaxed">{service.desc}</p>
                    <WireframeBox className="w-full h-8 mt-1">
                      <span className="text-[10px] text-neutral-500 flex items-center gap-1">Learn More <ChevronRight size={10} /></span>
                    </WireframeBox>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 4 — ABOUT
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="04" name="About Us" />
          <div className="space-y-3">

            {/* Mobile About */}
            <div>
              <p className="text-[11px] text-neutral-500 mb-1.5">
                <LayoutBadge label="MOBILE" /> Stacked: image top, content below
              </p>
              <div className="border-2 border-dashed border-neutral-500 bg-white p-4 space-y-4 relative">
                <WireframeBox label="[ABOUT IMAGE: Team / Office / Brand visual]" className="w-full h-44" />
                <Annotation side="top">aspect-ratio: 16/9 or 4/3, rounded corners</Annotation>
                <div className="space-y-3">
                  <WireframeBox className="w-28 h-6"><span className="text-[9px]">[ SECTION LABEL ]</span></WireframeBox>
                  <div className="h-7 bg-neutral-300 rounded w-full" />
                  <div className="h-7 bg-neutral-300 rounded w-4/5" />
                  <p className="text-[10px] text-neutral-500 italic">&quot;The Creative Studio Built for Modern Business&quot;</p>
                  <PlaceholderText lines={4} />
                  <p className="text-[9px] text-neutral-400 italic leading-relaxed">
                    &quot;We&apos;re a passionate team of designers, developers, and strategists who believe great digital experiences change businesses. Founded on creativity and powered by technology, Fishbone Creative Solutions is your partner from concept to launch — and beyond.&quot;
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {[
                      { value: "50+", label: "Projects Delivered" },
                      { value: "98%", label: "Client Satisfaction" },
                      { value: "5★", label: "Average Rating" },
                      { value: "3+", label: "Years Experience" },
                    ].map((stat) => (
                      <WireframeBox key={stat.label} className="py-3 px-2">
                        <span className="text-base font-bold text-neutral-500">{stat.value}</span>
                        <span className="text-[9px] text-neutral-400 mt-0.5 text-center">{stat.label}</span>
                      </WireframeBox>
                    ))}
                  </div>
                  <WireframeBox className="w-full h-10 border-solid bg-neutral-800">
                    <span className="text-xs text-neutral-300">Meet the Team — CTA</span>
                  </WireframeBox>
                </div>
              </div>
            </div>

            {/* Desktop About */}
            <div>
              <p className="text-[11px] text-neutral-500 mb-1.5">
                <LayoutBadge label="DESKTOP" /> Side-by-side: content left (55%), image right (45%)
              </p>
              <div className="border-2 border-dashed border-neutral-500 bg-white flex min-h-[260px]">
                <div className="w-[55%] p-5 flex flex-col justify-center gap-3 border-r border-dashed border-neutral-400">
                  <WireframeBox className="w-28 h-6"><span className="text-[9px]">[ SECTION LABEL ]</span></WireframeBox>
                  <div className="space-y-1.5">
                    <div className="h-6 bg-neutral-300 rounded w-full" />
                    <div className="h-6 bg-neutral-300 rounded w-4/5" />
                  </div>
                  <PlaceholderText lines={3} />
                  <div className="grid grid-cols-2 gap-2">
                    {["50+ Projects", "98% Satisfaction", "5★ Rated", "3+ Years"].map((s) => (
                      <WireframeBox key={s} className="py-2"><span className="text-[10px] text-neutral-500">{s}</span></WireframeBox>
                    ))}
                  </div>
                  <WireframeBox className="w-40 h-9 border-solid bg-neutral-800">
                    <span className="text-[10px] text-neutral-300">Meet the Team</span>
                  </WireframeBox>
                </div>
                <div className="w-[45%] relative p-3">
                  <WireframeBox label="[ABOUT IMAGE / TEAM PHOTO]" className="w-full h-full min-h-[220px]" />
                  <Annotation side="left">position: relative, rounded-2xl, drop shadow</Annotation>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 5 — PORTFOLIO
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="05" name="Portfolio / Case Studies" />
          <div className="border-2 border-dashed border-neutral-500 bg-white p-4 space-y-4">
            <div className="text-center space-y-2">
              <WireframeBox className="mx-auto w-32 h-6"><span className="text-[9px]">[ SECTION LABEL ]</span></WireframeBox>
              <div className="h-7 bg-neutral-300 rounded w-2/3 mx-auto" />
              <p className="text-[10px] text-neutral-500 italic">&quot;Our Work&quot; — Section headline</p>
              <PlaceholderText lines={2} />
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 flex-wrap">
              {["All", "Web Dev", "Design", "Social", "AI"].map((tab, i) => (
                <WireframeBox key={tab} className={`px-3 h-8 ${i === 0 ? "border-solid bg-neutral-800" : ""}`}>
                  <span className={`text-xs ${i === 0 ? "text-neutral-300" : "text-neutral-600"}`}>{tab}</span>
                </WireframeBox>
              ))}
            </div>

            <p className="text-[11px] text-neutral-500">
              <LayoutBadge label="MOBILE" /> 1 column &nbsp;
              <LayoutBadge label="TABLET" /> 2 columns &nbsp;
              <LayoutBadge label="DESKTOP" /> 3 columns — masonry or uniform grid
            </p>

            {/* CJC Music featured case study */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

              {/* Featured card: CJC Music */}
              <div className="sm:col-span-2 lg:col-span-2 border-2 border-dashed border-neutral-500 bg-neutral-50 overflow-hidden relative">
                <WireframeBox label="[CJC MUSIC HERO IMAGE]" className="w-full h-40" />
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <WireframeBox label="[CJC LOGO]" className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="h-3 bg-neutral-400 rounded w-24 mb-1" />
                      <p className="text-[9px] text-neutral-500 italic font-bold">CJC Music</p>
                    </div>
                    <WireframeBox className="ml-auto px-2 h-6">
                      <span className="text-[9px] text-neutral-500">FEATURED</span>
                    </WireframeBox>
                  </div>
                  <PlaceholderText lines={2} />
                  <p className="text-[9px] text-neutral-400 italic">
                    Case study: Full brand identity, website redesign, and social media launch for indie musician CJC Music. Resulted in 3x stream growth in 60 days.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {["Web Dev", "Graphic Design", "Social Media"].map((tag) => (
                      <WireframeBox key={tag} className="px-2 h-6">
                        <span className="text-[9px] text-neutral-500">{tag}</span>
                      </WireframeBox>
                    ))}
                  </div>
                  <WireframeBox className="w-full h-8 mt-1">
                    <span className="text-[10px] text-neutral-500 flex items-center gap-1">View Case Study <ArrowRight size={10} /></span>
                  </WireframeBox>
                </div>
                <Annotation side="top">FEATURED / col-span-2 on tablet+</Annotation>
              </div>

              {/* Standard portfolio cards */}
              {["Project Alpha — Web Dev", "Brand Redesign — Design"].map((title) => (
                <div key={title} className="border-2 border-dashed border-neutral-400 bg-neutral-50 overflow-hidden">
                  <WireframeBox label="[PROJECT THUMBNAIL]" className="w-full h-32" />
                  <div className="p-3 space-y-2">
                    <div className="h-3 bg-neutral-400 rounded w-3/4" />
                    <p className="text-[9px] text-neutral-500 italic">{title}</p>
                    <PlaceholderText lines={2} />
                    <WireframeBox className="w-full h-7">
                      <span className="text-[9px] text-neutral-500 flex items-center gap-1">View Project <ArrowRight size={9} /></span>
                    </WireframeBox>
                  </div>
                </div>
              ))}
            </div>

            <WireframeBox className="w-full h-10 mt-2">
              <span className="text-xs text-neutral-600">View All Work — LOAD MORE / LINK</span>
            </WireframeBox>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 6 — PROCESS
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="06" name="Our Process" />
          <div className="border-2 border-dashed border-neutral-500 bg-white p-4 space-y-4">
            <div className="text-center space-y-2">
              <WireframeBox className="mx-auto w-32 h-6"><span className="text-[9px]">[ SECTION LABEL ]</span></WireframeBox>
              <div className="h-7 bg-neutral-300 rounded w-2/3 mx-auto" />
              <p className="text-[10px] text-neutral-500 italic">&quot;How We Work&quot; — Section headline</p>
            </div>

            <p className="text-[11px] text-neutral-500">
              <LayoutBadge label="MOBILE" /> Vertical numbered list &nbsp;
              <LayoutBadge label="DESKTOP" /> Horizontal 4-step flow with connector line
            </p>

            {/* Mobile: vertical list */}
            <div className="space-y-3 lg:hidden">
              {[
                { step: "01", title: "Discovery", icon: <Star size={16} />, desc: "We deep-dive into your brand, goals, audience, and competitive landscape to build a clear strategic brief." },
                { step: "02", title: "Design", icon: <Palette size={16} />, desc: "Wireframes, moodboards, and hi-fi mockups — all refined with your feedback until it's exactly right." },
                { step: "03", title: "Develop", icon: <Globe size={16} />, desc: "Clean, performant code. We build with speed and scalability in mind using modern tech stacks." },
                { step: "04", title: "Deliver", icon: <CheckCircle size={16} />, desc: "Launch, test, and hand off — with full documentation and ongoing support options." },
              ].map((step) => (
                <div key={step.step} className="flex gap-3 border-2 border-dashed border-neutral-400 bg-neutral-50 p-3">
                  <WireframeBox className="w-10 h-10 shrink-0 rounded-full border-solid bg-neutral-800">
                    <span className="text-xs font-bold text-neutral-300">{step.step}</span>
                  </WireframeBox>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-neutral-400">{step.icon}</span>
                      <div className="h-3 bg-neutral-400 rounded w-20" />
                      <p className="text-[10px] font-bold text-neutral-600 italic ml-1">{step.title}</p>
                    </div>
                    <PlaceholderText lines={2} />
                    <p className="text-[9px] text-neutral-400 italic">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: horizontal flow */}
            <div className="hidden lg:flex gap-0 relative">
              <div className="absolute top-[30px] left-0 right-0 h-0.5 border-t-2 border-dashed border-neutral-400 z-0" />
              {[
                { step: "01", title: "Discovery", icon: <Star size={16} />, desc: "Strategic brief, brand audit, and goal setting." },
                { step: "02", title: "Design", icon: <Palette size={16} />, desc: "Wireframes, mockups, and visual direction." },
                { step: "03", title: "Develop", icon: <Globe size={16} />, desc: "Performant, accessible, production-ready build." },
                { step: "04", title: "Deliver", icon: <CheckCircle size={16} />, desc: "Launch, QA, documentation, and support." },
              ].map((step) => (
                <div key={step.step} className="flex-1 flex flex-col items-center gap-2 px-2 relative z-10">
                  <WireframeBox className="w-14 h-14 rounded-full border-solid bg-neutral-800">
                    <span className="text-sm font-bold text-neutral-300">{step.step}</span>
                    <span className="text-neutral-400 mt-0.5">{step.icon}</span>
                  </WireframeBox>
                  <div className="h-4 bg-neutral-300 rounded w-full mt-1" />
                  <p className="text-[10px] font-bold text-neutral-700 text-center">{step.title}</p>
                  <PlaceholderText lines={2} />
                  <p className="text-[9px] text-neutral-400 italic text-center">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 7 — TESTIMONIALS
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="07" name="Testimonials" />
          <div className="border-2 border-dashed border-neutral-500 bg-white p-4 space-y-4">
            <div className="text-center space-y-2">
              <WireframeBox className="mx-auto w-36 h-6"><span className="text-[9px]">[ SECTION LABEL ]</span></WireframeBox>
              <div className="h-7 bg-neutral-300 rounded w-2/3 mx-auto" />
              <p className="text-[10px] text-neutral-500 italic">&quot;What Our Clients Say&quot; — Section headline</p>
            </div>

            <p className="text-[11px] text-neutral-500">
              <LayoutBadge label="MOBILE" /> Horizontal scroll carousel (1 card visible) &nbsp;
              <LayoutBadge label="DESKTOP" /> 3-column grid
            </p>
            <Annotation side="bottom">optional: auto-scroll carousel with pause-on-hover</Annotation>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { initials: "CJC", name: "CJC Music", role: "Musician & Artist", quote: "Fishbone completely transformed my online presence. My Spotify streams tripled in two months and my website finally looks as professional as my music." },
                { initials: "SB", name: "Sarah B.", role: "Small Business Owner", quote: "The workflow automation they built for us saved 15+ hours a week. I can't imagine running my business without it now." },
                { initials: "MT", name: "Marcus T.", role: "Startup Founder", quote: "From zero to a fully branded, high-converting website in 3 weeks. Insane value, incredible quality." },
              ].map((t) => (
                <div key={t.initials} className="border-2 border-dashed border-neutral-400 bg-neutral-50 p-4 space-y-3 relative">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => <Star key={s} size={12} className="text-neutral-400" />)}
                  </div>
                  <PlaceholderText lines={3} />
                  <p className="text-[9px] text-neutral-500 italic leading-relaxed">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-2 pt-1 border-t border-dashed border-neutral-300">
                    <WireframeBox className="w-8 h-8 rounded-full shrink-0">
                      <span className="text-[8px] font-bold text-neutral-500">{t.initials}</span>
                    </WireframeBox>
                    <div>
                      <div className="h-2.5 bg-neutral-400 rounded w-20 mb-1" />
                      <p className="text-[8px] text-neutral-500 italic">{t.name} — {t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-1.5 sm:hidden">
              {[0,1,2].map((i) => (
                <WireframeBox key={i} className={`rounded-full p-0 ${i === 0 ? "w-5 h-2" : "w-2 h-2"}`} />
              ))}
              <Annotation side="bottom">carousel pagination dots — mobile only</Annotation>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 8 — CTA BANNER
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="08" name="CTA Banner" />
          <div className="border-2 border-dashed border-neutral-500 bg-neutral-800 p-6 text-center space-y-4 relative">
            <Annotation side="top">Full-width band — brand gradient background, white text</Annotation>
            <WireframeBox label="[BACKGROUND PATTERN / GRADIENT OVERLAY]" className="absolute inset-0 opacity-20" />
            <div className="relative z-10 space-y-4">
              <div className="space-y-1">
                <div className="h-8 bg-neutral-600 rounded w-3/4 mx-auto" />
                <div className="h-6 bg-neutral-700 rounded w-1/2 mx-auto" />
              </div>
              <p className="text-[10px] text-neutral-400 italic">
                &quot;Ready to Take Your Brand to the Next Level?&quot;
                <br />
                <span className="text-[9px]">Subtext: &quot;Book a free strategy session and let&apos;s talk about your vision.&quot;</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                <WireframeBox className="w-full sm:w-48 h-12 border-solid border-white/40 bg-white/20">
                  <span className="text-xs text-neutral-300 flex items-center gap-1"><ArrowRight size={12} /> Book Free Strategy Call</span>
                </WireframeBox>
                <WireframeBox className="w-full sm:w-40 h-12 border-white/30">
                  <span className="text-xs text-neutral-400">See Our Pricing</span>
                </WireframeBox>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 9 — CONTACT
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="09" name="Contact" />
          <div className="space-y-3">
            <p className="text-[11px] text-neutral-500">
              <LayoutBadge label="MOBILE" /> Stacked: info above, form below &nbsp;
              <LayoutBadge label="DESKTOP" /> Side-by-side: info left (40%), form right (60%)
            </p>
            <div className="border-2 border-dashed border-neutral-500 bg-white p-4 flex flex-col lg:flex-row gap-4">

              {/* Contact Info */}
              <div className="w-full lg:w-2/5 space-y-4 border-b-2 lg:border-b-0 lg:border-r-2 border-dashed border-neutral-300 pb-4 lg:pb-0 lg:pr-4">
                <div className="space-y-2">
                  <WireframeBox className="w-32 h-6"><span className="text-[9px]">[ SECTION LABEL ]</span></WireframeBox>
                  <div className="h-6 bg-neutral-300 rounded w-4/5" />
                  <p className="text-[10px] text-neutral-500 italic">&quot;Get in Touch&quot; — Section headline</p>
                  <PlaceholderText lines={2} />
                </div>
                <div className="space-y-2">
                  {[
                    { icon: <Mail size={14} />, label: "[EMAIL ADDRESS]" },
                    { icon: <Phone size={14} />, label: "[PHONE NUMBER]" },
                    { icon: <MapPin size={14} />, label: "[LOCATION / REMOTE WORLDWIDE]" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 border-2 border-dashed border-neutral-300 p-2 bg-neutral-50">
                      <WireframeBox className="w-8 h-8 rounded shrink-0">
                        <span className="text-neutral-400">{item.icon}</span>
                      </WireframeBox>
                      <span className="text-[10px] text-neutral-500 italic">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-semibold text-neutral-600">[ SOCIAL LINKS ROW ]</p>
                  <div className="flex gap-2">
                    {["IG", "FB", "LI", "TW", "YT"].map((s) => (
                      <WireframeBox key={s} className="w-8 h-8 rounded-full">
                        <span className="text-[9px] font-bold text-neutral-500">{s}</span>
                      </WireframeBox>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full lg:w-3/5 space-y-3">
                <p className="text-[10px] font-semibold text-neutral-600">[ CONTACT FORM ]</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["Full Name *", "Email Address *", "Phone (optional)", "Company (optional)"].map((field) => (
                    <div key={field} className="space-y-1">
                      <div className="h-2 bg-neutral-300 rounded w-28" />
                      <WireframeBox className="w-full h-10">
                        <span className="text-[9px] text-neutral-400 italic">{field}</span>
                      </WireframeBox>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="h-2 bg-neutral-300 rounded w-32" />
                  <div className="flex gap-2 flex-wrap">
                    {["Website Dev", "Social Media", "Graphic Design", "AI Integration", "Automation", "Other"].map((s) => (
                      <WireframeBox key={s} className="px-2 h-7">
                        <span className="text-[9px] text-neutral-500">{s}</span>
                      </WireframeBox>
                    ))}
                  </div>
                  <p className="text-[9px] text-neutral-400 italic">Service interest — multi-select checkboxes</p>
                </div>
                <div className="space-y-1">
                  <div className="h-2 bg-neutral-300 rounded w-20" />
                  <WireframeBox className="w-full h-28">
                    <span className="text-[9px] text-neutral-400 italic">Message / Project Details *</span>
                  </WireframeBox>
                </div>
                <WireframeBox className="w-full h-11 border-solid bg-neutral-800">
                  <span className="text-xs text-neutral-300 flex items-center gap-1"><ArrowRight size={12} /> Send Message — SUBMIT BUTTON</span>
                </WireframeBox>
                <p className="text-[9px] text-neutral-400 italic text-center">
                  [ Privacy notice / reCAPTCHA badge ]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SECTION 10 — FOOTER
            ════════════════════════════════════════ */}
        <section>
          <SectionLabel number="10" name="Footer" />
          <div className="border-2 border-dashed border-neutral-500 bg-neutral-900 p-4 space-y-4">

            <p className="text-[11px] text-neutral-400 mb-2">
              <LayoutBadge label="MOBILE" /> Stacked columns &nbsp;
              <LayoutBadge label="DESKTOP" /> 4-column grid: brand col + 3 link columns
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Brand col */}
              <div className="space-y-3">
                <WireframeBox label="[LOGO: White version]" className="w-32 h-9 border-neutral-700" />
                <PlaceholderText lines={3} />
                <p className="text-[9px] text-neutral-500 italic">Tagline / brand description — 2-3 sentences</p>
                <div className="flex gap-2">
                  {["IG", "FB", "LI", "TW"].map((s) => (
                    <WireframeBox key={s} className="w-7 h-7 rounded-full border-neutral-700">
                      <span className="text-[8px] font-bold text-neutral-400">{s}</span>
                    </WireframeBox>
                  ))}
                </div>
              </div>

              {/* Services col */}
              <div className="space-y-2">
                <div className="h-3 bg-neutral-700 rounded w-20 mb-3" />
                <p className="text-[9px] text-neutral-500 font-bold mb-2">SERVICES</p>
                {["Website Development", "Social Media", "Graphic Design", "AI Integration", "Automation"].map((link) => (
                  <WireframeBox key={link} className="w-full h-7 border-neutral-700 bg-neutral-800">
                    <span className="text-[9px] text-neutral-400">{link}</span>
                  </WireframeBox>
                ))}
              </div>

              {/* Company col */}
              <div className="space-y-2">
                <div className="h-3 bg-neutral-700 rounded w-20 mb-3" />
                <p className="text-[9px] text-neutral-500 font-bold mb-2">COMPANY</p>
                {["About Us", "Portfolio", "Process", "Blog", "Careers", "Contact"].map((link) => (
                  <WireframeBox key={link} className="w-full h-7 border-neutral-700 bg-neutral-800">
                    <span className="text-[9px] text-neutral-400">{link}</span>
                  </WireframeBox>
                ))}
              </div>

              {/* Newsletter col */}
              <div className="space-y-3">
                <div className="h-3 bg-neutral-700 rounded w-28 mb-1" />
                <p className="text-[9px] text-neutral-500 font-bold">NEWSLETTER</p>
                <PlaceholderText lines={2} />
                <p className="text-[9px] text-neutral-500 italic">Newsletter signup — &quot;Get tips, trends, and agency news&quot;</p>
                <div className="flex gap-1">
                  <WireframeBox className="flex-1 h-9 border-neutral-700 bg-neutral-800">
                    <span className="text-[9px] text-neutral-500 italic">Email address</span>
                  </WireframeBox>
                  <WireframeBox className="w-16 h-9 border-solid bg-neutral-700">
                    <span className="text-[9px] text-neutral-400">Subscribe</span>
                  </WireframeBox>
                </div>
              </div>
            </div>

            {/* Footer bottom bar */}
            <div className="border-t-2 border-dashed border-neutral-700 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2">
              <WireframeBox className="h-6 px-3 border-neutral-700">
                <span className="text-[9px] text-neutral-500">© 2025 Fishbone Creative Solutions. All rights reserved.</span>
              </WireframeBox>
              <div className="flex gap-2">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                  <WireframeBox key={link} className="h-6 px-2 border-neutral-700">
                    <span className="text-[9px] text-neutral-500">{link}</span>
                  </WireframeBox>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── End of wireframe note ── */}
        <div className="border-2 border-dashed border-amber-400 bg-amber-50 p-4 text-center space-y-1">
          <p className="text-xs font-mono font-bold text-amber-800">END OF WIREFRAME DOCUMENT</p>
          <p className="text-[10px] text-amber-700">
            This document represents the structural blueprint for the Fishbone Creative Solutions website.
            All content, imagery, and interactions shown here are placeholders for design and development reference only.
          </p>
          <p className="text-[10px] text-amber-600">
            Next: /v1 — High-fidelity design implementation
          </p>
        </div>

      </div>
    </div>
  );
}
