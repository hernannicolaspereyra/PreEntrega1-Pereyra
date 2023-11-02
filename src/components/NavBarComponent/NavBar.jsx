import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../NavBarComponent/assets/logo-tienda.png"
import Cart from "../CartComponent/CartWidget"
import "./NavBar.css"

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body nav-style">
      <Container >
        <img src={logo} alt="logo" style={{width: 100 , height: 70}}/>
        <Navbar.Brand href="#home">Tienda Gamer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Juegos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Cart/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;