import CardContainer from "@/components/Card/CardContainer";
import BannerImg from "@/components/Banner/BannerImg";
import { ContactIconLine } from "@/components/Contacted/ContactIcon";
import PerformanceContainer from "@/components/Performance/PerformanceContainer";

const page = () => {
  return (
    <div className="mx-5 flex flex-col gap-10  justify-center">
      {/* banner */}
      <div>
        <BannerImg />
      </div>

      <div className="grid grid-cols-1 mx-30 gap-5 justify-center md:grid-cols-3">
        <CardContainer
          srcimg="/images/banner/LINE_ALBUM_ติดตั้งชักโชรกไหม่_250609_1.jpg"
          alt="hi"
          title="รับซ่อมท่อตันติดตั้งเก็บน้ำ"
          Description="บริการของเรา"
        />
        <CardContainer
          srcimg="/images/banner/LINE_ALBUM_ติดตั้งชักโชรกไหม่_250609_1.jpg"
          alt="hi"
          title="รับซ่อมท่อตันติดตั้งเก็บน้ำ"
          Description="บริการของเรา"
        />
        <CardContainer
          srcimg="/images/banner/LINE_ALBUM_ติดตั้งชักโชรกไหม่_250609_1.jpg"
          alt="hi"
          title="รับซ่อมท่อตันติดตั้งเก็บน้ำ"
          Description="บริการของเรา"
        />
        <CardContainer
          srcimg="/images/banner/LINE_ALBUM_ติดตั้งชักโชรกไหม่_250609_1.jpg"
          alt="hi"
          title="รับซ่อมท่อตันติดตั้งเก็บน้ำ"
          Description="บริการของเรา"
        />
        <CardContainer
          srcimg="/images/banner/LINE_ALBUM_ติดตั้งชักโชรกไหม่_250609_1.jpg"
          alt="hi"
          title="รับซ่อมท่อตันติดตั้งเก็บน้ำ"
          Description="บริการของเรา"
        />
        <CardContainer
          srcimg="/images/banner/LINE_ALBUM_ติดตั้งชักโชรกไหม่_250609_1.jpg"
          alt="hi"
          title="รับซ่อมท่อตันติดตั้งเก็บน้ำ"
          Description="บริการของเรา"
        />

        <div className="grid grid-row-2 justify-center justify-items-center mx-50">
          <div>
            <ContactIconLine />
            <ContactIconLine />
            <ContactIconLine />
            <ContactIconLine />
          </div>
        </div>
      </div>
      {/* ผลงาน */}
      <section>
        <div><h3 className="text-2xl text-center  border-b-red-800">ผลงานของเรา</h3></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-10">
          <PerformanceContainer image="/images/banner/LINE_ALBUM_ติดตั้งชักโชรกไหม่_250609_1.jpg" name="ติดตั้งชักโชรกไหม่"/>
          <PerformanceContainer image="/images/banner/LINE_ALBUM_ติดตั้งชักโชรกไหม่_250609_1.jpg" name="ติดตั้งชักโชรกไหม่"/>
          <PerformanceContainer image="/images/banner/LINE_ALBUM_ติดตั้งชักโชรกไหม่_250609_1.jpg" name="ติดตั้งชักโชรกไหม่"/>
        </div>
      </section>
    </div>
  );
};
export default page;
