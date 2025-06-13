import Link from "next/link";
import { Button } from "../ui/button";

const DetailsProductBox = () => {
  return (
    <div>
      {" "}
      <div className="text-center">
        <div>
          <p className="inline-block px-4 max-w-fulltext-[14px] ">
            <Button
              className="bg-blue-800 text-white transition-transform duration-200 ease-in-out hover:scale-110 rounded-md"
              asChild
            >
              <Link href="#service">ช่างมิล ประปาเพื่อคุณ</Link>
            </Button>
          </p>
        </div>

        <div className="text-base mt-2 p-2">
          <h3>
            รับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับซ่อมท่อทุกประเภท
            ครบจบในที่เดียว
          </h3>
          <p className="text-[12px]">
            บริการรับซ่อมประปา หาจุดรั่ว เดินท่อประปา
            รับติดตั้งที่เก็บน้ำ และ รับติดตั้งระบบประปา
            รับซ่อมท่อทุกประเภท ครบจบในที่เดียว
          </p>
          <p className="text-[12px]">
            #ปั๊มน้ำทำงานเองโดยที่ไม่มีการใช้น้ำภายในบ้าน
            #มิเตอร์น้ำหมุนตลอดโดยที่ไม่มีการใช้น้ำ #ค่าน้ำสูงผิดปกติ
            #ซ่อมแก้ไขท่อน้ำรั่วใต้พื้นปูน #เดินท่อน้ำดีน้ำทิ้งใหม่(เดินท่อลอย) <br />
            #ปั๊มน้ำมีปัญหา #ติดตั้งปั๊มน้ำใหม่ #ติดตั้งแท็งก์น้ำใหม่
            #เปลี่ยนก๊อกน้ำใหม่ #เปลี่ยนสุขภัณฑ์ใหม่ซ่อมซ่อม
            #งานระบบประปาอื่นๆภายในบ้านอาคาร
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailsProductBox;
