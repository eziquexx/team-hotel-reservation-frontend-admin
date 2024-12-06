import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ButtonEx from "./ButtonEx";
import "./css/AdminAside.css";

//24.12.03 지은 [완료] : UI 스타일 변경을 위해 tag 수정
export default function AdminAside() {
  return (
    <div id="AdminAsideContainer">
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">group</span>
              <span className="menu-text">회원관리</span>
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <ButtonEx
              id={"member"}
              url={"/admin/member"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span className="menu-text">회원전체목록</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">
                account_box
              </span>
              <span className="menu-text">직원관리</span>
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <ButtonEx
              id={"staff"}
              url={"/admin/staff"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span className="menu-text">직원전체목록</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">bed</span>
              <span className="menu-text">객실관리</span>
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <ButtonEx
              id={"room"}
              url={"/admin/room"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span className="menu-text">객실전체목록</span>
              </p>
            </ButtonEx>
           
            <ButtonEx
              id={"room"}
              url={"/admin/roomtype"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span className="menu-text">객실타입목록</span>
              </p>
            </ButtonEx>
        
          </Accordion.Body>
        
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">acute</span>
              <span className="menu-text">예약관리</span>
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <ButtonEx
              id={"reservation"}
              url={"/admin/reservation"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span className="menu-text">예약전체목록</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">paid</span>
              <span className="menu-text">결제관리</span>
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <ButtonEx
              id={"paymentsGroup"}
              url={"/admin/payments"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span className="menu-text">결제내역</span>
              </p>
            </ButtonEx>
            <ButtonEx
              id={"paymentsGroupPaypal"}
              url={"/admin/payments/paypal"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span className="menu-text">PayPal 주문내역</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">view_cozy</span>
              <span className="menu-text">게시판관리</span>
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <ButtonEx
              id={"boards"}
              url={"/admin/boards"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span className="menu-text">공지사항 게시판</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">
                monitoring
              </span>
              <span className="menu-text">통계관리</span>
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <ButtonEx
              id={"statistics"}
              url={"/admin/statistics"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span className="menu-text">통계1</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
