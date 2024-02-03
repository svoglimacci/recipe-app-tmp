import { createBrowserRouter } from "react-router-dom";
import { Login, Landing, Dashboard } from "@/views";

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