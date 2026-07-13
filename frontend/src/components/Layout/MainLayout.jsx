import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;