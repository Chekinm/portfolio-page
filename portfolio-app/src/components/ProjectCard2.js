import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProjectCard2 = () => {
  return (
    <Container className="project-card text-white text-opacity-75">
      <Row>
        <Col lg={4} xs={0} className="d-flex flex-column justify-content-around d-none d-lg-block">
          <div><img src="img/LZW.png"
            alt="LZW png"
            width="100%"
          />
          </div>
          <div className="p-2">
            <span className="skill ms-3">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Chekinm/chekinm.github.io">
                GitHub
              </a>
            </span>
            <span className="skill ms-3">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://chekinm.github.io/">
                Demo
              </a>
            </span>
          </div>
        </Col>

        <Col xs={12} lg={8}>

          <h2> <a className="link-highligth text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://chekinm.github.io/">Abraham Lempel tribute page.</a></h2>
          <p>
            On February 4, 2023, I heard the sad news that Abraham Lempel had passed away. 
            He was 86 years old. The news said that he was the grandfather of all modern 
            compression algorithms. Today, everybody knows words like MP3, JPEG, or ZIP, 
            but only a few know who invented these technologies for us. In 1977, 
            Abraham Lempel and Jacob Ziv published their article about a lossless data 
            compression algorithm. Later, in 1984, Terry Welch suggested a slightly 
            modified version of this algorithm, which we now know as the LZW compression 
            algorithm. Their fundamental ideas are at the core of all modern compression methods.
          </p>
          <p>
            This site was developed as an admission project for the DI bootcamp. 
            The project uses pure HTML5 and CSS for design, and Python and Pyscript for backend automation. 
            And yes, it has the LZW algorithm implemented inside.
          </p>
        </Col>
        <Col xs={12} lg={0} className="d-bock d-sm-none">
          <img src="img/bottle-buddy.png"
            alt="bootle-buddy-project png"
            width="100%"
          />

          <div className="p-2">
            <span className="skill ms-3">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Chekinm/chekinm.github.io">
                GitHub
              </a>
            </span>
            <span className="skill ms-3">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://chekinm.github.io/">
                Demo
              </a>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectCard2