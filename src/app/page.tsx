"use client";

import Image from "next/image";
import { useState } from "react";
import { Layers, Sparkles, Zap, Monitor, Tablet, Smartphone } from "lucide-react";

const versions = [
  {
    slug: "v1",
    label: "Bold & Energetic",
    icon: <Layers size={16} />,
    accent: "#E91E63",
  },
  {
    slug: "v2",
    label: "Clean & Professional",
    icon: <Sparkles size={16} />,
    accent: "#FF5722",
  },
  {
    slug: "v3",
    label: "Dark & Premium",
    icon: <Zap size={16} />,
    accent: "#FFC107",
  },
];

const devices = [
  { key: "mobile", label: "Mobile", icon: <Smartphone size={16} />, width: 375 },
  { key: "tablet", label: "Tablet", icon: <Tablet size={16} />, width: 768 },
  { key: "desktop", label: "Desktop", icon: <Monitor size={16} />, width: "100%" },
] as const;

export default function Home() {
  const [activeVersion, setActiveVersion] = useState(0);
  const [activeDevice, setActiveDevice] = useState<number>(2); // default desktop

  const currentVersion = versions[activeVersion];
  const currentDevice = devices[activeDevice];
  const iframeWidth = currentDevice.width;

  return (
    <div className="h-screen flex flex-col bg-neutral-100 overflow-hidden">
      {/* ── Top bar ── */}
      <header className="bg-white border-b border-neutral-200 px-4 py-2.5 flex items-center justify-between shrink-0">
        {/* Left: logo + title */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0">
            <Image
              src="/images/fishbone-logo.jpg"
              alt="Fishbone Creative Solutions"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <span
            className="text-sm font-semibold text-neutral-800 hidden sm:block"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Fishbone Creative Solutions
          </span>
        </div>

        {/* Center: Version tabs */}
        <div className="flex items-center bg-neutral-100 rounded-lg p-1 gap-0.5">
          {versions.map((v, i) => (
            <button
              key={v.slug}
              onClick={() => setActiveVersion(i)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeVersion === i
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {v.icon}
              <span className="hidden sm:inline">{v.label}</span>
              <span className="sm:hidden">{v.slug.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Right: Device switcher */}
        <div className="flex items-center bg-neutral-100 rounded-lg p-1 gap-0.5">
          {devices.map((d, i) => (
            <button
              key={d.key}
              onClick={() => setActiveDevice(i)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeDevice === i
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
              title={d.label}
            >
              {d.icon}
              <span className="hidden md:inline">{d.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* ── Info strip ── */}
      <div className="bg-white border-b border-neutral-200 px-4 py-1.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: currentVersion.accent }}
          />
          <span className="text-xs text-neutral-600 font-medium">
            {currentVersion.label}
          </span>
          <span className="text-xs text-neutral-400">
            &middot; {currentDevice.label} view
            {typeof iframeWidth === "number" && ` (${iframeWidth}px)`}
          </span>
        </div>
        <a
          href={`/${currentVersion.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          Open in new tab &rarr;
        </a>
      </div>

      {/* ── Preview area ── */}
      <div className="flex-1 flex items-start justify-center overflow-auto p-4">
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out h-full"
          style={{
            width: typeof iframeWidth === "number" ? `${iframeWidth}px` : "100%",
            maxWidth: "100%",
            border: `2px solid ${currentVersion.accent}20`,
          }}
        >
          <iframe
            key={`${currentVersion.slug}-${currentDevice.key}`}
            src={`/${currentVersion.slug}`}
            className="w-full h-full border-0"
            title={`${currentVersion.label} - ${currentDevice.label} preview`}
          />
        </div>
      </div>
    </div>
  );
}
