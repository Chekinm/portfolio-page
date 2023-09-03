import ContactIcons from "./ContactIcons"

const LeftColumn = () => {
  return (
    <section className="name-section">
      <header>
        <h1 className="display-3"><h1><strong>Mikhail Chekin</strong></h1></h1>
        <h1 className="fs-2"><strong>Fullstack web developer</strong></h1>
        <div className="fs-5 text-white text-opacity-50">Inspired by the algorithms' magic</div>

      </header>
        <section>
          <header className="fs-2 text-white text-opacity-50">My stack</header>
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
        </section>
      <ContactIcons className="icons-container"/>  
    </section>

  )
}

export default LeftColumn