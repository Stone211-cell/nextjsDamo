import { MessageSquareMore } from "lucide-react";

type classtype = {
  pops?: string;
  sizeicon?: string;
};
export const ContactIconLine = ({ pops, sizeicon }: classtype) => {
  return (
    <div className="flex gap-2 justify-start align-center">
      <MessageSquareMore size={sizeicon} color=" red" />
      <div className={pops}>
        <p>Contact Us</p>
        <p>0666666666666</p>
      </div>
    </div>
  );
};
export const ContactIconh = () => {
  return <div>ContactIcon</div>;
};
export const ContactIcon = () => {
  return <div>ContactIcon</div>;
};
