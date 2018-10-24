import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import "./styles.css";
import SideBar from "./sidebar";
import AlertBar from "./alertbar";
import Navbar from "./navbar";
import Home from "./home";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <header id="header">
        {/* <AlertBar/> */}
        <Navbar/>
      </header>
      <section id="page-wrap" className="content">
        <Home/>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
