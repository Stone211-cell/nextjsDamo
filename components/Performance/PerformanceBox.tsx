import Link from "next/link";
import { Button } from "../ui/button";
import PerformanceContainer from "./PerformanceContainer";

const PerformanceBox = ({
  mainmsg,
  pops,
}: {
  mainmsg?: string;
  pops?: string;
}) => {
  const LINKIMG = "/images/performance";
  return (
    <div>
      {" "}
      <section>
        <div>
          <h3 className="text-2xl text-center mb-2 border-b-red-800">
            ผลงานของเรา
          </h3>
          <Button
            className={`${pops} text-sm ml-15 bg-blue-800 text-white transition-transform duration-200 ease-in-out hover:scale-110 rounded-md`}
          >
            <Link href="/performance">{mainmsg}</Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-10">
          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250610_1.jpg"}
            name="เดินท่อใหม่"
            // description="รับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำ"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250610_2.jpg"}
            name="ตรวจหาท่อรั่วซึม"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250610_3.jpg"}
            name="รับซ่อมท่อรั่วซึม"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250610_4.jpg"}
            name=" ติดตั้งท่อวาล์วน้ำประปาใหม่"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250610_5.jpg"}
            name="รับซ่อม ใต้คานบ้าน"
            description="หาจุดรั่ว และ ซ่อมท่อประปาภายในบ้าน"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_ติดตั้งแทงค์_250611_1.jpg"}
            name="รับติดตั้งแทงค์น้ำ"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250610_7.jpg"}
            name="เดินท่อใหม่ เปลี่ยนระบบจากใต้ดินย้ายมาบนดิน"
          />
        </div>
      </section>
    </div>
  );
};
export default PerformanceBox;
