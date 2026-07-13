import { NavLink } from "react-router-dom";
import {
  MessageSquare,
  Brain,
  FolderOpen,
  ListTodo,
  Shield,
  Settings,
  Plus,
} from "lucide-react";

const menu = [
  {
    name: "Chat",
    path: "/",
    icon: MessageSquare,
  },
  {
    name: "Memory",
    path: "/memory",
    icon: Brain,
  },
  {
    name: "Files",
    path: "/files",
    icon: FolderOpen,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: ListTodo,
  },
  {
    name: "Privacy",
    path: "/privacy",
    icon: Shield,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col p-5">

      <h1 className="text-3xl font-bold text-violet-400 mb-8">
        🌙 Luna
      </h1>

      <button className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 rounded-xl py-3 font-medium transition mb-8">
        <Plus size={18} />
        New Chat
      </button>

      <nav className="space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-violet-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
}

export default Sidebar;