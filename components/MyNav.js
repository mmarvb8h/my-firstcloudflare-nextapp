import { Container, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

const MyNav = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/'>Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNav