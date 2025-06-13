import CardContainer from "./CardContainer";

const CardBox = () => {
    const LINKIMG = "/images/service";
  return (
    <div>
      {" "}
      <div className="grid grid-cols-2 gap-3 justify-center md:grid-cols-3">
        <CardContainer
          srcimg={LINKIMG + "/LINE_ติดตั้งปั้มน้ำ.webp"}
          alt="ท่อน้ำรั่ว"
          title="รับติดตั้งปั้มน้ำ"
        />
        <CardContainer
          srcimg={LINKIMG + "/ติดตั้งชักโชรกไหม่.webp"}
          alt="ท่อน้ำรั่ว"
          title="รับติดตั้งสุขภัณฑ์"
        />
        <CardContainer
          srcimg={LINKIMG + "/LINE_เปลื่ยนท่อน้ำทิ้ง4นิ้ว_ลาดพร้าว.webp"}
          alt="ท่อน้ำรั่ว"
          title="รับเดินท่อ PPR PB"
        />
        <CardContainer
          srcimg={LINKIMG + "/รับซ่อมรั่วซึม.webp"}
          alt="ท่อน้ำรั่ว"
          title="รับซ่อมรั่วซึม"
        />
        <CardContainer
          srcimg={LINKIMG + "/รับซ่อมรั่วซึม.webp"}
          alt="ท่อน้ำรั่ว"
          title="จบทุกงาน ไว้ใจเรา"
        />
        <CardContainer
          srcimg={LINKIMG + "/LINE_ติดตั้งแทงค์น้ำ.webp"}
          alt="ท่อน้ำรั่ว"
          title="รับติดตั้งแทงค์น้ำ"
        />
      </div>
    </div>
  );
};
export default CardBox;
