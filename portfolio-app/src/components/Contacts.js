import React from 'react'

const Contacts = () => {
  return (
    <article className="fs-5 text-white text-opacity-75" id="contacts">
      <h2>Contacts</h2>
      <br />
        <p>I live Israel.
        I am considering jobs located in Gushdan, Jerusalem or Ashdod.
        You can always reach me by phone.</p>
        <p> You can find a number in <a href="Mikhail_Chekin_CV_Fullstack_Developer_July_2025.pdf"
          target="_blank"
          rel="noreferrer"
          className="link-highligth text-decoration-none"
        > my CV.</a></p>
        <p>
        Or contact me via <a href="https://www.linkedin.com/in/mikhail-chekin/"
           className="link-highligth text-decoration-none">
          LinkedIn
        </a> or <a href="https://t.me/MikhailChekin"
            className="link-highligth text-decoration-none">
          Telegram.
        </a>
        </p>
    </article>
  )
}

export default Contacts