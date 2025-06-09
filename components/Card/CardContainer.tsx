import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardService from "./CardService";
import { Button } from "../ui/button";
import { Cardtype } from "@/utils/type";
import Image from "next/image";

const CardContainer = ({ srcimg, alt, title, Description }: Cardtype) => {
  return (
    <Card className="border-none ">
      <CardHeader>
        <CardTitle className="flex justify-center">
          <Image
            src={srcimg}
            alt={alt}
            className="rounded-full w-30 h-30"
            width={30}
            height={30}
          />
        </CardTitle>

        <CardDescription className="text-center text-red-900 text-md">
          {Description}
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
