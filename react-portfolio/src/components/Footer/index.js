import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer-length">
      <div>
        <footer className="d-flex flex-wrap justify-content-center">
            <div className="col-md-4 justify-content-center fs-2 d-flex">

          <a href="https://github.com/tujiabdulaya">
            <i className=" ms-3 bi bi-github  footer" ></i>
          </a>
          <a href="mailto:tujiabdulay1@gmail.com">
            <i className="ms-3 bi bi-envelope footer" >

            </i>
          </a>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;