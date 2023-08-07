import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "./navmenu";

const Nav = ({ selected, setSelection }) => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="sticky-top ">
      <div className=" justify-content-center header ">
        <nav className="">
          <ul className="nav justify-content-center">
            {NavMenu.map((item, i) => {
              return (
                <li key={i} className={item.clName}>
                  <Link
                    className="nav-link active"
                    to={item.url}
                    onClick={() => {
                      setSelection(item.url);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
           
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;