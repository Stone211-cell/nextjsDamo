import { Bannerbg } from "@/components/Banner/BannerImg";
import { CardHoverEffect } from "@/components/Card/CardHoverEffect";
import ContactedBox from "@/components/Contacted/ContactedBox";

import PerformanceShow from "@/components/Performance/PerformanceShow";

const page = () => {
  const img = "/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg";
  return (
    <div>
      <div>
        <Bannerbg
          img={img}
          text="บริการของเรา"
          des="บริการตรวจสอบหาจุดท่อรั่วในบ้าน อาคาร แก้ไขปัญหาค่าน้ำขึ้นสูง ปั้มน้ำทำงานตลอด มิเตอร์หมุนตลอด โดยไม่มีการใช้น้ำ ย้าย-ติดตั้งสุขภัณฑ์ เช่น อ่างล้างหน้า ฝักบัว ก๊อก ชักโครก และแก้ไขระบบประปาน้ำดี/น้ำทิ้ง เดินท่อประปาใหม่ เดินท่อประปาระบบกรีดฝัง-เดินท่อประปาลอยแก้ไขปัญหาประปารั่วในบ้านระยะยาว

"
        />
      </div>

      <div>
        <section className="relative ">
          <div className="relative z-10 bg-gradient-to-b from-blue-900 to-blue-700  p-10  h-[100%] text-white backdrop-blur-lg text-start">
            <h2 className="text-3xl font-bold">
              ช่างซ่อมท่อประปา รับซ่อมประปาภายในบ้าน ตรวจหาท่อประปารั่ว
              ซ่อมท่อรั่ว ท่อแตก ท่อประปา ช่างท่อน้ำรั่ว ภายในบ้าน
              ด้วยเครื่องมือและเทคโนโลยีที่ทันสมัย
            </h2>

            <div>
              <h2 className="text-xl mt-3 font-bold text-amber-300">
                สาเหตุท่อน้ำรั่วซึมใต้พื้นดิน
              </h2>

              <div className="whitespace-pre-line">
                <ul className="list-disc mt-2 text-sm whitespace-pre-line ms-5">
                  <li>
                    เกิดจากการทรุดตัวของตัวบ้านไปกดทับเส้นท่อทำให้ท่อที่อยู่ใต้พื้นดินเกิดชำรุดและแตกหัก
                  </li>
                  <li>
                    เกิดจากใต้พื้นบ้านอาจมีโพรงหรือช่องที่หนูสามารถมุดเข้าไปกัดแทะท่อทำให้ท่อรั่วซึมได้
                  </li>
                  <li>
                    เกิดจากรากไม้ที่อยู่ใต้พื้นดินไปกดทับหรือเบียดท่อทำให้ท่อเกิดการชำรุดและรั่วซึมได้
                  </li>
                  <li>
                    เกิดจากอายุการใช้งานของท่อน้ำประปาที่ใช้งานมานานทำให้ท่อเสื่อมสภาพจึงชำรุดและแตกรั่วได้
                  </li>
                  <li>
                    เกิดจากการเสื่อมสภาพของกาวผสานท่อเมื่อกาวหมดอายุการใช้งานหรือเสื่อมสภาพก็จะทำให้ระหว่างท่อกับข้อต่อหลุดออกจากกันได้
                  </li>
                </ul>
              </div>
            </div>

            <div className="my-5 ">
              <h2 className="text-xl font-bold text-amber-300 ">
                วิธีสังเกตุน้ำรั่วภายในบ้านด้วยตนเองเบื้องต้น
              </h2>
              <p className="mt-2 text-sm">
                กรณีที่มีปั๊มน้ำ ให้สังเกตุดูว่า เวลาที่ไม่มีใครใช้น้ำ
                แต่ปั๊มน้ำยังคงทำงานเป็นระยะๆ
                ให้สันนิษฐานก่อนเลยว่าอาจจะมีท่อน้ำรั่วใต้พื้นบ้านแน่นอน
              </p>
              <p className="mt-2 text-sm">
                กรณีที่ดึงน้ำจากประปาโดยตรง หากมีใบแจ้งว่าค่าน้ำสูงผิดปกติ
                ให้ลองตรวจสอบเบื้องต้นก่อน คือให้หยุดการใช้น้ำภานในบ้านทั้งหมด
                และ ไปดูที่มิเตอร์น้ำหากหยุดการใช้น้ำแล้ว แต่มิเตอร์น้ำยังหมุน
                ให้สันนิษฐานก่อนเลยว่า อาจจะมีท่อน้ำประปาปารั่ว
                ใต้พื้นบ้านหรือภายในบ้านแน่นอน
              </p>
            </div>

            <div className="my-5 ">
              <h2 className="text-2xl text-center font-bold text-amber-300">
                ทุกปัญหาเรื่องประปา เราช่วยคุณได้
                ช่างมิลการประปาซ่อมประปาระดับมืออาชีพ รู้จริง ชำนาญจริง ไม่มั่ว
                ซ่อมตรงจุดจบทุกงาน💦
              </h2>
            </div>
          </div>
          {/*  ติดต่อ*/}
          <div>
            <ContactedBox />
          </div>
        </section>

        <section className="my-4">
          <h2 className="text-center text-2xl ">การบริการของเรา</h2>
          <div>
            <CardHoverEffect />
          </div>
          <div className="my-4">
            <ContactedBox />
          </div>
        </section>

        {/* โชว์ผลงาน */}
        <section>
          <PerformanceShow mainmsg="ดูผลงานทั้งหมด" />
        </section>
      </div>

      {/*  ติดต่อ*/}
      <div className="my-4">
        <ContactedBox />
      </div>
    </div>
  );
};
export default page;
