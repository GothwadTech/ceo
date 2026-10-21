import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/profileData';

export const ExecutiveTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 lg:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-12 border-b border-white/[0.08] max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            <span>Leadership Chronology</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Key Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-outfit mt-2 [text-wrap:balance]">
            Milestones of Indian Software Sovereignty
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mt-2">
            The pivotal technological breakthroughs and community milestones charted under Yuvkesh Meena's leadership.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="pt-12 relative">
          {/* Subtle vertical hairline spine */}
          <div 
            aria-hidden="true" 
            className="hidden md:block absolute left-8 top-16 bottom-16 w-px bg-white/[0.08]" 
          />

          <div className="space-y-10">
            {TIMELINE_MILESTONES.map((milestone, idx) => (
              <div 
                key={idx}
                className="relative flex flex-col md:flex-row items-start gap-6 md:gap-12"
              >
                {/* Milestone Year Anchor */}
                <div className="flex md:flex-col items-center md:items-start gap-3 md:w-36 shrink-0 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#0B0F19] border border-cyan-500/30 flex flex-col items-center justify-center text-center shadow-lg shadow-cyan-950/20">
                    <span className="text-lg font-bold font-mono text-cyan-400 tabular-nums">
                      {milestone.year}
                    </span>
                    {milestone.quarter && (
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        {milestone.quarter}
                      </span>
                    )}
                  </div>
                </div>

                {/* Milestone Detail Card */}
                <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] hover:border-white/20 transition-all space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <h3 className="text-xl font-bold text-white font-outfit">
                      {milestone.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{milestone.role}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {milestone.description}
                  </p>

                  <div className="pt-2 flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-medium">Outcome: </span>
                      <span>{milestone.keyOutcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
