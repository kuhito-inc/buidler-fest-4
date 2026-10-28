import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
const browser=await chromium.launch({headless:true});
mkdirSync('qa-output',{recursive:true});
for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
  await page.goto('http://127.0.0.1:3000/',{waitUntil:'networkidle'});
  await page.locator('.hero-logo img').evaluate(async img=>{await img.decode()});
  const info=await page.evaluate(()=>({title:document.title,scrollWidth:document.documentElement.scrollWidth,innerWidth:window.innerWidth,logoLoaded:document.querySelector('.hero-logo img')?.naturalWidth>0,logoSrc:document.querySelector('.hero-logo img')?.getAttribute('src')}));
  console.log(name,JSON.stringify(info));
  if(!info.logoLoaded)throw new Error('Approved logo did not load');
  if(info.scrollWidth>info.innerWidth+2)throw new Error('Horizontal overflow at '+name);
  await page.screenshot({path:'qa-output/'+name+'.png',fullPage:true});
  await page.close();
}
await browser.close();
