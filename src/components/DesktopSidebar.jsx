import { Heart, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../utils/menuItems";

export default function DesktopSidebar() {
  const location = useLocation();



  return (
    <aside className="p-5 md:p-8 menu min-h-screen w-20 md:w-64 hidden sm:flex flex-col bg-base-200 shadow-xl">
      <div className="mb-10">
        <img src="/logo.svg" alt="logo" className="hidden md:block w-32 mx-auto" />
        <img src="/mobile-logo.svg" alt="logo" className="block md:hidden w-10 mx-auto" />
      </div>
      <nav className="flex flex-col gap-6">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <Link
            key={name}
            to={path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-semibold capitalize 
              ${location.pathname === path ? "bg-primary-content text-white" : "hover:bg-primary/20 text-base-content"}`}
          >
            <Icon size={24} />
            <span className="hidden md:inline-block">{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
