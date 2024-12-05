import { Outlet } from "react-router-dom";
import "./css/AdminMain.css";

//24.12.03 지은 [완료] : create-browser-router 적용을 하면서 경로 수정
export default function AdminMain() {
  return (
    <div id="AdminMainConatainer">
      <div id="AdminMainContentsContainer">
        <div id="AdminMainContentsWrap">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
