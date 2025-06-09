import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardService = ({ text }: { text: string }) => {
  return  <CardDescription className="text-center text-2xl">{text}</CardDescription>
};
export default CardService;
