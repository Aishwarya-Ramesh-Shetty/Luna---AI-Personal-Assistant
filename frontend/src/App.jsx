import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Memory from "./pages/Memory";
import Files from "./pages/Files";
import Tasks from "./pages/Tasks";
import Privacy from "./pages/Privacy";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/files" element={<Files />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;