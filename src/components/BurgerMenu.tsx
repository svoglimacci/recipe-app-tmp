import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

import { Button } from "./ui/button";

function MobileNav() {
  return (
    <nav className="md:hidden">
    <Sheet>
  <SheetTrigger asChild><Button variant="ghost" size="icon"><Menu/></Button></SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>

    </SheetHeader>
  </SheetContent>
</Sheet>
</nav>

  )
}

export { MobileNav  };