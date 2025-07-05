import Atmosphere from "@/components/Performance/Atmosphere";
import PerformanceBox from "@/components/Performance/PerformanceBox";


const performance = () => {
  return (
    <div className="my-8">
       <PerformanceBox mainmsg="ดูผลงานทั้งหมด" pops="hidden" />

       <div>
        <Atmosphere  />
       </div>
    </div>
  );
};
export default performance;
