import type { Metadata } from "next";

import "@/lib/fontawesome";
import "./globals.css";
import Headeravbar from "@/components/Navbar/Headeravbar";
import { Kanit } from "next/font/google";
import Footerbar from "@/components/Footer/Footerbar";


const kanit = Kanit({
  subsets: ["latin", "thai"], // หรือ ["latin", "thai"] ถ้าใช้ภาษาอังกฤษด้วย
  weight: ["200", "400", "700"],
});



const LINKIMG = "/images/service/LOGO.jpg";

export const metadata: Metadata = {
  title: "ช่างมิลการประปาเพื่อคุณ",
  description:
    "ช่างซ่อมประปาใกล้ฉัน รับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับซ่อมท่อทุกประเภทครบจบในที่เดียวบริการรับซ่อมประปา หาจุดรั่ว เดินท่อประปารับซ่อมท่อตันติดตั้งเก็บน้ำ และ รับติดตั้งระบบประปารับซ่อมท่อทุกประเภท ครบจบในที่เดียว",
  keywords: ["คำ", "คำ", "สำคัญ"],

  viewport: "width=device-width, initial-scale=1", // แทน meta viewport

  icons: {
    icon: "/images/service/LOGO.jpg",
    apple: "/images/service/LOGO.jpg",
    shortcut: "/images/service/LOGO.jpg"
  },

  openGraph: {
    title: "ช่างมิลการประปาเพื่อคุณ",
    description: "คำอธิบายสั้นๆ ของเว็บหรือเพจนี้",
    url: "https://xn--12cli4ea7apbo8ioaeft01a.com/ ",
    type: "website",
    images: [
      {
        url: "/images/service/LOGO.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ช่างมิลการประปาเพื่อคุณ",
    description: "คำอธิบายสั้นๆ ของเว็บหรือเพจนี้",
    images: "/images/service/LOGO.jpg",
  },

  other: {
    charset: "UTF-8",
    canonical: "https://xn--12cli4ea7apbo8ioaeft01a.com/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LINKIMG = "/images/service/LOGO.jpg";
  
  return (
    <html lang="th" className={kanit.className}>

      <body>
        <Headeravbar />
        {children}
        <Footerbar />
      </body>
    </html>
  );
}
