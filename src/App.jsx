import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cv from "./cv/Cv";
import ProjectsPage from "./proyectos/proyectos";
import './style.css'
import { FaSun, FaMoon } from "react-icons/fa";
import Contacto from "./Contacto/contacto";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }


  }, [darkMode]);
  return (



    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      {/* Botón de Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 p-2 bg-gray-300 dark:bg-gray-700 rounded-full shadow-md transition-all z-50"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/Proyectos" element={<ProjectsPage />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
