import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';
import { CEO_PROFILE } from '../data/profileData';

interface NavbarProps {
  onOpenBio: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#070A11]/85 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 lg:px-8 h-20">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a 
          href="#" 
          className="flex items-center gap-3 group whitespace-nowrap shrink-0"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-indigo-600/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-lg font-outfit shadow-inner group-hover:border-cyan-400/60 transition-colors">
            YM
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              {CEO_PROFILE.name}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              CEO, Gothwad Tech
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Clean Single-Line Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a 
            href="#vision" 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Vision & Philosophy
          </a>
          <a 
            href="#repositories" 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Repositories & Code
          </a>
          <a 
            href="#tenets" 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Core Tenets
          </a>
          <a 
            href="#timeline" 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Milestones
          </a>
          <a 
            href="#contact" 
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={CEO_PROFILE.githubOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all whitespace-nowrap"
            title="GitHub @gothwadtech"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>@gothwadtech</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 shadow-sm shadow-cyan-900/40 hover:shadow-cyan-700/50 transition-all whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            Executive Inquiry
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 bg-[#070A11] border-b border-white/10 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a 
              href="#vision" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400 transition-colors"
            >
              Vision & Philosophy
            </a>
            <a 
              href="#repositories" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400 transition-colors"
            >
              Repositories & Code
            </a>
            <a 
              href="#tenets" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400 transition-colors"
            >
              Core Tenets
            </a>
            <a 
              href="#timeline" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400 transition-colors"
            >
              Milestones
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={CEO_PROFILE.githubOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 p-2.5 rounded-lg border border-white/10"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub @gothwadtech</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-center"
            >
              Executive Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
