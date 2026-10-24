import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { ThemeControl } from './ThemeControl';

const links = [
  { href: '#about', label: 'About' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#work', label: 'Projects' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const restoreMenuFocus = useRef(false);

  const closeMenu = (restoreFocus = false) => {
    restoreMenuFocus.current = restoreFocus;
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return undefined;

    const mobileViewport = window.matchMedia('(max-width: 780px)');
    if (!mobileViewport.matches) {
      closeMenu();
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuPanelRef.current?.querySelector<HTMLButtonElement>('.mobile-nav-close')?.focus();

    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (!event.matches) closeMenu();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu(true);
        return;
      }

      if (event.key !== 'Tab' || !menuPanelRef.current) return;
      const focusable = Array.from(
        menuPanelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      );
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    mobileViewport.addEventListener('change', handleViewportChange);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      mobileViewport.removeEventListener('change', handleViewportChange);
      document.removeEventListener('keydown', handleKeyDown);
      if (restoreMenuFocus.current) {
        menuButtonRef.current?.focus();
        restoreMenuFocus.current = false;
      }
    };
  }, [menuOpen]);

  const mobileMenu = menuOpen && typeof document !== 'undefined'
    ? createPortal(
      <div className="mobile-menu-layer">
        <button
          className="mobile-menu-backdrop"
          type="button"
          tabIndex={-1}
          aria-label="Close navigation menu"
          onClick={() => closeMenu(true)}
        />
        <div
          className="mobile-nav-panel"
          id="mobile-navigation"
          ref={menuPanelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-navigation-title"
        >
          <div className="mobile-nav-heading">
            <div>
              <span className="mobile-nav-kicker">Explore</span>
              <strong id="mobile-navigation-title">Yuvkesh Meena</strong>
            </div>
            <button
              className="mobile-nav-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => closeMenu(true)}
            >
              <X size={19} aria-hidden="true" />
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a
                className="mobile-nav-link"
                key={link.href}
                href={link.href}
                onClick={() => closeMenu()}
              >
                <span className="mobile-link-number">0{index + 1}</span>
                <span>{link.label}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            ))}
            <a className="mobile-nav-link" href="#contact" onClick={() => closeMenu()}>
              <span className="mobile-link-number">04</span>
              <span>Get in touch</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </nav>

          <div className="mobile-nav-footer">
            <span>Gothwad Tech</span>
            <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer">
              View public repositories <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>,
      document.body,
    )
    : null;

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Yuvkesh Meena profile, top of page">
            <img src="/assets/gothwad-tech-logo.svg" alt="" width="42" height="42" />
            <span className="brand-copy">
              <span className="brand-name">Gothwad Tech</span>
              <span className="brand-caption">Yuvkesh Meena</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeControl />
            <a className="header-contact" href="#contact">
              Get in touch <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <button
              className="menu-toggle"
              type="button"
              ref={menuButtonRef}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => (menuOpen ? closeMenu(true) : setMenuOpen(true))}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
