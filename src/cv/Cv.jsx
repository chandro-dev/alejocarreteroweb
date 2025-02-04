import { useState, useEffect } from "react";
import Photo from "./../assets/image.png";
import { FaSun, FaMoon } from "react-icons/fa";

function Cv() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 p-2 bg-gray-300 dark:bg-gray-700 rounded-full shadow-md transition-all"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* CV Container */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-[90%] md:w-[60%] lg:w-[40%] text-center">
        {/* Profile Image */}
        <img
          src={Photo}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
        />

        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold">Your Name</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Web Developer | Designer | Writer
          </p>
        </header>

        {/* About Me */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2">
            About Me
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            I'm a passionate developer with experience in React, Node.js, and
            more.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2">
            Skills
          </h2>
          <ul className="flex flex-wrap justify-center gap-2 mt-3">
            {["React", "JavaScript", "HTML/CSS"].map((skill) => (
              <li
                key={skill}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Cv;
