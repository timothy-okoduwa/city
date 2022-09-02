import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './com.png'
import './Header.css'
const Header = () => {
  return (
    <Div>
    <Navbar  expand="lg" fixed="top" className="Bar">
    <Container fluid>
      <Navbar.Brand className="nnav"  href="">
      <Img src={logo} alt='img'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" className="bg-light"/>
      <Navbar.Collapse id="navbarScroll" >
        <Nav 
          className="me-auto my-2 my-lg-0"
          style={{width: '100%',display: 'flex',justifyContent: 'space-around' }}
          navbarScroll>
          <Nav.Link   href="#action1">ORIGINAL</Nav.Link>
          <Nav.Link   href="#action2">POPULAR</Nav.Link>
          <Nav.Link   href="#action2">SPEC</Nav.Link>
           <Nav.Link   href="#">FAN VIEW</Nav.Link>
           <Holder>
           <Button variant="outline-danger text-dark">Join the planet</Button>
           <Button variant="outline-info text-dark">Back to your Pod</Button>
           </Holder>
         
        </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    
    
    </Div>
  )
}

export default Header


const Div = styled.div`


`
const Img = styled.img`
width: 50%;

`
const Holder = styled.div`
/* background-color: red; */
width: 60%;
display: flex;
justify-content: space-around;
`
