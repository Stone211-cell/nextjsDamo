import Link from "next/link";
import { Button } from "../ui/button";

const DetailsProductBox = () => {
  return (
    <div>
      {" "}
      <div className="text-center">
        <div>
          <p className="inline-block px-4 max-w-fulltext-[14px] ">
            <Button
              className="bg-blue-800 text-white transition-transform duration-200 ease-in-out hover:scale-110 rounded-md"
              asChild
            >
              <Link href="#service">ช่างมิล ประปาเพื่อคุณ</Link>
            </Button>
          </p>
        </div>

        <div className="text-base mt-2 p-2">
          <h3>
            รับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับซ่อมท่อทุกประเภท
            ครบจบในที่เดียว
          </h3>
          <p className="text-[12px]">
            บริการรับซ่อมประปา หาจุดรั่ว เดินท่อประปา
            รับซ่อมท่อตันติดตั้งเก็บน้ำ และ รับติดตั้งระบบประปา
            รับซ่อมท่อทุกประเภท ครบจบในที่เดียว
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailsProductBox;
