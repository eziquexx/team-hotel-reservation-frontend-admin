import { RouterProvider } from "react-router-dom";
import RouterObject from "./util/router";

//24.12.03 지은 [완료] : create-browser-router 적용
function App() {
  return <RouterProvider router={RouterObject} />;
}

export default App;
