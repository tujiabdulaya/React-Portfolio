import Footer from "./components/Footer";
import Header from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import {Switch} from "react-router"
function App() {
  const [selected, setSelection] = useState(false);

  return (
    <div className="App bg-dark">
      hello
      <Router>
      <Nav selected={selected} setSelection={setSelection} />
        <div>
          <Routes>
          <Route exact path="/portfolio" element={<Header/>} />
          <Route exact path="/contact-me" element={<Contact/>} />
          <Route exact path="projects" element={<Projects/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
      {/* <Router>
        <Nav selected={selected} setSelection={setSelection} />
        <main>
          <div className="container">
            <Routes>
              <Route exact path="/portfolio" component={Header} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact-me" component={Contact} />
            </Routes>
          </div>{" "}
        </main>

        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
