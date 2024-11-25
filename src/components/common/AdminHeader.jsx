import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ButtonEx from "./ButtonEx";
import "./css/AdminHeader.css";

//24.11.25 지은 [완료] : AdminHeader 링크 테스트
export default function AdminHeader() {
  return (
    <div id="adminHeaderContainer">
      <Navbar collapseOnSelect expand="xxl" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <ButtonEx
              id={"adminHome"}
              url={"/admin"}
              className={"adminHomeBtn"}
            >
              HJ HOTEL ADMIN
            </ButtonEx>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/admin">
              <span className="material-symbols-outlined">home</span>
            </Link>
          </Nav>
          <Navbar.Text>홍길동님 환영합니다.</Navbar.Text>
          <Button variant="outline-primary" className="logoutBtn">
            로그아웃
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}
