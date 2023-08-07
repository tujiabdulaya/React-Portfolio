import Footer from "./components/Footer";
import Header from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import React, { useState } from "react";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
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
    </div>
  );
}

export default App;
