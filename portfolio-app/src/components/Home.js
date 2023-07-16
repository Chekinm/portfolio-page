import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import About from './About';
import Projects from './Projects'
import Skills from './Skills'
import Contacts from './Contacts' 
import LeftColumn from './LeftColumn'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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


  return (
    <div id="home">
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <LeftColumn />
          </Col>
          <Col xs={0} lg={1}>
          </Col>
          <Col xs={12} lg={7} ref={rightColumnRef} className="independent-scroll">
            {/* render navlinks here */}
            {/* <Outlet />
            {location.pathname === '/' && <About />} */}
            <About />
            <Projects />
            <Skills />
            <Contacts />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home