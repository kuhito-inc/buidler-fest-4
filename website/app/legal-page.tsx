import { SiteHeader, SiteFooter } from './site-chrome';
import { T } from './language';

export function LegalPage({title, children}: {title: {en:string; ja:string}; children:React.ReactNode}) {
  return <main id="top"><SiteHeader/><article className="wrap legal-page">
    <a className="outline-button" href="/"><T en="← Back to Home" ja="← ホームに戻る"/></a>
    <h1><T {...title}/></h1>
    <p className="legal-date"><T en="Last updated: October 29, 2026" ja="最終更新日：2026年10月29日"/></p>
    {children}
  </article><SiteFooter/></main>;
}

export function LegalContact() {
  return <a href="mailto:buidlerfest@kuhito.co.jp">buidlerfest@kuhito.co.jp</a>;
}
