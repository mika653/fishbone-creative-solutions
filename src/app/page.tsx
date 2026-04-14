import Image from "next/image";
import { Layers, Sparkles, Zap } from "lucide-react";

const iterations = [
  {
    slug: "v1",
    label: "Bold & Energetic",
    badge: "V1",
    color: "from-pink-500 to-amber-500",
    borderColor: "hover:border-pink-400",
    icon: <Layers size={24} className="text-pink-500" />,
    description:
      "Vibrant gradients, geometric accents, animated counters, and bold typography. Startup energy meets creative agency.",
  },
  {
    slug: "v2",
    label: "Clean & Professional",
    badge: "V2",
    color: "from-orange-500 to-red-500",
    borderColor: "hover:border-orange-400",
    icon: <Sparkles size={24} className="text-orange-500" />,
    description:
      "Minimal whitespace-driven design with coral accent. Elegant typography, accordion services, refined portfolio.",
  },
  {
    slug: "v3",
    label: "Dark & Premium",
    badge: "V3",
    color: "from-amber-400 to-yellow-500",
    borderColor: "hover:border-amber-400",
    icon: <Zap size={24} className="text-amber-500" />,
    description:
      "Immersive dark theme with gold glow, glassmorphism cards, animated gradient orbs, and exclusive positioning.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      {/* Logo + heading */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg mb-5">
          <Image
            src="/images/fishbone-logo.jpg"
            alt="Fishbone Creative Solutions"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <h1
          className="text-2xl sm:text-3xl font-bold text-neutral-900 text-center tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
        >
          Fishbone Creative Solutions
        </h1>
        <p className="text-neutral-500 text-sm mt-2 text-center max-w-md">
          Choose a design direction to preview. Each opens in a new tab.
        </p>
      </div>

      {/* 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-4xl">
        {iterations.map((it) => (
          <a
            key={it.slug}
            href={`/${it.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block bg-white border border-neutral-200 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg ${it.borderColor} cursor-pointer`}
          >
            {/* Badge */}
            <span
              className={`inline-block text-[11px] font-bold text-white px-2.5 py-1 rounded-full bg-gradient-to-r ${it.color} mb-4`}
            >
              {it.badge}
            </span>

            {/* Icon + title */}
            <div className="flex items-center gap-3 mb-3">
              {it.icon}
              <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                {it.label}
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-500 leading-relaxed">
              {it.description}
            </p>

            {/* Open hint */}
            <p className="text-xs text-neutral-400 mt-4 group-hover:text-neutral-600 transition-colors">
              Click to open in new tab &rarr;
            </p>
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="text-xs text-neutral-400 mt-16">
        &copy; 2024 Fishbone Creative Solutions
      </p>
    </div>
  );
}
