"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Play,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Mail,
  GraduationCap,
} from "lucide-react";

export default function CoursesPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{ background: "#0A0A0A", fontFamily: "var(--font-inter)" }}
    >
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b" style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/images/fishbone-logo.jpg"
              alt="Fishbone Creative Solutions"
              width={36}
              height={36}
              className="rounded-full"
              style={{ objectFit: "cover" }}
            />
            <span
              className="text-sm font-semibold text-white hidden sm:block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Fishbone Creative Solutions
            </span>
          </a>
          <a
            href="/"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
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
            style={{ background: "rgba(255,193,7,0.1)", color: "#FFC107" }}
          >
            <GraduationCap size={14} />
            Courses & Workshops
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Learn the Skills That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFC107, #FF9800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Grow Businesses
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Hands-on video courses and live workshops taught by our team. Learn
            the same strategies, tools, and techniques we use for our clients.
          </p>
        </div>
      </section>

      {/* ── Courses Grid ── */}
      <section className="pb-20 md:pb-28 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Video Courses */}
          <div
            className="rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "linear-gradient(135deg, #FFC107, #FF9800)" }}
            >
              <Play size={24} className="text-black ml-0.5" />
            </div>
            <span
              className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-4"
              style={{ background: "rgba(255,193,7,0.1)", color: "#FFC107" }}
            >
              On-Demand
            </span>
            <h2
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Video Courses
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-gray-300"
                >
                  <CheckCircle
                    size={15}
                    style={{ color: "#FFC107" }}
                    className="shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black"
              style={{ background: "linear-gradient(135deg, #FFC107, #FF9800)" }}
            >
              Coming Soon
            </div>
          </div>

          {/* Live Canva Workshops */}
          <div
            className="rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "linear-gradient(135deg, #FFC107, #FF9800)" }}
            >
              <Users size={24} className="text-black" />
            </div>
            <div className="flex items-center gap-1.5 mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#FFC107" }}
              />
              <span
                className="text-[10px] font-bold tracking-wider uppercase"
                style={{ color: "#FFC107" }}
              >
                Live Sessions
              </span>
            </div>
            <h2
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Live Canva Workshops
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-gray-300"
                >
                  <CheckCircle
                    size={15}
                    style={{ color: "#FFC107" }}
                    className="shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black"
              style={{ background: "linear-gradient(135deg, #FFC107, #FF9800)" }}
            >
              Coming Soon
            </div>

            {/* Canva Art Lab for Kids */}
            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
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
                    style={{
                      background: "rgba(255,193,7,0.15)",
                      color: "#FFC107",
                    }}
                  >
                    New Workshop
                  </span>
                  <h3
                    className="text-base font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Canva Art Lab for Kids
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    An online graphic design workshop for the kiddos! Teach your
                    kids creativity and digital design skills through fun, guided
                    Canva projects.
                  </p>
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
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,193,7,0.15)",
          }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Get Notified When We Launch
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Be the first to know when our courses and workshops go live. No spam, just updates.
          </p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-sm" style={{ color: "#FFC107" }}>
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
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-sm text-white placeholder-gray-500 outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(255,193,7,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-black cursor-pointer transition-all hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #FFC107, #FF9800)" }}
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
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          background: "#050505",
        }}
      >
        <p className="text-xs text-gray-600">
          &copy; 2024 Fishbone Creative Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
