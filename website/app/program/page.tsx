import { E, T } from '../language';
import { ReferenceArt } from '../reference-art';
import { SiteHeader, SiteFooter } from '../site-chrome';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Program | Cardano Buidler Fest #4' };
const tracks = [
  {num:'01',dateJa:'1日目 · 2027年4月24日',dateEn:'Day 1 · April 24, 2027',titleJa:'プレゼンテーション・ワークショップ',titleEn:'Presentations & Workshops',descriptionJa:'プレゼンテーションとワークショップを通じて、Cardanoの技術や取り組み、知識を共有する1日。',descriptionEn:'A day of presentations and workshops to share Cardano technology, projects and knowledge.',noteJa:'プレゼンテーションの提案は、コミュニティから募集します。募集要項・応募方法は後日ご案内します。',noteEn:'We will invite presentation proposals from the community. Submission guidelines and details on how to apply will be announced later.'},
  {num:'02',dateJa:'2日目 · 2027年4月25日',dateEn:'Day 2 · April 25, 2027',titleJa:'オープンスペース',titleEn:'Open Space',descriptionJa:'参加者が話し合いたいテーマやアイデアを持ち寄り、自由に対話し、知識を共有する1日。',descriptionEn:'A day for participants to bring topics and ideas, engage in open discussions and share knowledge.',noteJa:'',noteEn:''},
];
export default function Program(){return <main id="top"><SiteHeader/><div className="wrap"><a className="outline-button" href="/"><T ja={"\u30db\u30fc\u30e0\u306b\u623b\u308b"} en="Back to Home"/></a></div>
  <section className="section program-section" id="program"><div className="wrap"><p className="section-kicker"><E en={"PROGRAM"}/></p><h1><T ja={"プログラム"}/></h1><p className="program-intro"><T ja={"技術、アイデア、コミュニティが交わるプログラム。"}/></p><p className="program-status"><T ja={"2027年4月24日・25日開催 · タイムテーブルは後日公開"}/></p><div className="program-layout"><div className="program-tracks">{tracks.map(t=><article className="track" key={t.num}><span className="track-num">{t.num}</span><div><p className="program-day"><T ja={t.dateJa} en={t.dateEn}/></p><h2><T ja={t.titleJa} en={t.titleEn}/></h2><p><T ja={t.descriptionJa} en={t.descriptionEn}/></p>{t.noteJa && <p className="program-call"><T ja={t.noteJa} en={t.noteEn}/></p>}</div></article>)}</div><figure className="program-visual"><ReferenceArt region="stage"/><figcaption><T ja={"イベントのイメージ"}/></figcaption></figure></div></div></section>
<SiteFooter/></main>}
