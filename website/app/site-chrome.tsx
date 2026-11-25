import { E, T, LanguageSwitcher } from './language';
const links = [['Home','/#top'],['About','/#about'],['Event Detail','/#event-detail'],['Venue','/#venue'],['Access','/access'],['Sponsors','/#sponsors'],['Program','/program']];
const labels: Record<string, string> = {Home:'ホーム', About:'概要', 'Event Detail':'開催情報', Venue:'会場', Access:'アクセス', Sponsors:'スポンサー', Program:'プログラム', News:'お知らせ'};
export function SiteHeader(){return (
  <header className="site-header"><div className="wrap header-inner">
    <a className="header-logo" href="/#top" aria-label="Cardano Buidler Fest #4 home"><img src="/brand/title-logo-mini.png?v=068cc7dd" width="1200" height="453" alt="Cardano Buidler Fest #4 Osaka Japan"/></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,id])=><a href={id} key={id}><T ja={labels[label]} en={label}/></a>)}</nav>
    <LanguageSwitcher/>
    <details className="mobile-menu"><summary aria-label="Open navigation menu"><span/><span/><span/></summary><nav aria-label="Mobile navigation">{links.map(([label,id])=><a href={id} key={id}><T ja={labels[label]} en={label}/></a>)}</nav></details>
  </div></header>
)}
export function SiteFooter(){return (
  <footer><div className="wrap footer-layout"><div className="footer-identity"><a href="/#top" className="footer-brand">Cardano Buidler Fest <span>#4</span><small><E en={"OSAKA, JAPAN"}/></small></a><a className="footer-social" href="https://x.com/buidler_fest" target="_blank" rel="noopener noreferrer" aria-label="Cardano Buidler Fest #4 on X (opens in a new tab)"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.49h2.039L6.487 3.24H4.3l13.31 17.403Z"/></svg></a></div><nav className="footer-legal" aria-label="Policies"><a href="/privacy"><T en="Privacy Policy" ja="プライバシーポリシー"/></a><a href="/coc"><T en="Code of Conduct" ja="行動規範"/></a></nav><small className="copyright">© 2027 Cardano Buidler Fest #4</small></div></footer>
)}
