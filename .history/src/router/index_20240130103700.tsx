import { createBrowserRouter } from "react-router-dom";
import { Landing } from "@/routes/landing";
import { Dashboard } from "@/import { Landing } from "@/routes/landing";
/dashboard";
import { Home } from "@/pages/dashboard/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
   path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "recipes",
        element: <RecipeList />,
      },
      {
        path: "recipes/:id",
        element: <Recipe />,
      }
    ],
  }
])

export { router }