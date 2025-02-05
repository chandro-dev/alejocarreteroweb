import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./blog/Blog";
import Cv from "./cv/Cv";
import Contact from "./contact/Contact";
import './style.css'

function App() {  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      <Routes>
        <Route path="/alejocarreteroweb/" element={<Home />} />
        <Route path="/alejocarreteroweb/blog" element={<Blog />} />
        <Route path="/alejocarreteroweb/cv" element={<Cv />} />
        <Route path="/alejocarreteroweb/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
