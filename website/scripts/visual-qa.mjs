import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const browser=await chromium.launch({headless:true, channel:process.env.QA_BROWSER || 'chrome'});
const output = resolve(dirname(fileURLToPath(import.meta.url)), '../qa-output', process.env.QA_STAGE || 'after');
mkdirSync(output,{recursive:true});
const results=[];
for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto('http://127.0.0.1:3000/',{waitUntil:'networkidle'});
  await page.evaluate(async()=>{
    const images = Array.from(document.images);
    for (const image of images) image.loading = 'eager';
    await Promise.allSettled(images.map(image=>image.decode()));
  });
  await page.evaluate(()=>document.fonts.ready);
  const info=await page.evaluate(()=>({title:document.title,scrollWidth:document.documentElement.scrollWidth,innerWidth:window.innerWidth,logoLoaded:document.querySelector('.hero-logo-panel img')?.naturalWidth>0,logoSrc:document.querySelector('.hero-logo-panel img')?.getAttribute('src'),brokenImages:[...document.images].filter(img=>!img.complete||!img.naturalWidth).map(img=>img.src),missingAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash)}));
  console.log(name,JSON.stringify(info));
  if(!info.logoLoaded)throw new Error('Approved logo did not load');
  if(info.scrollWidth>info.innerWidth+2)throw new Error('Horizontal overflow at '+name);
  if(info.brokenImages.length || info.missingAnchors.length)throw new Error('Broken images or anchor targets');
  if(errors.length)throw new Error(errors.join('\n'));
  await page.screenshot({path:`${output}/${name}.png`,fullPage:true});
  await page.screenshot({path:`${output}/${name}-viewport.png`});
  if(width===390){
    await page.locator('.mobile-menu summary').click();
    await page.getByRole('navigation',{name:'Mobile navigation'}).waitFor({state:'visible'});
    await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Program',exact:true}).click();
    await page.waitForURL('**/program');
    await page.getByRole('heading',{level:1,name:'Program',exact:true}).waitFor();
  }
  results.push({name,...info});
  await page.close();
}
await browser.close();
writeFileSync(`${output}/results.json`,JSON.stringify(results,null,2)+'\n');
