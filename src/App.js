import React from "react";
import { RouterProvider } from "react-router-dom";
import RouterObject from "./util/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminLoginPage from "./pages/AdminLoginPage";
// import AdminPage from "./pages/AdminPage";

function App() {
    return <RouterProvider router={RouterObject} />;
}

export default App;
