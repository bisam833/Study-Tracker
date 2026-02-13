import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Timer from "./pages/Timer";
import Goals from "./pages/Goals";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-950">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
