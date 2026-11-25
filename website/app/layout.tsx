import type { Metadata } from "next";
import { cookies } from 'next/headers';
import { LanguageProvider } from './language';
import "./globals.css";
export const metadata:Metadata={title:"Cardano Buidler Fest #4",description:"A 2-day event for tech-savvy Cardano builders to connect, showcase and share.",robots:{index:false,follow:false}};
export default async function RootLayout({children}:{children:React.ReactNode}) {
  const language = (await cookies()).get('language')?.value === 'ja' ? 'ja' : 'en';
  return <html lang={language}><body><LanguageProvider initialLanguage={language}>{children}</LanguageProvider></body></html>;
}
