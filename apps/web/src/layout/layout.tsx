import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "../utils";
import { Github } from "lucide-react";

export interface ILayoutProps {
}

const Layout = () => {
  const location = useLocation()
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col gap-10 items-center justify-center h-full w-full  px-8'>
        <nav className='w-full flex items-baseline justify-between p-3 rounded-b-lg bg-card'>
          <h1 className='text-2xl'>Magic 🪄 Panel</h1>

          <ul className='list-none leading-none flex justify-center items-center gap-4 font-semibold [&>li]:cursor-pointer hover:[&>li]:text-slate-200'>
            <li className={cn({
              "text-primary": location.pathname === "/"
            })}><Link to="/">Home</Link></li>
            <li className={cn({
              "text-primary": location.pathname === "/documentation"
            })}><Link to="/documentation">Documentation</Link></li>
            <li className='flex items-center gap-1'><Github className="size-4" /> <Link target="_blank" to="https://github.com/lchenrique/magic-panel">Github</Link></li>
          </ul>
        </nav>

        <Outlet />
        <footer className="bg-card text-white py-4 w-full rounded-t-lg">
          <div className="container mx-auto text-center">
            <p>© 2024 MagicPanel. All rights reserved.</p>
            <p>
              Created by <a href="https://github.com/lchenrique" className="text-primary hover:underline">lchenrique</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Layout };