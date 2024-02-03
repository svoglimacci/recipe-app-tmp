import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

function DashboardHeader() {
  return(

  <header className="sticky top-0 z-50 md:hidden">
    <ModeToggle />
    <Button />
  </header>
  )
}

export { DashboardHeader  };