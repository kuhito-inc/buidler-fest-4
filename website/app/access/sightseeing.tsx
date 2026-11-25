'use client';

import Image from 'next/image';
import { T, useLanguage } from '../language';

const places = [
  {ja:'住吉大社', en:'Sumiyoshi Taisha', areaJa:'住吉', areaEn:'Sumiyoshi', descriptionJa:'「住吉っさん」と親しまれる、歴史ある神社。緑豊かな境内で、朱色の反橋や国宝の本殿をめぐり、大阪の歴史に触れてみませんか。', descriptionEn:'Explore a historic shrine affectionately known as Sumiyossan. Discover its striking arched bridge, leafy grounds and main sanctuaries designated as National Treasures.', url:'https://sumiyoshitaisha.net/', urlEn:'https://sumiyoshitaisha.net/en/'},
  {ja:'海遊館', en:'Osaka Aquarium Kaiyukan', areaJa:'天保山・大阪ベイエリア', areaEn:'Tempozan / Osaka Bay', descriptionJa:'太平洋をめぐる海の生きものたちに出会える水族館。展示を楽しんだ後は、天保山周辺の散策もおすすめです。', descriptionEn:'Explore marine life from around the Pacific at this waterfront aquarium, then take a stroll around Tempozan.', url:'https://www.kaiyukan.com/'},
  {ja:'ユニバーサル・スタジオ・ジャパン（USJ）', en:'Universal Studios Japan (USJ)', areaJa:'此花・ベイエリア', areaEn:'Konohana / Bay Area', descriptionJa:'アトラクションやショーを楽しめるテーマパーク。イベント前後に時間を確保して、ゆっくり訪れてみてはいかがでしょうか。', descriptionEn:'A theme park filled with attractions and shows. Set aside time before or after the event to make the most of your visit.', url:'https://www.usj.co.jp/web/ja/jp'},
  {ja:'大阪城', en:'Osaka Castle', areaJa:'大阪城公園', areaEn:'Osaka Castle Park', descriptionJa:'大阪の歴史を伝える天守閣と、緑豊かな公園。歴史展示を見学しながら、大阪を代表する風景を楽しめます。', descriptionEn:'Discover Osaka’s history in the castle museum and enjoy a walk through the surrounding park, one of the city’s iconic landscapes.', url:'https://www.osakacastle.net/'},
  {ja:'通天閣', en:'Tsutenkaku Tower', areaJa:'新世界', areaEn:'Shinsekai', descriptionJa:'新世界のシンボルとして親しまれる展望塔。展望台からの眺めとともに、周辺の街歩きも楽しめます。', descriptionEn:'An observation tower and landmark of Shinsekai. Take in the city views and explore the surrounding neighborhood.', url:'https://www.tsutenkaku.co.jp/'},
  {ja:'道頓堀', en:'Dotonbori', areaJa:'なんば・ミナミ', areaEn:'Namba / Minami', descriptionJa:'大きな看板や川沿いの風景が印象的な繁華街。大阪らしいグルメや、にぎやかな街の雰囲気を楽しみたい方に。', descriptionEn:'Discover oversized signs, riverside scenery and Osaka food in this lively entertainment district in Minami.', url:'https://www.osaka-info.jp/spot/dotonbori/'},
];

const photos: Record<string, string> = {'Sumiyoshi Taisha':'sumiyoshi', 'Osaka Aquarium Kaiyukan':'kaiyukan', 'Universal Studios Japan (USJ)':'universal-city', 'Osaka Castle':'osaka-castle', 'Tsutenkaku Tower':'tsutenkaku', 'Dotonbori':'dotonbori'};
const foods = [
  {ja:'たこ焼き', en:'Takoyaki', image:'takoyaki', descriptionJa:'だしの効いた生地にタコを入れて丸く焼き上げる、大阪の定番。街歩きの合間に、焼きたてを楽しんで。', descriptionEn:'Bite-sized octopus balls made with a savory batter. Enjoy a freshly cooked serving as you explore the city.'},
  {ja:'お好み焼き', en:'Okonomiyaki', image:'okonomiyaki', descriptionJa:'キャベツや好みの具材を混ぜて鉄板で焼く、大阪を代表する粉もん。ソースの香りとともに、熱々の一枚を。', descriptionEn:'A savory pancake with cabbage and a choice of fillings, cooked on a griddle and finished with sauce. A classic taste of Osaka.'},
  {ja:'串カツ', en:'Kushikatsu', image:'kushikatsu', descriptionJa:'肉や野菜を串に刺し、衣をつけて揚げた大阪グルメ。さまざまな具材を少しずつ楽しめます。', descriptionEn:'Crisp, breaded skewers of meat and vegetables. Try a selection of fillings and discover your favorites.'},
];
type CardProps = {ja:string; en:string; image:string; descriptionJa:string; descriptionEn:string; url:string; urlEn?:string; food?:boolean};
function PhotoCard(props: CardProps) {
  const language = useLanguage();
  const isStationPhoto = props.image === 'universal-city';
  const url = language === 'en'
    ? (props.urlEn ?? props.url.replace(/^https:\/\/(?:www\.)?osaka-info\.jp\//, 'https://osaka-info.jp/en/'))
    : props.url;
  return <article className="osaka-card">
    <div className="osaka-card-photo">
      <Image src={'/osaka/'+props.image+'.webp'+(isStationPhoto?'?v=2':'')} unoptimized={isStationPhoto} alt={isStationPhoto ? (language==='ja'?'JRユニバーサルシティ駅の駅名標':'Station sign at JR Universal City Station') : (language==='ja'?props.ja:props.en)} fill sizes={props.food?'(max-width: 700px) 100vw, 33vw':'(max-width: 700px) 100vw, 50vw'}/>
      <div className="osaka-card-content">
        <h3><T ja={props.ja} en={props.en}/></h3>
        <div className="osaka-card-details">
          <p><T ja={props.descriptionJa} en={props.descriptionEn}/></p>
          <a href={url} target="_blank" rel="noopener noreferrer"><T ja={props.food?'公式グルメガイド ↗':'公式サイト ↗'} en={props.food?'Official food guide ↗':'Official website ↗'}/></a>
        </div>
      </div>
    </div>
    <p className="osaka-photo-credit">{isStationPhoto ? <T ja="写真：JRユニバーサルシティ駅 ／ 写真AC" en="Photo: JR Universal City Station / PhotoAC"/> : <T ja="写真提供：（公財）大阪観光局" en="©Osaka Convention & Tourism Bureau"/>}</p>
  </article>;
}
export function Sightseeing() {
  return <section className="section sightseeing-section" id="sightseeing" aria-labelledby="sightseeing-title"><div className="wrap">
    <h2 className="section-title" id="sightseeing-title"><T ja="大阪観光" en="Explore Osaka"/></h2>
    <p className="sightseeing-intro"><T ja="イベントの前後に、大阪の街も楽しんでみませんか。ベイエリアから歴史や食文化に触れるスポットまで、訪れたい場所をご紹介します。" en="Make time before or after the event to discover Osaka, from its waterfront attractions to its history and food culture."/></p>
    <div className="osaka-card-grid">{places.filter(place=>photos[place.en]).map(place=><PhotoCard key={place.en} {...place} image={photos[place.en]}/>)}</div>
    <div className="sightseeing-list">{places.filter(place=>!photos[place.en]).map(place=><article className="sightseeing-place" key={place.en}>
      <div><p className="sightseeing-area"><T ja={place.areaJa} en={place.areaEn}/></p><h3><T ja={place.ja} en={place.en}/></h3></div>
      <div><p><T ja={place.descriptionJa} en={place.descriptionEn}/></p><div className="sightseeing-links">
        <a href={place.url} target="_blank" rel="noopener noreferrer"><T ja="公式案内 ↗" en="Official guide ↗"/></a>
        <a href={'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place.ja+' 大阪')} target="_blank" rel="noopener noreferrer"><T ja="地図を見る ↗" en="View map ↗"/></a>
      </div></div>
    </article>)}</div>
    <h2 className="section-title osaka-food-title"><T ja="大阪グルメ" en="Taste Osaka"/></h2>
    <p className="sightseeing-intro"><T ja="大阪に来たら味わいたい、街で親しまれる定番グルメ。観光と一緒に、大阪の食も楽しんでください。" en="Discover local favorites and make Osaka’s food part of your visit."/></p>
    <div className="osaka-card-grid osaka-food-grid">{foods.map(item=><PhotoCard key={item.en} {...item} url="https://osaka-info.jp/gourmet/" food/>)}</div>
    <p className="sightseeing-note"><T ja="営業時間・休業日・チケットや予約の条件は、各施設の公式案内でご確認ください。" en="Check each official guide for current opening hours, closures, tickets and reservation requirements."/></p>
  </div></section>;
}
