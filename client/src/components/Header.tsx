import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function header() {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">홈입니다</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/board">게시판</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="login">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}

export default header;