import './App.css'
import Experience from './Experience'; 
import HeaderSection from'./HeaderSection';
import Presentation from './Presentation';
import Projects from './Projects';
import Technologies from './Technologies';
function App() {
  return (
      <div className='wrapper'> 
        <HeaderSection></HeaderSection>
        <Presentation></Presentation>
        <Experience></Experience>
        <Projects></Projects>
        <Technologies></Technologies>
      </div>
  )
}

export default App
