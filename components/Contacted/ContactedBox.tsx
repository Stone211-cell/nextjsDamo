import {
  ContactIconFacebook,
  ContactIconLine,
  ContactIconMessenger,
  ContactIconPhone,
} from "./ContactIcon";

const ContactedBox = () => {
  return (
    <div>
      {" "}
      <div className="  justify-items-center ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center ">
          <span className="pr-10">
            <ContactIconLine sizeicon="2x" coloricon="green" />
          </span>
          <span className="pr-10">
            <ContactIconPhone sizeicon="2x" coloricon="red" />
          </span>

          <ContactIconFacebook sizeicon="2x" coloricon="blue" />

          <ContactIconMessenger sizeicon="2x" coloricon="blue" />
        </div>
      </div>
    </div>
  );
};
export default ContactedBox;
