import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import logo from './logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-light">
      <div className='container-fluid'>
        <Navbar.Brand href="#home"><img src={logo} width="150" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="m-auto">
            <Nav.Link href="#home" className='m-0 m-lg-3 fs-5'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='m-0 m-lg-3 fs-5'>Quienes somos</Nav.Link>
            <Nav.Link href="#contacto" className='m-0 m-lg-3 fs-5'>Contactanos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown" className='m-0 m-lg-3 fs-5'>
              <NavDropdown.Item href="#action/3.1">Cafeína</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Barras Protéicas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Proteína</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Multivitaminas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Creatina</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Energy Gel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Carnitina</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Ultra Mass</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;