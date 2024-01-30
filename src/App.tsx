import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "./components/ui/button"
import { ModeToggle } from "./components/mode-toggle"

function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
      <Button>Button</Button>
      <ModeToggle />
    </ThemeProvider>
  )
}

export default App