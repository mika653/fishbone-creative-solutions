"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   FISHBONE CREATIVE SOLUTIONS — V2: Clean & Professional
   Design direction: Minimal, generous whitespace, coral #FF5722 accent only
   ───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Globe,
  Share2,
  Palette,
  Bot,
  Zap,
  Quote,
  MapPin,
  ExternalLink,
  Play,
  Users,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

/* ─────────────────────────────────────────
   TYPES
   ───────────────────────────────────────── */

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  deliverables: string[];
}

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface ProcessPhase {
  number: string;
  title: string;
  description: string;
}

/* ─────────────────────────────────────────
   DATA
   ───────────────────────────────────────── */

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Website Development",
    icon: <Globe size={20} />,
    description:
      "We build fast, scalable websites and web applications using modern frameworks. From marketing sites to complex e-commerce platforms, every build is performance-first, accessibility-compliant, and crafted for conversion.",
    deliverables: ["Custom Next.js / React builds", "CMS integration", "Performance optimization", "Ongoing maintenance"],
  },
  {
    id: 2,
    title: "Social Media Management",
    icon: <Share2 size={20} />,
    description:
      "Strategic social presence built on data, not guesswork. We handle content creation, scheduling, community management, and analytics reporting — so your brand stays consistent and your audience keeps growing.",
    deliverables: ["Content strategy & calendars", "Platform management", "Community engagement", "Monthly analytics reports"],
  },
  {
    id: 3,
    title: "Graphic Design",
    icon: <Palette size={20} />,
    description:
      "Visual identity that communicates before a word is read. From brand systems to individual campaign assets, our design work is purposeful, refined, and built to scale across every touchpoint.",
    deliverables: ["Brand identity systems", "Print & digital collateral", "Social & ad creative", "Packaging design"],
  },
  {
    id: 4,
    title: "AI Integration",
    icon: <Bot size={20} />,
    description:
      "We help businesses embed AI into their products and processes intelligently. Whether it's a customer-facing chatbot, a recommendation engine, or internal tooling, we identify the right use case and build it properly.",
    deliverables: ["AI product strategy", "LLM integration", "Custom AI tooling", "Team training & documentation"],
  },
  {
    id: 5,
    title: "Workflow Automation",
    icon: <Zap size={20} />,
    description:
      "Manual processes are expensive. We audit your workflows, identify automation opportunities, and implement solutions using the right tools — from no-code platforms to custom scripting — saving your team real hours every week.",
    deliverables: ["Process audits", "No-code / low-code automation", "CRM & tool integrations", "Custom scripts & APIs"],
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Fishbone took our outdated website and transformed it into something we're genuinely proud to show clients. The process was smooth, communication was excellent, and the results exceeded what we imagined.",
    author: "Chris Johnson",
    role: "Founder",
    company: "CJC Music",
  },
  {
    id: 2,
    quote:
      "Their social media strategy completely changed how we approach our online presence. Engagement is up, our following has grown steadily, and the content actually reflects our brand voice.",
    author: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Wavefront Studios",
  },
  {
    id: 3,
    quote:
      "The automation work they did for our internal processes saved us roughly 15 hours a week. That ROI paid for the project within the first month. Exceptional work.",
    author: "Daniel Reeves",
    role: "Operations Lead",
    company: "Meridian Co.",
  },
];

const PROCESS_PHASES: ProcessPhase[] = [
  {
    number: "01",
    title: "Discover",
    description: "Deep-dive into your goals, audience, and competitive landscape.",
  },
  {
    number: "02",
    title: "Design",
    description: "Craft solutions grounded in strategy, refined through iteration.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build with precision — performant, accessible, and future-proof.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Launch with confidence and support you through growth.",
  },
];

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ─────────────────────────────────────────
   HOOK: useInView (lightweight scroll observer)
   ───────────────────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─────────────────────────────────────────
   COMPONENT: FadeIn wrapper
   ───────────────────────────────────────── */

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE COMPONENT
   ───────────────────────────────────────── */

export default function V2Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openService, setOpenService] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  /* Scroll handler for header shadow */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Auto-advance testimonials */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleService = useCallback(
    (id: number) => setOpenService((prev) => (prev === id ? null : id)),
    []
  );

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
  };

  const smoothScroll = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  /* ─── RENDER ─── */
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >

      {/* ──────────────────────────────────────────
          HEADER
          ────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 1px 0 0 #E5E5E5" : "none" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex-shrink-0"
            >
              <Image
                src="/images/fishbone-logo-horizontal.png"
                alt="Fishbone Creative Solutions"
                width={200}
                height={50}
                style={{ objectFit: "contain", height: "36px", width: "auto" }}
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => smoothScroll(link.href)}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200 tracking-wide cursor-pointer bg-transparent border-none"
                  style={{ fontFamily: "inherit" }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => smoothScroll("#contact")}
                className="flex items-center gap-1.5 text-sm font-medium cursor-pointer bg-transparent border-none"
                style={{ color: "#FF5722", fontFamily: "inherit" }}
              >
                Let&apos;s Talk
                <ArrowRight size={14} />
              </button>
            </nav>

            {/* Mobile — dot menu */}
            <button
              className="md:hidden flex flex-col items-center justify-center gap-1.5 w-8 h-8 cursor-pointer bg-transparent border-none p-0"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                /* Three horizontal lines → X */
                <>
                  <span
                    className="block w-5 h-px bg-neutral-900 transition-all duration-200"
                    style={{ transform: "rotate(45deg) translate(3px, 3px)" }}
                  />
                  <span
                    className="block w-5 h-px bg-neutral-900 transition-all duration-200 opacity-0"
                  />
                  <span
                    className="block w-5 h-px bg-neutral-900 transition-all duration-200"
                    style={{ transform: "rotate(-45deg) translate(3px, -3px)" }}
                  />
                </>
              ) : (
                <>
                  <span className="block w-5 h-px bg-neutral-900" />
                  <span className="block w-5 h-px bg-neutral-900" />
                  <span className="block w-5 h-px bg-neutral-900" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-neutral-100"
          style={{ maxHeight: menuOpen ? "280px" : "0px" }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => smoothScroll(link.href)}
                className="text-left py-3 text-base text-neutral-700 border-b border-neutral-100 last:border-0 bg-transparent border-none cursor-pointer"
                style={{ fontFamily: "inherit" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => smoothScroll("#contact")}
              className="flex items-center gap-2 py-3 text-base font-medium bg-transparent border-none cursor-pointer"
              style={{ color: "#FF5722", fontFamily: "inherit" }}
            >
              Let&apos;s Talk <ArrowRight size={14} />
            </button>
          </nav>
        </div>
      </header>

      {/* ──────────────────────────────────────────
          HERO
          ────────────────────────────────────────── */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-32 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span
              className="block w-5 h-px"
              style={{ background: "#FF5722" }}
            />
            <span
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: "#FF5722", fontFamily: "var(--font-inter)" }}
            >
              Creative Agency
            </span>
            <span
              className="block w-5 h-px"
              style={{ background: "#FF5722" }}
            />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Where Creativity
            <br />
            Meets Strategy.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-12">
            We help brands grow through thoughtful design, smart technology,
            and strategic digital marketing.
          </p>

          {/* CTA */}
          <button
            onClick={() => smoothScroll("#work")}
            className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm font-medium tracking-wide rounded-full transition-all duration-200 hover:opacity-90 hover:gap-4 cursor-pointer border-none"
            style={{ background: "#FF5722", fontFamily: "inherit" }}
          >
            Explore Our Work
            <ArrowRight size={16} />
          </button>

          {/* Separator */}
          <div className="mt-20 pt-10 border-t border-neutral-200">
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {[
                { stat: "50+", label: "Projects delivered" },
                { stat: "3+", label: "Years of expertise" },
                { stat: "100%", label: "Client retention" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div
                    className="text-2xl font-bold text-neutral-900 mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-xs text-neutral-400 tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SERVICES
          ────────────────────────────────────────── */}
      <section id="services" className="py-24 md:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <FadeIn className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="block w-8 h-0.5 rounded-full"
                style={{ background: "#FF5722" }}
              />
              <span
                className="text-xs tracking-[0.2em] uppercase font-medium text-neutral-400"
              >
                Our Expertise
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              What We Do
            </h2>
          </FadeIn>

          {/* Services list */}
          <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {SERVICES.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 60}>
                <div>
                  {/* Desktop: two-column. Mobile: stacked accordion */}
                  <button
                    className="w-full text-left cursor-pointer bg-transparent border-none py-0"
                    onClick={() => toggleService(service.id)}
                    aria-expanded={openService === service.id}
                    style={{ fontFamily: "inherit" }}
                  >
                    {/* Always-visible row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 py-6 md:py-8 group">
                      {/* Left: number + title */}
                      <div className="flex items-center gap-5">
                        <span className="text-xs text-neutral-300 font-mono select-none tabular-nums w-5 shrink-0">
                          0{service.id}
                        </span>
                        <div
                          className="flex items-center gap-3 transition-colors duration-200 group-hover:text-[#FF5722]"
                          style={{ color: openService === service.id ? "#FF5722" : "#171717" }}
                        >
                          <span className="text-neutral-400 transition-colors duration-200">
                            {service.icon}
                          </span>
                          <h3
                            className="text-lg md:text-xl font-semibold tracking-tight"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Right: description preview + toggle (desktop only preview) */}
                      <div className="hidden md:flex items-center justify-between gap-6">
                        <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 flex-1">
                          {service.description}
                        </p>
                        <span className="shrink-0 text-neutral-300">
                          {openService === service.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </div>

                      {/* Mobile toggle icon */}
                      <div className="md:hidden flex justify-end">
                        <span className="text-neutral-300">
                          {openService === service.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: openService === service.id ? "320px" : "0px",
                      opacity: openService === service.id ? 1 : 0,
                    }}
                  >
                    <div className="pb-8 pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
                      {/* Mobile full description / desktop second column continuation */}
                      <div className="md:col-start-2 space-y-5">
                        <p className="text-sm text-neutral-600 leading-relaxed md:hidden">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-neutral-600">
                              <span
                                className="w-1 h-1 rounded-full shrink-0"
                                style={{ background: "#FF5722" }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PORTFOLIO
          ────────────────────────────────────────── */}
      <section id="work" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* Section header */}
          <FadeIn className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="block w-8 h-0.5 rounded-full"
                style={{ background: "#FF5722" }}
              />
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-neutral-400">
                Case Study
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Selected Work
            </h2>
          </FadeIn>

          {/* Featured case study */}
          <FadeIn>
            <div className="rounded-2xl overflow-hidden border border-neutral-100 shadow-sm">

              {/* Hero image with overlay */}
              <div className="relative aspect-[16/7] md:aspect-[16/6] overflow-hidden bg-neutral-900">
                <Image
                  src="/images/cjc-hero.jpg"
                  alt="CJC Music website"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 100vw, 1152px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />

                {/* Project label */}
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-full text-white"
                      style={{ background: "#FF5722" }}
                    >
                      Website Development
                    </span>
                  </div>
                  <h3
                    className="text-2xl md:text-4xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    CJC Music
                  </h3>
                </div>

                {/* External link */}
                <div className="absolute top-6 right-6">
                  <a
                    href="https://cjcmusic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-white text-xs transition-colors duration-200"
                  >
                    View live <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Project details grid */}
              <div className="p-8 md:p-10 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-100 mb-10">
                  {[
                    { label: "Client", value: "CJC Music" },
                    { label: "Service", value: "Website Development" },
                    { label: "Technology", value: "Next.js + React" },
                    { label: "Scope", value: "100+ product pages" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-xs text-neutral-400 tracking-wide uppercase mb-1.5">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-neutral-900">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Brief description */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    CJC Music needed a digital presence that matched the quality of their instruments and service. We built a performant, fully custom e-commerce site with over 100 product pages, advanced search, and a streamlined checkout — all optimized for search and mobile.
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    The result is a site that loads in under 1.5 seconds, ranks on the first page for key local search terms, and has driven a measurable increase in online inquiries since launch.
                  </p>
                </div>

                {/* Secondary image strip */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
                    <Image
                      src="/images/cjc-hero-2.jpg"
                      alt="CJC Music — interior view"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 50vw, 560px"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
                    <Image
                      src="/images/cjc-hero-3.jpg"
                      alt="CJC Music — product detail"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 50vw, 560px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PROCESS
          ────────────────────────────────────────── */}
      <section id="process" className="py-24 md:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <FadeIn className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="block w-8 h-0.5 rounded-full"
                style={{ background: "#FF5722" }}
              />
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-neutral-400">
                How We Work
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Our Process
            </h2>
          </FadeIn>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            {/* Connecting line */}
            <div className="relative mb-8">
              <div className="absolute top-5 left-0 right-0 h-px bg-neutral-200" />
              <div
                className="absolute top-5 left-0 h-px"
                style={{ background: "#FF5722", width: "100%" }}
              />
            </div>

            <div className="grid grid-cols-4 gap-8">
              {PROCESS_PHASES.map((phase, idx) => (
                <FadeIn key={phase.number} delay={idx * 100}>
                  <div className="relative pt-10">
                    {/* Node dot */}
                    <div
                      className="absolute top-0 left-0 w-10 h-10 rounded-full flex items-center justify-center border-2 border-white"
                      style={{
                        background: "#FF5722",
                        boxShadow: "0 0 0 4px #FFF7F5",
                        marginTop: "-12px",
                      }}
                    >
                      <span className="text-white text-xs font-bold">{phase.number}</span>
                    </div>

                    <h3
                      className="text-lg font-bold text-neutral-900 mb-3"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {phase.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative pl-8">
            {/* Vertical line */}
            <div
              className="absolute left-3 top-0 bottom-0 w-px"
              style={{ background: "#FF5722", opacity: 0.3 }}
            />

            <div className="space-y-10">
              {PROCESS_PHASES.map((phase, idx) => (
                <FadeIn key={phase.number} delay={idx * 80}>
                  <div className="relative">
                    {/* Node */}
                    <div
                      className="absolute -left-[26px] top-0 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white"
                      style={{ background: "#FF5722" }}
                    >
                      <span className="text-white text-[9px] font-bold">{phase.number}</span>
                    </div>

                    <h3
                      className="text-base font-bold text-neutral-900 mb-2"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {phase.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          ABOUT
          ────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <FadeIn className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/images/office-workspace.png"
                  alt="Fishbone Creative Solutions workspace"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 576px"
                />
              </div>
              {/* Decorative accent */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
                style={{ background: "#FF5722" }}
              />
            </FadeIn>

            {/* Text */}
            <FadeIn delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="block w-8 h-0.5 rounded-full"
                  style={{ background: "#FF5722" }}
                />
                <span className="text-xs tracking-[0.2em] uppercase font-medium text-neutral-400">
                  About Us
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                About Fishbone
              </h2>
              <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
                <p>
                  Fishbone Creative Solutions is a full-service creative agency built on the belief that great work happens at the intersection of creativity and strategy. We don&apos;t choose between good-looking and effective — we deliver both.
                </p>
                <p>
                  Our team combines deep expertise across design, development, and digital marketing to help brands communicate clearly, build trust, and grow sustainably. We work closely with our clients — not as vendors, but as long-term partners.
                </p>
                <p>
                  Whether you&apos;re launching from scratch, refreshing an existing presence, or scaling what&apos;s already working, we bring the same level of care and craft to every engagement.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "Design-first", label: "Every decision starts with intent" },
                  { value: "Results-driven", label: "We measure what matters" },
                ].map((item) => (
                  <div key={item.value}>
                    <div
                      className="text-sm font-bold text-neutral-900 mb-1"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs text-neutral-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          TESTIMONIALS
          ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">

          <FadeIn className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span
                className="block w-8 h-0.5 rounded-full"
                style={{ background: "#FF5722" }}
              />
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-neutral-400">
                Client Words
              </span>
              <span
                className="block w-8 h-0.5 rounded-full"
                style={{ background: "#FF5722" }}
              />
            </div>
          </FadeIn>

          {/* Quote */}
          <div className="relative min-h-[200px]">
            {/* Large decorative quote mark */}
            <Quote
              size={64}
              className="mx-auto mb-6 opacity-10 text-neutral-900"
              style={{ fill: "currentColor" }}
            />

            <div className="relative overflow-hidden">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={t.id}
                  className="transition-all duration-500"
                  style={{
                    opacity: idx === activeTestimonial ? 1 : 0,
                    position: idx === activeTestimonial ? "relative" : "absolute",
                    top: idx === activeTestimonial ? "auto" : 0,
                    left: 0,
                    right: 0,
                    transform: idx === activeTestimonial
                      ? "translateY(0)"
                      : idx < activeTestimonial
                      ? "translateY(-20px)"
                      : "translateY(20px)",
                    pointerEvents: idx === activeTestimonial ? "auto" : "none",
                  }}
                >
                  <blockquote>
                    <p
                      className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8 italic"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer>
                      <div className="font-semibold text-neutral-900 text-sm">
                        {t.author}
                      </div>
                      <div className="text-xs text-neutral-400 mt-1">
                        {t.role}, {t.company}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className="rounded-full transition-all duration-300 cursor-pointer border-none"
                style={{
                  width: idx === activeTestimonial ? "24px" : "8px",
                  height: "8px",
                  background: idx === activeTestimonial ? "#FF5722" : "#E0E0E0",
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          CTA SECTION
          ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-white">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-neutral-400 tracking-[0.15em] uppercase mb-6">
            Ready to start?
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Have a project
            <br />
            in mind?
          </h2>
          <p className="text-neutral-500 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
            Tell us what you&apos;re building and we&apos;ll get back to you within one business day.
          </p>
          <button
            onClick={() => smoothScroll("#contact")}
            className="inline-flex items-center gap-3 px-10 py-4 text-white font-medium tracking-wide text-sm rounded-full transition-all duration-200 hover:opacity-90 hover:gap-4 cursor-pointer border-none"
            style={{ background: "#FF5722", fontFamily: "inherit" }}
          >
            Get In Touch
            <ArrowRight size={16} />
          </button>
        </FadeIn>
      </section>

      {/* ──────────────────────────────────────────
          CONTACT
          ────────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: info */}
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="block w-8 h-0.5 rounded-full"
                  style={{ background: "#FF5722" }}
                />
                <span
                  className="text-xs tracking-[0.2em] uppercase font-medium"
                  style={{ color: "#FF5722" }}
                >
                  Let&apos;s Connect
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Start the
                <br />
                conversation.
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-xs">
                We&apos;re selective about the projects we take on, which means you&apos;ll get our full attention when we work together.
              </p>

              <div className="space-y-5">
                <a
                  href="mailto:hello@fishbonecreative.com"
                  className="flex items-center gap-4 text-sm text-neutral-300 hover:text-white transition-colors duration-200 group"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,87,34,0.15)" }}
                  >
                    <Mail size={15} style={{ color: "#FF5722" }} />
                  </div>
                  <span className="group-hover:underline underline-offset-2">
                    hello@fishbonecreative.com
                  </span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 text-sm text-neutral-300 hover:text-white transition-colors duration-200 group"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,87,34,0.15)" }}
                  >
                    <Phone size={15} style={{ color: "#FF5722" }} />
                  </div>
                  <span className="group-hover:underline underline-offset-2">
                    +1 (234) 567-890
                  </span>
                </a>
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,87,34,0.15)" }}
                  >
                    <MapPin size={15} style={{ color: "#FF5722" }} />
                  </div>
                  <span>Available for remote & local projects</span>
                </div>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={100}>
              <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="v2-name"
                    className="block text-xs text-neutral-400 tracking-wide uppercase mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="v2-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3.5 text-sm text-white bg-white/5 border border-white/10 rounded-xl placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5722] transition-colors duration-200"
                    style={{ fontFamily: "inherit" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="v2-email"
                    className="block text-xs text-neutral-400 tracking-wide uppercase mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="v2-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3.5 text-sm text-white bg-white/5 border border-white/10 rounded-xl placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5722] transition-colors duration-200"
                    style={{ fontFamily: "inherit" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="v2-message"
                    className="block text-xs text-neutral-400 tracking-wide uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="v2-message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 text-sm text-white bg-white/5 border border-white/10 rounded-xl placeholder:text-neutral-600 focus:outline-none focus:border-[#FF5722] transition-colors duration-200 resize-none"
                    style={{ fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 text-sm font-medium text-white rounded-xl transition-all duration-200 hover:opacity-90 cursor-pointer border-none mt-2"
                  style={{ background: "#FF5722", fontFamily: "inherit" }}
                >
                  Send Message
                  <ArrowUpRight size={15} />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          FOOTER
          ────────────────────────────────────────── */}
      <footer className="bg-neutral-950 py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Top: logo + nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">

            {/* Logo + tagline */}
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/images/fishbone-logo-horizontal.png"
                alt="Fishbone Creative Solutions"
                width={160}
                height={40}
                style={{ objectFit: "contain", height: "30px", width: "auto", filter: "brightness(0) invert(1)" }}
              />
              <p className="text-neutral-500 text-xs mt-4 leading-relaxed max-w-[180px]">
                Where creativity meets strategy.
              </p>
            </div>

            {/* Services */}
            <div>
              <div className="text-xs font-medium text-neutral-300 tracking-[0.15em] uppercase mb-4">
                Services
              </div>
              <ul className="space-y-3">
                {["Website Development", "Social Media", "Graphic Design", "AI Integration", "Automation"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => smoothScroll("#services")}
                      className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200 cursor-pointer bg-transparent border-none text-left"
                      style={{ fontFamily: "inherit" }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="text-xs font-medium text-neutral-300 tracking-[0.15em] uppercase mb-4">
                Company
              </div>
              <ul className="space-y-3">
                {[
                  { label: "Work", href: "#work" },
                  { label: "Courses", href: "/courses" },
                  { label: "About", href: "#about" },
                  { label: "Process", href: "#process" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => smoothScroll(item.href)}
                      className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200 cursor-pointer bg-transparent border-none text-left"
                      style={{ fontFamily: "inherit" }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-xs font-medium text-neutral-300 tracking-[0.15em] uppercase mb-4">
                Contact
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@fishbonecreative.com"
                    className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                  >
                    hello@fishbonecreative.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom: copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-600">
              &copy; {new Date().getFullYear()} Fishbone Creative Solutions. All rights reserved.
            </p>
            <p className="text-xs text-neutral-700">
              Designed & built with care.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
