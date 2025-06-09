import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

type classtype = {
  pops?: string;
  sizeicon?: "xs" | "sm" | "lg" | "1x" | "2x" | "3x" | "5x" | "10x";
  coloricon?: string;
};
export const ContactIconLine = ({ pops, sizeicon, coloricon }: classtype) => {
  return (
    <div>
      <div className="flex gap-2 justify-start items-center">
        <Link href="tel:0644088510 " className="flex items-center ">
          <FontAwesomeIcon icon={faLine} size={sizeicon} color={coloricon} />
        </Link>
        <div className={pops}>
          <p>Contact Us</p>
          <Link href="tel:0644088510 " className="text-green">
            064-408-8510
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ContactIconPhone = ({ pops, sizeicon, coloricon }: classtype) => {
  return (
    <div>
      <div className="flex gap-2 justify-start items-center">
        <Link
          href="tel:0644088510"
          className="flex items-center text-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPhone} size={sizeicon} color={coloricon} />
        </Link>
        <div className={pops}>
          <p>Contact Us</p>
          <Link
            href="tel:0644088510 "
            className="text-green"
            target="_blank"
            rel="noopener noreferrer"
          >
            064-408-8510
          </Link>
        </div>
      </div>
    </div>
  );
};
export const ContactIconFacebook = ({
  pops,
  sizeicon,
  coloricon,
}: classtype) => {
  const LINKFacebook =
    "https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr";
  return (
    <div>
      <div className="flex gap-2 justify-start items-center">
        <Link
          href={LINKFacebook}
          className="flex items-center text-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size={sizeicon}
            color={coloricon}
          />
        </Link>
        <div className={pops}>
          <p>Facebook</p>
          <Link href={LINKFacebook} target="_blank" rel="noopener noreferrer">
            ช่างมิล วิศกรการประปา{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ContactIconMessenger = ({
  pops,
  sizeicon,
  coloricon,
}: classtype) => {
  const LINKFacebook =
    "https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr";
  return (
    <div>
      <div className="flex gap-2 justify-start items-center">
        <Link
          href={LINKFacebook}
          className="flex items-center text-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            size={sizeicon}
            color={coloricon}
          />
        </Link>
        <div className={pops}>
          <p>Messenger</p>
          <Link href={LINKFacebook} target="_blank" rel="noopener noreferrer">
            ช่างมิล วิศกรการประปา{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
