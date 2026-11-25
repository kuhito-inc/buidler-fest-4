'use client';

import { useRef, useState } from 'react';
import { T, useLanguage } from './language';
const categories = [
  {id:'event', ja:'イベント', en:'Event'},
  {id:'tickets', ja:'チケット・食事', en:'Tickets & meals'},
  {id:'stay', ja:'宿泊・アクセス', en:'Stay & access'},
];
const faqs = [
  {
    question: 'ホテルへの行き方を教えてください。',
    category: 'stay',
    answer: <><T ja={"会場はホテルフクラシア大阪ベイです。最寄り駅や空港からの交通案内は、"}/><a href="/access"><T ja={"ホテルアクセスページ"}/></a><T ja={"をご確認ください。"}/></>,
  },
  {
    question: 'いつ、どこで開催されますか？',
    category: 'event',
    answer: '2027年4月24日・25日の2日間、大阪のホテルフクラシア大阪ベイで開催します。',
  },
  {
    question: 'どのようなイベントですか？',
    category: 'event',
    answer: 'Cardanoの技術に関心のあるビルダーが集まり、交流し、取り組みや知識を共有するイベントです。メインネットローンチ10周年の節目に、Cardanoが草案された大阪から次の10年を考えます。',
  },
  {
    question: 'チケットはいくらですか？',
    category: 'tickets',
    answer: '早期チケットは900 ADA、通常チケットは1,000 ADAです。販売開始日や購入方法の詳細は、後日ご案内します。',
  },
  {
    question: '食事は含まれていますか？',
    category: 'tickets',
    answer: 'すべての参加者にランチ・ディナーが含まれます。また、宿泊特典をご利用の方には、宿泊に朝食が付きます。',
  },
  {
    question: '宿泊特典はありますか？',
    category: 'stay',
    answer: 'スポンサーのご厚意により、ご希望の先着100名様に会場での3泊朝食付きをご提供します。宿泊期間とお申し込み方法は、後日ご案内します。',
  },
  {
    question: '前泊・延泊は可能ですか？',
    category: 'stay',
    answer: 'ホテルに空きがあれば相談可能です。ただし、追加の宿泊分には別途料金が発生します。',
  },
  {
    question: 'シングル利用ですか？',
    category: 'stay',
    answer: '基本的にはシングル利用です。',
  },
  {
    question: '家族を追加できますか？',
    category: 'stay',
    answer: 'ご家族を1名様まで追加可能です。追加人数に応じて別途料金が発生します。',
  },
  {
    question: '部屋を追加で予約できますか？',
    category: 'stay',
    answer: '追加のお部屋は、ご自身で予約サイトからご予約ください。',
  },
  {
    question: 'プログラムはどこで確認できますか？',
    category: 'event',
    answer: <><T ja={"技術講演や自由討論などの概要は、"}/><a href="/program"><T ja={"プログラムページ"}/></a><T ja={"をご覧ください。タイムテーブルやセッションの詳細は、決定次第発表します。"}/></>,
  },
];

export function FAQ() {
  const [active, setActive] = useState('event');
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const language = useLanguage();
  return <section className="section faq-section" id="faq" aria-labelledby="faq-title">
    <div className="wrap faq-inner">
      <h2 className="section-title" id="faq-title"><T ja={"よくあるご質問"}/></h2>
      <div className="faq-tabs" role="tablist" aria-label={language==='ja'?'質問のカテゴリ':'FAQ categories'}>
        {categories.map((category,index)=><button type="button" role="tab" id={'faq-tab-'+category.id} aria-controls={'faq-panel-'+category.id} aria-selected={active===category.id} tabIndex={active===category.id?0:-1} key={category.id} ref={element=>{tabs.current[index]=element;}} onClick={()=>setActive(category.id)} onKeyDown={event=>{
          let next=index;
          if(event.key==='ArrowRight') next=(index+1)%categories.length;
          else if(event.key==='ArrowLeft') next=(index+categories.length-1)%categories.length;
          else if(event.key==='Home') next=0;
          else if(event.key==='End') next=categories.length-1;
          else return;
          event.preventDefault(); setActive(categories[next].id); tabs.current[next]?.focus();
        }}><T ja={category.ja} en={category.en}/></button>)}
      </div>
      {categories.map(category=><div className="faq-list" role="tabpanel" id={'faq-panel-'+category.id} aria-labelledby={'faq-tab-'+category.id} hidden={active!==category.id} key={category.id}>
        {faqs.filter(faq=>faq.category===category.id).map(({ question, answer }) => <details className="faq-item" name={'event-faq-'+category.id} key={question}>
          <summary><T ja={question}/><span className="faq-toggle" aria-hidden="true"/></summary>
          <div className="faq-answer"><p>{typeof answer === "string" ? <T ja={answer}/> : answer}</p></div>
        </details>)}
      </div>)}
    </div>
  </section>;
}
