import { X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { ModeToggle } from "./ui/mode-toggle";


function Nav() {
  return (
    <Sheet>
  <SheetTrigger asChild>btn</SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <ModeToggle />
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export { Nav  };