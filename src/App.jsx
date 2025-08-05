import Header from './components/header'
import Hero from './components/Hero'
import WavyBot from "./assets/wavy-dashed-bottom.svg"
import WavyTop from "./assets/wavy-dashed-top.svg"
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import {useRef} from 'react'
function App() {
  const homeSection= useRef(null)
  const skillsSection= useRef(null)
  const projectsSection= useRef(null)
  const contactSection= useRef(null)
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <Header homeSection={homeSection} skillsSection={skillsSection} projectsSection={projectsSection} contactSection={contactSection}/>
      <Hero ref={homeSection}/>
      <img src={WavyBot} className=""/>
      <Skills ref={skillsSection}/>
      <Projects ref={projectsSection}/>
      <Contact ref={contactSection}/>
      <img src={WavyTop} />
      <footer className='ml-[10%] py-20 px-2'>
        <span className='text-white sm:text-xl my-20'>Made By: Mohammed AL Khayyat</span>
      </footer>
    </>
  )
}

export default App
