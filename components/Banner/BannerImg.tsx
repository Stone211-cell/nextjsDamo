import Image from "next/image";
import ContactedBox from "../Contacted/ContactedBox";

const BannerImg = () => {
  return (
    <div>
      <div className="relative ">
        <div className="hinden md:block w-full h-[700px]">
          <Image
            src="/images/banner/แบนเนอร์_ช่างประปา.png"
            alt="ช่างมิลการประปา"
            fill
            
          />
        </div>
        <div className="block md:hidden w-full h-[500px]">
          <Image
            src="/images/banner/มือถือ_แบนเนอร์_ช่างประปา.png"
            alt="ช่างมิลการประปา"
            fill
           
          />
        </div>
      </div>

      <div className="relative ">
        <Image
          src="/images/banner/S__8683544.webp"
          alt="ช่างมิลการประปา"
          className="absolute inset-0 w-full h-[100%] min-h-[400px] object-cover  backdrop-blur-md"
          fill
        />
        <div className="relative z-10 bg-blue-900/50 p-8 h-[100%] min-h-[400px] rounded-xl text-white backdrop-blur-sm text-center">
          <h2 className="text-2xl font-bold"> ช่างมิล ประปาเพื่อคุณ</h2>

          <div className="my-5 ">
            <h2 className="text-xl font-bold">ช่างประปา คุณภาพ</h2>
            <p className="mt-2 text-sm">
              รับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับติดตั้งที่เก็บน้ำ ทุกประเภท
              ครบจบในที่เดียว{" "}
            </p>
          </div>

          <div>
            <ContactedBox classtype="bg-white p-1 w-full text-black rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerImg;



export const Bannerbg = ({img,text,des}:{img:string,text?:string,des?:string}) => {
  return (
    <div>
     

      <div className="relative ">
        <Image
          src={img}
          alt="ช่างมิลการประปา"
          className="absolute inset-0 w-full h-[100%] min-h-[400px] object-cover  backdrop-blur-md"
          fill
        />
        <div className="relative z-10 bg-blue-900/50 p-8 h-[100%] min-h-[400px] rounded-xl text-white backdrop-blur-sm text-center">
          <h2 className="text-4xl font-bold">{text}</h2>

          <div className="my-5 ">
            <p className="mt-2 text-xl">
             {des}
            </p>
          </div>

          <div>
            <ContactedBox classtype="bg-white p-1 w-full text-black rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
 
