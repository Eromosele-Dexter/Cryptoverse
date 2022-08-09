import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../assets/ethlogo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { links } from "./data";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowWidth());
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowWidth());
    }
    if (windowSize >= 768) {
      setShow(true);
    } else {
      setShow(false);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  function getWindowWidth() {
    const { innerWidth } = window;
    return innerWidth;
  }

  return (
    <div className="Navbar">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <p>Cryptoverse</p>
        </div>
        {(show || toggleMenu) && (
          <div className="menu scale-up-center">
            <RiCloseLine
              onClick={() => setToggleMenu(false)}
              className="close"
            />

            <nav>
              <ul>
                {links.map((link) => {
                  return (
                    <a href={link.url} key={link.id}>
                      <li>
                        <div className="link">
                          {link.icon}
                          {/* {link.text} */}
                          <a href={link.url}>{link.text}</a>
                        </div>

                        {/* <Link to={link.url}>{link.text}</Link> */}
                      </li>
                    </a>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
        {!toggleMenu && (
          <RiMenu3Line
            className="hamburger-menu"
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
