import React from 'react';
import { ArrowRight, Code2, ShieldCheck, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { CEO_PROFILE } from '../data/profileData';

interface ExecutiveHeroProps {
  onOpenBio: () => void;
  onOpenContact: () => void;
}

export const ExecutiveHero: React.FC<ExecutiveHeroProps> = ({ onOpenBio, onOpenContact }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/5 blur-[120px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker with typographic separators (NO PILLS) */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-cyan-400">
              <span>Executive Profile</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Chief Executive Officer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Gothwad Tech</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-outfit [text-wrap:balance]">
              Architecting India’s <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Tech Sovereignty</span> with Sovereign Code.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              I am <strong className="font-semibold text-white">Yuvkesh Meena</strong>, Chief Executive Officer of Gothwad Tech. Our mission is direct: eradicate reliance on foreign software monopolies by engineering high-performance, privacy-first communication protocols, mobile developer studios, and on-device AI—built with Indian brains.
            </p>

            {/* Motto Callout */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm max-w-2xl">
              <p className="text-sm italic text-slate-300">
                "{CEO_PROFILE.motto}"
              </p>
            </div>

            {/* Action CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#repositories"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-950/40 hover:shadow-cyan-800/40 transition-all active:scale-[0.98]"
              >
                <span>Inspect Repositories</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBio}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.12] hover:border-white/20 rounded-lg transition-all active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Executive Bio</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Get in Touch</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Executive Portrait & Crest Visual Anchor */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#111726] to-[#0A0E18] border border-white/10 p-6 lg:p-8 shadow-2xl relative overflow-hidden group">
              {/* Background geometric accents */}
              <div 
                aria-hidden="true" 
                className="absolute -top-24 -right-24 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-colors"
              />
              <div 
                aria-hidden="true" 
                className="absolute -bottom-24 -left-24 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
              />

              {/* Verified Executive Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>VERIFIED EXECUTIVE IDENTITY</span>
                </div>
                <span className="text-xs font-mono text-slate-500">ID: YM-CEO-01</span>
              </div>

              {/* Portrait Centerpiece Representation */}
              <div className="my-8 flex flex-col items-center text-center">
                <div className="relative">
                  {/* Subtle outer glow ring */}
                  <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-[2px] shadow-lg shadow-cyan-950/60">
                    <div className="w-full h-full rounded-2xl bg-[#080C14] flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold text-2xl font-outfit mb-2 shadow-inner">
                        YM
                      </div>
                      <span className="text-xs font-semibold text-white tracking-wide uppercase font-outfit">
                        Yuvkesh Meena
                      </span>
                      <span className="text-[10px] text-cyan-400 font-mono mt-0.5">
                        CEO & Architect
                      </span>
                    </div>
                  </div>
                  {/* Floating verification badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg p-1.5 shadow-md border border-[#070A11]">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <div className="mt-5 space-y-1">
                  <h2 className="text-xl font-bold text-white font-outfit">
                    Yuvkesh Meena
                  </h2>
                  <p className="text-xs text-cyan-400 font-medium tracking-wide">
                    Chief Executive Officer · Gothwad Tech
                  </p>
                  <p className="text-xs text-slate-400 font-mono pt-1">
                    github.com/gothwadtech
                  </p>
                </div>
              </div>

              {/* Executive Credentials & Focus Tags (Zero-Pills: Clean unboxed layout) */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <Terminal className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 font-medium">Flagship Systems: </span>
                    <span className="text-slate-200">Indigram, GrixChat, Gothwad AI Studio</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <Code2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 font-medium">Core Architecture: </span>
                    <span className="text-slate-200">On-Device Whisper AI, MTProto, High-Perf Go/Rust</span>
                  </div>
                </div>
              </div>

              {/* Direct Link to GitHub Org */}
              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <a
                  href={CEO_PROFILE.githubOrgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white p-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                >
                  <span>Explore GitHub Codebases (@gothwadtech)</span>
                  <span className="text-cyan-400">27+ Repos ↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Row Below Split: 4-Column KPI / Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CEO_PROFILE.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 font-outfit">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-normal">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
