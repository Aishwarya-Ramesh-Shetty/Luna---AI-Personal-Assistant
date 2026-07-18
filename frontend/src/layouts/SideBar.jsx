function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-900 p-5">
      <h1 className="mb-8 text-2xl font-bold">
        🌙 Luna
      </h1>

      <nav className="space-y-2">
        <button className="w-full rounded-xl p-3 text-left hover:bg-slate-800">
          💬 Chat
        </button>

        <button className="w-full rounded-xl p-3 text-left hover:bg-slate-800">
          🧠 Memory
        </button>

        <button className="w-full rounded-xl p-3 text-left hover:bg-slate-800">
          📂 Files
        </button>

        <button className="w-full rounded-xl p-3 text-left hover:bg-slate-800">
          ⚡ Tasks
        </button>

        <button className="w-full rounded-xl p-3 text-left hover:bg-slate-800">
          🔒 Privacy
        </button>

        <button className="w-full rounded-xl p-3 text-left hover:bg-slate-800">
          ⚙️ Settings
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;