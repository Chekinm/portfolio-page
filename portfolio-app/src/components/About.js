import { HashLink as Link } from "react-router-hash-link"


const About = () => {
  return (
    <article className="fs-5 text-white text-opacity-75" id="about">
      <h4>Hello and welcome to my page</h4>
      <br />
      <p>My name in Mikhail. You reach my personal website. Nice to meet you.
      </p>
      
      <p> Currently, I'm working as a frontend developer in 
        <a className="link-highligth text-decoration-none"
          target="_blank"
          rel="noreferrer"
          href="https://gaintrade.ai"> GainTrade Inc</a>. 
          We build an app for stock exchange traders to manage arbitrage trading strategies. We are in Vue.js universe.</p>
      
      <p> I'm also volunteering in   
        <a className="link-highligth text-decoration-none"
          target="_blank"
          rel="noreferrer"
          href="https://symbolstory.app/"> SymbolStory </a> 
          as a fullstack developer. This is a project for children with special needs. We're building an app which creates therapeutic social stories using AI. 
          We use React and Node.js, both with TypeScript, MongoDB, Azure Claud, Claude and different textToImage LLM. </p> 

      <p>Below, you will find some of my personal projects
         
          <Link to="/#projects"
          className="link-highligth text-decoration-none"
          > projects </Link> I made during my education. They were created quite a while ago and might need some polish, so don't judge too harshly. Anyway there are still some funny staff, so I decided to leave it here. </p>

      <p>Here you can find my 
        <a href="/Mikhail_Chekin_CV_Fullstack_Developer_July_2025.pdf"
          target="_blank"
          rel="noreferrer"
          className="link-highligth text-decoration-none"
        > CV</a>
        . I am always open to talk, so please don't hesitate to  <Link to="/#contacts"
        className="link-highligth text-decoration-none"
      > reach out to me </Link>  with any questions you may have.</p>

      <p>Kind regards!</p> 
      <h5>Mikhail!</h5>
    </article>
  )
}

export default About