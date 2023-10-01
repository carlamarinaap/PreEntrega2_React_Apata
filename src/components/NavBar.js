import {Container, Nav,Navbar} from 'react-bootstrap';
import logo from '../img/logo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import '../navBar.css'


function NavBar({contador}) {
  return (
    <Navbar expand="lg" className="bg-light"  >
      <Container>
        <Navbar.Brand as={Link} to={'/productos'}><img src={logo} width="150" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="home" className='m-0 m-lg-3 fs-5'>Inicio</Nav.Link>
            <Nav.Link as={Link} to="quienes-somos" className='m-0 m-lg-3 fs-5'>Quienes somos</Nav.Link>
            <Nav.Link as={Link} to="contacto" className='m-0 m-lg-3 fs-5'>Contactanos</Nav.Link>
            <Nav.Link as={Link} to="/productos" className='m-0 m-lg-3 fs-5'>Productos</Nav.Link>
          </Nav>
          <CartWidget contador={contador}/>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;