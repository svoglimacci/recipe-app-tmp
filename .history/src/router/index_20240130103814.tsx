import { createBrowserRouter } from "react-router-dom";
import { Landing } from "@/views/landing";
import { Dashboard } from "@/views/dashboard";
import { Home } from "@/views/home";

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