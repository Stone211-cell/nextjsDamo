"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import Image from "next/image";

export function TracingBeamCard() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-blue-900 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-lg  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="400"
                  width="400"
                  className="mx-auto rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title:
      "ทุกปัญหาเรื่องประปา เราช่วยคุณได้ ช่างซ่อมประปาระดับมืออาชีพ  รู้จริง ชำนาญจริง ไม่มั่ว ซ่อมตรงจุดจบทุกงาน",
    description: (
      <>
        <p>
          ตรวจหาน้ำรั่วภายในบ้าน-อาคารต่างๆ ท่อประปารั่ว ซึมใต้พื้นดิน
          พร้อมบริการ และแก้ไขซ่อมแซมปัญหาระบบประปาได้อย่างตรงจุด
          ด้วยเครื่องมือที่ได้มาตรฐาน และใช้อุปกรณ์ที่มีคุณภาพ
          ย้าย-ติดตั้งสุขภันฑ์ในบ้านเช่น อ่างล้างหน้า ฝักบัว ชักโครก
          ย้าย-ติดตั้งแทงค์น้ำ-ปั้มน้ำ รับเดินท่อประปาใหม่
          เดินท่อประปากรีดฝัง-ประปาลอย
        </p>

      </>
    ),
    badge: "ให้เราบริการคุณ ช่างมิลการประปาเพื่อคุณ ",
    image: "/images/service/LINE_ติดตั้งปั้มน้ำ.webp",
  },
  {
    title:
      "ทุกปัญหาเรื่องประปา เราช่วยคุณได้ ช่างซ่อมประปาระดับมืออาชีพ  รู้จริง ชำนาญจริง ไม่มั่ว ซ่อมตรงจุดจบทุกงาน",
    description: (
      <>
       
        <p>
          เราเชี่ยวชาญในการแปลงวงจรตู้น้ำหยอดเหรียญเพื่อให้เครื่องกรองน้ำทำงานอย่างมีประสิทธิภาพและราบรื่น
          ทีมงานของเรามีความเชี่ยวชาญที่พร้อมที่จะช่วยแก้ไขปัญหาเกี่ยวกับวงจรตู้น้ำหยอดเหรียญให้กับคุณ
        </p>
        <p>
          เราใส่ใจในความปลอดภัยและความเป็นส่วนตัวของลูกค้าทุกท่าน
          ดังนั้นเราใช้วัสดุและอุปกรณ์ที่มีคุณภาพดีเพื่อให้คุณได้รับผลิตภัณฑ์ที่มีความน่าเชื่อถือและมีประสิทธิภาพสูงสุด
        </p>
       
      </>
    ),
    badge: "ให้เราบริการคุณ ช่างมิลการประปาเพื่อคุณ ",
    image: "/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg",
  },
  {
    title:
      "ทุกปัญหาเรื่องประปา เราช่วยคุณได้ ช่างซ่อมประปาระดับมืออาชีพ  รู้จริง ชำนาญจริง ไม่มั่ว ซ่อมตรงจุดจบทุกงาน",
    description: (
      <>
      <p>
          หากคุณมีคำถามหรือต้องการใช้บริการ
          ยินดีให้คำปรึกษาและแนะนำวิธีแก้ไขปัญหาระบบน้ำประปา
        </p>
        <p>
          💦ทุกปัญหาเรื่องประปา ครบจบที่ช่างมิลการประปาเพื่อคุณ
        </p>
      </>
    ),
    badge: "ให้เราบริการคุณ ช่างมิลการประปาเพื่อคุณ ",
    image: "/images/service/LINE_ติดตั้งแทงค์น้ำ.webp",
  },
  
];
