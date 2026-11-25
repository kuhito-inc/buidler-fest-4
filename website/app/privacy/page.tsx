import type { Metadata } from 'next';
import { LegalPage, LegalContact } from '../legal-page';
import { T } from '../language';

export const metadata: Metadata = {title:'Privacy Policy | Cardano Buidler Fest #4'};
export default function Privacy() {
  return <LegalPage title={{en:'Privacy Policy',ja:'プライバシーポリシー'}}>
    <p><T en="This policy explains how the Cardano Buidler Fest #4 organizers, Kuhito Co., Ltd and SPO JAPAN GUILD, handle information in connection with this event website and inquiries." ja="本ポリシーは、Cardano Buidler Fest #4の主催者であるKuhito Co., LtdおよびSPO JAPAN GUILDによる、本イベントサイトとお問い合わせに関する情報の取り扱いを説明します。"/></p>
    <section><h2><T en="1. Information and purposes" ja="1. 取り扱う情報と利用目的"/></h2>
      <p><T en="When you contact us, we receive your email address and any name or other information you include. We use it to respond, manage your inquiry and address event-related concerns. Please provide only information needed for your inquiry." ja="お問い合わせの際には、メールアドレス、記載された氏名やお問い合わせ内容などを受け取ります。これらは回答、お問い合わせの管理、イベントに関するご相談への対応に利用します。お問い合わせに必要な範囲の情報のみお送りください。"/></p>
      <p><T en="Website requests also involve technical information such as IP addresses and browser details. Hosting and delivery services may process this information to serve the site and maintain security. Provider-specific logging and retention depend on the hosting configuration." ja="サイトへのアクセス時には、IPアドレスやブラウザー情報などの技術情報が通信に伴って送信されます。ホスティング・配信サービスは、サイトの提供や安全性の維持のためにこれらを取り扱う場合があります。ログの保存内容や期間は、利用するサービスと設定により異なります。"/></p>
    </section>
    <section><h2><T en="2. Language preference cookie" ja="2. 言語設定Cookie"/></h2>
      <p><T en="When you select a language, we store an English or Japanese preference in a cookie named language for up to one year. It is used to remember your choice across pages and visits, not for advertising. You can remove it using your browser settings; the site then defaults to English. The current site has no advertising or analytics tags." ja="言語を選択すると、英語または日本語の設定を「language」というCookieに最長1年間保存します。ページ移動や再訪問時に選択を維持するためのもので、広告には使用しません。ブラウザーの設定で削除でき、削除後は英語が初期表示になります。現在のサイトには、広告タグやアクセス解析タグを設置していません。"/></p>
    </section>
    <section><h2><T en="3. External services" ja="3. 外部サービス"/></h2>
      <p><T en="The site loads fonts from Google Fonts. Your browser contacts Google to retrieve them, transmitting technical request information such as your IP address. Links to Google Maps, X, the hotel and organizer websites open external services governed by their own privacy policies." ja="本サイトはGoogle Fontsからフォントを読み込みます。その際、ブラウザーからGoogleへIPアドレスなどの通信情報が送信されます。Google Maps、X、ホテルや主催者のサイトへのリンク先では、それぞれのプライバシーポリシーが適用されます。"/></p>
      <p><T en="The access page also embeds a Google map. Loading or using the map sends request information, including your IP address, to Google. Google may use cookies under its own policies." ja="アクセスページにはGoogleマップを埋め込んでいます。地図の読み込みや操作に伴い、IPアドレスなどの通信情報がGoogleへ送信されます。Googleは独自のポリシーに基づきCookieを使用する場合があります。"/></p>
      <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"><T en="Google Privacy Policy" ja="Googleのプライバシーポリシー"/></a></p>
    </section>
    <section><h2><T en="4. Sharing and protection" ja="4. 情報の共有と保護"/></h2>
      <p><T en="We limit access to inquiry information to organizers and service providers who need it to respond or operate the event. We do not sell this information. Disclosure may also be necessary with your consent or as required by applicable law. We take reasonable steps to restrict access and retain information only as long as needed for its purpose or legal obligations." ja="お問い合わせ情報へのアクセスは、回答やイベント運営に必要な主催者・業務委託先に限定し、情報を販売しません。ご本人の同意がある場合や法令上必要な場合にも、情報を開示することがあります。適切なアクセス制限を行い、利用目的の達成や法令上の義務に必要な期間に限り保管します。"/></p>
    </section>
    <section><h2><T en="5. Registration and payments" ja="5. 参加申し込みと決済"/></h2>
      <p><T en="The current website does not collect registration details, connect wallets or process payments. Before introducing ticket sales or accommodation applications, we will update this policy with the information collected, purposes, recipients and retention arrangements. Do not send wallet seed phrases or private keys to the organizers." ja="現在のサイトには、参加申し込み情報の収集、ウォレット接続、決済の機能はありません。チケット販売や宿泊申し込みを開始する前に、取得する情報、利用目的、提供先、保存に関する取り扱いを本ポリシーへ追記します。ウォレットのシードフレーズや秘密鍵を主催者へ送らないでください。"/></p>
    </section>
    <section><h2><T en="6. Questions and requests" ja="6. お問い合わせ・ご請求"/></h2>
      <p><T en="For privacy questions or requests to access, correct or delete information you have provided, contact " ja="個人情報に関するご質問や、ご提供いただいた情報の開示・訂正・削除等のご請求は、次の窓口へご連絡ください："/><LegalContact/></p>
      <p><T en="We may need to verify your identity and will respond in accordance with applicable law. Changes to this policy will be posted here with an updated date." ja="ご本人確認をお願いする場合があります。適用される法令に従って対応します。本ポリシーを変更する場合は、更新日とともにこのページへ掲載します。"/></p>
    </section>
  </LegalPage>;
}
