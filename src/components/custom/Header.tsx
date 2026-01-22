'use client';

import { useLanguage, languages, Language } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-white font-bold text-xl">Dropmagic</span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all text-white"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{languages[language].flag}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                  {Object.entries(languages).map(([code, { name, flag }]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code as Language);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/5 transition-colors ${
                        language === code ? 'bg-white/10' : ''
                      }`}
                    >
                      <span className="text-xl">{flag}</span>
                      <span className="text-white text-sm">{name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login */}
            <button className="text-white hover:text-emerald-400 transition-colors text-sm font-medium">
              {t('header.login', language)}
            </button>

            {/* CTA */}
            <Link
              href="/onboarding"
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 text-sm"
            >
              {t('header.getStarted', language)}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
