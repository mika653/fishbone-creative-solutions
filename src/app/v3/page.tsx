'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
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
  AtSign,
  Send,
  Link,
  Rss,
  Quote,
  Play,
  Users,
  CheckCircle,
  GraduationCap,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  role: string;
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const SERVICES: Service[] = [
  {
    icon: <Globe size={28} />,
    name: 'Website Development',
    description:
      'High-performance, conversion-focused websites built with modern frameworks. Every pixel crafted with intent.',
  },
  {
    icon: <Share2 size={28} />,
    name: 'Social Media Management',
    description:
      'Strategic content ecosystems that grow audiences and turn followers into loyal customers.',
  },
  {
    icon: <Palette size={28} />,
    name: 'Graphic Design',
    description:
      'Visual identities that command attention. Branding, print, and digital assets that tell your story.',
  },
  {
    icon: <Bot size={28} />,
    name: 'AI Integration',
    description:
      'Embed intelligent automation into your products. From custom AI tools to LLM-powered workflows.',
  },
  {
    icon: <Zap size={28} />,
    name: 'Workflow Automation',
    description:
      'Eliminate bottlenecks. We build custom automations that reclaim hours and scale your operations.',
  },
];

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We immerse ourselves in your brand, goals, and competitive landscape. No assumptions — only clarity.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'A bespoke roadmap tailored to your objectives. Every decision is backed by data and creative vision.',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'World-class craft. We build, design, and launch with precision — on time, on brief, on brand.',
  },
  {
    number: '04',
    title: 'Growth',
    description:
      'We iterate, optimize, and scale. Your success is our reputation, and we protect it obsessively.',
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Fishbone transformed our online presence completely. Our sales doubled within 90 days of launching the new site. The attention to detail is unmatched.',
    name: 'Marcus R.',
    company: 'CJC Music',
    role: 'Founder & CEO',
  },
  {
    quote:
      'Working with Fishbone felt like having an entire creative department at our disposal. They understood our vision before we could articulate it.',
    name: 'Sophia L.',
    company: 'Luminae Studio',
    role: 'Creative Director',
  },
  {
    quote:
      'The AI workflows they built for us save 40+ hours per week. If you are serious about growth, this is the team you call.',
    name: 'Derek T.',
    company: 'Apex Ventures',
    role: 'Operations Lead',
  },
];

/* ─────────────────────────────────────────────
   INTERSECTION OBSERVER HOOK
   ───────────────────────────────────────────── */

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─────────────────────────────────────────────
   REVEAL WRAPPER
   ───────────────────────────────────────────── */

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   GOLD DIVIDER
   ───────────────────────────────────────────── */

function GoldDivider() {
  return (
    <div
      className="w-full h-px"
      style={{
        background:
          'linear-gradient(90deg, transparent 0%, #FFC107 30%, #FF9800 70%, transparent 100%)',
        opacity: 0.6,
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   SECTION HEADING
   ───────────────────────────────────────────── */

function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16 md:mb-20">
      {label && (
        <span
          className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-4 px-3 py-1 rounded-full"
          style={{
            color: '#FFC107',
            border: '1px solid rgba(255,193,7,0.3)',
            background: 'rgba(255,193,7,0.07)',
          }}
        >
          {label}
        </span>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{ fontFamily: 'var(--font-space-grotesk)', color: '#fff' }}
      >
        {title}
      </h2>
      <div
        className="w-16 h-0.5 mx-auto mb-5"
        style={{ background: '#FFC107', boxShadow: '0 0 12px rgba(255,193,7,0.6)' }}
      />
      {subtitle && (
        <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   HEADER
   ───────────────────────────────────────────── */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '/courses', label: 'Courses' },
    { href: '#process', label: 'Process' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.85)'
            : 'rgba(10,10,10,0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,193,7,0.15)'
            : '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-18 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div
              className="rounded-full overflow-hidden"
              style={{
                width: 44,
                height: 44,
                border: '2px solid rgba(255,193,7,0.7)',
                boxShadow: '0 0 14px rgba(255,193,7,0.35)',
              }}
            >
              <Image
                src="/images/fishbone-logo.jpg"
                alt="Fishbone Creative Solutions"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
            </div>
            <span
              className="font-bold text-white text-sm md:text-base tracking-wide hidden sm:block"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Fishbone Creative
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: '#FFC107' }}
                />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,193,7,0.4)]"
              style={{
                color: '#FFC107',
                border: '1.5px solid rgba(255,193,7,0.7)',
                background: 'rgba(255,193,7,0.06)',
                fontFamily: 'var(--font-space-grotesk)',
              }}
            >
              Book a Call
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      <div
        className="fixed inset-0 z-[100] md:hidden transition-all duration-300"
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ opacity: menuOpen ? 0.7 : 0 }}
        />
        {/* Drawer */}
        <div
          className="absolute top-0 right-0 h-full w-72 flex flex-col py-8 px-7 transition-transform duration-300"
          style={{
            background: 'rgba(12,12,12,0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderLeft: '1px solid rgba(255,193,7,0.15)',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <div className="flex justify-between items-center mb-10">
            <span
              className="text-white font-bold text-sm tracking-widest uppercase"
              style={{ color: '#FFC107', fontFamily: 'var(--font-space-grotesk)' }}
            >
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="p-1.5 text-gray-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-medium text-gray-200 hover:text-white transition-colors tracking-wide"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                color: '#0A0A0A',
                background: '#FFC107',
                fontFamily: 'var(--font-space-grotesk)',
              }}
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Animated gradient orb */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 55%, rgba(255,193,7,0.12) 0%, rgba(255,152,0,0.06) 40%, transparent 75%)',
          animation: 'orbPulse 7s ease-in-out infinite',
        }}
      />
      {/* Secondary orb */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 35% at 30% 40%, rgba(255,87,34,0.07) 0%, transparent 70%)',
          animation: 'orbDrift 10s ease-in-out infinite alternate',
        }}
      />
      {/* Grain texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 text-center pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Gold badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-8"
          style={{
            color: '#FFC107',
            border: '1px solid rgba(255,193,7,0.4)',
            background: 'rgba(255,193,7,0.08)',
            boxShadow: '0 0 20px rgba(255,193,7,0.1)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#FFC107', boxShadow: '0 0 6px #FFC107' }}
          />
          Creative Agency
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8"
          style={{ fontFamily: 'var(--font-space-grotesk)', color: '#fff' }}
        >
          Your Brand Deserves{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 50%, #FF5722 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            More Than
          </span>{' '}
          <br className="hidden md:block" />
          Ordinary.
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          We build digital experiences that stop the scroll, elevate perception, and drive
          measurable growth. For brands that refuse to be forgettable.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,193,7,0.45)] hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
              color: '#0A0A0A',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/5"
            style={{
              color: '#FFC107',
              border: '1.5px solid rgba(255,193,7,0.55)',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            View Portfolio
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Scroll</span>
          <div
            className="w-px h-10"
            style={{
              background: 'linear-gradient(180deg, #FFC107, transparent)',
              animation: 'scrollPulse 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes orbPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        @keyframes orbDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, -40px); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes borderGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <GoldDivider />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SERVICES
   ───────────────────────────────────────────── */

function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ background: '#0D0D0D' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label="What We Do"
            title="Our Expertise"
            subtitle="Five disciplines. One obsessive focus: making your brand impossible to ignore."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-4 p-7 rounded-2xl cursor-default transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: hovered
          ? '1px solid rgba(255,193,7,0.45)'
          : '1px solid rgba(255,255,255,0.08)',
        boxShadow: hovered
          ? '0 0 30px rgba(255,193,7,0.15), inset 0 0 20px rgba(255,193,7,0.03)'
          : '0 0 0 transparent',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: 'rgba(255,193,7,0.1)',
          color: '#FFC107',
          boxShadow: hovered ? '0 0 16px rgba(255,193,7,0.3)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {service.icon}
      </div>
      <h3
        className="text-lg font-bold text-white"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {service.name}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{service.description}</p>
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase transition-colors duration-200"
        style={{ color: hovered ? '#FFC107' : 'rgba(255,193,7,0.5)' }}
      >
        Learn more <ChevronRight size={14} />
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PORTFOLIO
   ───────────────────────────────────────────── */

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label="Featured Work"
            title="Built to Impress"
            subtitle="Real projects. Real results. Here's a glimpse at what we've delivered."
          />
        </Reveal>

        {/* CJC Music Hero Image */}
        <Reveal>
          <div className="relative w-full rounded-2xl overflow-hidden mb-6" style={{ height: '480px', minHeight: '340px' }}>
            <Image
              src="/images/cjc-hero.jpg"
              alt="CJC Music e-commerce platform"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.85) 100%)',
              }}
            />
            {/* Project title overlay */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
                style={{
                  background: 'rgba(255,193,7,0.15)',
                  border: '1px solid rgba(255,193,7,0.35)',
                  color: '#FFC107',
                }}
              >
                E-Commerce
              </div>
              <h3
                className="text-3xl md:text-5xl font-extrabold text-white mb-2"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                CJC Music
              </h3>
              <p className="text-gray-300 text-sm md:text-base max-w-md">
                A full-scale e-commerce experience for a leading music equipment retailer.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={100}>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { stat: '100+', label: 'Product Pages' },
              { stat: 'Next.js + React', label: 'Tech Stack' },
              { stat: 'E-Commerce', label: 'Platform Type' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center text-center py-5 px-3 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,193,7,0.15)',
                }}
              >
                <span
                  className="text-xl md:text-2xl font-extrabold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'var(--font-space-grotesk)',
                  }}
                >
                  {item.stat}
                </span>
                <span className="text-gray-500 text-xs uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Image gallery strip + description */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Gallery strip — 3 cols */}
          <Reveal className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/cjc-hero-2.jpg"
                  alt="CJC Music — product listing view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(10,10,10,0.2)' }}
                />
              </div>
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/cjc-hero-3.jpg"
                  alt="CJC Music — product detail page"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(10,10,10,0.2)' }}
                />
                {/* Logo overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative w-20 h-20 rounded-xl overflow-hidden"
                    style={{
                      boxShadow: '0 0 24px rgba(255,193,7,0.3)',
                      border: '1px solid rgba(255,193,7,0.3)',
                    }}
                  >
                    <Image
                      src="/images/cjc-music-logo.png"
                      alt="CJC Music logo"
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Description card — 2 cols */}
          <Reveal delay={120} className="lg:col-span-2">
            <div
              className="h-full flex flex-col justify-between p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <div>
                <h4
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  The Challenge
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  CJC Music needed a scalable online store that could match the energy of their
                  physical locations. Hundreds of SKUs, complex filtering, and a customer experience
                  that had to feel premium from the first click.
                </p>
                <h4
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  The Result
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A Next.js e-commerce platform with real-time inventory, custom product
                  configurators, and a design language that communicates authority. Launched on
                  time, under budget, and immediately profitable.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#FFC107' }}
              >
                Start a similar project <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROCESS
   ───────────────────────────────────────────── */

function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-32"
      style={{ background: '#0D0D0D' }}
    >
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label="How We Work"
            title="The Process"
            subtitle="A proven four-stage methodology that moves fast without cutting corners."
          />
        </Reveal>

        <div className="relative">
          {/* Vertical gold line */}
          <div
            className="absolute left-[2.6rem] top-8 bottom-8 w-px hidden md:block"
            style={{
              background:
                'linear-gradient(180deg, transparent, rgba(255,193,7,0.4) 10%, rgba(255,193,7,0.4) 90%, transparent)',
            }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <div className="flex gap-6 md:gap-10 items-start">
                  {/* Number */}
                  <div className="shrink-0 relative">
                    <span
                      className="font-extrabold leading-none select-none"
                      style={{
                        fontSize: 'clamp(4rem, 8vw, 6rem)',
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(255,193,7,0.35)',
                        fontFamily: 'var(--font-space-grotesk)',
                        display: 'block',
                        width: '5.5rem',
                        textAlign: 'center',
                      }}
                    >
                      {step.number}
                    </span>
                    {/* Connector dot */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full hidden md:block"
                      style={{
                        background: '#FFC107',
                        boxShadow: '0 0 10px rgba(255,193,7,0.6)',
                      }}
                    />
                  </div>
                  {/* Content */}
                  <div className="pt-4 md:pt-6">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-3"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ABOUT
   ───────────────────────────────────────────── */

function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/office-workspace.png"
          alt="Fishbone Creative Solutions studio"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.82)' }}
        />
        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            backgroundSize: '180px 180px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20 items-center">
          <Reveal>
            <div>
              <span
                className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-5 px-3 py-1 rounded-full"
                style={{
                  color: '#FFC107',
                  border: '1px solid rgba(255,193,7,0.3)',
                  background: 'rgba(255,193,7,0.07)',
                }}
              >
                Who We Are
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                We Are a{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Creative
                </span>{' '}
                Agency
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Fishbone Creative Solutions was built for businesses that refuse mediocrity.
                We are a tight-knit team of strategists, designers, developers, and storytellers
                who obsess over outcomes — not outputs.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                We believe the best digital work happens at the intersection of bold creative vision
                and rigorous technical execution. That is why we keep our client roster small and our
                standards impossibly high.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {[
                  { value: '50+', label: 'Projects Delivered' },
                  { value: '98%', label: 'Client Retention' },
                  { value: '5★', label: 'Average Rating' },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      className="text-3xl font-extrabold mb-1"
                      style={{
                        background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'var(--font-space-grotesk)',
                      }}
                    >
                      {item.value}
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: 'Premium by Design',
                  body: 'We do not produce templates. Every deliverable is architected from scratch to fit your unique brand and goals.',
                },
                {
                  title: 'Exclusive Client Roster',
                  body: 'We intentionally limit our client capacity to ensure every project gets our full creative and strategic attention.',
                },
                {
                  title: 'Results or We Rework',
                  body: 'We tie our success to your outcomes. If the work is not performing, we are back at the table until it is.',
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderLeft: '3px solid rgba(255,193,7,0.6)',
                    marginLeft: `${i * 8}px`,
                  }}
                >
                  <h4
                    className="font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
   ───────────────────────────────────────────── */

function Testimonials() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label="Client Stories"
            title="What They Say"
            subtitle="Results speak loudest. Here's what our clients have to say."
          />
        </Reveal>

        {/* Grid on desktop, horizontal scroll on mobile */}
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 snap-x md:snap-none">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="shrink-0 w-80 md:w-auto snap-start">
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="flex flex-col gap-5 p-7 rounded-2xl h-full"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Gold quote icon */}
      <Quote
        size={32}
        style={{ color: '#FFC107', opacity: 0.8, flexShrink: 0 }}
      />
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            style={{ color: '#FFC107', fill: '#FFC107' }}
          />
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div
        className="pt-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="font-bold text-white text-sm" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          {testimonial.name}
        </div>
        <div className="text-xs text-gray-500 mt-0.5">
          {testimonial.role}, {testimonial.company}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CTA BANNER
   ───────────────────────────────────────────── */

function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#0D0D0D' }}>
      {/* Animated gold border lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #FFC107 30%, #FF9800 70%, transparent 100%)',
          animation: 'borderGlow 3s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #FFC107 30%, #FF9800 70%, transparent 100%)',
          animation: 'borderGlow 3s ease-in-out infinite 1.5s',
        }}
      />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,193,7,0.07) 0%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-10 text-center">
        <Reveal>
          <span
            className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-6 px-3 py-1 rounded-full"
            style={{
              color: '#FFC107',
              border: '1px solid rgba(255,193,7,0.3)',
              background: 'rgba(255,193,7,0.07)',
            }}
          >
            Limited Availability
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Let&apos;s Create Something{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Extraordinary
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10">
            We are currently accepting a select number of new clients for Q2 2026.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,193,7,0.5)] hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
              color: '#0A0A0A',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            Schedule a Discovery Call
            <ArrowRight size={18} />
          </a>
          <p className="text-gray-600 text-xs mt-5 tracking-wide">
            We take on a limited number of clients to ensure quality.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT
   ───────────────────────────────────────────── */

interface FormState {
  name: string;
  email: string;
  budget: string;
  description: string;
}

function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    budget: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.75rem',
    color: '#fff',
    padding: '0.875rem 1.125rem',
    width: '100%',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'var(--font-inter)',
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <SectionHeading
            label="Get In Touch"
            title="Start a Conversation"
            subtitle="Tell us about your project. We will get back to you within 24 hours."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14">
          {/* Form — 3 cols */}
          <Reveal className="lg:col-span-3">
            <div
              className="p-8 md:p-10 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                    style={{ background: 'rgba(255,193,7,0.15)', border: '1px solid rgba(255,193,7,0.4)' }}
                  >
                    <ArrowRight size={28} style={{ color: '#FFC107' }} />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    Message Received
                  </h3>
                  <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                    Thank you for reaching out. We review every inquiry personally and will be in touch
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Full Name
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(255,193,7,0.5)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Email Address
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(255,193,7,0.5)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Project Budget
                    </span>
                    <select
                      name="budget"
                      required
                      value={form.budget}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(255,193,7,0.5)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                    >
                      <option value="" disabled style={{ background: '#111', color: '#aaa' }}>
                        Select a budget range
                      </option>
                      <option value="5k-10k" style={{ background: '#111', color: '#fff' }}>
                        $5K – $10K
                      </option>
                      <option value="10k-25k" style={{ background: '#111', color: '#fff' }}>
                        $10K – $25K
                      </option>
                      <option value="25k+" style={{ background: '#111', color: '#fff' }}>
                        $25K+
                      </option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Project Description
                    </span>
                    <textarea
                      name="description"
                      required
                      rows={5}
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(255,193,7,0.5)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 w-full py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.4)] hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                      color: '#0A0A0A',
                      fontFamily: 'var(--font-space-grotesk)',
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info — 2 cols */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex flex-col gap-8 pt-2">
              <div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Prefer a Direct Line?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We are real people who love talking shop. Reach out directly and expect a
                  thoughtful response — not an auto-reply.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: <Mail size={18} />,
                    label: 'Email',
                    value: 'hello@fishbonecreative.com',
                    href: 'mailto:hello@fishbonecreative.com',
                  },
                  {
                    icon: <Phone size={18} />,
                    label: 'Phone',
                    value: '+1 (555) 000-0000',
                    href: 'tel:+15550000000',
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: 'Location',
                    value: 'Available Worldwide',
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: 'rgba(255,193,7,0.1)',
                        border: '1px solid rgba(255,193,7,0.2)',
                        color: '#FFC107',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-600 mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-200 text-sm hover:text-white transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-200 text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

              {/* Social links */}
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-600 mb-4">
                  Follow the Work
                </div>
                <div className="flex gap-3">
                  {[
                    { icon: <AtSign size={18} />, href: '#', label: 'Instagram' },
                    { icon: <Send size={18} />, href: '#', label: 'Twitter' },
                    { icon: <Link size={18} />, href: '#', label: 'LinkedIn' },
                    { icon: <Rss size={18} />, href: '#', label: 'Facebook' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_16px_rgba(255,193,7,0.4)]"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#9E9E9E',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFC107';
                        e.currentTarget.style.borderColor = 'rgba(255,193,7,0.4)';
                        e.currentTarget.style.background = 'rgba(255,193,7,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#9E9E9E';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */

function Footer() {
  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Courses', href: '/courses' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className="py-12 md:py-16"
      style={{
        background: '#050505',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 w-fit">
              <div
                className="rounded-full overflow-hidden"
                style={{
                  width: 40,
                  height: 40,
                  border: '1.5px solid rgba(255,193,7,0.55)',
                  boxShadow: '0 0 12px rgba(255,193,7,0.25)',
                }}
              >
                <Image
                  src="/images/fishbone-logo.jpg"
                  alt="Fishbone Creative Solutions"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <span
                className="font-bold text-white text-sm tracking-wide"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Fishbone Creative
              </span>
            </a>
            <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
              Premium creative and digital services for brands that demand more.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-600 mb-4">Navigation</div>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-600 mb-4">Connect</div>
            <div className="flex gap-3">
              {[
                { icon: <AtSign size={16} />, href: '#', label: 'Instagram' },
                { icon: <Send size={16} />, href: '#', label: 'Twitter' },
                { icon: <Link size={16} />, href: '#', label: 'LinkedIn' },
                { icon: <Rss size={16} />, href: '#', label: 'Facebook' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: '#616161',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFC107';
                    e.currentTarget.style.borderColor = 'rgba(255,193,7,0.4)';
                    e.currentTarget.style.background = 'rgba(255,193,7,0.07)';
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(255,193,7,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#616161';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-gray-700 text-xs">
            &copy; 2024 Fishbone Creative Solutions. All rights reserved.
          </p>
          <p className="text-gray-800 text-xs">
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function V3Page() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
