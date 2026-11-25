'use client';

import { createContext, useContext, useState } from 'react';
import { translations } from './translations';
import englishLabels from './english-labels.json';

type Language = 'en' | 'ja';
const LanguageContext = createContext<{language: Language; change: (language: Language) => void}>({language: 'en', change: () => {}});

export function useLanguage() { return useContext(LanguageContext).language; }

export function LanguageProvider({initialLanguage, children}: {initialLanguage: Language; children: React.ReactNode}) {
  const [language, setLanguage] = useState(initialLanguage);
  function change(next: Language) {
    setLanguage(next);
    document.documentElement.lang = next;
    document.cookie = `language=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }
  return <LanguageContext.Provider value={{language, change}}>{children}</LanguageContext.Provider>;
}

export function T({ja, en}: {ja: string; en?: string}) {
  const {language} = useContext(LanguageContext);
  return <>{language === 'ja' ? ja : (en ?? translations[ja] ?? ja)}</>;
}

export function E({en}: {en: string}) {
  const {language} = useContext(LanguageContext);
  return <>{language === 'ja' ? ((englishLabels as Record<string,string>)[en] ?? en) : en}</>;
}

export function LanguageSwitcher() {
  const {language, change} = useContext(LanguageContext);
  return <div className="language-switcher" role="group" aria-label="Language / 言語">
    <button type="button" lang="en" aria-pressed={language === 'en'} onClick={() => change('en')}>EN</button>
    <button type="button" lang="ja" aria-pressed={language === 'ja'} onClick={() => change('ja')}>日本語</button>
  </div>;
}
