import { ModeToggle } from "./ui/mode-toggle";
import { Nav } from "./BurgerMenu";

function DashboardHeader() {
  return(

  <header className="flex sticky top-0 z-50 md:hidden bg-secondary justify-between">
    <Nav />
    <ModeToggle />

  </header>
  )
}

export { DashboardHeader  };