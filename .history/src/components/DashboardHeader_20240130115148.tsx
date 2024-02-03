import { ModeToggle } from "./ui/mode-toggle";

function DashboardHeader() {
  return(

  <header className="sticky top-0 z-50 md:hidden">
    <ModeToggle />

  </header>
  )
}

export { DashboardHeader  };