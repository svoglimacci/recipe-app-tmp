import { ModeToggle } from "./ui/mode-toggle";
import { Nav } from "./BurgerMenu";

function DashboardHeader() {
  return(

  <header className="sticky top-0 z-50 md:hidden bg-secondary">

    <ModeToggle />
    <BurgerMenu />

  </header>
  )
}

export { DashboardHeader  };