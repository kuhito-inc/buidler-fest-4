import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Buidler Fest 2027 | Osaka, Japan",description:"Buidler Fest 2027 — a gathering for Cardano builders in Osaka, Japan.",robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
