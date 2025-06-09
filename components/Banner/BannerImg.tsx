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
      <div className="w-full h-[200px] backdrop-opacity-10 bg-red-300 backdrop-blur-md"></div>
    </div>
  );
};
export default BannerImg;
