import { createBrowserRouter } from "react-router-dom";
import { Landing } from "@/views/";
import { Dashboard } from "@/views/";
import { Home } from "@/views/";
import { RecipeList } from "@/views/";
import { Recipe } from "@/views";

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