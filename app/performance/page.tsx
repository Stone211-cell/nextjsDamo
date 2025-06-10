import Atmosphere from "@/components/Performance/Atmosphere";
import PerformanceBox from "@/components/Performance/PerformanceBox";


const performance = () => {
  return (
    <div className="mt-5">
       <PerformanceBox mainmsg="ดูผลงานทั้งหมด" pops="hidden"/>

       <div>
        <Atmosphere mainmsg="ผลงานของเรา"/>
       </div>
    </div>
  );
};
export default performance;
