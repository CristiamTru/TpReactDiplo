import {Link} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarMenu(){
  
  return (
    <Navbar id="menu-principal" collapseOnSelect expand="lg"  sticky="top">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/Registro">Registro</Nav.Link>
            <Nav.Link  as={Link} to="/Login">Login</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/alta">Alta</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>


    

    
  );
}

export default NavBarMenu;
