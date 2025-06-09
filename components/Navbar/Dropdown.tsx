import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { AlignJustify, AlignRight } from "lucide-react";

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
          <MenubarContent >
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
