import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./contexts/AuthContext";
import Landing from "./pages/landing";

import "./css/App.css";

function App() {
  const { user } = useAuth();

  // 🔐 NOT LOGGED IN → ONLY AUTH PAGES

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  // ✅ LOGGED IN → FULL APP
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
