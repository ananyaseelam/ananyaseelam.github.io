import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    // <div className="navcontainer">
    <Navbar collapseOnSelect expand="lg" 
    className="bg-body-tertiary" 
    // className="navcontainer"
    >
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle className="navbartab" aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse className="navcontainer" > */}
          <Nav 
          // className="me-auto"
          >
            <Nav.Link href="#experience" className="navbartab">Experience</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Research</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Social Impact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
    // </div>
  );
}

export default CollapsibleExample;