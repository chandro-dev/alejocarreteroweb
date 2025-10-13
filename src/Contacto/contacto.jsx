import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
    const whatsappNumber = "573108167406"; // sin el +
    const whatsappMessage = encodeURIComponent("¡Hola Alejandro! Vi tu portafolio y me gustaría hablar contigo.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 p-6">
            {/* Header */}
            <div className="max-w-3xl w-full text-center mb-10">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Contáctame</h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Si deseas comunicarte conmigo para proyectos, colaboraciones o dudas, puedes usar los siguientes medios:
                </p>
            </div>

            {/* Contact Card */}
            <div className="bg-white dark:bg-gray-800 w-full max-w-3xl rounded-3xl shadow-2xl p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-blue-500" />
                        <a href="mailto:alejandrocarreteroballesteros@gmail.com" className="hover:underline">
                            alejandrocarreteroballesteros@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-green-600" />
                        <a href="tel:+573108167406" className="hover:underline">
                            +57 3108167406
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaLinkedin className="text-blue-700" />
                        <a
                            href="https://www.linkedin.com/in/luis-alejandro-carretero/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaGithub className="text-gray-800 dark:text-white" />
                        <a
                            href="https://github.com/alejocarretero"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            GitHub
                        </a>
                    </div>
                    <div className="flex items-center gap-3 sm:col-span-2">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span>Colombia</span>
                    </div>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-8 flex justify-center">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition-all text-lg"
                    >
                        <FaWhatsapp size={24} /> Hablar por WhatsApp
                    </a>
                </div>


            </div>

            {/* Footer */}
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Alejandro Carretero · Ingeniero de Datos
            </p>
        </div>
    );
}
