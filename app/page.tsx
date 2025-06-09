import CardContainer from "@/components/Card/CardContainer";
import BannerImg from "@/components/Banner/BannerImg";
import { ContactIconLine } from "@/components/Contacted/ContactIcon";
import PerformanceContainer from "@/components/Performance/PerformanceContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PerformanceBox from "@/components/Performance/PerformanceBox";
import ContactedBox from "@/components/Contacted/ContactedBox";
import CardBox from "@/components/Card/CardBox";
import DetailsProductBox from "@/components/DetailsProduct/DetailsProductBox";

const page = () => {
  return (
    <div className=" flex flex-col gap-10  justify-center">
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

      <ContactedBox />

      {/* ผลงาน */}
      <section>
        {" "}
        <PerformanceBox />
      </section>

      <div className="h-64 bg-gradient-to-b from-blue-200 to-blue-800">
        faf
      </div>
    </div>
  );
};
export default page;
