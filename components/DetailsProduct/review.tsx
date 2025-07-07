"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Review() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-blue dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "งานดีจริงๆครับ ผมเคยให้ช่างคนนึงซ่อมท่อน้ำตั้งแต่ 2 ปีก่อน ผลคือพังซ่อมใหม่แล้วซ่อมใหม่อีก ก็พังเหมือนเดิม จนมาเจอช่างมิล สุภาพใจดีมากครับ แล้วผมจ้างซ่อมท่อเดิม จนปัจจุบันผ่านมา 2 ปีท่อยังใช้งานได้ปกติครับ และพึ่งจ้างงานให้ติดตั้งปั้มน้ำ ผลงานไม่ผิดหวังจริงๆครับคุ้มค่ามากๆ",
    name: "สุวภัทร จาตุรัญสมบูรณ์",
    title: "รีวิว 5/5 ดาว",
  },
  {
    quote:
      "ช่างบริการดีมากค่ะ พูดจาไพเราะ ราคาไม่แพง",
    name: "นฤมล สีดาพล",
    title: "รีวิว 5/5 ดาว",
  },
  {
    quote:
      "ช่างซ่อมงานดีมากครับ ไว้ดอกาสหน้าจะจ้างอีก",
    name: "นุกูล",
    title: "รีวิว 5/5 ดาว",
  },
  {
    quote:
      "ช่างพูดไพเราะมากค่ะ ปรึกษาถามคำถามซัพพอร์ตดีมาก",
    name: "กมลชนก",
    title: "รีวิว 5/5 ดาว",
  },

];
