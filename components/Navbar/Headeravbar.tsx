import { ContactIconLine } from "../Contacted/ContactIcon";
import Dropdown from "./Dropdown";

const Headeravbar = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full">
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



// import { ContactIconLine } from "../Contacted/ContactIcon";
// import Dropdown from "./Dropdown";

// const Headeravbar = () => {
//   return (
//     <div className="flex justify-between items-center p-4 w-full overflow-x-hidden">
//       <div>Logo</div>

//       <div className="flex flex-wrap gap-4 items-center max-w-full">
//         <span className="whitespace-nowrap">
//           <ContactIconLine pops="hidden" sizeicon="30" />
//         </span>
//         <span className="whitespace-nowrap">iconfacebook</span>
//         <span className="whitespace-nowrap">icon066888888</span>

//         <div>
//           <Dropdown />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Headeravbar;
