import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProjectCard = ({project}) => {
  console.log(project.name)
  const { name, 
          picture, 
          description, 
          linkSrc, 
          nameLinkSrc,
          linkDemo,
          nameLinkDemo,
          } = project
  console.log(name)
  
  return (
    <Container className="project-card text-white text-opacity-75">
      <Row>
        <Col lg={4} md={0} className="d-flex flex-column justify-content-around d-none d-lg-block">
          <div><img src={picture}
            alt={name}
            width="100%"
          />
          </div>
          <Row>
            <Col xs={5} className="skill ms-auto me-2 ps-1 pe-1">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href={linkSrc}>
                {nameLinkSrc}
              </a>
            </Col>
            <Col xs={5} className="skill me-auto ps-1 pe-1">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href={linkDemo}>
                {nameLinkDemo}
              </a>
            </Col>
          </Row>
        </Col>

        <Col xs={12} lg={8}>

          <h2> <a className="link-highligth text-decoration-none"
            target="_blank"
            rel="noreferrer"
            href="https://bottle-buddy-front.onrender.com/">{name}</a></h2>
          <div>
            {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
             ))}
          </div>
        </Col>
        <Col md={12} lg={0} className="d-block d-lg-none">
          <img src={picture}
            alt={name}
            width="100%"
          />

          <Row>
            <Col xs={4} className="skill ms-auto me-3 ps-1 pe-1">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href={linkSrc}>
                {nameLinkSrc}
              </a>
            </Col>
            <Col xs={4} className="skill me-auto ps-1 pe-1">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href={linkDemo}>
                {nameLinkDemo}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectCard