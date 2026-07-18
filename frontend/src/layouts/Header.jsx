function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-6">
      <h2 className="text-lg font-semibold">
        Chat
      </h2>

      <div className="text-sm text-slate-400">
        Local AI • Offline
      </div>
    </header>
  );
}

export default Header;