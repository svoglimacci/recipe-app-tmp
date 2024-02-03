import { ModeToggle } from "./ui/mode-toggle";
import { BurgerMenu } from ".";
function DashboardHeader() {
  return(

  <header className="sticky top-0 z-50 md:hidden bg-secondary">

    <ModeToggle />
    <BurgerMenu />

  </header>
  )
}

export { DashboardHeader  };