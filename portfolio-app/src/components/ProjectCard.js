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
        <Col lg={4} xs={0} className="d-flex flex-column justify-content-around d-none d-lg-block">
          <div><img src={picture}
            alt={name}
            width="100%"
          />
          </div>
          <div className="p-2">
            <span className="skill ms-3">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href={linkSrc}>
                {nameLinkSrc}
              </a>
            </span>
            <span className="skill ms-3">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href={linkDemo}>
                {nameLinkDemo}
              </a>
            </span>
          </div>
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
        <Col xs={12} lg={0} className="d-bock d-sm-none">
          <img src={picture}
            alt={name}
            width="100%"
          />

          <div className="p-2">
            <span className="skill ms-3">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href={linkSrc}>
                {nameLinkSrc}
              </a>
            </span>
            <span className="skill ms-3">
              <a className="link-button text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href={linkDemo}>
                {nameLinkDemo}
              </a>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectCard