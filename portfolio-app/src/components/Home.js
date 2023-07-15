import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation  } from 'react-router-dom';
import About from './About';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftColumn from './LeftColumn'
import Navbar from './Navbar';



const Home = () => {
  const rightColumnRef = useRef(null);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = (e) => {
      const { deltaY } = e;
      if (rightColumnRef.current) {
        rightColumnRef.current.scrollTop += deltaY;
      }
    };
    document.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (rightColumnRef.current) {
      rightColumnRef.current.scrollTo(0, 0);
      console.log('scroll to top')
    }
  }, [location.pathname]);



  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <LeftColumn />
          </Col>
          <Col xs={12} lg={8} ref={rightColumnRef} className="independent-scroll">
            {/* render navlinks here */}
            <Outlet />
            {location.pathname === '/' && <About />}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home