import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (

    <Navbar bg="dark" data-bs-theme="dark" className='container-fluid' expand="xl">
      <Container>
        <Navbar.Brand href="#home">Carbonzeroed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <NavDropdown title="Offering" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">MarketPrice</Nav.Link>

          </Nav>
          <div>
        <form className="d-flex">
<ul className="navbar-nav me-4 mb-2 mb-lg-0">
  <li className="nav-item">
    <a className="nav-link active text-white me-4" aria-current="page" href="home">Login</a>
  </li>
<button className="btn btn-outline-success" type="submit">SignUp</button>
</ul>
</form>
        </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
export default BasicExample;
