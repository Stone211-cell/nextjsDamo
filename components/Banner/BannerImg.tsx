import Image from "next/image";
import ContactedBox from "../Contacted/ContactedBox";


const BannerImg = () => {
  return (
    <div>
      <div className="relative w-full h-[500px]">
        <div className="hinden md:block">
          <Image src="/images/banner/2025-04-04_46ypwa.webp" alt="hello" fill />
        </div>
        <div className="block md:hidden ">
          <Image src="/images/banner/768pxbanner.webp" alt="hello" fill />
        </div>
      </div>

      <div className="relative ">
        <Image
          src="/images/banner/S__8683544.webp"
          alt="พื้นหลัง"
          className="absolute inset-0 w-full h-[100%] min-h-[400px] object-cover  backdrop-blur-md"
          fill
        />
        <div className="relative z-10 bg-blue-900/50 p-8 h-[100%] min-h-[400px] rounded-xl text-white backdrop-blur-sm text-center">
          <h2 className="text-2xl font-bold"> ช่างมิล ประปาเพื่อคุณ</h2>

          <div className="my-5 ">
            <h2 className="text-xl font-bold">ช่างประปา คุณภาพ</h2>
            <p className="mt-2 text-sm">รับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับติดตั้งที่เก็บน้ำ ทุกประเภท ครบจบในที่เดียว </p>
          </div>

          <div>

            <ContactedBox  classtype="bg-white p-1 w-full text-black rounded-xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerImg;
