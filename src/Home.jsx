import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaFileAlt,
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
  FaLinux,
  FaCogs,
  FaArrowRight,
} from "react-icons/fa";
import { SiApachehadoop, SiApachespark } from "react-icons/si";
import Photo from "./assets/image.png";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { GitHubStats, RecentCommits } from "./componentes/github/widgets";

// -----------------------------
// DATA
// -----------------------------
const technologies = [
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
  "Control-M",
];

const techIcons = {
  React: <FaReact className="text-4xl" aria-hidden />,
  JavaScript: <FaJs className="text-4xl" aria-hidden />,
  "Node.js": <FaNodeJs className="text-4xl" aria-hidden />,
  Python: <FaPython className="text-4xl" aria-hidden />,
  SQL: <FaDatabase className="text-4xl" aria-hidden />,
  Docker: <FaDocker className="text-4xl" aria-hidden />,
  AWS: <FaAws className="text-4xl" aria-hidden />,
  Linux: <FaLinux className="text-4xl" aria-hidden />,
  "Apache Spark": <SiApachespark className="text-4xl" aria-hidden />,
  Hadoop: <SiApachehadoop className="text-4xl" aria-hidden />,
  Athena: <FaAws className="text-4xl" aria-hidden />,
  Glue: <FaAws className="text-4xl" aria-hidden />,
  "Control-M": <FaCogs className="text-4xl" aria-hidden />,
};

const stats = [
  { label: "Años de experiencia", value: "2+" },
  { label: "Proyectos lanzados", value: "3+" },
  { label: "Stacks principales", value: "6" },
];

// -----------------------------
// UTILS
// -----------------------------
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

// -----------------------------
// COMPONENTS
// -----------------------------
function TechCard({ name }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-xl shadow-md">
      <div className="mb-2" aria-hidden>{techIcons[name] || <FaFileAlt className="text-4xl" />}</div>
      <p className="text-sm font-medium text-gray-800 dark:text-white text-center">
        {name}
      </p>
    </div>
  );
}
export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white transition-all duration-300 px-6 py-16 overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none select-none absolute -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-25 blur-3xl rounded-full" />
        <div className="absolute top-40 -right-24 w-80 h-80 bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-25 blur-3xl rounded-full" />
      </div>

      {/* HERO */}
      <motion.header
        {...fadeUp(0)}
        className="w-full max-w-6xl text-center flex flex-col items-center"
      >
        {/* Avatar */}
        <img
          src={Photo}
          alt="Foto de perfil de Alejandro Carretero"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-xl ring-4 ring-white/50 dark:ring-white/10 mb-6 object-cover"
          loading="lazy"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Alejandro Carretero
        </h1>
        <p className="mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Ingeniero de Datos · Desarrollador Web
        </p>

        {/* Value proposition */}
        <p className="max-w-3xl mt-4 text-gray-700 dark:text-gray-300">
          Construyo <span className="font-semibold">pipelines de datos</span> y
          servicios <span className="font-semibold">web escalables</span> que
          convierten información en <span className="font-semibold">decisiones</span>.
          Me enfoco en <span className="font-semibold">automatización</span>,
          <span className="font-semibold"> rendimiento</span> y
          <span className="font-semibold"> buenas prácticas</span>.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white px-5 py-3 rounded-xl shadow-lg transition-all text-base"
          >
            <FaFileAlt aria-hidden /> Ver CV
          </Link>
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 px-5 py-3 rounded-xl shadow-lg transition-all text-base"
          >
            Explorar proyectos <FaArrowRight aria-hidden />
          </Link>
        </div>
      </motion.header>


      {/* STATS */}
      <motion.section
        {...fadeUp(0.1)}
        className="w-full max-w-6xl mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        aria-label="Métricas rápidas"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/40 dark:border-white/10"
          >
            <div className="text-3xl font-extrabold">{s.value}</div>
            <div className="mt-1 text-gray-600 dark:text-gray-300">{s.label}</div>
          </div>
        ))}
      </motion.section>


      {/* TECH CAROUSEL */}
      <section className="w-full max-w-6xl mt-14" aria-labelledby="tech-title">
        <h2 id="tech-title" className="text-3xl font-semibold text-center mb-6">
          Tecnologías que uso
        </h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
          breakpoints={{
            0: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          aria-label="Carrusel de tecnologías"
        >
          {technologies.map((tech) => (
            <SwiperSlide key={tech} className="!h-auto">
              <TechCard name={tech} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA FINAL */}
      <motion.section
        {...fadeUp(0.2)}
        className="w-full max-w-6xl mt-16"
        aria-label="Trabajemos juntos"
      >
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 rounded-2xl px-6 py-10 md:px-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">¿Necesitas llevar tus datos a producción?</h3>
            <p className="text-gray-200 dark:text-gray-700 max-w-2xl">
              Diseño pipelines confiables, APIs bien documentadas y despliegues automatizados
              con buenas prácticas (testing, observabilidad y seguridad básica).
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl shadow-lg"
            >
              Hablemos <FaArrowRight aria-hidden />
            </Link>
          </div>
        </div>

      </motion.section>


      {/* PROJECTS */}
      <motion.section
        {...fadeUp(0.15)}
        className="w-full max-w-6xl mt-14"
        aria-labelledby="proyectos-title"
      >
        <GitHubStats username="chandro-dev" />
        <RecentCommits username="chandro-dev" limit={12} />
      </motion.section>
      {/* FOOTER */}
      <footer className="w-full max-w-6xl text-center py-10 opacity-80">
        <p className="text-sm">© {new Date().getFullYear()} Alejandro Carretero · Hecho con React, Tailwind y Framer Motion.</p>

      </footer>
    </div>
  );
}
