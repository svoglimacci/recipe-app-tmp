import { ModeToggle } from "./ui/mode-toggle";
import { MobileNav } from "./BurgerMenu";

function DashboardHeader() {
  return(

  <header className="flex sticky top-0 z-50 md:hidden bg-slate900 justify-between">
    <MobileNav />
    <ModeToggle />
  </header>
  )
}

export { DashboardHeader  };