import { E, T } from './language';
import { SiteHeader, SiteFooter } from './site-chrome';
import { FAQ } from './faq';
import { ReferenceArt } from './reference-art';

const pillars = [{icon:'code',title:'TECHNICAL TALKS',jp:'技術セッション'},{icon:'people',title:'COMMUNITY',jp:'グローバルな交流'},{icon:'idea',title:'REAL IMPACT',jp:'社会を動かすアイデア'}];
function Icon({name}:{name:string}) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name==='code'?<path d="m10 8-8 8 8 8m12-16 8 8-8 8M19 4l-6 24"/>:
      name==='people'?<><circle cx="16" cy="7" r="4"/><circle cx="5" cy="12" r="3"/><circle cx="27" cy="12" r="3"/><path d="M9 28v-7a7 7 0 0 1 14 0v7ZM1 26v-6a4 4 0 0 1 7-3m23 9v-6a4 4 0 0 0-7-3"/></>:
      name==='idea'?<><path d="M11 22c0-5-4-5-4-11a9 9 0 0 1 18 0c0 6-4 6-4 11ZM12 26h8m-6 4h4M16 0v-2M2 4 0 2m30 2 2-2M2 13H0m30 0h2"/></>:
      name==='calendar'?<><rect x="5" y="7" width="22" height="22" rx="2"/><path d="M5 14h22M10 3v8m12-8v8M10 19h3m6 0h3m-12 5h3m6 0h3"/></>:
      <><path d="M16 30S5 19 5 12a11 11 0 0 1 22 0c0 7-11 18-11 18Z"/><circle cx="16" cy="12" r="4"/></>}
  </svg>;
}
export default function Home(){return <main id="top">
  <SiteHeader/>
  <section className="hero" aria-labelledby="hero-title">

    <div className="wrap hero-body"><div className="hero-logo-panel"><img src="/brand/hero-big-logo.png?v=885f59fa" width="1800" height="1049" alt="Cardano Buidler Fest #4 — Osaka, Japan" fetchPriority="high"/></div>
      <div className="hero-copy"><h1 id="hero-title">Cardano<br/><E en={"TOWARDS THE NEXT DECADE"}/></h1>
        <p className="hero-description"><strong><em><E en={"A 2-day event for tech-savvy Cardano builders"}/></em></strong> <E en={"to connect, showcase and share."}/></p>
        <div className="hero-meta"><span><Icon name="calendar"/> <E en={"APRIL 24–25, 2027"}/></span><span><Icon name="pin"/> <E en={"OSAKA, JAPAN"}/></span></div>
        <a className="pill-button hero-cta" href="#event-detail"><E en={"Event Detail"}/> <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>
  <section className="statbar" aria-label="Event overview"><div className="wrap statbar-inner">
    <div className="stat stat-year"><strong>2027</strong><span><E en={"OSAKA, JAPAN"}/></span><span><T ja={"4月24日・25日開催"}/></span></div>
    <div className="stat"><strong><E en={"GLOBAL CARDANO BUILDERS"}/></strong><span><T ja="コア開発者・dApps開発者" en="Core developers · dApp developers"/></span><span><T ja={"カルダノエコシステムで活動する開発者が集う2日間"} en="Two days bringing together developers active in the Cardano ecosystem"/></span></div>
  </div></section>
  <section className="pillars" aria-label="Event themes"><div className="wrap pillars-inner">{pillars.map(p=><div className="pillar" key={p.title}><Icon name={p.icon}/><strong><E en={p.title}/></strong><span><T ja={p.jp}/></span></div>)}</div></section>
  <section className="section about-section" id="about"><div className="wrap about-layout">
    <div className="about-copy"><h2 className="section-title"><T ja="イベントについて" en="About the event"/></h2><h3 className="section-lead"><T ja={"はじまりの大阪から、"}/><br/><T ja={"次の10年へ。"}/></h3><p><T ja={"2027年、Cardanoはメインネットローンチから10周年を迎えます。その節目の年に、私たちが集まるのは、Cardanoが草案された地・大阪です。"}/><br/><T ja={"Cardano Buidler Fest #4では、世界中の開発者・クリエイター・コミュニティがこの地で出会い、これまでの歩みを分かち合いながら、次の10年に向けた技術とアイデアを交わします。"}/></p><a className="outline-button about-button" href="/program"><T ja={"プログラムについて詳しく"}/><span aria-hidden="true">→</span></a></div>
    <figure className="about-art"><ReferenceArt region="gathering"/><figcaption><T ja={"イベントのイメージ"}/></figcaption></figure>
  </div></section>
  <section className="section speakers-section" id="speakers" hidden><div className="wrap"><p className="section-kicker centered"><E en={"SPEAKERS"}/></p><h2 className="centered"><T ja={"世界をリードするビルダーたち"}/></h2><p className="section-subtitle"><T ja={"登壇者・セッションの詳細は、決定次第発表します。"}/></p><div className="speaker-grid">{[1,2,3,4].map(n=><article className="speaker-card" key={n}><div className="speaker-photo"><span className="speaker-index"><E en={"TO BE ANNOUNCED"}/></span><span className="speaker-silhouette" aria-hidden="true"/></div><div className="speaker-info"><strong><E en={"Coming Soon"}/></strong><span><T ja={"登壇者は後日発表"}/></span></div></article>)}</div></div></section>
  <section className="tickets-section" id="event-detail"><div className="wrap tickets-layout"><div className="event-heading"><h2 className="section-title"><T ja="開催情報" en="Event details"/></h2></div><div className="event-details"><dl className="event-facts"><div><dt><E en={"DATE"}/></dt><dd><T ja={"2027年4月24日・25日"}/></dd></div><div><dt><E en={"VENUE"}/></dt><dd><T ja={"ホテルフクラシア大阪ベイ"}/><span><T ja={"大阪、日本"}/></span></dd></div><div className="event-meals"><dt><E en={"MEALS"}/></dt><dd><T ja="2日間のランチ・ディナー" en="Lunch & dinner on both days"/></dd></div><div className="event-tickets"><dt><E en={"TICKETS"}/></dt><dd className="ticket-options"><div className="ticket-option"><div className="ticket-name"><T ja={"早期チケット"} en="Blind"/></div><strong className="ticket-price">900 ADA</strong><p><T en="Prior to any announcement of the full event schedule. You know you want to be there no matter what." ja="イベントの全日程が発表される前に購入できるチケット。プログラムの内容にかかわらず、参加したいと決めている方へ。"/></p></div><div className="ticket-option"><div className="ticket-name"><T ja={"通常チケット"} en="Normal"/></div><strong className="ticket-price">1,000 ADA</strong><p><T en="Once the call for speakers has ended, if you aren’t (yet) sure it’s worth your time?!" ja="登壇者の募集終了後に購入できるチケット。参加する価値があるか、まだ迷っている方へ。"/></p></div></dd></div></dl></div><aside className="stay-special" aria-labelledby="stay-title"><div className="stay-special-heading"><span className="stay-eyebrow" id="stay-title"><E en={"SPECIAL STAY BENEFIT"}/></span><span className="stay-badge"><T ja={"先着100名様限定"}/></span></div><div className="stay-special-body"><div className="stay-benefit"><span className="stay-dates"><T ja="宿泊期間は後日ご案内" en="Stay dates to be announced"/></span><strong><T ja="3泊朝食付き" en="3 nights with breakfast"/></strong></div><p><T ja="スポンサーのご厚意により、ご希望の先着100名様に会場での3泊朝食付きをご提供します。" en="Thanks to our sponsors, the first 100 attendees who request accommodation will receive three nights at the venue with breakfast included."/></p></div></aside></div></section>
  <section className="section venue-section" id="venue"><div className="wrap venue-layout"><div className="venue-copy"><h2 className="section-title"><T ja="会場" en="Venue"/></h2><h3 className="section-lead"><T ja={"大阪から、世界へ。"}/></h3><p><T ja={"歴史と革新が交わる街、大阪で。"}/><br/><T ja={"2027年4月24日・25日、ホテルフクラシア大阪ベイにて開催します。"}/></p><a className="outline-button" href="/access"><T ja={"ホテルまでのアクセス"}/><span aria-hidden="true">→</span></a></div><div className="venue-art"><img src="/brand/osaka-night.png" width="1774" height="887" alt="Osaka nightscape with Dotonbori, Tsutenkaku and Osaka Castle" loading="lazy"/></div></div></section>
  <section className="section sponsors-section" id="sponsors"><div className="wrap"><h2 className="section-title"><T ja="スポンサー・主催" en="Sponsors & organizers"/></h2><div className="sponsors-placeholder"><strong><E en={"COMING SOON"}/></strong><p><T ja="スポンサーは、決定次第発表します。" en="Sponsors will be announced once confirmed."/></p></div><h3 className="partners-heading"><T ja="主催" en="Organizers"/></h3><ul className="partner-list"><li><a className="partner-card" href="https://kuhito.co.jp/" target="_blank" rel="noopener noreferrer"><div className="partner-logo"><img src="/partners/kuhito-logo.png" width="1990" height="420" alt="Kuhito" loading="lazy"/></div></a></li><li className="partner-guild"><a className="partner-card" href="https://spojapanguild.net/" target="_blank" rel="noopener noreferrer"><div className="partner-logo"><img src="/partners/sjg-yoko-logo-467.png" width="467" height="90" alt="SPO JAPAN GUILD" loading="lazy"/></div></a></li></ul></div></section>
  <FAQ/>
  <SiteFooter/>
</main>}
