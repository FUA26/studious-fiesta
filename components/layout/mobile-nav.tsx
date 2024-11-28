import { ChevronsDown, Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ToggleTheme } from "./toogle-theme";
import { RouteProps } from "@/types/nav";


interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  routeList: RouteProps[];
}

export const MobileNav = ({ isOpen, setIsOpen, routeList }: MobileNavProps) => {
  return (
    <div className="flex items-center lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
        >
          <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Shadcn
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};