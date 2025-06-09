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
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger >
            <AlignRight  />
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
    </div>
  );
};
export default Dropdown;
