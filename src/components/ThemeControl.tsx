import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'ceo-profile-theme';
const SYSTEM_THEME_QUERY = '(prefers-color-scheme: dark)';

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
    || (preference === 'system' && window.matchMedia(SYSTEM_THEME_QUERY).matches);
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

  useEffect(() => {
    const storedPreference = getStoredPreference();
    setPreference(storedPreference);
    applyPreference(storedPreference, false);
  }, []);

  useEffect(() => {
    updateThemeColor(preference);
    if (preference !== 'system') return undefined;

    const systemTheme = window.matchMedia(SYSTEM_THEME_QUERY);
    const syncThemeColor = () => updateThemeColor('system');
    syncThemeColor();
    systemTheme.addEventListener('change', syncThemeColor);
    return () => systemTheme.removeEventListener('change', syncThemeColor);
  }, [preference]);

  const toggleTheme = () => {
    const isDark = preference === 'dark'
      || (preference === 'system' && window.matchMedia(SYSTEM_THEME_QUERY).matches);
    const nextPreference: ThemePreference = isDark ? 'light' : 'dark';
    setPreference(nextPreference);
    applyPreference(nextPreference);
  };

  return (
    <button
      className="theme-trigger"
      type="button"
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
      onClick={toggleTheme}
    >
      <Sun className="theme-icon-sun" size={18} strokeWidth={1.8} aria-hidden="true" />
      <Moon className="theme-icon-moon" size={18} strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}
