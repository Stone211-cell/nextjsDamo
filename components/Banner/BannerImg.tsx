import Image from "next/image";

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
        <img
          src="/images/banner/S__8683544.webp"
          alt="พื้นหลัง"
          className="absolute inset-0 w-full h-[400px] object-cover  backdrop-blur-md"
        />
        <div className="relative z-10 bg-blue-900/50 p-8 h-[400px] rounded-xl text-white backdrop-blur-sm text-center">
          <h2 className="text-2xl font-bold"> ช่างมิล ประปาเพื่อคุณ</h2>

          <div className="mt-5">
            <h2 className="text-xl font-bold">ช่างประปา คุณภาพ</h2>
            <p className="mt-2 text-sm">รับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับซ่อมท่อตันติดตั้งเก็บน้ำ ทุกประเภท ครบจบในที่เดียว </p>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerImg;
