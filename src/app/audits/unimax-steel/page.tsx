import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  Layout,
  Type,
  Palette,
  Code2,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Unimax Steel — Website Audit | Fishbone Creative Solutions",
  description:
    "A multidisciplinary review of unimaxsteel.com — built to highlight what's working, what's possible, and where to focus next. Prepared by Fishbone Creative Solutions.",
  openGraph: {
    title: "Unimax Steel — Website Audit",
    description:
      "Five lenses, one report. UX, copy, design, dev, and marketing recommendations for Unimax Steel Resources, Inc.",
    type: "article",
  },
};

const team = [
  { role: "UX / UI Designer", lens: "How easy and intuitive the site is to use." },
  { role: "Copywriter", lens: "The words, tone, and clarity of the message." },
  { role: "Graphic Designer", lens: "Visual identity, photography, and brand feel." },
  { role: "Web Developer", lens: "The technical foundation under the hood." },
  { role: "Digital Marketing Expert", lens: "How the site attracts visitors, builds trust, and converts inquiries." },
];

const strengths = [
  "A clean, logical menu — Home, About, Products, Projects, Contact — exactly what a buyer expects.",
  "Phone, email, and address are visible across every page, which builds confidence quickly.",
  "A downloadable brochure gives serious buyers something tangible to share with their team.",
  "Three-location coverage (Quezon City HQ, Pampanga, Pangasinan) signals real operational scale.",
  "A clear product family — Roofing, Decking, C-Purlins, Spandrel, Insulated Panels, Metal Furring — well-organised into recognisable categories.",
];

type Specialist = {
  number: string;
  role: string;
  tag: string;
  intro: string;
  icon: React.ReactNode;
  recommendations: { title: string; body: React.ReactNode }[];
};

const specialists: Specialist[] = [
  {
    number: "01",
    role: "UX / UI Designer",
    tag: "Make it easier to say yes.",
    icon: <Layout size={20} />,
    intro:
      "Right now, a visitor lands on the homepage and has to scroll and read to understand what to do next. We can make the path from curiosity to inquiry feel almost effortless.",
    recommendations: [
      {
        title: "Sharpen the hero section.",
        body: (
          <>The first screen should answer three questions in five seconds: <em>Who are you? What do you sell? What should I do next?</em> A single strong headline plus one clear button (e.g., &ldquo;Request a Quote&rdquo;) works harder than multiple competing links.</>
        ),
      },
      {
        title: "Add breathing room.",
        body: <>The current layout is information-rich but feels tight. A bit more space between sections lets each message land.</>,
      },
      {
        title: "Strengthen the call-to-action buttons.",
        body: <>Buttons like &ldquo;See Roofing Options&rdquo; or &ldquo;Get a Project Quote&rdquo; tell people exactly what they&rsquo;ll get when they click.</>,
      },
      {
        title: "Add a sticky &ldquo;Get a Quote&rdquo; button on mobile.",
        body: <>Many buyers are on-site or on the road — a tap-to-inquire button that follows them down the page can lift inquiries significantly.</>,
      },
      {
        title: "Make product cards more inviting",
        body: <>with a short benefit line under each name (e.g., <em>&ldquo;Long-span, pre-painted, fade-resistant&rdquo;</em>) so visitors don&rsquo;t have to click into every page to compare.</>,
      },
    ],
  },
  {
    number: "02",
    role: "Copywriter",
    tag: "Sound like the leader you are.",
    icon: <Type size={20} />,
    intro: "The current copy is professional but generic. With a few sharper lines, it can sound unmistakably like Unimax.",
    recommendations: [
      {
        title: "Tighten the value proposition.",
        body: <>&ldquo;Passion for Strength &amp; Quality&rdquo; is a nice tagline — pair it with something specific buyers care about: <em>&ldquo;Pre-painted Philippine steel — delivered fast, priced fairly, built to last.&rdquo;</em></>,
      },
      {
        title: "Clean up small typos.",
        body: <>A few quick fixes will make the site feel more polished — for example, &ldquo;Conatct Us,&rdquo; &ldquo;discorver more,&rdquo; &ldquo;Seirra,&rdquo; and &ldquo;Send your inquries&rdquo; — plus a small repetition in the vision statement.</>,
      },
      {
        title: "Lead with benefits, not just features.",
        body: <>Add one sentence per product on <em>who it&rsquo;s for</em> and <em>why it&rsquo;s chosen</em> — e.g., <em>&ldquo;Maxi Hi Rib — engineered for wide-span warehouses where speed of installation matters.&rdquo;</em></>,
      },
      {
        title: "Tell the Unimax story with more confidence.",
        body: <>The 2017 origin and 2020 Pangasinan expansion are great milestones — turn them into a short, proud &ldquo;Our Journey&rdquo; section that signals momentum.</>,
      },
      {
        title: "Add an FAQ section.",
        body: <>Questions like <em>&ldquo;What&rsquo;s the lead time?&rdquo;</em>, <em>&ldquo;Do you deliver to my province?&rdquo;</em>, <em>&ldquo;What gauges are available?&rdquo;</em> answer real buyer hesitations and double as SEO gold.</>,
      },
    ],
  },
  {
    number: "03",
    role: "Graphic Designer",
    tag: "Look as premium as the product.",
    icon: <Palette size={20} />,
    intro: "Your products are physical, tactile, and impressive in scale. The site can do more to convey that.",
    recommendations: [
      {
        title: "Invest in one strong photo shoot.",
        body: <>A handful of high-resolution, on-site photos — sheets being installed, a finished warehouse roof at golden hour, close-ups of profile detail — will lift the entire site. This single investment pays back across the site, brochure, and social channels.</>,
      },
      {
        title: "Establish a clear colour system.",
        body: <>A defined palette (one signature colour, one accent, plus neutrals) used consistently across buttons, headers, and icons makes the brand feel intentional.</>,
      },
      {
        title: "Standardise typography.",
        body: <>Pick one font for headlines and one for body text and use them consistently across all pages.</>,
      },
      {
        title: "Refresh the brochure to match.",
        body: <>The downloadable PDF is a key sales tool — it deserves the same level of design polish as the website.</>,
      },
      {
        title: "Add a simple &ldquo;made in the Philippines&rdquo; or quality mark.",
        body: <>A small visual badge for local manufacturing is meaningful for buyers who value supporting Philippine industry.</>,
      },
    ],
  },
  {
    number: "04",
    role: "Web Developer",
    tag: "Strengthen the foundation.",
    icon: <Code2 size={20} />,
    intro: "The site works — a few under-the-hood improvements will make it faster, safer, and easier for Google to recommend.",
    recommendations: [
      {
        title: "Confirm the secure padlock (HTTPS) is active site-wide.",
        body: <>Buyers (and Google) trust sites that visibly show a secure connection.</>,
      },
      {
        title: "Use a branded email address.",
        body: <><em>unimaxsteel@gmail.com</em> works, but <em>inquiries@unimaxsteel.com</em> instantly looks more established and is easy to set up.</>,
      },
      {
        title: "Add page titles and short descriptions",
        body: <>to every page. These are the small lines of text that show up on Google — often the first impression a buyer has of you.</>,
      },
      {
        title: "Optimise images for fast loading.",
        body: <>Larger product photos can be compressed without losing visible quality, making the site feel snappier — especially on mobile data.</>,
      },
      {
        title: "Run a quick mobile check on real phones",
        body: <>to confirm everything (forms, buttons, menu) works smoothly on iPhone and Android.</>,
      },
      {
        title: "Add Google Analytics",
        body: <>so we can see which products get the most interest and which pages convert best.</>,
      },
      {
        title: "Embed a Google Map",
        body: <>on the Contact page for each location — buyers planning a site visit will appreciate it.</>,
      },
    ],
  },
  {
    number: "05",
    role: "Digital Marketing Expert",
    tag: "Turn visitors into inquiries.",
    icon: <TrendingUp size={20} />,
    intro: "You're getting traffic from people searching \"roofing supplier Philippines,\" \"steel decking,\" and similar terms. The site can do more to convert that interest into phone calls and emails.",
    recommendations: [
      {
        title: "Add social proof.",
        body: (
          <>
            The single biggest lift available, in order of impact:
            <ul className="mt-2 space-y-1.5 list-disc list-outside ml-5 marker:text-[#FF5722]">
              <li><em>Project showcases</em> — 3–5 named projects with photos and a short story (<em>&ldquo;15,000 sqm warehouse roof, completed in 12 weeks&rdquo;</em>).</li>
              <li><em>Client logos</em> — contractors and developers you&rsquo;ve supplied.</li>
              <li><em>Testimonials</em> — even two or three short quotes carry huge weight in B2B.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Add trust markers.",
        body: <>Certifications, association memberships, and warranty terms — display them clearly on the homepage and product pages.</>,
      },
      {
        title: "Capture leads more actively.",
        body: <>Beyond the brochure download, add a <em>&ldquo;Request a Quote&rdquo;</em> form with a few simple fields (name, project type, location, quantity estimate).</>,
      },
      {
        title: "Display office hours and a response-time commitment",
        body: <>(&ldquo;We reply to all inquiries within 1 business day&rdquo;). Small promise, big confidence boost.</>,
      },
      {
        title: "Activate the social channels.",
        body: <>A steady rhythm of project photos and short build videos will compound over time and drive return visits.</>,
      },
      {
        title: "Consider a simple blog or &ldquo;Resources&rdquo; section.",
        body: <>Articles like <em>&ldquo;How to Choose Between Hi-Rib and Corrugated Roofing&rdquo;</em> attract buyers early in their research and rank well on Google.</>,
      },
    ],
  },
];

const roadmap = [
  {
    phase: "Phase 1 · This month",
    title: "Quick Wins",
    items: [
      "Fix the small typos across the site.",
      "Switch to a branded email address (inquiries@unimaxsteel.com).",
      "Add a strong headline and a single primary call-to-action on the homepage.",
      "Embed Google Maps on the Contact page.",
      "Add office hours and a response-time commitment.",
    ],
  },
  {
    phase: "Phase 2 · 1 to 3 months",
    title: "Strategic Upgrades",
    items: [
      "Professional photo shoot — products and finished projects.",
      "Rewrite product pages with benefits and a short FAQ each.",
      "Add a “Featured Projects” section with 3–5 case studies.",
      "Add a “Request a Quote” form, connected to your inbox.",
      "Display certifications and warranty information.",
    ],
  },
  {
    phase: "Phase 3 · 3 to 6 months",
    title: "Growth Investments",
    items: [
      "Refresh the brochure to match the upgraded site.",
      "Launch a simple Resources / blog section (1–2 articles per month).",
      "Build a steady social media content rhythm.",
      "Set up Google Analytics + a basic monthly performance review.",
    ],
  },
];

export default function UnimaxAuditPage() {
  return (
    <main className="bg-white text-neutral-900" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
      {/* ── Header ── */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-7 h-7 rounded-md overflow-hidden">
              <Image src="/images/fishbone-logo.jpg" alt="Fishbone Creative Solutions" fill style={{ objectFit: "cover" }} priority />
            </div>
            <span className="text-sm font-semibold text-neutral-800 hidden sm:inline" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
              Fishbone Creative Solutions
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#FF5722]" />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold uppercase tracking-[0.18em] mb-6">
            Website Audit &amp; Recommendations
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] mb-6" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Unimax Steel<br />
            <span className="text-[#FF5722]">Website Audit</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-8">
            A multidisciplinary review of unimaxsteel.com — built to highlight what&rsquo;s working, what&rsquo;s possible, and where to focus next.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="/audits/unimax-steel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-[#FF5722] transition-colors text-white px-5 py-3 rounded-lg text-sm font-semibold"
            >
              <Download size={16} /> Download PDF version
            </a>
            <a
              href="https://unimaxsteel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900 transition-colors px-5 py-3 rounded-lg text-sm font-semibold"
            >
              Visit unimaxsteel.com <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 pt-8 border-t border-neutral-200 text-sm">
            <div>
              <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Prepared for</div>
              <div className="font-semibold text-neutral-900">Unimax Steel Resources, Inc.</div>
            </div>
            <div>
              <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Prepared by</div>
              <div className="font-semibold text-neutral-900">Fishbone Creative Solutions</div>
            </div>
            <div>
              <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Date</div>
              <div className="font-semibold text-neutral-900">April 29, 2026</div>
            </div>
            <div>
              <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Site reviewed</div>
              <div className="font-semibold text-neutral-900">unimaxsteel.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Executive Summary ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5722] mb-3">
          01 &mdash; Executive Summary
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
          The headline
        </h2>
        <p className="text-neutral-600 text-lg max-w-3xl mb-8 leading-relaxed">
          Unimax Steel has built a solid, professional foundation online. The opportunities ahead are about polish, persuasion, and trust-building — small refinements that, taken together, can make the site feel like the obvious choice for contractors, developers, and project owners.
        </p>

        <div className="border-l-4 border-[#FF5722] bg-[#FF5722]/5 rounded-r-lg p-6 sm:p-7 space-y-4 max-w-3xl">
          <p className="text-neutral-700">
            <span className="font-bold text-neutral-900">What we love:</span> Clear menu structure, three-location coverage, prominent contact details, and a downloadable brochure that gives serious buyers something tangible to share.
          </p>
          <p className="text-neutral-700">
            <span className="font-bold text-neutral-900">Where we&rsquo;ll focus:</span> Sharper messaging, stronger trust signals, more confident product storytelling, and a few technical refinements that make the site faster and easier to find on Google.
          </p>
          <p className="text-neutral-700">
            <span className="font-bold text-neutral-900">How we&rsquo;ve organised it:</span> Recommendations are grouped into <em>Quick Wins</em> (this month), <em>Strategic Upgrades</em> (1–3 months), and <em>Growth Investments</em> (3–6 months) — so progress is visible early and momentum compounds over time.
          </p>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5722] mb-3">
            02 &mdash; Your Audit Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Five lenses, one report
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
            We assembled five specialists to look at your site through different lenses, so every recommendation comes from someone who lives in that craft daily.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m) => (
              <div
                key={m.role}
                className="bg-white rounded-xl border border-neutral-200 border-l-4 border-l-[#FF5722] p-5 transition-shadow hover:shadow-md"
              >
                <div className="font-bold text-neutral-900 mb-1.5">{m.role}</div>
                <div className="text-neutral-600 text-sm leading-relaxed">{m.lens}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Working Well ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5722] mb-3">
          03 &mdash; What&rsquo;s Working Well
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
          Strengths to build on
        </h2>
        <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
          Before recommendations, here&rsquo;s what the team agreed is genuinely strong about the current site.
        </p>

        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {strengths.map((s, i) => (
            <li key={i} className="flex items-start gap-4 py-4">
              <CheckCircle2 size={20} className="text-[#FF5722] shrink-0 mt-0.5" />
              <span className="text-neutral-700 leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Specialist Findings ── */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5722] mb-3">
            04 &mdash; Specialist Findings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            Recommendations from each lens
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-12 leading-relaxed">
            Each note below is framed as an opportunity — what&rsquo;s possible if we build on the foundation that&rsquo;s already there.
          </p>

          <div className="space-y-6">
            {specialists.map((s) => (
              <article
                key={s.number}
                className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8"
              >
                <header className="flex items-start gap-4 mb-5 pb-5 border-b border-neutral-100">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#FF5722] text-white flex items-center justify-center">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500 mb-1">
                      Specialist {s.number}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-900" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                      {s.role}
                    </h3>
                    <p className="text-[#FF5722] italic text-sm font-medium mt-1">&ldquo;{s.tag}&rdquo;</p>
                  </div>
                </header>
                <p className="text-neutral-700 leading-relaxed mb-5">{s.intro}</p>
                <ul className="space-y-3.5">
                  {s.recommendations.map((r, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF5722] mt-2.5" />
                      <div className="text-neutral-700 leading-relaxed">
                        <span className="font-semibold text-neutral-900">{r.title}</span>{" "}
                        {r.body}
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5722] mb-3">
          05 &mdash; Recommended Roadmap
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
          A phased, low-risk path forward
        </h2>
        <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
          We suggest tackling improvements in this order so you see results quickly without disrupting the site.
        </p>

        <div className="space-y-4">
          {roadmap.map((r) => (
            <div
              key={r.title}
              className="bg-neutral-50 border-l-4 border-[#FF5722] rounded-r-xl p-6 sm:p-7"
            >
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#D9621A] mb-1.5">
                {r.phase}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 text-neutral-900" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                {r.title}
              </h3>
              <ol className="space-y-2 list-decimal list-outside ml-5 marker:text-[#FF5722] marker:font-bold">
                {r.items.map((item, i) => (
                  <li key={i} className="text-neutral-700 leading-relaxed pl-1">{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
            A closing note
          </h3>
          <p className="text-white/80 leading-relaxed mb-4 max-w-3xl">
            Unimax Steel has the product range, the geographic reach, and the operational story to be a leading name in Philippine steel. The website is already doing real work for the business — these recommendations are about helping it work <em>harder</em>, so every visitor is one step closer to becoming a customer.
          </p>
          <p className="text-white/80 leading-relaxed mb-6 max-w-3xl">
            We&rsquo;d suggest starting with the Quick Wins so you see momentum within weeks, then planning the Strategic Upgrades as a focused 60–90 day project.
          </p>
          <p className="text-[#FF5722] font-bold mb-8">
            Happy to walk you through any section in detail, or scope a phased engagement around the priorities that matter most.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@fishbonecreative.com?subject=Unimax%20Steel%20Audit%20%E2%80%94%20next%20steps"
              className="inline-flex items-center gap-2 bg-[#FF5722] hover:bg-[#E64A19] transition-colors text-white px-5 py-3 rounded-lg text-sm font-semibold"
            >
              Talk to us about next steps <ArrowUpRight size={16} />
            </a>
            <a
              href="/audits/unimax-steel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white transition-colors px-5 py-3 rounded-lg text-sm font-semibold"
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        </div>

        <p className="text-center text-xs uppercase tracking-[0.18em] text-neutral-400 mt-10">
          Fishbone Creative Solutions &nbsp;·&nbsp; Strategy &nbsp;·&nbsp; Design &nbsp;·&nbsp; Copy &nbsp;·&nbsp; Development &nbsp;·&nbsp; Marketing
        </p>
      </section>
    </main>
  );
}
