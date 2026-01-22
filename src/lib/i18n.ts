'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'pt' | 'es' | 'en' | 'de' | 'fr';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'pt',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
    }
  )
);

export const languages = {
  pt: { name: 'Português', flag: '🇵🇹' },
  es: { name: 'Español', flag: '🇪🇸' },
  en: { name: 'English', flag: '🇬🇧' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'Français', flag: '🇫🇷' },
};
