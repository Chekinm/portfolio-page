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
        <div>
          <div className="fs-2">My stack</div>
          <p className="fs-5 text-white text-opacity-50 skills">
            <span className="skill">Python</span>{'\u00A0'}
            <span className="skill">Javascript</span>{'\u00A0'}
            <span className="skill">SQL</span>{'\u00A0'}
            <span className="skill">OOP</span>{'\n'}

            <span className="skill">Django</span>{'\u00A0'}
            <span className="skill">DRF</span>{'\u00A0'}
            <span className="skill">Node.js</span>{'\u00A0'}
            <span className="skill">Express.js</span>{'\n'}
            <span className="skill">React</span>{'\u00A0'}
            <span className="skill">Redux</span>{'\n'}
            <span className="skill">HTML5</span>{'\u00A0'}
            <span className="skill">Bootstrap</span>{'\u00A0'}
            <span className="skill">CSS</span>{'\n'}
            <span className="skill">Git</span>{'\u00A0'}
            <span className="skill">Github</span>{'\u00A0'}
          </p>
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