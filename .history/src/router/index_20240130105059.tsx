import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Landing, Dashboard } from "@/views";
import { Recipe, RecipeList } from "@/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
   path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
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