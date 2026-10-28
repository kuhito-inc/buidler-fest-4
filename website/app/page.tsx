import { ReferenceArt } from './reference-art';

const links = [['Home','top'],['About','about'],['Speakers','speakers'],['Program','program'],['Venue','venue'],['Tickets','tickets'],['Sponsors','sponsors'],['News','news']];
const pillars = [{icon:'code',title:'TECHNICAL TALKS',jp:'技術セッション'},{icon:'people',title:'COMMUNITY',jp:'グローバルな交流'},{icon:'idea',title:'REAL IMPACT',jp:'社会を動かすアイデア'}];
const tracks = [
  {num:'01',title:'Technical Talks',description:'Cardanoの技術、ツール、アーキテクチャを深く知る。'},
  {num:'02',title:'Open Space',description:'ビルダー同士がアイデアを持ち寄り、対話する。'},
  {num:'03',title:'Community & Collaboration',description:'世界の仲間とつながり、次の可能性を探る。'},
];
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
  <header className="site-header"><div className="wrap header-inner">
    <a className="header-logo" href="#top" aria-label="Buidler Fest 2027 home"><img src="/brand/title-logo.png" width="2172" height="724" alt="Buidler Fest #4 Osaka Japan"/></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,id])=><a href={'#'+id} key={id}>{label}</a>)}</nav>
    <a href="#tickets" className="pill-button header-ticket">Tickets <span aria-hidden="true">→</span></a>
    <details className="mobile-menu"><summary aria-label="Open navigation menu"><span/><span/><span/></summary><nav aria-label="Mobile navigation">{links.map(([label,id])=><a href={'#'+id} key={id}>{label}</a>)}</nav></details>
  </div></header>
  <section className="hero" aria-labelledby="hero-title">

    <div className="wrap hero-body"><div className="hero-logo-panel"><img src="/brand/top-hero-image.png" width="1774" height="887" alt="Buidler Fest #4 — Osaka, Japan" fetchPriority="high"/></div>
      <div className="hero-copy"><h1 id="hero-title">BUILDING A FAIRER TOMORROW</h1><p className="hero-japanese">つくる、つながる、未来を動かす</p>
        <div className="hero-meta"><span><Icon name="calendar"/> DATE TO BE ANNOUNCED</span><span><Icon name="pin"/> OSAKA, JAPAN</span></div>
        <a className="pill-button hero-cta" href="#tickets">Ticket information <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>
  <section className="statbar" aria-label="Event overview"><div className="wrap statbar-inner">
    <div className="stat stat-year"><strong>2027</strong><span>OSAKA, JAPAN</span><span>開催日程は後日発表</span></div>
    <div className="stat"><strong>GLOBAL BUILDERS</strong><span>Developers · Creators · Communities</span><span>世界中のビルダーが集う</span></div>
    <div className="stat"><strong>CARDANO ECOSYSTEM</strong><span>Technical Talks · Open Space · Networking</span><span>技術・学び・出会い</span></div>
  </div></section>
  <section className="pillars" aria-label="Event themes"><div className="wrap pillars-inner">{pillars.map(p=><div className="pillar" key={p.title}><Icon name={p.icon}/><strong>{p.title}</strong><span>{p.jp}</span></div>)}</div></section>
  <section className="section about-section" id="about"><div className="wrap about-layout">
    <div className="about-copy"><p className="section-kicker">ABOUT</p><h2>世界のビルダーが、<br className="mobile-break"/>大阪に集う。</h2><p>Buidler Fest 2027は、Cardanoエコシステムの開発者・クリエイター・コミュニティが世界中から集うグローバルイベントです。<br/>技術、アイデア、人が交わり、より良い未来への可能性を探ります。</p><a className="outline-button about-button" href="#program">イベントについて詳しく <span aria-hidden="true">→</span></a></div>
    <figure className="about-art"><ReferenceArt region="gathering"/><figcaption>イベントのイメージ</figcaption></figure>
  </div></section>
  <section className="section speakers-section" id="speakers"><div className="wrap"><p className="section-kicker centered">SPEAKERS</p><h2 className="centered">世界をリードするビルダーたち</h2><p className="section-subtitle">登壇者・セッションの詳細は、決定次第発表します。</p><div className="speaker-grid">{[1,2,3,4].map(n=><article className="speaker-card" key={n}><div className="speaker-photo"><span className="speaker-index">TO BE ANNOUNCED</span><span className="speaker-silhouette" aria-hidden="true"/></div><div className="speaker-info"><strong>Coming Soon</strong><span>登壇者は後日発表</span></div></article>)}</div></div></section>
  <section className="section program-section" id="program"><div className="wrap"><p className="section-kicker">PROGRAM</p><h2>プログラム</h2><p className="program-intro">技術、アイデア、コミュニティが交わるプログラム。</p><p className="program-status">日程・タイムテーブルは後日公開</p><div className="program-layout"><div className="program-tracks">{tracks.map(t=><article className="track" key={t.num}><span className="track-num">{t.num}</span><div><h3>{t.title}</h3><p>{t.description}</p></div></article>)}</div><figure className="program-visual"><ReferenceArt region="stage"/><figcaption>イベントのイメージ</figcaption></figure></div></div></section>
  <section className="section venue-section" id="venue"><div className="wrap venue-layout"><div className="venue-copy"><p className="section-kicker">VENUE</p><h2>大阪から、世界へ。</h2><p>歴史と革新が交わる街、大阪で。<br/>会場と日程の詳細は、確定次第ご案内します。</p><a className="outline-button" href="#news">開催情報について <span aria-hidden="true">→</span></a></div><div className="venue-art"><ReferenceArt region="venue"/></div></div></section>
  <section className="tickets-section" id="tickets"><div className="wrap tickets-layout"><div><p className="section-kicker">TICKETS</p><h2>THE NEXT CHAPTER<br/>STARTS HERE.</h2><p>チケットの販売・参加方法は、確定次第ご案内します。</p></div><div className="ticket-status"><span className="status-light"/> TICKET INFORMATION<strong>COMING SOON</strong><small>2027 · OSAKA, JAPAN</small></div></div></section>
  <footer><div className="wrap footer-layout"><a href="#top" className="footer-brand">BUIDLER FEST <span>2027</span><small>OSAKA, JAPAN</small></a><div id="sponsors"><strong>SPONSORS & PARTNERS</strong><p>決定次第発表します。</p></div><div id="news"><strong>NEWS</strong><p>新しいお知らせは準備中です。</p></div><small className="copyright">© 2027 Buidler Fest</small></div></footer>
</main>}
