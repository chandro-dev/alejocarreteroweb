import { useState, useEffect } from "react";
import Photo from "./../assets/image.png";
import { FaSun, FaMoon } from "react-icons/fa";

function Cv() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">

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
          <h1 className="text-3xl font-bold">Alejandro</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Ingeniero de Datos | Desarrollador Web
          </p>
        </header>

        {/* About Me */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2">
            Sobre mí
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Soy estudiante de Ingeniería de Sistemas (8vo semestre) en la
            Universidad Popular del Cesar y Tecnólogo en Sistemas del SENA.
            Actualmente trabajo como Ingeniero de Datos en Bluetab, con
            experiencia previa en prácticas desde 2023-7 hasta 2024-1.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2">
            Habilidades
          </h2>
          <ul className="flex flex-wrap justify-center gap-2 mt-3">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Python",
              "SQL",
              "Docker",
              "AWS",
              "Linux",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2">
            Experiencia
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            <strong>Bluetab (2024-1 - Actualidad)</strong><br />
            Ingeniero de Datos, trabajando con tecnologías como SQL, Python y
            AWS.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            <strong>Prácticas Profesionales (2023-7 - 2024-1)</strong><br />
            Desarrollo de procesos ETL y automatización de tareas.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2">
            Contacto
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Email: alejandrocarreteroballesteros@gmail.com
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            <a href="https://www.linkedin.com/in/luis-alejandro-carretero-ballesteros-524835210/">LinkedIn:</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Cv;
