import { useEffect, useRef, useState } from 'react';
import { Check, Monitor, Moon, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'ceo-profile-theme';

const themeOptions: Array<{
  value: ThemePreference;
  label: string;
  description: string;
  Icon: LucideIcon;
}> = [
  { value: 'system', label: 'System', description: 'Follow your device', Icon: Monitor },
  { value: 'light', label: 'Light', description: 'Keep it bright', Icon: Sun },
  { value: 'dark', label: 'Dark', description: 'Easy on the eyes', Icon: Moon },
];

function getStoredPreference(): ThemePreference {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === 'light' || value === 'dark' || value === 'system') return value;
  } catch {
    // If storage is unavailable, the site still follows the system theme.
  }
  return 'system';
}

function updateThemeColor(preference: ThemePreference) {
  const followsDark = preference === 'dark'
    || (preference === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', followsDark ? '#212121' : '#f7f7f2');
}

function applyPreference(preference: ThemePreference, persist = true) {
  if (preference === 'system') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', preference);
  }

  if (persist) {
    try {
      window.localStorage.setItem(STORAGE_KEY, preference);
    } catch {
      // Keep the current choice for this visit if storage is unavailable.
    }
  }

  updateThemeColor(preference);
}

export function ThemeControl() {
  const [preference, setPreference] = useState<ThemePreference>('system');
  const [menuOpen, setMenuOpen] = useState(false);
  const controlRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const storedPreference = getStoredPreference();
    setPreference(storedPreference);
    applyPreference(storedPreference, false);
  }, []);

  useEffect(() => {
    if (preference !== 'system') return undefined;

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const syncThemeColor = () => updateThemeColor('system');
    systemTheme.addEventListener('change', syncThemeColor);
    return () => systemTheme.removeEventListener('change', syncThemeColor);
  }, [preference]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !controlRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  const activeOption = themeOptions.find((option) => option.value === preference) ?? themeOptions[0];
  const ActiveIcon = activeOption.Icon;

  const choosePreference = (nextPreference: ThemePreference) => {
    setPreference(nextPreference);
    applyPreference(nextPreference);
    setMenuOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div
      className="theme-control"
      ref={controlRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMenuOpen(false);
      }}
    >
      <button
        className="theme-trigger"
        type="button"
        ref={triggerRef}
        aria-label={`Color theme: ${activeOption.label}`}
        aria-expanded={menuOpen}
        aria-controls="theme-preferences"
        title={`Color theme: ${activeOption.label}`}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <ActiveIcon size={18} strokeWidth={1.8} aria-hidden="true" />
      </button>

      {menuOpen && (
        <div className="theme-popover" id="theme-preferences" role="group" aria-label="Choose a color theme">
          <div className="theme-popover-heading">
            <strong>Appearance</strong>
            <span>System is the default</span>
          </div>
          {themeOptions.map(({ value, label, description, Icon }) => (
            <button
              className={`theme-option${preference === value ? ' is-selected' : ''}`}
              key={value}
              type="button"
              aria-pressed={preference === value}
              onClick={() => choosePreference(value)}
            >
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
              <span className="theme-option-copy">
                <strong>{label}</strong>
                <small>{description}</small>
              </span>
              {preference === value && <Check className="theme-option-check" size={16} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
