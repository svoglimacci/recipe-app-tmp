import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant={secondary}>Click me</Button>
      <ModeToggle />
    </div>
  )
}

export { Dashboard };