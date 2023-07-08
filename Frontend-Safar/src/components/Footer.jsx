import React from "react";
import { Link } from "react-router-dom/dist";


export function Footer(){

    return(
        <>
        <section className="footer">
          <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <Link to="/" style={{textDecoration:"none"}}>
              <i className="fas fa-angle-right"></i>home
            </Link>
            <Link to="/about" style={{textDecoration:"none"}}>
              <i className="fas fa-angle-right"></i>about
            </Link>
            <Link to="/package" style={{textDecoration:"none"}}>
              <i className="fas fa-angle-right"></i>package
            </Link>
            {/* <Link to="/booking" style={{textDecoration:"none"}}>
              <i className="fas fa-angle-right"></i>book
            </Link> */}
            <Link to="/card" style={{textDecoration:"none"}}>
              <i className="fas fa-angle-right"></i>gallery
            </Link>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <Link to="/" style={{textDecoration:"none"}} >
              <i className="fas fa-angle-right"></i>ask questions
            </Link>
            <Link to="/about" style={{textDecoration:"none"}}>
              <i className="fas fa-angle-right"></i>about us
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
              <i className="fas fa-angle-right"></i>privacy policy
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
              <i className="fas fa-angle-right"></i>terms of use
            </Link>
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <Link style={{textDecoration:"none"}}>
              <i className="fas fa-phone"></i> +123-456-7890
            </Link>
            <Link style={{textDecoration:"none"}}>
              <i className="fas fa-phone"></i> +111-222-3333
            </Link>
            <Link style={{textDecoration:"none"}}>
              <i className="fas fa-envelope"></i> autocrats@gmail.com{" "}
            </Link>
            <Link style={{textDecoration:"none"}}>
              <i className="fas fa-map"></i> Lucknow , india - 222001{" "}
            </Link>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <Link style={{textDecoration:"none"}}>
              <i className="fab fa-facebook-f"></i> facebook{" "}
            </Link>
            <Link style={{textDecoration:"none"}}>
              <i className="fab fa-twitter"></i> twitter{" "}
            </Link>
            <Link style={{textDecoration:"none"}}>
              <i className="fab fa-instagram"></i> instagram{" "}
            </Link>
            <Link style={{textDecoration:"none"}}>
              <i className="fab fa-linkedin"></i> linkedin{" "}
            </Link>
          </div>
        </div>

        <div className="credit">
          created by Team <span>Boolean Autocrats</span> | all rights reserved!
        </div>
      </section>
        </>
    )
}