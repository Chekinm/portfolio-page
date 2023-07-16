import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProjectCard2 = () => {
  return (
    <Container className="project-card text-white text-opacity-75">
      <Row>
        <Col lg={4} xs={7} className="d-flex flex-column justify-content-around">
          <div><img src="img/LZW.png"
            alt="LZW png"
            width="100%"
            s />
          </div>
          <div className="">
          <span className="skill">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Chekinm/chekinm.github.io">
                Source code
              </a>
            </span> 
            <span className="skill ms-3">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://chekinm.github.io/">
                Live demo
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
            On 4.02.2023, I heard a sad news that Abraham Lempel has died.
            He was 86. The news say that he was a grand-father of all modern
            compresion algorithms. Today, evrybody knows words like mp3, jpeg,
            or zip. But, just a few know who invented this thing for us.
            In 1977 Abraham Lempel and Jacob Ziv published thier article
            about loosless data compression algorithm. Later in 1984 Terry
            Welch suggest a litlle modified version of this algorithm,
            which we now know as LZW compression algorithm.
            Their fundamental ideas lay in the bottom of all modern compression methods.
          </p>
          <p> This site was developed as admition project fro DI bootcamp. The project uses pure HTML5 and CSS for design, and Python and Pyscript for backend automation.
            And yes, it has LZW algorithm implemented inside.
          </p>

        </Col>
        {/* <Col xs={9} className="d-xs-block">
          <img src="img/bottle-buddy.png"
            alt="bootle-buddy-project png"
            width="100%"
          />
        </Col> */}
      </Row>
    </Container>
  )
}

export default ProjectCard2