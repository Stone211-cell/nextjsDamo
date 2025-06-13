import Image from "next/image";

const DetailsInstallPump = () => {
  return (
    <div>
      <div>
        <div className="relative ">
          <Image
            src="/images/banner/S__8683544.webp"
            alt="พื้นหลัง"
            className="absolute inset-0 w-full h-[100%] object-cover  backdrop-blur-md"
            fill
          />
          <div className="relative z-10 bg-gradient-to-b from-blue-900 to-blue-700  p-10  h-[100%] rounded-xl text-white backdrop-blur-lg text-start">
            <h2 className="text-3xl font-bold"> ช่างมิล ประปาเพื่อคุณ</h2>

            <div >
              <h2 className="text-xl font-bold text-amber-300">
                ซ่อมแซม ติดตั้ง ระบบประปา
              </h2>
              <p className="mt-2 text-sm">
                บริการซ่อมแซม และ ติดตั้งระบบประปา สำหรับบ้านและอาคารทุกประเภท
                มั่นใจได้ในคุณภาพงานที่รวดเร็วและประณีต พร้อมทีมช่างผู้ชำนาญการ
                ยินดีแก้ปัญหาประปา แบบครบวงจร
              </p>
            </div>

            <div className="my-5 ">
              <h2 className="text-xl font-bold text-amber-300 ">รับซ่อมประปา</h2>
              <p className="mt-2 text-sm">
                รับซ่อมแซมท่อประปา ทุกประเภท ไม่ว่าจะเป็น ท่อรั่ว ท่อแตกร้าว
                น้ำไม่ไหล ให้กลับมาใช้งานได้ตามปกติ โดยเร็วที่สุด{" "}
              </p>
            </div>

            <div className="my-5 ">
              <h2 className="text-xl font-bold text-amber-300">
                รับซ่อม-ตรวจ ปั๊มน้ำดังตลอด
              </h2>
              <p className="mt-2 text-sm">
                บริการรับแก้ไขปัญหาปั๊มน้ำดังตลอด ดังทุกๆ 1 ถึง 2 นาที ค่าน้ำแพงกว่าปกติ โทรปรึกษา หรือ ADDLINE ได้ฟรี
              </p>
            </div>

            <div className="my-5 ">
              <h2 className="text-xl font-bold text-amber-300">
                รับเดินท่อประปา
              </h2>
              <p className="mt-2 text-sm">
                บริการเดินท่อประปาใหม่ สำหรับบ้านและอาคารทุกขนาด
                ด้วยการวางแผนงานอย่างรอบคอบ เพื่อให้ระบบประปามีคุณภาพสูง ทนทาน
                และ ใช้งานได้อย่างยาวนาน{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsInstallPump;
