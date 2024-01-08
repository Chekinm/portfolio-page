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
            <span className="skill">OOP</span>{'\n'}

            <span className="skill">Django</span>{'\u00A0'}
            <span className="skill">DjangoREST</span>{'\u00A0'}
            <span className="skill">Flask</span>{'\n'}
            
            <span className="skill">React</span>{'\u00A0'}
            <span className="skill">Redux</span>{'\u00A0'}
            <span className="skill">Node.js</span>{'\u00A0'}
            <span className="skill">Express.js</span>{'\n'}

            <span className="skill">PostgreSQL</span>{'\u00A0'}
            <span className="skill">MongoDB</span>{'\n'}
            
            <span className="skill">HTML5</span>{'\u00A0'}
            <span className="skill">Bootstrap</span>{'\u00A0'}
            <span className="skill">CSS</span>{'\u00A0'}
            <span className="skill">htmx</span>{'\n'}
            
            <span className="skill">Git</span>{'\u00A0'}
            <span className="skill">Github</span>{'\u00A0'}
          </p>
        </section>
      <ContactIcons className="icons-container"/>  
    </section>

  )
}

export default LeftColumn