import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../signup-page/Auth";
import { render } from "@testing-library/react";
import { setLoginStatus } from "../signup-page/Auth";

export function Navbar() {
  let navigate = useNavigate();

  // let bookNav = "";
  // if(isLoggedIn) bookNav = "/adduser";
  // else bookNav = "/login";

  const [click, setClick] = useState(false);
  const [book, setBookto] = useState("");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    if (isLoggedIn) {
      setBookto("/adduser");
    } else {
      setBookto("/login");
    }
  }, [isLoggedIn]);
  // const handleBooking = () => {
  //   if(isLoggedIn === true){
  //     setBookto("/adduser");
  //   }
  //   else{
  //     setBookto("/login");
  //   }
  // }

  const handleSignUp = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setBookto("/login");
    setLoginStatus(false);
    navigate("/");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <nav className="navbar"
        style={{
          padding: "0 !important",
          boxShadow : "0 .5rem 1rem rgba(0,0,0,.1)",
        }}
        >
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {/* <GiRocketThruster className="navbar-icon" /> */}
              Safar
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/package"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Package
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={book}
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  // onClick={handleBooking}
                >
                  Book
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/card"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Gallery
                </NavLink>
              </li>
              {/* extra gallery link */}
              {/* <li className="nav-item">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Gallery
                </NavLink>
              </li> */}
              {/* {console.log("Hello")} */}

              {/* {toggleButton} */}
              {isLoggedIn === true ? (
                <button type="button" className="btnnb" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button type="button" className="btnnb" onClick={handleSignUp}>
                  Sign Up
                </button>
              )}

              {/* <a target="_blank" href="Assets\Sign-up\sign-up.html" className="btn" style={{ color: 'white' }}>SignUp</a> */}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
