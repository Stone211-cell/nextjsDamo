import {
  CardDescription,
} from "@/components/ui/card";

const CardService = ({ text }: { text: string }) => {
  return  <CardDescription className="text-center text-2xl">{text}</CardDescription>
};
export default CardService;
