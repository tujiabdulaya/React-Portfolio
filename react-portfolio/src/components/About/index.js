import React from "react";

// import Typical from "react-typical";

import "./style.css";
const Header = () => {
  return (
    <div id="about" className="container">
      {/* <Typical
        className="fs-1 d-flex justify-content-center img-fluid"
        steps={["Tuji Abdulaya", 3000, "A FULL STACK DEV!", 2000]}
        loop={Infinity}
        wrapper="p"
      /> */}
      <div className="col">
        {/* <img className="img-fluid" src={image}></img> */}
      </div>
      <div className="d-flex justify-content-center row  about-me mt-5">
        <div>
          {/* <img
            src={HeaderImage}
            className="rounded-pill row-cols-2"
            style={{ width: "30%" }}
            alt="cover"
          /> */}
        </div>

        <div className="d-flex justify-content-center w-55">
          <p className="d-flex text-center d-flex align-items-center w-100 row-cols-2 ">
            Hello my name is Tuji Abdulaya im from Minneapolis im currently a
            partime student at the moment. I am looking forward to this bootcamp
            class to gain experience and learn. I also enjoy watching and
            playing sports. When i get a chance i aslo enjoy traving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
