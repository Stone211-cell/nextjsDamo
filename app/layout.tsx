// import type { Metadata } from "next";
import "@/lib/fontawesome";
import "./globals.css";
import Headeravbar from "@/components/Navbar/Headeravbar";
import { Kanit } from "next/font/google";
import Footerbar from "@/components/Footer/Footerbar";
import Head from "next/head";

const kanit = Kanit({
  subsets: ["latin", "thai"], // หรือ ["latin", "thai"] ถ้าใช้ภาษาอังกฤษด้วย
  weight: ["200", "400", "700"],
});

// export const metadata: Metadata = {
//   title: "ช่างมิลการประปาเพื่อคุณ",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LINKIMG = "/images/service/LOGO.jpg";
  return (
    <html lang="th" className={kanit.className}>
      <Head>
        {/* Title */}
        <title>ช่างมิลการประปาเพื่อคุณ</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="ช่างซ่อมประปาใกล้ฉัน รับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับซ่อมท่อทุกประเภทครบจบในที่เดียวบริการรับซ่อมประปา หาจุดรั่ว เดินท่อประปารับซ่อมท่อตันติดตั้งเก็บน้ำ และ รับติดตั้งระบบประปารับซ่อมท่อทุกประเภท ครบจบในที่เดียว"
        />

        {/* Meta Keywords (ปัจจุบันไม่ค่อยมีผลมาก) */}
        <meta name="keywords" content="คำ, คำ, สำคัญ" />

        {/* Viewport สำหรับมือถือ */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Charset */}
        <meta charSet="UTF-8" />

        {/* Open Graph สำหรับแชร์บน Facebook, Line, Twitter */}
        <meta property="og:title" content="ช่างมิลการประปาเพื่อคุณ" />
        <meta
          property="og:description"
          content="คำอธิบายสั้นๆ ของเว็บหรือเพจนี้"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content={LINKIMG}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ช่างมิลการประปาเพื่อคุณ" />
        <meta
          name="twitter:description"
          content="คำอธิบายสั้นๆ ของเว็บหรือเพจนี้"
        />
        <meta
          name="twitter:image"
          content={LINKIMG }
        />

        {/* Canonical URL เพื่อป้องกันเนื้อหาซ้ำ */}
        <link rel="canonical" href="https://yourwebsite.com/current-page" />
      </Head>
      <body>
        <Headeravbar />
        {children}
        <Footerbar />
      </body>
    </html>
  );
}
