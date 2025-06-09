import Link from "next/link";
import { Button } from "../ui/button";
import PerformanceContainer from "./PerformanceContainer";

const PerformanceBox = () => {
  const LINKIMG = "/images/service";
  return (
    <div>
      {" "}
      <section>
        <div >
          <h3 className="text-2xl text-center mb-2 border-b-red-800">
            ผลงานของเรา
          </h3>
          <Button className="text-sm ml-15  bg-blue-800 text-white transition-transform duration-200 ease-in-out hover:scale-110 rounded-md">
            <Link href='/performance'>ดูผลงานทั้งหมด</Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-10">



            <PerformanceContainer
          image={LINKIMG + "/LINE_ติดตั้งปั้มน้ำ.webp"}
  
          name="รับติดตั้งปั้มน้ำ"
          description="รับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำ"
        />

        <PerformanceContainer
          image={LINKIMG + "/ติดตั้งชักโชรกไหม่.webp"}
          name="รับติดตั้งชักโชรกไหม่"
        />

        <PerformanceContainer
          image={LINKIMG + "/LINE_เปลื่ยนท่อน้ำทิ้ง4นิ้ว_ลาดพร้าว.webp"}
          name="รับซ่อมท่อตัน"
        />

        <PerformanceContainer
          image={LINKIMG + "/รับซ่อมรั่วซึม.webp"}
          name="รับซ่อมรั่วซึม"
        />

        <PerformanceContainer
          image={LINKIMG + "/ติดตั้งชักโชรกไหม่.webp"}
          
          name="รับติดตั้งชักโชรกใหม่"
        />
        
        <PerformanceContainer
          image={LINKIMG + "/LINE_ติดตั้งแทงค์น้ำ.jpg"}
    
          name="รับติดตั้งแทงค์น้ำ"
        />
        </div>
      </section>
    </div>
  );
};
export default PerformanceBox;



