
import PerformanceContainer from "./PerformanceContainer";



const Atmosphere = ({mainmsg}:{mainmsg?:string}) => {
  const LINKIMG = "/images/atmosphere";
  return (
    <div>
      {" "}
      <section>
        <div>
          <h3 className="text-2xl text-center mb-2 border-b-red-800">
            
            {mainmsg}
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-10">
          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_บรรยากาศ_250610_1.jpg"}
            name="ภาพบรรยากาศขณะตรวจสอบท่อน้ำรั่ว"
            // description="รับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำ"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_บรรยากาศ_250610_2.jpg"}
            name="ภาพบรรยากาศขณะเปลี่ยนท่อใหม่"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_บรรยากาศ_250610_3.jpg"}
            name="ภาพบรรยากาศขณะเปลี่ยนท่อใหม่"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_บรรยากาศ_250610_4.jpg"}
            name="ภาพบรรยากาศขณะเปลี่ยนท่อใหม่"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_บรรยากาศ_250610_5.jpg"}
            name="ภาพบรรยากาศขณะเปลี่ยนท่อใหม่"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_บรรยากาศ_250610_6.jpg"}
            name="ภาพบรรยากาศขณะเปลี่ยนท่อใหม่"
          />
        </div>
      </section>
    </div>
  );
};
export default Atmosphere;
