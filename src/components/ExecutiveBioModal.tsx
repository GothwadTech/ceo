import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Shield, Award, Terminal, ArrowUpRight } from 'lucide-react';
import { CEO_PROFILE } from '../data/profileData';

interface ExecutiveBioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveBioModal: React.FC<ExecutiveBioModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyBio = () => {
    const fullText = `${CEO_PROFILE.name} - ${CEO_PROFILE.title}, ${CEO_PROFILE.organization}\n\n${CEO_PROFILE.bioOverview}\n\n${CEO_PROFILE.extendedBio.join('\n\n')}\n\nGitHub: ${CEO_PROFILE.githubOrgUrl}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B0F19] border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Shield className="w-4 h-4" />
              <span>EXECUTIVE BIOGRAPHY & PRESS BRIEF</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-outfit">
              {CEO_PROFILE.name}
            </h3>
            <p className="text-xs text-slate-400">
              {CEO_PROFILE.title} · {CEO_PROFILE.organization}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lead Quote */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 to-blue-950/20 border border-cyan-500/20">
          <p className="text-sm italic text-cyan-200">
            "{CEO_PROFILE.motto}"
          </p>
        </div>

        {/* Full Narrative Biography */}
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p className="text-slate-200 font-medium leading-relaxed">
            {CEO_PROFILE.bioOverview}
          </p>

          {CEO_PROFILE.extendedBio.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Executive Tenets Summary */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Key Executive Focus Areas</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Swadeshi Protocols:</strong> Censorship-resilient communication engines</span>
            </div>
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Local AI Deployment:</strong> Zero-cloud on-device Whisper models</span>
            </div>
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Mobile IDE Tools:</strong> High-performance touch Git editors</span>
            </div>
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Grassroots Education:</strong> Low-bandwidth school platforms</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={handleCopyBio}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Bio Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-cyan-400" />
                <span>Copy Press Bio</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-3">
            <a
              href={CEO_PROFILE.githubOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>GitHub @gothwadtech</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
