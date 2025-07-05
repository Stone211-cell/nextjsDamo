import fs from "fs";
import path from "path";
import PerformanceContainer from "./PerformanceContainer";

const LINKIMG = "/images/atmosphere";


export default function AtmospherePage() {
  const dir = path.join(process.cwd(), "public/images/atmosphere");

  // โหลดไฟล์ทั้งหมด 1 รอบ พร้อมเวลาแก้ไข
  const allImagesWithTime = fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .map((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      return { file, mtime: stats.mtime };
    })
    // เรียงจากใหม่สุดไปเก่าสุด
    .sort((a, b) => a.mtime.getTime() - b.mtime.getTime());

  // ติดตั้งสุขภัณฑ์ SanitaryWare
  const SanitaryWare = allImagesWithTime.slice(0, 7);

  // เช็คระบบปั้ม และซ่อมน้ำซึม CheckPump
  const CheckPump = allImagesWithTime.slice(7, 14);

  //  ติดตั้งปั้มใหม่ InstallPump
  const InstallPump = allImagesWithTime.slice(14, 21);

  // ดินลอยจากมิเตอร์เข้าแทงค์ TankEntrance
  const TankEntrance = allImagesWithTime.slice(21, 36);

  return (
    <div>
      <section>
        <h3 className="text-2xl text-center mb-2 border-b-red-800">
          ภาพบรรยากาศ
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-10">
          {SanitaryWare.map(({ file }, i) => (
            <PerformanceContainer
              key={`tank-${i}`}
              image={`${LINKIMG}/${file}`}
              name={`ติดตั้งสุขภัณฑ์ `}
              // ${i + 1}
            />
          ))}

          {CheckPump.map(({ file }, i) => (
            <PerformanceContainer
              key={`pump-${i}`}
              image={`${LINKIMG}/${file}`}
              name={`เช็คระบบปั้ม`}
            />
          ))}

          {InstallPump.map(({ file }, i) => (
            <PerformanceContainer
              key={`sanitary-${i}`}
              image={`${LINKIMG}/${file}`}
              name={`ติดตั้งปั้มใหม่`}
              description=""
            />
          ))}

          {TankEntrance.map(({ file }, i) => (
            <PerformanceContainer
              key={`check-${i}`}
              image={`${LINKIMG}/${file}`}
              name={`ดินลอยจากมิเตอร์เข้าแทงค์`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
