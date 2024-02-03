import { Menu, X } from "lucide-react"
import { useState } from "react";
import { Toggle } from "./ui/toggle";


function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Toggle onPressedChange={setIsOpen}>
      {isOpen ? ( <X /> ) : ( <Menu /> )}
    </Toggle>

  )
}

export { BurgerMenu  };