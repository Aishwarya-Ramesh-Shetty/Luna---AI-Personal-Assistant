import { Bell, Search, User } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-4">

      <div>
        <h2 className="text-xl font-semibold">
          Welcome back 👋
        </h2>

        <p className="text-sm text-slate-400">
          Your personal desktop assistant
        </p>
      </div>

      <div className="flex items-center gap-5">

        <Search className="cursor-pointer" />

        <Bell className="cursor-pointer" />

        <User className="cursor-pointer" />

      </div>

    </header>
  );
}

export default Header;