import Photo from "./../assets/image.png";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

/**
 * CV — versión mejorada
 * - Diseño 2 columnas responsive (izq: contacto/skills; der: resumen/experiencia/educación)
 * - Botón "Imprimir/Guardar PDF" (window.print) + enlace a PDF estático como fallback
 * - Secciones limpias para logros con formato CAR (Contexto-Acción-Resultado)
 * - Preparado para impresión (print:* classes)
 *
 * NOTA: LinkedIn bloquea el scraping anónimo; no se puede leer el perfil automáticamente desde el cliente.
 *       En su lugar, edita los arrays/strings de abajo con la info exacta de tu LinkedIn.
 */

const CONTACT = {
  name: "Alejandro Carretero",
  role: "Ingeniero de Datos · Desarrollador Web",
  phone: "+57 3108167406",
  email: "alejandrocarreteroballesteros@gmail.com",
  location: "Colombia",
  linkedin: "https://www.linkedin.com/in/luis-alejandro-carretero/",
  github: "https://github.com/alejocarretero",
  pdf: "/alejocarreteroweb/CV_Alejandro_Carretero.pdf",
};

const SUMMARY = `Construyo pipelines de datos confiables y servicios web que transforman información
en decisiones. Me enfoco en automatización, buenas prácticas y despliegues mantenibles
usando Spark, AWS (Athena, Glue) y orquestación con Control‑M.`;

const SKILLS = {
  Lenguajes: ["JavaScript", "Python", "SQL"],
  Frontend: ["React"],
  Backend: ["Node.js"],
  "Big Data": ["Apache Spark", "Hadoop"],
  AWS: ["Athena", "Glue"],
  DevOps: ["Docker", "Linux"],
  Otros: ["Control-M"],
};

const EXPERIENCE = [
  {
    company: "Bluetab",
    period: "2024‑01 – Actualidad",
    title: "Ingeniero de Datos",
    bullets: [
      "Capacitador en herramientas del ecosistema Apache Spark y documentación de procesos ETL.",
      "Automatización de cargas y consultas en AWS (Athena, Glue) con orquestación en Control‑M.",
      "Buenas prácticas: versionado, pruebas y guías de operación para equipos de datos.",
    ],
  },
  {
    company: "SENA (Prácticas Profesionales)",
    period: "2023‑07 – 2024‑01",
    title: "Aprendiz Desarrollo/ETL",
    bullets: [
      "Apoyo en desarrollo de procesos ETL y automatización de tareas.",
      "Documentación técnica y soporte a equipos internos.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Universidad Popular del Cesar",
    degree: "Ingeniería de Sistemas (9º semestre)",
    period: "En curso",
  },
  {
    school: "SENA",
    degree: "Tecnólogo en Sistemas",
    period: "—",
  },
];

const PROJECT_LINKS = [
  { label: "Portafolio / Proyectos", href: "/alejocarreteroweb/proyectos" },
];

function SectionTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight border-b border-blue-500 pb-1 mb-3">
      {children}
    </h2>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white text-xs font-medium">
      {children}
    </span>
  );
}

export default function Cv() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 p-6 print:bg-white print:text-black">
      {/* Controles */}
      <div className="w-full max-w-5xl flex justify-end gap-3 mb-4 print:hidden">
        <a
          href={CONTACT.pdf}
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow"
        >
          <FaDownload /> Descargar PDF
        </a>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <FaDownload /> Imprimir/Guardar PDF
        </button>
      </div>

      {/* CV container */}
      <div className="bg-white dark:bg-gray-800 w-full max-w-5xl rounded-3xl shadow-2xl p-8 md:p-10 print:shadow-none print:rounded-none print:p-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div className="flex items-center gap-5">
            <img
              src={Photo}
              alt="Foto de perfil de Alejandro Carretero"
              className="w-28 h-28 rounded-full object-cover ring-4 ring-blue-600/20"
            />
            <div>
              <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">{CONTACT.name}</h1>
              <p className="text-gray-700 dark:text-gray-300">{CONTACT.role}</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
                <span className="inline-flex items-center gap-1"><FaPhoneAlt /> {CONTACT.phone}</span>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-1 hover:underline"><FaEnvelope /> {CONTACT.email}</a>
                <span className="inline-flex items-center gap-1"><FaMapMarkerAlt /> {CONTACT.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              <FaLinkedin className="text-blue-600" /> LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Aside */}
          <aside className="col-span-12 lg:col-span-4">
            <SectionTitle>🧠 Sobre mí</SectionTitle>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{SUMMARY}</p>

            <div className="mt-6">
              <SectionTitle>🛠️ Habilidades</SectionTitle>
              <div className="space-y-3">
                {Object.entries(SKILLS).map(([cat, items]) => (
                  <div key={cat}>
                    <h3 className="text-sm font-semibold mb-1 text-gray-800 dark:text-gray-200">{cat}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <SectionTitle>🔗 Enlaces</SectionTitle>
              <ul className="text-sm space-y-1">
                {PROJECT_LINKS.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-blue-600 hover:underline">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-12 lg:col-span-8">
            <SectionTitle>💼 Experiencia</SectionTitle>
            <div className="space-y-5">
              {EXPERIENCE.map((job) => (
                <div key={job.company}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{job.company}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{job.title}</p>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap">{job.period}</span>
                  </div>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <SectionTitle>🎓 Educación</SectionTitle>
              <ul className="space-y-2">
                {EDUCATION.map((ed) => (
                  <li key={ed.school} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{ed.school}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{ed.degree}</p>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap">{ed.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>

      {/* Botón fallback inferior */}
      <a
        href={CONTACT.pdf}
        download="CV_Alejandro_Carretero.pdf"
        className="flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all print:hidden"
      >
        <FaDownload /> Descargar CV (PDF)
      </a>
    </div>
  );
}
