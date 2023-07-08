import React from "react";
import { Link } from "react-router-dom";

const NavBarBook = () => {
  return (
    <div>
      <nav className="navbar rounded navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="btn btn-outline-light btn-lg position-absolute top-50 start-50 translate-middle" to="/adduser">Add Booking</Link>
      </nav>
    </div>
  );
};

export default NavBarBook;
