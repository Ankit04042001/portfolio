import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './css/header.css'

function Header() {
    const [expand, setExpand] = useState('sm')
    const [expanded, setExpanded] = useState(false)
    const onToggle = ()=>{
      expanded?setExpanded(false):setExpanded(true);
    }
    
  return (
    <div className='header'>
        <Navbar key={expand} expand={expand} expanded={expanded} onToggle={onToggle} collapseOnSelect={true} className="bg-transparent mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls={`portfolio-offcanvas`} />
            <Navbar.Offcanvas
              id={`portfolio-offcanvas`}
              aria-labelledby={`portfolio-offcanvas-title`}
              placement="end"
              restoreFocus={false}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`portfolio-offcanvas-title`}>
                  Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#works">Works</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header