import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function header() {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link to="/"><Navbar.Brand href="#home">홈입니다</Navbar.Brand></Link>
          <Nav className="me-auto">
          <Link to="/detail"><Nav.Link href="#1">메뉴1</Nav.Link></Link>
            <Nav.Link href="#2">메뉴2</Nav.Link>
            <Link to="/MyPage"><Nav.Link href="#3">메뉴3</Nav.Link></Link>
          </Nav>
          <Nav>
            <Nav.Link href="login">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}

export default header;