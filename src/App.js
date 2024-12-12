import React from "react";
import { RouterProvider } from "react-router-dom";
import RouterObject from "./util/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
    return <RouterProvider router={RouterObject} />;
}

export default App;