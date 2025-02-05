import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Photo from "./../assets/image.png";

function Cv() {
  const cvRef = useRef();
  const [isReady, setIsReady] = useState(false);

  // Comprobar si el componente está listo para imprimir
  useEffect(() => {
    if (cvRef.current) {
      setIsReady(true); // Marca el componente como listo una vez se haya renderizado
    }
  }, [cvRef.current]);

  const handlePrint = useReactToPrint({
    documentTitle: "CV_Alejandro_Carretero",
    contentRef: cvRef, // ✅ Usando contentRef correctamente
    preserveAfterPrint: false,
    onAfterPrint: () => {
      console.log("CV generado correctamente.");
    },
  });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 p-4">

      {/* Botón para imprimir */}
      <a
        href="/alejocarreteroweb/CV_Alejandro_Carretero.pdf"
        download="CV_Alejandro_Carretero.pdf"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
      >
        📄 Descargar CV (PDF)
      </a>


      {/* Contenedor del CV */}
      <div
        ref={cvRef}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-2xl text-center print:shadow-none print:p-4"
      >
        {/* Imagen de Perfil */}
        <div className="flex justify-center mb-6">
          <img
            src={Photo}
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg"
          />
        </div>

        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Alejandro Carretero</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Ingeniero de Datos | Desarrollador Web
          </p>
          {/* Teléfono */}
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            +57 3108167406
          </p>
        </header>

        {/* Sección Sobre Mí */}
        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-2">
            Sobre mí
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Soy estudiante de Ingeniería de Sistemas (8vo semestre) en la Universidad Popular del Cesar y Tecnólogo en Sistemas del SENA.
            Actualmente trabajo como Ingeniero de Datos en Bluetab, con experiencia en el desarrollo y automatización de procesos ETL.
          </p>
        </section>

        {/* Sección Habilidades */}
        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-2">
            Habilidades
          </h2>
          <ul className="flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Python",
              "SQL",
              "Docker",
              "AWS",
              "Linux",
              "Apache Spark",
              "Hadoop",
              "Athena",
              "Glue",
              "Control-M"
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

        {/* Sección Experiencia */}
        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-2">
            Experiencia
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Bluetab (2024-1 - Actualidad)</strong>
                <br />
                Soy capacitador de diferentes herramientas de desarrollo, abarcando todo el ecosistema de Apache Spark. Además, soy líder técnico de un equipo encargado de documentar procesos ETL, manejando tecnologías como Apache Spark, Hadoop, AWS, Athena, Glue y Control-M.
              </p>
            </div>
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Prácticas Profesionales SENA (2023-7 - 2024-1)</strong>
                <br />
                Como aprendiz SENA, desarrollé procesos ETL en diferentes equipos, adquiriendo experiencia en la automatización y optimización de tareas.
              </p>
            </div>
          </div>
        </section>

        {/* Sección Contacto */}
        <section className="text-left">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-2">
            Contacto
          </h2>
          <p className="text-gray-700 dark:text-gray-300">Email: alejandrocarreteroballesteros@gmail.com</p>
          <p className="text-gray-700 dark:text-gray-300">
            <a
              href="https://www.linkedin.com/in/luis-alejandro-carretero/"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Cv;