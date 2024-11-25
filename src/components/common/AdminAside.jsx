import Accordion from "react-bootstrap/Accordion";
import ButtonEx from "./ButtonEx";
import "./css/AdminAside.css";

//24.11.25 지은 [완료] : AdminAside 작업
export default function AdminAside() {
  return (
    <div id="AdminAsideContainer">
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">group</span>
              <span>회원관리</span>
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
                <span>회원전체목록</span>
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
              <span>직원관리</span>
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
                <span>직원전체목록</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">bed</span>
              <span>객실관리</span>
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
                <span>객실전체목록</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">acute</span>
              <span>예약관리</span>
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
                <span>예약전체목록</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">paid</span>
              <span>결제관리</span>
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <ButtonEx
              id={"paymentsGroup"}
              url={"/admin/payments"}
              // action={fetch('')}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span>결제목록</span>
              </p>
            </ButtonEx>
            <ButtonEx
              id={"paymentsProcessess"}
              url={"/admin/payments/process"}
              className={"adminAsideMenu adminAsideSubMenu"}
            >
              <p>
                <span className="material-symbols-outlined icons">
                  check_indeterminate_small
                </span>
                <span>결제프로세스목록</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <p className="adminAsideMenu">
              <span className="material-symbols-outlined icons">
                view_cozy
              </span>
              <span>게시판관리</span>
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
                <span>공지사항 게시판</span>
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
              <span>통계관리</span>
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
                <span>통계1</span>
              </p>
            </ButtonEx>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
