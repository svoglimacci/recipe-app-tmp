import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "./components/ui/button"

function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
      <Button>Button</Button>
    </ThemeProvider>
  )
}

export default App