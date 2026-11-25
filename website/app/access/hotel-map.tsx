'use client';

import { useLanguage } from '../language';

export function HotelMap({src}: {src: string}) {
  const language = useLanguage();
  const localizedSrc = `${src}&hl=${language}`;
  return <div className="access-map"><iframe
    key={language}
    src={localizedSrc}
    title={language === 'ja' ? 'ホテルフクラシア大阪ベイの地図' : 'Map of Hotel Fukuracia Osaka Bay'}
    width="1200" height="450" loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
  /></div>;
}
