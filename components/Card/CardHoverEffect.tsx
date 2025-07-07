import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    pic:"/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg",
    title: "รับตรวจหาจุดท่อรั่วใต้พื้นดิน",

    
  },
  {
    pic:"/images/service/ซ่อมท่อน้ำใต้ดิน.jpg",
    title: "ซ่อมท่อรั่วใต้พื้นดินอย่างแม่นยำและตรงจุดไม่บานปลาย",

    
  },
  {
    pic:"/images/service/LINE_ติดตั้งแทงค์น้ำ.webp",
    title: "ติดตั้งแทงค์น้ำ/ดูแลและตรวจแทงค์น้ำ",

    
  },
  {
    pic:"/images/service/ติดตั้งชักโชรกไหม่.webp",
    title: "ย้ายและติดตั้งสุขภัณฑ์",

    
  },
  {
    pic:"/images/service/LINE_เปลื่ยนท่อน้ำทิ้ง4นิ้ว_ลาดพร้าว.webp",
    title: "ตัดต่อซ่อมท่อ PPR",

    
  },
  {
    pic:"/images/service/LINE_ติดตั้งปั้มน้ำ.webp",
    title: "ติดตั้งปั้มน้ำ/แทงก์น้ำ พร้อมติดตั้งระบบบายพาส",

    
  },
  
  
];
