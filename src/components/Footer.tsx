import React from 'react';
import { Github, ArrowUp, Mail } from 'lucide-react';
import { CEO_PROFILE } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070D] text-slate-400 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white font-outfit">
                {CEO_PROFILE.name}
              </span>
              <span className="text-xs text-cyan-400 font-mono">
                CEO, Gothwad Tech
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Focusing on Indian Tech Independence and Developing with Indian Brains.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a 
              href={CEO_PROFILE.githubOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub @gothwadtech</span>
            </a>
            <a 
              href={`mailto:${CEO_PROFILE.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{CEO_PROFILE.email}</span>
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Yuvkesh Meena. All rights reserved. Gothwad Tech sovereignty initiative.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Swadeshi Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Open Source</span>
            <span aria-hidden="true">·</span>
            <span>Data Sovereignty</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
