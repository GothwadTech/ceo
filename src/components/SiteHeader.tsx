import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profileData';

const links = [
  { href: '#about', label: 'About' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#work', label: 'Projects' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Yuvkesh Meena profile, top of page">
          <img src="/assets/gothwad-tech-logo.svg" alt="" width="42" height="42" />
          <span className="brand-copy">
            <span className="brand-name">Gothwad Tech</span>
            <span className="brand-caption">Leadership profile</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="#contact">
          Get in touch <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Gothwad Tech
          </a>
          <a className="mobile-github-link" href={PROFILE.githubUrl} target="_blank" rel="noreferrer">
            Gothwad Tech on GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
