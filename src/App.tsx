import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ExecutiveHero } from './components/ExecutiveHero';
import { LeadershipVision } from './components/LeadershipVision';
import { RepositoryExplorer } from './components/RepositoryExplorer';
import { ExecutiveTimeline } from './components/ExecutiveTimeline';
import { ExecutiveContact } from './components/ExecutiveContact';
import { Footer } from './components/Footer';
import { RepoDetailModal } from './components/RepoDetailModal';
import { ExecutiveBioModal } from './components/ExecutiveBioModal';
import { RepositoryItem } from './data/profileData';

export default function App() {
  const [selectedRepo, setSelectedRepo] = useState<RepositoryItem | null>(null);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-[#E2E8F0] flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Executive Navbar */}
      <Navbar 
        onOpenBio={() => setIsBioModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Layout */}
      <main className="flex-1">
        <ExecutiveHero 
          onOpenBio={() => setIsBioModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        <LeadershipVision 
          onOpenBio={() => setIsBioModalOpen(true)}
        />

        <RepositoryExplorer 
          onSelectRepo={(repo) => setSelectedRepo(repo)}
        />

        <ExecutiveTimeline />

        <ExecutiveContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <RepoDetailModal 
        repo={selectedRepo}
        onClose={() => setSelectedRepo(null)}
      />

      <ExecutiveBioModal 
        isOpen={isBioModalOpen}
        onClose={() => setIsBioModalOpen(false)}
      />
    </div>
  );
}
