import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";

function MobileNav() {
  return (
    <Sheet  className="md:hidden">
  <SheetTrigger asChild><Button variant="ghost" size="icon"><Menu/></Button></SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <ModeToggle />
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export { MobileNav  };