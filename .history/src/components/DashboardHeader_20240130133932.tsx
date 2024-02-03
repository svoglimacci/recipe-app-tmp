import { ModeToggle } from "./ui/mode-toggle";
import { MobileNav } from "./BurgerMenu";
import { Nav } from "./Nav";

function DashboardHeader() {
  return(

  <header className="flex sticky top-0 z-50 md:hidden bg-secondary justify-between">
    <MobileNav />
    <Nav />
    <ModeToggle md:hidden />

  </header>
  )
}

export { DashboardHeader  };