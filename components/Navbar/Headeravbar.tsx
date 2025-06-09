import { ContactIconFacebook, ContactIconLine, ContactIconMessenger, ContactIconPhone } from "../Contacted/ContactIcon";
import Dropdown from "./Dropdown";

const Headeravbar = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full overflow-x-hidden">
      <div>Logo</div>

      <div className="flex  gap-4 items-center max-w-full">
        <span>
          <ContactIconLine pops="hidden" sizeicon="2x" coloricon="green"/>
        </span>
        <span>
          <ContactIconPhone pops="hidden" sizeicon="2x" coloricon="red" />
        </span>
        <span>
          <ContactIconFacebook pops="hidden" sizeicon="2x" coloricon="blue" />
        </span>
        <span>
          <ContactIconMessenger pops="hidden" sizeicon="2x" coloricon="blue" />
        </span>

        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
export default Headeravbar;
