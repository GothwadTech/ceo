import React from 'react';
import { ArrowUpRight, BookOpen, Cpu, Shield, Smartphone, GraduationCap } from 'lucide-react';
import { LEADERSHIP_TENETS, CEO_PROFILE } from '../data/profileData';

interface LeadershipVisionProps {
  onOpenBio: () => void;
}

export const LeadershipVision: React.FC<LeadershipVisionProps> = ({ onOpenBio }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'sovereignty':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'privacy':
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case 'mobile-first':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'grassroots-edtech':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="vision" className="py-20 lg:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
              <span>Leadership Doctrine</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Vision & Tenets</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-outfit [text-wrap:balance]">
              Building India's Independent Tech Stack with Sovereign Code
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Under Yuvkesh Meena's stewardship, Gothwad Tech operates under an uncompromising principle: true freedom requires indigenous technology. We design systems that run on local devices, resist foreign surveillance, and empower every Indian programmer.
            </p>
          </div>

          <button
            onClick={onOpenBio}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] rounded-lg transition-all whitespace-nowrap self-start md:self-auto shrink-0"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Read Executive Bio & Manifesto</span>
          </button>
        </div>

        {/* 4 Core Tenets Grid (Natural Editorial Numbering) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12" id="tenets">
          {LEADERSHIP_TENETS.map((tenet) => (
            <div 
              key={tenet.id}
              className="p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header with natural editorial index */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-colors">
                    {getIcon(tenet.id)}
                  </div>
                  <span className="text-sm font-mono text-cyan-400 font-semibold tracking-wider">
                    {tenet.number}
                  </span>
                </div>

                {/* Tenet Title */}
                <h3 className="text-xl font-bold text-white font-outfit leading-snug group-hover:text-cyan-200 transition-colors">
                  {tenet.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {tenet.summary}
                </p>

                {/* Impact Statement */}
                <div className="pt-2">
                  <span className="text-xs text-slate-400 block font-medium">Strategic Impact</span>
                  <p className="text-xs text-slate-300 mt-1 leading-normal">
                    {tenet.impact}
                  </p>
                </div>
              </div>

              {/* Clean unboxed tech focus footer */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-cyan-400/90">
                  {tenet.techFocus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Philosophy Quote Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-blue-950/30 border border-cyan-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              The Gothwad Tech Creed
            </span>
            <p className="text-lg sm:text-xl font-medium text-white italic font-outfit max-w-3xl">
              "India must not merely be the world's largest consumer of foreign digital software. We have the engineering talent to architect our own operating systems, encrypted protocols, and intelligence platforms."
            </p>
            <span className="text-xs text-slate-400 block pt-1">
              — Yuvkesh Meena, Chief Executive Officer
            </span>
          </div>

          <a
            href={CEO_PROFILE.githubOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explore Gothwad Tech</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
