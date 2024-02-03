// import { Menu, X } from "lucide-react"
// import { useState } from "react";
// import { Toggle } from "./ui/toggle";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";


// function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   return(
//     <Toggle onPressedChange={setIsOpen}>
//       {isOpen ? ( <X /> ) : ( <Menu /> )}
//     </Toggle>
//   )
// }

function Nav() {
  return (
    <Sheet>
  <SheetTrigger asChild><Button>btn</Button></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <ModeToggle />
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export { Nav  };