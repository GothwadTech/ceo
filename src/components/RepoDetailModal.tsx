import React, { useEffect } from 'react';
import { X, ExternalLink, Star, GitFork, Cpu, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { RepositoryItem } from '../data/profileData';

interface RepoDetailModalProps {
  repo: RepositoryItem | null;
  onClose: () => void;
}

export const RepoDetailModal: React.FC<RepoDetailModalProps> = ({ repo, onClose }) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (repo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [repo, onClose]);

  if (!repo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B0F19] border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Layers className="w-3.5 h-3.5" />
              <span>{repo.categoryLabel}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{repo.language}</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-mono tracking-tight">
              {repo.name}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              github.com/{repo.githubRepo}
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

        {/* Headline & Description */}
        <div className="space-y-2">
          <h4 className="text-base font-semibold text-cyan-300 font-outfit">
            {repo.headline}
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {repo.description}
          </p>
        </div>

        {/* Repository Stats (Tabular) */}
        <div className="flex items-center gap-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono tabular-nums text-slate-300">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400/20" />
            <span><strong className="text-white">{repo.stars}</strong> GitHub Stars</span>
          </div>
          <div className="flex items-center gap-2">
            <GitFork className="w-4 h-4 text-slate-400" />
            <span><strong className="text-white">{repo.forks}</strong> Forks</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>License: <strong className="text-white">{repo.license}</strong></span>
          </div>
        </div>

        {/* CEO Architectural Contribution Callout */}
        <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
            <Cpu className="w-4 h-4" />
            <span>CEO Yuvkesh Meena's Direct Architectural Contribution</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {repo.architectureDetails.ceoContribution}
          </p>
        </div>

        {/* System Overview */}
        <div className="space-y-2">
          <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
            System Design & Engineering Strategy
          </h5>
          <p className="text-xs text-slate-300 leading-relaxed">
            {repo.architectureDetails.systemOverview}
          </p>
        </div>

        {/* Core Stack (Clean typography, no pills) */}
        <div className="space-y-2">
          <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
            Core Technology Stack
          </h5>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300">
            {repo.architectureDetails.coreStack.map((tech, i) => (
              <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
            Key Architectural Invariants & Features
          </h5>
          <ul className="space-y-2">
            {repo.architectureDetails.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Details
          </button>

          <a
            href={repo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 shadow-md transition-all"
          >
            <span>Open Repository on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
