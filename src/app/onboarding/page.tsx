'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';
import { t } from '@/lib/translations';
import Header from '@/components/custom/Header';
import { 
  ShoppingBag, 
  Link2, 
  Store, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Star,
  MessageSquare,
  ChevronLeft
} from 'lucide-react';

type Step = 1 | 2 | 3 | 4;

export default function OnboardingPage() {
  const { language } = useLanguage();
  const [step, setStep] = useState<Step>(1);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [productLink, setProductLink] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const [selectedPersona, setSelectedPersona] = useState('');

  // Simulate AI analysis progress
  useEffect(() => {
    if (step === 3 && analyzing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep(4), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [step, analyzing]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (option === 'example') {
      setStep(3);
      setAnalyzing(true);
    } else {
      setStep(2);
    }
  };

  const handleAnalyze = () => {
    if (productLink) {
      setStep(3);
      setAnalyzing(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      s <= step
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white'
                        : 'bg-white/10 text-gray-500'
                    }`}
                  >
                    {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`w-16 h-1 mx-2 rounded-full transition-all ${
                        s < step ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-white/10'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Choose Option */}
          {step === 1 && (
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                {t('onboarding.step1.title', language)}
              </h1>
              <p className="text-gray-400 text-center mb-12 text-lg">
                Select your preferred method to get started
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Shopify */}
                <button
                  onClick={() => handleOptionSelect('shopify')}
                  className="bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-emerald-500/50 rounded-2xl p-8 transition-all hover:scale-105 text-left group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t('onboarding.step1.shopify', language)}</h3>
                  <p className="text-gray-400 text-sm">Connect your Shopify store and import products instantly</p>
                </button>

                {/* Supplier Link */}
                <button
                  onClick={() => handleOptionSelect('supplier')}
                  className="bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-orange-500/50 rounded-2xl p-8 transition-all hover:scale-105 text-left group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Link2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t('onboarding.step1.supplier', language)}</h3>
                  <p className="text-gray-400 text-sm">Paste a link from AliExpress, Amazon, or Etsy</p>
                </button>

                {/* Competitor */}
                <button
                  onClick={() => handleOptionSelect('competitor')}
                  className="bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-purple-500/50 rounded-2xl p-8 transition-all hover:scale-105 text-left group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Store className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t('onboarding.step1.competitor', language)}</h3>
                  <p className="text-gray-400 text-sm">Analyze and replicate successful competitor stores</p>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="h-px bg-white/10 flex-1 max-w-xs"></div>
                <span className="text-gray-500 font-semibold">{t('common.or', language)}</span>
                <div className="h-px bg-white/10 flex-1 max-w-xs"></div>
              </div>

              <div className="max-w-md mx-auto">
                <button
                  onClick={() => handleOptionSelect('example')}
                  className="w-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 hover:border-emerald-500/50 rounded-xl p-6 transition-all hover:scale-105 flex items-center space-x-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-1">{t('onboarding.step1.example', language)}</h3>
                    <p className="text-gray-400 text-sm">See how it works with a sample product</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Paste Link */}
          {step === 2 && (
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => setStep(1)}
                className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>{t('common.back', language)}</span>
              </button>

              <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                {t('onboarding.step2.title', language)}
              </h1>
              <p className="text-gray-400 text-center mb-12 text-lg">
                We'll analyze it with AI and create your optimized store
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  Product URL
                </label>
                <input
                  type="url"
                  value={productLink}
                  onChange={(e) => setProductLink(e.target.value)}
                  placeholder={t('onboarding.step2.placeholder', language)}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors mb-6"
                />

                <button
                  onClick={handleAnalyze}
                  disabled={!productLink}
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 disabled:shadow-none flex items-center justify-center space-x-2"
                >
                  <span>{t('onboarding.step2.analyze', language)}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: AI Analysis */}
          {step === 3 && (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                {t('onboarding.step3.title', language)}
              </h1>
              <p className="text-gray-400 text-center mb-12 text-lg">
                Our AI is analyzing your product to create the perfect store
              </p>

              {/* Product Score */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">{t('onboarding.step3.productScore', language)}</h2>
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {progress}%
                  </div>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Analysis Steps */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: DollarSign, label: 'onboarding.step3.marginAnalysis', progress: Math.min(progress * 1.2, 100) },
                  { icon: TrendingUp, label: 'onboarding.step3.trendAnalysis', progress: Math.min(progress * 0.9, 100) },
                  { icon: Star, label: 'Perceived Value', progress: Math.min(progress * 1.1, 100) },
                  { icon: MessageSquare, label: 'onboarding.step3.reviewImport', progress: Math.min(progress * 0.8, 100) },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold">{t(item.label, language)}</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <div className="text-right text-sm text-gray-400 mt-2">
                      {item.progress >= 100 ? t('common.complete', language) : t('common.inProgress', language)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Customization */}
          {step === 4 && (
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                {t('onboarding.step4.title', language)}
              </h1>
              <p className="text-gray-400 text-center mb-12 text-lg">
                Final touches to make your store perfect for your audience
              </p>

              <div className="space-y-8">
                {/* Store Language */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">{t('onboarding.step4.language', language)}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['pt', 'es', 'en', 'de', 'fr'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLanguage(lang)}
                        className={`px-6 py-4 rounded-xl font-semibold transition-all ${
                          selectedLanguage === lang
                            ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white'
                            : 'bg-white/5 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Persona */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">{t('onboarding.step4.persona', language)}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedPersona('busy')}
                      className={`p-6 rounded-xl text-left transition-all ${
                        selectedPersona === 'busy'
                          ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500'
                          : 'bg-white/5 hover:bg-white/10 border-2 border-white/10'
                      }`}
                    >
                      <h4 className="font-bold text-lg mb-2">{t('onboarding.step4.busyProfessional', language)}</h4>
                      <p className="text-gray-400 text-sm">Quick decisions, values convenience and time-saving</p>
                    </button>

                    <button
                      onClick={() => setSelectedPersona('conscious')}
                      className={`p-6 rounded-xl text-left transition-all ${
                        selectedPersona === 'conscious'
                          ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500'
                          : 'bg-white/5 hover:bg-white/10 border-2 border-white/10'
                      }`}
                    >
                      <h4 className="font-bold text-lg mb-2">{t('onboarding.step4.consciousBuyer', language)}</h4>
                      <p className="text-gray-400 text-sm">Research-focused, values quality and sustainability</p>
                    </button>
                  </div>
                </div>

                {/* Create Store Button */}
                <button
                  disabled={!selectedLanguage || !selectedPersona}
                  className="w-full px-8 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-xl transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 disabled:shadow-none text-lg flex items-center justify-center space-x-3"
                >
                  <span>{t('onboarding.step4.createStore', language)}</span>
                  <Sparkles className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
