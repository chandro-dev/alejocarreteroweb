import './App.css'
import CV from './cv/Cv'; 
import Home from'./Home';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import { Route, Routes,Router } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/alejocarreteroweb" element={<Home />} /> 
      <Route path="/alejocarreteroweb/cv" element={<CV />} />
      <Route path="/alejocarreteroweb/blog" element={<Blog />} />
      <Route path="/alejocarreteroweb/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
