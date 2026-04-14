"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  Play,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Mail,
  GraduationCap,
} from "lucide-react";

/* ─────────────────────────────────────────────
   THEME DEFINITIONS
   ───────────────────────────────────────────── */

const themes = {
  // V1: Bold & Energetic
  "1": {
    bg: "#ffffff",
    headerBg: "rgba(255,255,255,0.95)",
    headerBorder: "rgba(0,0,0,0.08)",
    textPrimary: "#171717",
    textSecondary: "#525252",
    textMuted: "#737373",
    accent1: "#E91E63",
    accent2: "#FF5722",
    accent1Gradient: "linear-gradient(135deg, #E91E63, #FF5722)",
    accent2Gradient: "linear-gradient(135deg, #9C27B0, #E91E63)",
    badgeBg: "rgba(233,30,99,0.1)",
    badgeColor: "#E91E63",
    badge2Bg: "rgba(156,39,176,0.1)",
    badge2Color: "#9C27B0",
    cardBg: "linear-gradient(135deg, #fafafa, #ffffff)",
    cardBorder: "1px solid #e5e5e5",
    cardHoverBorder: "rgba(233,30,99,0.3)",
    inputBg: "#f5f5f5",
    inputBorder: "#e5e5e5",
    inputText: "#171717",
    inputFocusBorder: "#E91E63",
    ctaBg: "linear-gradient(135deg, #E91E63, #FF5722)",
    ctaText: "#ffffff",
    footerBg: "#0f0f14",
    footerText: "#737373",
    sectionBg: "#fafafa",
    gradientText: "linear-gradient(135deg, #E91E63, #FF5722, #FF9800)",
    backLink: "/v1",
    dark: false,
    kidsBadgeBg: "rgba(255,152,0,0.1)",
    kidsBadgeColor: "#FF9800",
    checkColor1: "#E91E63",
    checkColor2: "#9C27B0",
    topLine1: "linear-gradient(90deg, #E91E63, #FF5722, #FF9800)",
    topLine2: "linear-gradient(90deg, #9C27B0, #E91E63, #FF5722)",
  },
  // V2: Clean & Professional
  "2": {
    bg: "#ffffff",
    headerBg: "rgba(255,255,255,0.98)",
    headerBorder: "rgba(0,0,0,0.06)",
    textPrimary: "#171717",
    textSecondary: "#525252",
    textMuted: "#a3a3a3",
    accent1: "#FF5722",
    accent2: "#FF5722",
    accent1Gradient: "#FF5722",
    accent2Gradient: "#FF5722",
    badgeBg: "rgba(255,87,34,0.08)",
    badgeColor: "#FF5722",
    badge2Bg: "rgba(255,87,34,0.08)",
    badge2Color: "#FF5722",
    cardBg: "#ffffff",
    cardBorder: "1px solid #e5e5e5",
    cardHoverBorder: "rgba(255,87,34,0.3)",
    inputBg: "#fafafa",
    inputBorder: "#e5e5e5",
    inputText: "#171717",
    inputFocusBorder: "#FF5722",
    ctaBg: "#FF5722",
    ctaText: "#ffffff",
    footerBg: "#0a0a0a",
    footerText: "#737373",
    sectionBg: "#fafafa",
    gradientText: "#FF5722",
    backLink: "/v2",
    dark: false,
    kidsBadgeBg: "rgba(255,87,34,0.08)",
    kidsBadgeColor: "#FF5722",
    checkColor1: "#FF5722",
    checkColor2: "#FF5722",
    topLine1: "#FF5722",
    topLine2: "#FF5722",
  },
  // V3: Dark & Premium
  "3": {
    bg: "#0A0A0A",
    headerBg: "rgba(10,10,10,0.9)",
    headerBorder: "rgba(255,255,255,0.06)",
    textPrimary: "#ffffff",
    textSecondary: "#a3a3a3",
    textMuted: "#525252",
    accent1: "#FFC107",
    accent2: "#FF9800",
    accent1Gradient: "linear-gradient(135deg, #FFC107, #FF9800)",
    accent2Gradient: "linear-gradient(135deg, #FFC107, #FF9800)",
    badgeBg: "rgba(255,193,7,0.1)",
    badgeColor: "#FFC107",
    badge2Bg: "rgba(255,193,7,0.1)",
    badge2Color: "#FFC107",
    cardBg: "rgba(255,255,255,0.03)",
    cardBorder: "1px solid rgba(255,255,255,0.08)",
    cardHoverBorder: "rgba(255,193,7,0.3)",
    inputBg: "rgba(255,255,255,0.05)",
    inputBorder: "rgba(255,255,255,0.1)",
    inputText: "#ffffff",
    inputFocusBorder: "rgba(255,193,7,0.4)",
    ctaBg: "linear-gradient(135deg, #FFC107, #FF9800)",
    ctaText: "#000000",
    footerBg: "#050505",
    footerText: "#404040",
    sectionBg: "#0D0D0D",
    gradientText: "linear-gradient(135deg, #FFC107, #FF9800)",
    backLink: "/v3",
    dark: true,
    kidsBadgeBg: "rgba(255,193,7,0.15)",
    kidsBadgeColor: "#FFC107",
    checkColor1: "#FFC107",
    checkColor2: "#FFC107",
    topLine1: "linear-gradient(135deg, #FFC107, #FF9800)",
    topLine2: "linear-gradient(135deg, #FFC107, #FF9800)",
  },
} as const;

type ThemeKey = keyof typeof themes;

/* ─────────────────────────────────────────────
   COURSES CONTENT (shared across themes)
   ───────────────────────────────────────────── */

function CoursesContent() {
  const searchParams = useSearchParams();
  const v = (searchParams.get("v") || "3") as ThemeKey;
  const t = themes[v] || themes["3"];

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: t.bg, fontFamily: "var(--font-inter)" }}>
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: t.headerBg,
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${t.headerBorder}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href={t.backLink} className="flex items-center gap-3">
            <Image
              src="/images/fishbone-logo.jpg"
              alt="Fishbone Creative Solutions"
              width={36}
              height={36}
              className="rounded-full"
              style={{ objectFit: "cover" }}
            />
            <span
              className="text-sm font-semibold hidden sm:block"
              style={{ fontFamily: "var(--font-space-grotesk)", color: t.textPrimary }}
            >
              Fishbone Creative Solutions
            </span>
          </a>
          <a
            href={t.backLink}
            className="flex items-center gap-1.5 text-xs transition-colors"
            style={{ color: t.textMuted }}
          >
            <ArrowLeft size={14} />
            Back to site
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: t.badgeBg, color: t.badgeColor }}
          >
            <GraduationCap size={14} />
            Courses & Workshops
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)", color: t.textPrimary }}
          >
            Learn the Skills That{" "}
            <span
              style={{
                background: t.gradientText,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Grow Businesses
            </span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: t.textSecondary }}>
            Hands-on video courses and live workshops taught by our team. Learn
            the same strategies, tools, and techniques we use for our clients.
          </p>
        </div>
      </section>

      {/* ── Courses Grid ── */}
      <section className="pb-20 md:pb-28 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Video Courses Card */}
          <div
            className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative"
            style={{
              background: t.cardBg,
              border: t.cardBorder,
              backdropFilter: t.dark ? "blur(20px)" : undefined,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: t.topLine1 }} />
            <div className="p-8 md:p-10">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: t.accent1Gradient }}
              >
                <Play size={24} className="ml-0.5" style={{ color: t.dark ? "#000" : "#fff" }} />
              </div>
              <span
                className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-4"
                style={{ background: t.badgeBg, color: t.badgeColor }}
              >
                On-Demand
              </span>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)", color: t.textPrimary }}
              >
                Video Courses
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: t.textSecondary }}>
                Self-paced video courses covering website development, social media
                strategy, graphic design fundamentals, and AI-powered automation.
                Watch anytime, learn at your own pace.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "HD video lessons + worksheets",
                  "Lifetime access to course materials",
                  "Downloadable templates & resources",
                  "Certificate of completion",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: t.dark ? "#d4d4d4" : "#525252" }}>
                    <CheckCircle size={15} style={{ color: t.checkColor1 }} className="shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
                style={{ background: t.ctaBg, color: t.ctaText }}
              >
                Coming Soon
              </div>
            </div>
          </div>

          {/* Live Canva Workshops Card */}
          <div
            className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative"
            style={{
              background: t.cardBg,
              border: t.cardBorder,
              backdropFilter: t.dark ? "blur(20px)" : undefined,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: t.topLine2 }} />
            <div className="p-8 md:p-10">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: t.accent2Gradient }}
              >
                <Users size={24} style={{ color: t.dark ? "#000" : "#fff" }} />
              </div>
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: t.badge2Color }} />
                <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: t.badge2Color }}>
                  Live Sessions
                </span>
              </div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)", color: t.textPrimary }}
              >
                Live Canva Workshops
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: t.textSecondary }}>
                Join our interactive live workshops and master Canva for your
                business. From social media graphics to brand kits, presentations,
                and marketing materials — all in real-time with Q&A.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Live instructor-led sessions",
                  "Real-time Q&A and feedback",
                  "Hands-on design exercises",
                  "Workshop recordings & resources",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: t.dark ? "#d4d4d4" : "#525252" }}>
                    <CheckCircle size={15} style={{ color: t.checkColor2 }} className="shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
                style={{ background: t.ctaBg, color: t.ctaText }}
              >
                Coming Soon
              </div>

              {/* Canva Art Lab for Kids */}
              <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${t.dark ? "rgba(255,255,255,0.08)" : "#e5e5e5"}` }}>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src="/images/canva-art-lab-kids.jpg"
                      alt="Canva Art Lab for Kids — Online Graphic Design Workshop"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <span
                      className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full mb-2"
                      style={{ background: t.kidsBadgeBg, color: t.kidsBadgeColor }}
                    >
                      New Workshop
                    </span>
                    <h3
                      className="text-base font-bold mb-1"
                      style={{ fontFamily: "var(--font-space-grotesk)", color: t.textPrimary }}
                    >
                      Canva Art Lab for Kids
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: t.textMuted }}>
                      An online graphic design workshop for the kiddos! Teach your
                      kids creativity and digital design skills through fun, guided
                      Canva projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Notify CTA ── */}
      <section className="pb-20 md:pb-28 px-5">
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: t.dark ? "rgba(255,255,255,0.03)" : t.sectionBg,
            border: `1px solid ${t.dark ? "rgba(255,193,7,0.15)" : "#e5e5e5"}`,
          }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)", color: t.textPrimary }}
          >
            Get Notified When We Launch
          </h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: t.textSecondary }}>
            Be the first to know when our courses and workshops go live. No spam, just updates.
          </p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-sm" style={{ color: t.badgeColor }}>
              <CheckCircle size={18} />
              You&apos;re on the list! We&apos;ll be in touch.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: t.textMuted }} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none transition-colors"
                  style={{
                    background: t.inputBg,
                    border: `1px solid ${t.inputBorder}`,
                    color: t.inputText,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = t.inputFocusBorder)}
                  onBlur={(e) => (e.target.style.borderColor = t.inputBorder)}
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all hover:shadow-lg"
                style={{ background: t.ctaBg, color: t.ctaText }}
              >
                Notify Me
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-8 px-5 text-center"
        style={{ borderTop: `1px solid ${t.dark ? "rgba(255,255,255,0.05)" : "#e5e5e5"}`, background: t.footerBg }}
      >
        <p className="text-xs" style={{ color: t.footerText }}>
          &copy; 2024 Fishbone Creative Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE (wrapped in Suspense for useSearchParams)
   ───────────────────────────────────────────── */

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center" style={{ background: "#0A0A0A" }}>
          <div className="w-6 h-6 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CoursesContent />
    </Suspense>
  );
}
