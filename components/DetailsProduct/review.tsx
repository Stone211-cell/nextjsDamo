"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Review() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-blue dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
