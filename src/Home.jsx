import { FaFileAlt, FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaReact, FaJs, FaNodeJs, FaPython, FaDatabase, FaDocker, FaAws, FaLinux } from "react-icons/fa";
import { SiApachehadoop, SiApache, SiAwslambda, SiAwsfargate, } from "react-icons/si";
import Photo from "./assets/image.png";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const technologies = [
  "React", "JavaScript", "Node.js", "Python", "SQL", "Docker",
  "AWS", "Linux", "Apache Spark", "Hadoop", "Athena", "Glue", "Control-M"
];
const techIcons = {
  "React": <FaReact className="text-blue-500 text-4xl" />,
  "JavaScript": <FaJs className="text-yellow-500 text-4xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-4xl" />,
  "Python": <FaPython className="text-blue-400 text-4xl" />,
  "SQL": <FaDatabase className="text-gray-500 text-4xl" />,
  "Docker": <FaDocker className="text-blue-600 text-4xl" />,
  "AWS": <FaAws className="text-orange-500 text-4xl" />,
  "Linux": <FaLinux className="text-black text-4xl" />,
  "Apache Spark": <SiApache className="text-red-500 text-4xl" />,
  "Hadoop": <SiApachehadoop className="text-yellow-600 text-4xl" />,
  "Athena": <SiAwslambda className="text-orange-400 text-4xl" />,
  "Glue": <SiAwsfargate className="text-purple-500 text-4xl" />,
};


function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-all duration-300 px-6 py-10">
      {/* Contenido Principal */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
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
          </header>
        </div>
        <h1 className="text-5xl font-extrabold mb-3">Bienvenido</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Explora mis proyectos, blog y CV.
        </p>

        {/* Enlaces */}
        <div className="flex gap-6 justify-center">
          <Link to="/alejocarreteroweb/blog" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-5 py-3 rounded-xl shadow-lg transition-all text-lg">
            <FaBlog /> Blog
          </Link>

          <Link to="/alejocarreteroweb/cv" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white px-5 py-3 rounded-xl shadow-lg transition-all text-lg">
            <FaFileAlt /> CV
          </Link>
        </div>
      </motion.div>

      {/* Sección de Proyectos */}
      <motion.div
        className="mt-12 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Últimos Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Proyecto 1 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
            <p className="text-gray-600 dark:text-gray-300">Descripción breve del proyecto.</p>
          </div>
          {/* Proyecto 2 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold mb-2">Proyecto 2</h3>
            <p className="text-gray-600 dark:text-gray-300">Descripción breve del proyecto.</p>
          </div>
        </div>
      </motion.div>

      {/* Carrusel de Tecnologías */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Tecnologías</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
        >
          {technologies.map((tech, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center">
                {techIcons[tech] || <FaFileAlt className="text-gray-500 text-4xl" />} {/* Ícono de respaldo */}
              </div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white mt-2 text-center">{tech}</p>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}

export default Home;
