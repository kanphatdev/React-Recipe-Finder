import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../utils/menuItems";

export default function MobileSidebar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-base-200 shadow-lg p-3 flex justify-around sm:hidden z-10">
      {menuItems.map(({ name, icon: Icon, path }) => (
        <Link
          key={name}
          to={path}
          className={`flex flex-col items-center p-2 rounded-lg transition-all font-medium capitalize 
            ${location.pathname === path ? "bg-base-content text-white" : "hover:bg-base-content"}`}
        >
          <Icon size={24} />
          <span className="text-xs">{name}</span>
        </Link>
      ))}
    </nav>
  );
}
