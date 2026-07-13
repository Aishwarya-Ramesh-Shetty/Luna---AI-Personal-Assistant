import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>

      <div className="flex h-full items-center justify-center">

        <div className="text-center">

          <h1 className="text-5xl font-bold mb-4">
            Welcome to Luna 🌙
          </h1>

          <p className="text-slate-400 text-lg">
            Your privacy-first AI Desktop Assistant
          </p>

        </div>

      </div>

    </MainLayout>
  );
}

export default Home;