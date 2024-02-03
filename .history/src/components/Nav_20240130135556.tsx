import { Home } from "lucide-react";

function Nav() {
  return (
  <nav className="flex flex-row w-80 p-8">
  <ul className="flex flex-col justify-between w-16">
    <li className="flex justify-between text-primary p-4"><Home/> Home</li>
    <li className="text-primary p-4">About</li>
    <li className="text-primary p-4">Contact</li>
  </ul>
</nav>

  )
}

export { Nav  };