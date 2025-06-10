import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,

  MenubarTrigger,
} from "@/components/ui/menubar";

import {  AlignRight } from "lucide-react";

import { List } from "@/utils/menulist";
import Link from "next/link";

const Dropdown = () => {
  return (
      <Menubar className="bg-blue-500 transition-transform duration-200 ease-in-out hover:scale-110">
        <MenubarMenu >
          <MenubarTrigger  aria-label="Open menu" className="bg-blue-500 ">
            <AlignRight  color="white" />
          </MenubarTrigger>
          <MenubarContent className="bg-white">
            {List.map((item) => (
              <MenubarItem key={item.label} asChild>
                <Link href={item.href}>{item.label}</Link>
              </MenubarItem>
            ))}
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
   
  );
};
export default Dropdown;
