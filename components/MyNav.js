import { Container, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

const MyNav = ({ handleLoginLinkClick }) => {

  const loginLinkClick = () => {
    handleLoginLinkClick()
  }

  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
        </Nav>
        <Navbar.Text>
          <a style={{cursor: "pointer"}} onClick={ loginLinkClick }><u>Signed in</u></a> as: ???
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default MyNav