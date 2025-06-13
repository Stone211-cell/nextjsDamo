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




export const metadata: Metadata = {
  title: "รับซ่อมประปาท่อน้ำ-งานรั่วซึมทุกประเภท | รับซ่อมท่อประปารั่ว | ช่างมิลการประปา",
  description:
    "ช่างซ่อมประปากรุงเทพ-ปริมณฑล รับซ่อมประปา หาจุดรั่ว เดินท่อ-ติดตั้งประปา รับซ่อมท่อทุกประเภทครบจบในที่เดียวบริการรับซ่อมประปา ",
  keywords: ["ซ่อมประปากรุงเทพ" ,"ซ่อมท่อน้ำ", "กรุงเทพ","น้ำไม่ไหล","ท่อน้ำรั่ว","ช่างประปาใกล้ฉัน"],

  viewport: "width=device-width, initial-scale=1", // แทน meta viewport

  icons: {
    icon: "/images/service/LOGO.jpg",
    apple: "/images/service/LOGO.jpg",
    shortcut: "/images/service/LOGO.jpg"
  },

  openGraph: {
    title: "รับซ่อมประปาท่อน้ำ-งานรั่วซึมทุกประเภท | รับซ่อมท่อประปารั่ว | ช่างมิลการประปา",
    description: "ช่างซ่อมประปากรุงเทพ-ปริมณฑล รับซ่อมประปา หาจุดรั่ว เดินท่อ-ติดตั้งประปา รับซ่อมท่อทุกประเภทครบจบในที่เดียวบริการรับซ่อมประปา ",
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
    title: "รับซ่อมประปาท่อน้ำ-งานรั่วซึมทุกประเภท | รับซ่อมท่อประปารั่ว | ช่างมิลการประปา",
    description: "ช่างซ่อมประปากรุงเทพ-ปริมณฑล รับซ่อมประปา หาจุดรั่ว เดินท่อ-ติดตั้งประปา รับซ่อมท่อทุกประเภทครบจบในที่เดียวบริการรับซ่อมประปา ",
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
