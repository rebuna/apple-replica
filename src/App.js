import React from "react";
import logo from "./logo.svg";
import "./css/bootstrap.css";
import "./css/styles.css";
import Header from "./commonResource/Header/Header";
// import Test from "./Test";
import Footer from "./commonResource/Footer/Footer";
// import Alert from "./commonResource/Alert/Alert";
// import First from "./commonResource/First/First";
// import Second from "./commonResource/Second/Second";
// import Third from "./commonResource/Third/Third";
// import Fourth from "./commonResource/Fourth/Fourth";
// import Fifth from "./commonResource/Fifth/Fifth";
// import Sixth from "./commonResource/Sixth/Sixth";
import {BrowserRouter as  Router, Routes, Route, Link } from "react-router-dom";
import Iphone from "./commonResource/Iphone/Iphone";
import Main from "./commonResource/Main/Main";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<ipad />} />
        {/* <Route path="/mac" element={<mac/>} /> */}

        <Route path="/watch" element="Watch" />
        <Route path="/tv" element="tv" />
        <Route path="/music" element="Music" />
        <Route path="/support" element="Support" />
      </Routes>

      {/* <Alert />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth /> */}
      <br />
      <br />
      <br />
      <Footer />
    </Router>
  );
}

export default App;
