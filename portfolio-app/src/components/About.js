import { HashLink as Link } from "react-router-hash-link"


const About = () => {
  return (
    <article className="fs-5 text-white text-opacity-75" id="about">
      <h4>Hello and welcome to my page</h4>
      <br />
      <p>My name in Mikhail. After making an aliya in 2022, I decided to change my career path to something that has always interested me. 
      However, I always got caught up with other "more important" things whenever I thought about pursuing it. </p>
      <p>Dramatic life change has actually made me more focused on my true passions.  
      At the beginning of this year, I took the plunge and decided to become a programmer. 
      I taught myself Python for three months,  I enrolled in the 
        <a className="link-highligth text-decoration-none"
          target="_blank"
          rel="noreferrer"
          href="https://developers.institute/en/"> Developers Institute Bootcamp, </a>
         which I completed successfully in July 2023.
      </p>
      <p> Currently, I working as a frontend developer in 
        <a className="link-highligth text-decoration-none"
          target="_blank"
          rel="noreferrer"
          href="https://gaintrade.ai"> GainTrade Inc</a>. 
          We build an app for stock exchange traders to manage arbitrage trading strategies. </p> 
      <p>Below, you will find some of my personal projects 
          <Link to="/#projects"
          className="link-highligth text-decoration-none"
          > projects </Link> I have recently completed. </p>

      <p>If you're interested, please feel free to review my 
        <a href="/MikhailChekin_CV_FullStack_2024_august.pdf"
          target="_blank"
          rel="noreferrer"
          className="link-highligth text-decoration-none"
        > CV.</a></p>
      <p>I am always open to communication, so please don't hesitate to  <Link to="/#contacts"
        className="link-highligth text-decoration-none"
      > reach out to me </Link>  with any questions you may have.</p>

      <p>Kind regards!</p> 
      <h5>Mikhail!</h5>
    </article>
  )
}

export default About