import { ContactIconLine } from "../Contacted/ContactIcon";
import Dropdown from "./Dropdown";

const Headeravbar = () => {
  return (
    <div className="flex justify-between items-center px-8 p-4">
      <div>Logo</div>

      <div>
        <div className="flex gap-4 items-center">
          <span><ContactIconLine pops="hidden" sizeicon="30"/></span>
          <span>iconfacebook</span>
          <span>icon066888888</span>

          <div>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Headeravbar;
