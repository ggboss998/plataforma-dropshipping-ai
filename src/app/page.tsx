'use client';

import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';
import Header from '@/components/custom/Header';
import { Play, Sparkles, TrendingUp, Globe2, Zap, CheckCircle2, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Powered by AI</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            {t('hero.title', language)}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {t('hero.subtitle', language)}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 text-lg"
            >
              {t('hero.cta', language)}
            </Link>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all flex items-center space-x-2 text-lg">
              <Play className="w-5 h-5" />
              <span>{t('hero.watchDemo', language)}</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">10K+</div>
              <div className="text-gray-400 text-sm mt-2">{t('socialProof.stores', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">$50M+</div>
              <div className="text-gray-400 text-sm mt-2">{t('socialProof.revenue', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-400 text-sm mt-2">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">5min</div>
              <div className="text-gray-400 text-sm mt-2">Avg. Setup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {t('socialProof.title', language)}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Expert {i}</div>
                    <div className="text-sm text-gray-400">Dropshipping Pro</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "This platform transformed my business. The AI analysis is incredibly accurate and saves me hours of research."
                </p>
                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <CheckCircle2 key={j} className="w-4 h-4 text-emerald-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {t('features.title', language)}
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Powerful AI-driven tools to build, analyze and optimize your dropshipping store
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8 hover:scale-105 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('features.aiAnalysis.title', language)}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('features.aiAnalysis.description', language)}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-2xl p-8 hover:scale-105 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('features.oneClick.title', language)}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('features.oneClick.description', language)}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 hover:scale-105 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Globe2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('features.multilingual.title', language)}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('features.multilingual.description', language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {t('faq.title', language)}
          </h2>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg">
                    {t(`faq.q${i}.question`, language)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {t(`faq.q${i}.answer`, language)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to build your winning store?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join thousands of successful dropshippers using AI to scale their business
          </p>
          <Link
            href="/onboarding"
            className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 text-lg"
          >
            {t('hero.cta', language)}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 Dropmagic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
