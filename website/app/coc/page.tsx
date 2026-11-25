import type { Metadata } from 'next';
import { LegalPage, LegalContact } from '../legal-page';
import { T } from '../language';

export const metadata: Metadata = {title:'Code of Conduct | Cardano Buidler Fest #4'};
export default function CodeOfConduct() {
  return <LegalPage title={{en:'Code of Conduct',ja:'行動規範'}}>
    <p><T en="Cardano Buidler Fest #4 welcomes a diverse community. All attendees, speakers, sponsors, organizers and volunteers must help keep the event respectful and safe. This applies to sessions, shared spaces, event-related social activities and online channels." ja="Cardano Buidler Fest #4は、多様な背景を持つ人々を歓迎します。参加者、登壇者、スポンサー、主催者、ボランティアの全員が、互いを尊重し、安全な場づくりに協力してください。本規範は、セッション、共用スペース、イベント関連の交流会やオンライン上の活動にも適用されます。"/></p>
    <section><h2><T en="Respect each other" ja="互いを尊重する"/></h2>
      <p><T en="Respect differences in identity, background, ability, belief and technical experience. Discuss ideas constructively, allow others to speak and respect personal boundaries." ja="性別や性自認、年齢、性的指向、障害、外見、人種・民族、宗教、技術的な経験や選択などの違いを尊重してください。建設的に議論し、他の人が発言する機会と、一人ひとりの意思や距離感を大切にしてください。"/></p>
    </section>
    <section><h2><T en="Unacceptable behavior" ja="認められない行為"/></h2>
      <p><T en="Harassment, discrimination, threats, stalking, unwanted sexual attention or contact, intrusive photography and deliberate disruption are unacceptable. Sexualized promotional material is inappropriate. Stop immediately when asked to stop an unwelcome behavior." ja="ハラスメント、差別、脅迫、つきまとい、望まれない性的な言動や身体的接触、嫌がらせとなる撮影、意図的な進行妨害を認めません。性的な表現を用いた宣伝も不適切です。不快な行為をやめるよう求められた場合は、直ちに従ってください。"/></p>
    </section>
    <section><h2><T en="Get help or report a concern" ja="困ったとき・問題を見かけたとき"/></h2>
      <p><T en="Contact event staff or email " ja="被害を受けた場合、問題を見かけた場合、不安がある場合は、会場の運営スタッフ、または次の窓口へご相談ください："/><LegalContact/>.</p>
      <p><T en="For immediate danger, seek venue security or emergency assistance; email is not an emergency channel. Organizers will handle reports discreetly and share details only as needed to respond. Retaliation against someone raising a concern is unacceptable." ja="差し迫った危険がある場合は、会場警備や緊急対応機関に助けを求めてください。メールは緊急対応窓口ではありません。主催者は相談内容を慎重に扱い、対応に必要な範囲でのみ共有します。相談した人への報復行為は認めません。"/></p>
    </section>
    <section><h2><T en="Organizer response" ja="主催者の対応"/></h2>
      <p><T en="Organizers may issue warnings, restrict participation or require a person to leave. Refunds will be handled under applicable ticket terms and law. Cooperation from everyone helps protect the community." ja="主催者は状況に応じて、注意、参加の制限、退場などの対応を行うことがあります。返金については、適用されるチケット規約と法令に従います。安心して参加できる環境を守るため、ご協力をお願いします。"/></p>
    </section>
    <section className="legal-credit"><h2><T en="Attribution" ja="参考元・ライセンス"/></h2>
      <p><T en="Adapted and translated for Cardano Buidler Fest #4 from " ja="本規範は、"/><a href="https://buidl.2024.cardano.org/coc/">Cardano Buidler Fest #1</a><T en=" and its original source, " ja="の行動規範と、その原典である"/><a href="https://confcodeofconduct.com/">Conference Code of Conduct</a><T en=". The wording, contact details and response provisions have been adapted. This adaptation is shared under " ja="を参考に、Cardano Buidler Fest #4向けに翻訳し、表現・連絡先・対応方針を変更したものです。本規範は"/><a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a><T en="." ja="で公開します。"/></p>
    </section>
  </LegalPage>;
}
