import Photo from "./../assets/image.png";
import { FaDownload } from "react-icons/fa";

function Cv() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 p-6 print:bg-white">

      {/* Contenedor del CV */}
      <div
        className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-4xl text-center print:shadow-none print:p-4 print:border-none print:rounded-none"
      >
        {/* Imagen y Título */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={Photo}
            alt="Profile"
            className="w-36 h-36 rounded-full shadow-md border-4 border-blue-600 mb-4"
          />
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400">Alejandro Carretero</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Ingeniero de Datos | Desarrollador Web</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">📞 +57 3108167406</p>
        </div>

        {/* Sobre Mí */}
        <section className="text-left mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 border-blue-500 mb-3">🧠 Sobre mí</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Soy estudiante de Ingeniería de Sistemas (8vo semestre) en la Universidad Popular del Cesar y Tecnólogo en Sistemas del SENA.
            Actualmente trabajo como Ingeniero de Datos en Bluetab, con experiencia en el desarrollo y automatización de procesos ETL.
          </p>
        </section>

        {/* Habilidades */}
        <section className="text-left mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 border-blue-500 mb-3">🛠️ Habilidades</h2>
          <ul className="flex flex-wrap gap-3">
            {[
              "React", "JavaScript", "Node.js", "Python", "SQL", "Docker",
              "AWS", "Linux", "Apache Spark", "Hadoop", "Athena", "Glue", "Control-M"
            ].map((skill) => (
              <li
                key={skill}
                className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experiencia */}
        <section className="text-left mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 border-blue-500 mb-3">💼 Experiencia</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Bluetab (2024-1 - Actualidad)</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Capacitador en herramientas del ecosistema Apache Spark y líder técnico documentando procesos ETL con tecnologías como Spark, Hadoop, AWS, Athena, Glue y Control-M.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Prácticas Profesionales SENA (2023-7 - 2024-1)</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Desarrollo de procesos ETL y automatización de tareas en varios equipos.
              </p>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="text-left">
          <h2 className="text-2xl font-semibold border-b pb-2 border-blue-500 mb-3">📬 Contacto</h2>
          <p className="text-gray-700 dark:text-gray-300">Email: <a className="text-blue-600 hover:underline" href="mailto:alejandrocarreteroballesteros@gmail.com">alejandrocarreteroballesteros@gmail.com</a></p>
          <p className="text-gray-700 dark:text-gray-300">LinkedIn: <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/luis-alejandro-carretero/" target="_blank" rel="noopener noreferrer">/luis-alejandro-carretero</a></p>
        </section>
      </div>

      {/* Botón para descargar PDF */}
      <a
        href="/alejocarreteroweb/CV_Alejandro_Carretero.pdf"
        download="CV_Alejandro_Carretero.pdf"
        className="flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all"
      >
        <FaDownload />
        Descargar CV (PDF)
      </a>
    </div>
  );
}

export default Cv;
