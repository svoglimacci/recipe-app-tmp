import { Menu, X } from "lucide-react"
import { useState } from "react";
import { Toggle } from "./ui/toggle";
import { Sheet } from "./ui/sheet";


function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Toggle onPressedChange={setIsOpen}>
      {isOpen ? ( <X /> ) : ( <Menu /> )}
    </Toggle>
  )
}

function Nav() {
  return (
    <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export { BurgerMenu  };