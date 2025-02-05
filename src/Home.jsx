import { useEffect, useState } from "react";
import { FaFileAlt, FaEnvelope, FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">


      {/* Contenido Principal */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Bienvenido</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          Explora mi blog, CV y contacto.
        </p>

        {/* Enlaces */}
        <div className="flex gap-6">
          <Link
            to="/alejocarreteroweb/blog"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow-md transition-all"
          >
            <FaBlog /> Blog
          </Link>

          <Link
            to="/alejocarreteroweb/cv"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white px-4 py-2 rounded-lg shadow-md transition-all"
          >
            <FaFileAlt /> CV
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
