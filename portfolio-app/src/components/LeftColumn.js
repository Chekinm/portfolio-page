import ContactIcons from "./ContactIcons"
import About from "./About"
import Projects from "./Projects"
import Contacts from "./Contacts"
import Skills from "./Skills"

const LeftColumn = () => {
  return (
    <main className="name-section">
      <div>
        <header className="display-3">Mikhail Chekin</header>
        <h4 className="fs-2">Fullstack web developer</h4>
        <div className="fs-5 text-white text-opacity-50">Inspired by the algorithms' magic</div>
      </div>
      <ContactIcons className="icons-container"/>  
      {/* <About d-none/>
      <Projects d-none />
      <Skills d-none/>
      <Contacts d-none/>       */}
    </main>

  )
}

export default LeftColumn