'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Monitor,
  Share2,
  Palette,
  Bot,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  MessageSquare,
  TrendingUp,
  Send,
  ChevronDown,
  Rocket,
  Layers,
  GitMerge,
  Quote,
  GraduationCap,
  Play,
  Users,
  Gift,
  Download,
} from 'lucide-react'

// ─── Types ──────────────────────────────────────────────────────────────────

interface StatItem {
  value: number
  suffix: string
  label: string
}

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface TestimonialItem {
  quote: string
  name: string
  role: string
  rating: number
}

// ─── Animated Counter Hook ──────────────────────────────────────────────────

function useCountUp(target: number, duration: number = 2000, started: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])

  return count
}

// ─── Animated Stat Component ────────────────────────────────────────────────

function AnimatedStat({ value, suffix, label, started }: StatItem & { started: boolean }) {
  const count = useCountUp(value, 2000, started)
  return (
    <div className="text-center">
      <div
        className="text-4xl md:text-5xl font-bold mb-1"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm md:text-base font-medium uppercase tracking-widest">
        {label}
      </div>
    </div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES: ServiceItem[] = [
  {
    icon: <Monitor size={28} />,
    title: 'Website Development',
    description: 'Custom, responsive websites built for performance — engineered to convert visitors into customers.',
    gradient: 'from-[#E91E63] to-[#FF5722]',
  },
  {
    icon: <Share2 size={28} />,
    title: 'Social Media Management',
    description: 'Strategic content that builds engaged communities and turns followers into loyal brand advocates.',
    gradient: 'from-[#FF5722] to-[#FF9800]',
  },
  {
    icon: <Palette size={28} />,
    title: 'Graphic Design',
    description: 'Visual identities that make lasting impressions — from brand systems to scroll-stopping creatives.',
    gradient: 'from-[#FF9800] to-[#FFC107]',
  },
  {
    icon: <Bot size={28} />,
    title: 'AI Integration',
    description: 'Smart automation that scales your business — deploy AI-powered tools that work around the clock.',
    gradient: 'from-[#9C27B0] to-[#E91E63]',
  },
  {
    icon: <Zap size={28} />,
    title: 'Workflow Automation',
    description: 'Streamlined processes that save time and money — eliminate bottlenecks and unlock operational freedom.',
    gradient: 'from-[#E91E63] to-[#9C27B0]',
  },
]

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We deep-dive into your brand, audience, and goals to craft a strategy that actually works.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our designers create stunning visual concepts that capture your identity and drive engagement.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We build with cutting-edge technology — fast, scalable, and ready to grow with your business.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'We launch your project and provide ongoing support to keep you ahead of the competition.',
  },
]

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'Fishbone transformed our entire online presence. Our website traffic doubled in the first two months and the design is absolutely stunning.',
    name: 'Marcus Thompson',
    role: 'CEO, Apex Ventures',
    rating: 5,
  },
  {
    quote: "The AI integration they built for us saves our team 20+ hours every week. It's like having an extra employee that never sleeps.",
    name: 'Priya Nair',
    role: 'Operations Director, NovaTech',
    rating: 5,
  },
  {
    quote: 'Their social media strategy was a game-changer. We went from 2k to 18k followers in three months with engagement we never thought possible.',
    name: 'Jordan Williams',
    role: 'Founder, Coast Creative Co.',
    rating: 5,
  },
]

const STATS: StatItem[] = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '', label: 'Core Services' },
  { value: 100, suffix: '%', label: 'Dedication' },
]

// ─── Main Page Component ─────────────────────────────────────────────────────

export default function V1Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [statsStarted, setStatsStarted] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [ctaEmail, setCtaEmail] = useState('')
  const [ctaSubmitted, setCtaSubmitted] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [leadEmail, setLeadEmail] = useState('')
  const [leadSubmitted, setLeadSubmitted] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  // Scroll detection for header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Stats counter trigger via IntersectionObserver
  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (ctaEmail) setCtaSubmitted(true)
  }

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (leadEmail) setLeadSubmitted(true)
  }

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Courses', href: '/courses?v=1' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  // ─── Render ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-inter)' }}>

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30">
                <Image
                  src="/images/fishbone-logo.jpg"
                  alt="Fishbone Creative Solutions"
                  fill
                  sizes="40px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <span
                className={`font-bold text-sm md:text-base leading-tight transition-colors ${
                  scrolled ? 'text-neutral-900' : 'text-white'
                }`}
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Fishbone<br className="hidden sm:block" />
                <span className="sm:block hidden text-xs font-normal opacity-70">Creative Solutions</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#E91E63] ${
                    scrolled ? 'text-neutral-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #E91E63, #FF5722)' }}
              >
                Get Started
                <ArrowRight size={14} />
              </a>
              <button
                onClick={() => setMenuOpen(true)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-neutral-800 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ──────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div
            className="flex items-center justify-between px-6 py-5 border-b border-neutral-100"
            style={{ background: 'linear-gradient(135deg, #9C27B0, #E91E63)' }}
          >
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/images/fishbone-logo.jpg"
                  alt="Fishbone"
                  fill
                  sizes="32px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Fishbone
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3.5 rounded-xl text-neutral-700 font-medium hover:bg-neutral-50 hover:text-[#E91E63] transition-colors"
              >
                {link.label}
                <ChevronDown size={14} className="-rotate-90 opacity-40" />
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #E91E63, #FF5722)' }}
              >
                Get Started
                <ArrowRight size={14} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0030 0%, #4a0040 20%, #9C27B0 40%, #E91E63 60%, #FF5722 80%, #FF9800 100%)' }}
      >
        {/* Geometric background accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large circle top-right */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #FFC107, transparent)' }}
          />
          {/* Circle bottom-left */}
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #E91E63, transparent)' }}
          />
          {/* Geometric diamond shapes */}
          <div
            className="absolute top-1/4 left-8 w-12 h-12 rotate-45 opacity-20 border-2 border-white"
          />
          <div
            className="absolute top-1/3 right-16 w-8 h-8 rotate-45 opacity-20 border-2 border-[#FFC107]"
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-16 h-16 rotate-45 opacity-10 bg-white"
          />
          <div
            className="absolute top-2/3 left-1/4 w-6 h-6 rounded-full opacity-30 bg-[#FFC107]"
          />
          {/* Horizontal line accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1 opacity-50"
            style={{ background: 'linear-gradient(90deg, transparent, #FFC107, #E91E63, transparent)' }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">

          {/* Pre-headline badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest mb-8">
            <Rocket size={12} />
            Bold Digital Strategies for Bold Businesses
          </div>

          {/* Main headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            We Build Digital
            <br />
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(90deg, #FFC107, #FF9800, #FFC107)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experiences
            </span>
            <br />
            That Drive Growth
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            We don&apos;t just build websites. We build growth engines. From stunning design and social strategy to AI automation — everything you need to dominate your market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-base shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #FF5722, #E91E63)', boxShadow: '0 8px 32px rgba(233, 30, 99, 0.4)' }}
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-base border-2 border-white/30 hover:bg-white/10 hover:border-white/60 active:scale-95 transition-all duration-200 backdrop-blur-sm"
            >
              View Our Work
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-6 md:gap-12 pt-10 border-t border-white/20 text-white"
          >
            {STATS.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} started={statsStarted} />
            ))}
          </div>

        </div>

        {/* Scroll indicator */}
        <a
          href="#services"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E91E63]/10 text-[#E91E63] text-xs font-semibold uppercase tracking-widest mb-4">
              <Layers size={12} />
              What We Do
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Five Ways We Grow
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #E91E63, #FF5722, #FF9800)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Your Business
              </span>
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-base md:text-lg">
              Full-service digital solutions, built to work together and amplify your results across every channel.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-7 border border-neutral-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Gradient accent line top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                {/* Gradient accent border (visible on hover via box-shadow) */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-5 shadow-lg`}
                >
                  {service.icon}
                </div>

                <h3
                  className="text-lg font-bold text-neutral-900 mb-3"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-[#E91E63] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            ))}

            {/* The fifth card spans differently on lg — handled by the grid auto-placement */}
          </div>

        </div>
      </section>

      {/* ── PORTFOLIO ──────────────────────────────────────────────────── */}
      <section
        id="portfolio"
        className="py-20 md:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0f0f14 0%, #1a0a24 50%, #0f0f14 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
              <TrendingUp size={12} />
              Our Work
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Real Projects.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Real Results.
              </span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg">
              We let the work speak for itself. Here&apos;s a look at what we built for one of our featured clients.
            </p>
          </div>

          {/* Case study card */}
          <div className="rounded-3xl overflow-hidden border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>

            {/* Top section with client info */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-8 md:px-12 py-8 border-b border-white/10">
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white flex-shrink-0">
                  <Image
                    src="/images/cjc-music-logo.png"
                    alt="CJC Music logo"
                    fill
                    sizes="64px"
                    style={{ objectFit: 'contain', padding: '6px' }}
                  />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Featured Client</p>
                  <h3
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    CJC Music
                  </h3>
                  <p className="text-white/60 text-sm">Premium Audio E-Commerce Platform</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'E-Commerce', 'UI/UX Design', '100+ Products'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshot gallery — overlapping card layout on desktop */}
            <div className="relative px-8 md:px-12 py-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 items-start">

                {/* Main hero screenshot */}
                <div className="md:col-span-7 relative rounded-xl overflow-hidden shadow-2xl z-10">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="/images/cjc-hero.jpg"
                      alt="CJC Music homepage — hero section"
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Overlapping secondary screenshots on desktop */}
                <div className="md:col-span-6 md:-ml-16 md:mt-12 flex flex-col gap-4 z-20">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
                    <div className="aspect-[16/10] relative">
                      <Image
                        src="/images/cjc-hero-2.jpg"
                        alt="CJC Music product listing page"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
                    <div className="aspect-[16/10] relative">
                      <Image
                        src="/images/cjc-hero-3.jpg"
                        alt="CJC Music product detail page"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project description */}
            <div className="px-8 md:px-12 py-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    CJC Music — Premium Audio E-Commerce
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We designed and developed a full-scale Next.js e-commerce platform for CJC Music, featuring 100+ product pages, a streamlined checkout experience, and a custom admin dashboard. The result: a high-performance storefront that reflects the brand&apos;s premium positioning and drives consistent online revenue.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6 md:justify-end">
                  {[
                    { value: '100+', label: 'Product Pages' },
                    { value: '2x', label: 'Faster Load Time' },
                    { value: 'A+', label: 'Performance Score' },
                  ].map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{
                          fontFamily: 'var(--font-space-grotesk)',
                          background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-white/50 text-xs uppercase tracking-wider">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────────────── */}
      <section id="process" className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9C27B0]/10 text-[#9C27B0] text-xs font-semibold uppercase tracking-widest mb-4">
              <GitMerge size={12} />
              Our Process
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              How We Work
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-base md:text-lg">
              A proven four-step framework that gets you from vision to launch — on time, on budget, on brand.
            </p>
          </div>

          {/* Process steps */}
          <div className="relative">
            {/* Connecting line — desktop */}
            <div
              className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 mx-32"
              style={{ background: 'linear-gradient(90deg, #E91E63, #FF5722, #FF9800, #FFC107)' }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg relative"
                    style={{
                      background: i === 0
                        ? 'linear-gradient(135deg, #E91E63, #FF5722)'
                        : i === 1
                        ? 'linear-gradient(135deg, #FF5722, #FF9800)'
                        : i === 2
                        ? 'linear-gradient(135deg, #FF9800, #FFC107)'
                        : 'linear-gradient(135deg, #9C27B0, #E91E63)',
                      fontFamily: 'var(--font-space-grotesk)',
                    }}
                  >
                    {step.number}
                    {/* White ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-neutral-50" />
                  </div>
                  <h3
                    className="text-xl font-bold text-neutral-900 mb-3"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0030, #9C27B0, #E91E63, #FF5722, #FF9800)' }}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-widest mb-5">
                  <Gift size={12} />
                  Free Download
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Free Canva Starter Kit
                </h2>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                  Get 10 ready-to-use Canva templates for social media posts, stories, and business cards. Start creating professional designs in minutes — no design experience needed.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['10 customizable Canva templates', 'Social media posts & stories', 'Business card template', 'Brand color guide worksheet'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/90">
                      <CheckCircle size={15} className="text-[#FFC107] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Email capture */}
                {leadSubmitted ? (
                  <div className="flex items-center gap-2 text-sm text-[#FFC107] font-medium">
                    <CheckCircle size={18} />
                    Check your inbox! Your starter kit is on the way.
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-[#FFC107] transition-colors"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white text-[#E91E63] hover:bg-white/90 transition-colors cursor-pointer"
                    >
                      <Download size={16} />
                      Get Free Kit
                    </button>
                  </form>
                )}
                <p className="text-white/40 text-[10px] mt-3">No spam. Unsubscribe anytime.</p>
              </div>

              {/* Right: Visual */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  {/* Stacked template mockups */}
                  <div className="w-56 h-56 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 rotate-3 shadow-2xl">
                    <div className="w-full h-full rounded-lg bg-white/10 flex items-center justify-center">
                      <div className="text-center">
                        <Palette size={32} className="text-white/60 mx-auto mb-2" />
                        <div className="text-white/80 text-xs font-medium">Social Post</div>
                        <div className="text-white/40 text-[10px]">Template 1 of 10</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-6 w-48 h-48 rounded-2xl bg-white/5 border border-white/10 -rotate-6" />
                  <div className="absolute -bottom-3 -right-5 w-44 h-44 rounded-2xl bg-white/5 border border-white/10 rotate-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E91E63]/10 text-[#E91E63] text-xs font-semibold uppercase tracking-widest mb-6">
                <MessageSquare size={12} />
                About Us
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                We&apos;re the Creative
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #9C27B0, #E91E63)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Partner You&apos;ve Been
                </span>
                <br />
                Looking For
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed mb-5">
                Fishbone Creative Solutions is a full-service creative agency built for businesses that refuse to settle. We combine strategic thinking, bold design, and cutting-edge technology to create digital experiences that genuinely move the needle.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed mb-8">
                Whether you&apos;re a startup carving out your identity or an established brand ready to level up — we bring the same relentless energy and craft to every project. We&apos;re not just an agency. We&apos;re your growth partner.
              </p>
              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Bold, results-driven strategy',
                  'Transparent communication',
                  'Relentless attention to detail',
                  'Technology-forward thinking',
                ].map((value) => (
                  <div key={value} className="flex items-center gap-2.5 text-sm text-neutral-700">
                    <CheckCircle size={16} className="text-[#E91E63] flex-shrink-0" />
                    {value}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              {/* Decorative gradient blob */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #9C27B0, #E91E63, #FF5722)' }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/office-workspace.png"
                    alt="Fishbone Creative Solutions workspace"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-8 rounded-2xl px-5 py-4 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #E91E63, #FF5722)' }}
              >
                <div className="text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  100%
                </div>
                <div className="text-white/80 text-xs font-medium uppercase tracking-wider">
                  Client Dedication
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────── */}
      <section id="testimonials" className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF9800]/15 text-[#FF5722] text-xs font-semibold uppercase tracking-widest mb-4">
              <Star size={12} />
              Social Proof
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              What Our Clients Say
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Don&apos;t take our word for it — hear from the businesses we&apos;ve helped grow.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={testimonial.name}
                className="relative bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Gradient accent top */}
                <div
                  className="absolute top-0 left-8 w-12 h-0.5 rounded-full"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(90deg, #E91E63, #FF5722)'
                      : i === 1
                      ? 'linear-gradient(90deg, #FF9800, #FFC107)'
                      : 'linear-gradient(90deg, #9C27B0, #E91E63)',
                  }}
                />

                {/* Quote icon */}
                <Quote
                  size={28}
                  className="mb-4 opacity-20"
                  style={{
                    color: i === 0 ? '#E91E63' : i === 1 ? '#FF9800' : '#9C27B0',
                  }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#FFC107] fill-[#FFC107]" />
                  ))}
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background: i === 0
                        ? 'linear-gradient(135deg, #E91E63, #FF5722)'
                        : i === 1
                        ? 'linear-gradient(135deg, #FF9800, #FFC107)'
                        : 'linear-gradient(135deg, #9C27B0, #E91E63)',
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-neutral-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────── */}
      <section
        className="relative py-20 md:py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0030, #9C27B0, #E91E63, #FF5722, #FF9800)' }}
      >
        {/* Geometric accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #FFC107, transparent)' }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #E91E63, transparent)' }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-widest mb-6">
            <Rocket size={12} />
            Ready to Launch?
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Ready to Transform Your
            <br />Digital Presence?
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-10">
            Join the businesses already growing with Fishbone. Drop your email and let&apos;s start the conversation.
          </p>

          {ctaSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-white bg-white/15 rounded-2xl py-5 px-8">
              <CheckCircle size={22} />
              <span className="font-semibold">Got it! We&apos;ll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleCtaSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={ctaEmail}
                onChange={(e) => setCtaEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/15 border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 text-sm backdrop-blur-sm transition-all"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white font-bold text-sm transition-all hover:scale-105 active:scale-95"
                style={{ color: '#E91E63' }}
              >
                Get Started
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E91E63]/10 text-[#E91E63] text-xs font-semibold uppercase tracking-widest mb-4">
              <Mail size={12} />
              Get In Touch
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Let&apos;s Build Something
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #E91E63, #FF5722)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Great Together
              </span>
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Ready to start your project? Tell us about your vision and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Contact form */}
            <div className="lg:col-span-3">
              {formSubmitted ? (
                <div className="rounded-2xl p-10 text-center border border-neutral-100 bg-neutral-50">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'linear-gradient(135deg, #E91E63, #FF5722)' }}
                  >
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Message Sent!
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    Thanks for reaching out. We&apos;ll review your project details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                        Full Name <span className="text-[#E91E63]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                        Email Address <span className="text-[#E91E63]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 transition-all appearance-none bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="website">Website Development</option>
                        <option value="social">Social Media Management</option>
                        <option value="design">Graphic Design</option>
                        <option value="ai">AI Integration</option>
                        <option value="automation">Workflow Automation</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                      Your Message <span className="text-[#E91E63]">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #E91E63, #FF5722)', boxShadow: '0 4px 20px rgba(233, 30, 99, 0.35)' }}
                  >
                    Send Your Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Info cards */}
              {[
                {
                  icon: <Mail size={20} />,
                  label: 'Email Us',
                  value: 'hello@fishbonecreative.com',
                  gradient: 'from-[#E91E63] to-[#FF5722]',
                },
                {
                  icon: <Phone size={20} />,
                  label: 'Call Us',
                  value: '+1 (555) 234-5678',
                  gradient: 'from-[#FF5722] to-[#FF9800]',
                },
                {
                  icon: <MapPin size={20} />,
                  label: 'Our Location',
                  value: 'Remote-first, Serving Worldwide',
                  gradient: 'from-[#9C27B0] to-[#E91E63]',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-100 hover:border-neutral-200 transition-colors"
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-neutral-800">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Response time badge */}
              <div
                className="rounded-2xl p-5 text-white mt-2"
                style={{ background: 'linear-gradient(135deg, #1a0030, #9C27B0)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Response Time</span>
                </div>
                <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  &lt; 24 Hours
                </p>
                <p className="text-white/60 text-xs mt-1">
                  We respond to every inquiry within one business day.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer
        className="pt-14 pb-8"
        style={{ background: 'linear-gradient(180deg, #0f0f14 0%, #1a1a2e 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">

            {/* Brand column */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20">
                  <Image
                    src="/images/fishbone-logo.jpg"
                    alt="Fishbone Creative Solutions"
                    fill
                    sizes="40px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span
                  className="text-white font-bold text-base"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Fishbone Creative
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                Bold digital strategies for forward-thinking businesses. We build growth engines.
              </p>
              {/* Social icons using available icon alternatives */}
              <div className="flex gap-3">
                {[
                  { label: 'Instagram', icon: <Share2 size={16} /> },
                  { label: 'LinkedIn', icon: <ArrowUpRight size={16} /> },
                  { label: 'Email', icon: <Mail size={16} /> },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/15 text-white/50 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services column */}
            <div className="md:col-span-3 md:col-start-6">
              <h4
                className="text-white font-semibold text-sm mb-4 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Services
              </h4>
              <ul className="space-y-2.5">
                {SERVICES.map((service) => (
                  <li key={service.title}>
                    <a href="#services" className="text-white/50 hover:text-white text-sm transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation column */}
            <div className="md:col-span-3 md:col-start-10">
              <h4
                className="text-white font-semibold text-sm mb-4 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Company
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'Courses', href: '/courses?v=1' },
                  { label: 'About', href: '#about' },
                  { label: 'Process', href: '#process' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7">
            <p className="text-white/30 text-xs text-center sm:text-left">
              &copy; 2024 Fishbone Creative Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/30 hover:text-white/60 text-xs transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}
