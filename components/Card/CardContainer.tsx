import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardService from "./CardService";

import { Cardtype } from "@/utils/type";
import Image from "next/image";

const CardContainer = ({ srcimg, alt, title }: Cardtype) => {
  return (
    <Card className="border-0.5 ">
      <CardHeader>
        <CardTitle className="flex justify-center">

          <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
            <Image
              src={srcimg}
              alt={alt}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </CardTitle>

        <CardDescription className="text-center text-red-900 text-md">
          บริการของเรา
        </CardDescription>
        <CardService text={title} />
      </CardHeader>

      {/* <CardFooter>
        <Button>test</Button>
      </CardFooter> */}
    </Card>
  );
};
export default CardContainer;
