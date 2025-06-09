import { ContactIconLine } from "../Contacted/ContactIcon";
import Dropdown from "./Dropdown";

const Headeravbar = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full overflow-x-hidden">
      <div>Logo</div>

      <div className="flex  gap-4 items-center max-w-full">
        <span>
          <ContactIconLine pops="hidden" sizeicon="30" />
        </span>
        <span>
          <ContactIconLine pops="hidden" sizeicon="10" />
        </span>
        <span>
          <ContactIconLine pops="hidden" sizeicon="10" />
        </span>

        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
export default Headeravbar;
