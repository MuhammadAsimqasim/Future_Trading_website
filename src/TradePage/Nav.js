import Container from 'react-bootstrap/Container';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mylogo from '../Assests/Logo.png'
import './Nav.css';

function Nave() {
  return (
    <div className='line'>
    <div className='container '>
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"> <img src={mylogo} alt="" className='logo-image' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-cus">
          <NavDropdown title="About" id="basic-nav-dropdown ">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Testimonials</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <button className='button'>Get Started</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>

  );
}

export default Nave;