import BannerImg from "@/components/Banner/BannerImg";

import PerformanceShow from "@/components/Performance/PerformanceShow";
import ContactedBox from "@/components/Contacted/ContactedBox";
import CardBox from "@/components/Card/CardBox";
import DetailsProductBox from "@/components/DetailsProduct/DetailsProductBox";
import Mapcontactdetail from "@/components/Mapdetail/Mapcontactdetail";
import DetailsInstallPump from "@/components/DetailsProduct/DetailsInstallPump";
import { Review } from "@/components/DetailsProduct/review";

const page = () => {
  return (
    <div>
      <div className=" flex flex-col gap-12  justify-center">
        {/* banner */}
        <section>
          <BannerImg />
        </section>
        {/* service */}
        <section>
          <DetailsProductBox />

          <div id="service">
            <CardBox />
          </div>
        </section>
        {/* ปุ่มติดต่อ */}
        <ContactedBox />

        {/* โชว์ผลงาน */}
        <section>
          <PerformanceShow mainmsg="ดูผลงานทั้งหมด" />
        </section>

        {/* แหล่งติดต่อ-กูเกิ้ลแมพ */}
        <section>
          {/* mapcontactdetail */}
          <Mapcontactdetail />
        </section>
      </div>

      {/* install pump */}
      <section className="mb-10">
        <DetailsInstallPump />
      </section>

      {/* ปุ่มติดต่อ */}
      <section className="mb-10">
        <h2 className="text-2xl text-center mb-3">ติดต่อเรา</h2>
        <ContactedBox />
      </section>
      <Review />
    </div>
  );
};
export default page;
