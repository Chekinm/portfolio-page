import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProjectCard = () => {
  return (
    <Container className="project-card text-white text-opacity-75">
      <Row>
        <Col lg={4} xs={7} className="d-flex flex-column justify-content-around">
          <div><img src="img/bottle-buddy.png"
            alt="bootle-buddy-project png"
            width="100%"
            s/>
          </div>
          <div className="">
            <span className="skill">GitHub</span>
            <span className="skill me-auto">Demo</span>
          </div>
        </Col>

        <Col xs={12} lg={8}>

          <h2> <a className="link-highligth text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                  href="https://bottle-buddy-front.onrender.com/">Bottle-buddy project</a></h2>
          <p>
          The project is a social network connecting people who care about recycling bottles. Users create orders for recycling their bottles, visible to others. Collectors browse and select orders, which the creator can close. The collector picks up the bottles and delivers them to a recycling center, receiving compensation.</p>
          <p> The project uses Django backend with Django Rest Framework and React frontend for user authentication, order management, and communication. It aims to streamline recycling by connecting users for convenient and efficient order creation and management.</p>

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

export default ProjectCard