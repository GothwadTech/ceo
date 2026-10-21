import React, { useState, useMemo } from 'react';
import { Search, Star, GitFork, ArrowUpRight, Cpu, Layers, ExternalLink, Code } from 'lucide-react';
import { GOTHWAD_REPOSITORIES, RepositoryItem, CEO_PROFILE } from '../data/profileData';

interface RepositoryExplorerProps {
  onSelectRepo: (repo: RepositoryItem) => void;
}

export const RepositoryExplorer: React.FC<RepositoryExplorerProps> = ({ onSelectRepo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredRepos = useMemo(() => {
    return GOTHWAD_REPOSITORIES.filter((repo) => {
      const matchesCategory = selectedCategory === 'all' || repo.category === selectedCategory;
      const matchesSearch = 
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.architectureDetails.coreStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        repo.language.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="repositories" className="py-20 lg:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
              <span>Engineering Portfolio</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Open-Source Architectures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-outfit [text-wrap:balance]">
              Core Repositories & CEO Systems Architecture
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Every public initiative under <span className="font-semibold text-white font-mono">@gothwadtech</span> is anchored in Yuvkesh Meena's direct architectural contributions—spanning privacy-first MTProto protocols, on-device Whisper models, and mobile-first compiler IDEs.
            </p>
          </div>

          <a
            href={CEO_PROFILE.githubOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] rounded-lg transition-all whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>View All 27+ on GitHub</span>
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Search & Category Filter Controls (Functional Button Tabs) */}
        <div className="pt-8 pb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Functional Category Filter Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0B0F19] border border-white/[0.08] rounded-xl overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              All Codebases ({GOTHWAD_REPOSITORIES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('messaging')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'messaging'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              Privacy & Messaging
            </button>
            <button
              onClick={() => setSelectedCategory('ai-tools')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'ai-tools'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              AI & Developer Tools
            </button>
            <button
              onClick={() => setSelectedCategory('education')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'education'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              EdTech & Systems
            </button>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search codebases, stack, protocols..."
              className="w-full bg-[#0B0F19] border border-white/[0.08] focus:border-cyan-500/50 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Repositories Grid (Anti-Slop Clean Typography & Separators) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="p-6 rounded-2xl bg-[#0B0F19] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div className="space-y-4">
                {/* Top Row: Repo Name and Stats */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-cyan-400 font-medium">
                      {repo.categoryLabel}
                    </span>
                    <h3 className="text-xl font-bold text-white font-mono tracking-tight group-hover:text-cyan-200 transition-colors">
                      {repo.name}
                    </h3>
                  </div>

                  {/* Clean unboxed tabular stats */}
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 tabular-nums shrink-0 pt-1">
                    <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500/20" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-slate-200 transition-colors">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      {repo.forks}
                    </span>
                  </div>
                </div>

                {/* Sub-headline */}
                <h4 className="text-sm font-semibold text-slate-200 font-outfit leading-snug">
                  {repo.headline}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {repo.description}
                </p>

                {/* CEO Contribution Spotlight */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-medium text-[11px]">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>CEO Contribution</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {repo.architectureDetails.ceoContribution}
                  </p>
                </div>

                {/* Clean unboxed metadata with typographic separators (NO PILLS) */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 pt-1 font-mono">
                  <span>{repo.language}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{repo.license}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>github.com/{repo.githubRepo}</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectRepo(repo)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-1"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white transition-colors py-1"
                >
                  <span>Codebase</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredRepos.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#0B0F19] border border-white/[0.08] space-y-3">
            <Code className="w-8 h-8 text-slate-500 mx-auto" />
            <h4 className="text-base font-semibold text-white">No matching repositories found</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No codebases match your search query "{searchQuery}". Try searching for terms like "Whisper", "Messaging", "AI", or "Kotlin".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-cyan-400 hover:underline pt-2 inline-block"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
