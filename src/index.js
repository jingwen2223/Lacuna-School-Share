import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/navBar/navBar";

const routing = <Navbar></Navbar>;

ReactDOM.render(routing, document.getElementById("root"));
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Routes } from "./Routes.js"; // where we are going to specify our routes

// ReactDOM.render(
//   <Router>
//     <Routes />
//   </Router>,
//   document.getElementById("root")
// );
