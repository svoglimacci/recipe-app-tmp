import { ThemeProvider } from "@/components/theme-provider"

import { Button } from "./components/ui/button"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <div>
      <ThemeProvider>
        <ModeToggle />
        <Button />
      </ThemeProvider>
    </div>
  )
}

export default App