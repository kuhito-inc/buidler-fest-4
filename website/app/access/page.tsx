import { HotelMap } from './hotel-map';
import { Sightseeing } from './sightseeing';
import { E, T } from '../language';
import type { Metadata } from 'next';
import { SiteHeader, SiteFooter } from '../site-chrome';

export const metadata: Metadata = { title: 'Hotel Access | Cardano Buidler Fest #4', description: 'Directions to Hotel Fukuracia Osaka Bay for Cardano Buidler Fest #4.' };
const hotelWebsite = 'https://hotel-cosmosquare.jp/';
const officialAccess = `${hotelWebsite}access/`;
const shuttle = `${hotelWebsite}news/60/`;
const mapQuery = encodeURIComponent('Hotel Fukuracia Osaka Bay, 1-7-50 Nankokita, Suminoe-ku, Osaka');
const map = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export default function Access() {
  return <main id="top"><SiteHeader/>
    <div className="wrap"><a className="outline-button" href="/">← <T ja={"\u30db\u30fc\u30e0\u306b\u623b\u308b"} en="Back to Home"/></a></div>
    <section className="section access-section" aria-labelledby="access-title"><div className="wrap">
      <h1 id="access-title"><T ja={"ホテルまでのアクセス"}/></h1>
      <div className="access-hotel">
        <div><p className="section-kicker"><E en={"YOUR DESTINATION"}/></p><h2><T ja={"ホテルフクラシア大阪ベイ"}/></h2><p><T ja={"〒559-0034"}/><br/><T ja={"大阪府大阪市住之江区南港北1-7-50"}/></p><div className="access-actions"><a className="pill-button" href={map} target="_blank" rel="noopener noreferrer"><T ja={"Google Mapsで開く ↗"}/></a><a className="outline-button" href={hotelWebsite} target="_blank" rel="noopener noreferrer"><T ja={"ホテル公式サイト ↗"}/></a></div></div>
        <div className="access-hotel-photo-placeholder" aria-hidden="true" />
      </div>
      <HotelMap src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}/>
      <div className="access-routes">
        <article><h2 className="section-kicker"><E en={"01 / TRAIN"}/></h2><p><T ja="最寄り駅は大阪メトロ中央線のコスモスクエア駅です。土日祝日は、3番バス乗り場からホテルの無料送迎バスを利用できます。予約は不要です。" en="The nearest station is Cosmosquare on the Osaka Metro Chuo Line. On weekends and public holidays, the hotel runs a free shuttle from bus stop 3. No reservation is needed."/></p><p><a href={shuttle} target="_blank" rel="noopener noreferrer"><T ja="週末の送迎バスを確認 ↗" en="Check the weekend shuttle ↗"/></a></p></article>
        <article><h2 className="section-kicker"><E en={"02 / KANSAI AIRPORT"}/></h2><p><T ja="南港方面行きの空港リムジンバスでグランドプリンスホテル大阪ベイ前まで約50分。そこから会場までは徒歩約10分です。" en="Take the airport limousine bus toward Nanko to the Grand Prince Hotel Osaka Bay stop (about 50 minutes). The venue is about a 10-minute walk from the stop."/></p></article>
        <article><h2 className="section-kicker"><E en={"03 / SHIN-OSAKA"}/></h2><p><T ja="新大阪駅からホテルの送迎バスを利用できます。事前予約が必要です。" en="The hotel runs a shuttle from Shin-Osaka Station. Advance reservation is required."/></p><p><a href={shuttle} target="_blank" rel="noopener noreferrer"><T ja="時刻表・予約方法を確認 ↗" en="See the shuttle timetable and booking details ↗"/></a></p></article>
        <article><h2 className="section-kicker"><E en={"04 / ITAMI AIRPORT"}/></h2><p><T ja="伊丹空港からは電車で約40分です。詳しい乗り換えはホテル公式のアクセス案内をご確認ください。" en="The hotel is about 40 minutes by train from Itami Airport. See the hotel’s official access guide for transfer details."/></p></article>
      </div>
      <div className="access-source"><p><T ja={"交通案内はホテル公式情報をもとに掲載しています。2027年のご来場前に、最新の運行日・時刻・料金をご確認ください。"}/></p><a className="outline-button" href={officialAccess} target="_blank" rel="noopener noreferrer"><T ja={"公式アクセス・時刻表を確認 ↗"}/></a></div>
    </div></section><Sightseeing/><SiteFooter/></main>;
}
