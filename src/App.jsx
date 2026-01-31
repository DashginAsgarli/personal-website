import HomePage from './component/Main/HomePage.jsx'
import Serrvices from './component/Footer/Services.jsx'
import Contact from './component/Footer/Contact.jsx'
import Portfolio from './component/Main/Skills.jsx'
import Education from './component/Main/Education.jsx'
import Certificates from './component/Main/Certificates.jsx'
import Projects from './component/Main/Projects.jsx'
import Header from './component/Header/nav.jsx'
function App() {

  return (
    <>
    <Header />
    <HomePage />
    <Education />
    <Portfolio />
    <Projects />
    <Certificates />
    <Contact />
    <Serrvices />
    </>
  )
}

export default App
