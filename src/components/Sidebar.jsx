import { NavLink } from "react-router-dom";
import { LayoutDashboard, Timer, Target, History } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-gray-300 min-h-screen p-6">
      <h2 className="text-white text-xl font-bold mb-8">
        StudyTracker
      </h2>

      <nav className="space-y-4">
        <SidebarItem to="/" icon={<LayoutDashboard size={18} />} text="Dashboard" />
        <SidebarItem to="/timer" icon={<Timer size={18} />} text="Timer" />
        <SidebarItem to="/goals" icon={<Target size={18} />} text="Goals" />
        <SidebarItem to="/history" icon={<History size={18} />} text="History" />
      </nav>
    </div>
  );
}

function SidebarItem({ to, icon, text }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 p-3 rounded-xl transition ${
          isActive ? "bg-indigo-600 text-white" : "hover:bg-gray-800"
        }`
      }
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  );
}
