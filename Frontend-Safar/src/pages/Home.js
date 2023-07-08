import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Fragment>

      {/* <section /> */}

      <section className="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide slide"
              style={{ background: "url(Assets/Images/trvl1.jpg) no-repeat" }}
            >
              <div className="content">
                <span>explore, discover, travel</span>
                <h3>travel around the world</h3>
                <Link to="/package" className="btnnb"> discover more </Link>
              </div>
            </div>

            <div
              className="swiper-slide slide"
              style={{
                background: "url(Assets/Images/home-slide-2.jpg) no-repeat",
              }}
            >
              <div className="content">
                <span>explore, discover, travel</span>
                <h3>discover new places</h3>
                <Link to="/package" className="btnnb">
                  discover more
                </Link>
              </div>
            </div>

            <div
              className="swiper-slide slide"
              style={{
                background: "url(Assets/Images/home-slide-1.jpg) no-repeat",
              }}
            >
              <div className="content">
                <span>explore, discover, travel</span>
                <h3>make your tour worthwhile</h3>
                <Link to="/package" className="btnnb">
                  discover more
                </Link>
              </div>
            </div>
          </div>
{/* 
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" /> */}
        </div>
      </section>

      <section className="services">
        <h1 className="heading-title">our services</h1>
        <div className="box-container">
          <div className="box">
            <img src="Assets/icons/mount100.png" alt="" />
            <h3>adventure</h3>
          </div>

          <div className="box">
            <img src="Assets/icons/guide100.png" alt="" />
            <h3>tour guide</h3>
          </div>

          <div className="box">
            <img src="Assets/icons/trek100.png" alt="" />
            <h3>trekking</h3>
          </div>

          <div className="box">
            <img src="Assets/icons/fire100.png" alt="" />
            <h3>camp fire</h3>
          </div>

          <div className="box">
            <img src="Assets/icons/offroad100.png" alt="" />
            <h3>off road</h3>
          </div>

          <div className="box">
            <img src="Assets/icons/camp100.png" alt="" />
            <h3>camping</h3>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="image">
          <img src="Assets/Images/about.jpg" alt="" />
        </div>
        <div className="content">
          <h3>about us</h3>
          <p>
            Welcome to our tourism website Safar We are a team of travel
            enthusiasts who believe that the best way to experience a new
            culture or destination is through immersive and personalized travel
            packages. Our goal is to provide you with a memorable and authentic
            travel experience that is tailored to your preferences.
          </p>
          <Link to="/about" className="btnnb">
            read more
          </Link>
        </div>
      </section>

      <section className="home-packages">
        <h1 className="heading-title">our packages</h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="Assets/Images/img-1.jpg" alt="" />
            </div>
            <div className="content">
              <h3>BUSINESS TOURISM PACKAGES</h3>
              <p>
                These packages are designed for people who travel for business
                purposes. They include services such as meeting facilities,
                accommodations, and transportation.
              </p>
              {/* <Link to="/adduser" className="btnnb">
                book now
              </Link> */}
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="Assets/Images/img-2.jpg" alt="" />
            </div>
            <div className="content">
              <h3>LEISURE TOURISM PACKAGES</h3>
              <p>
                These packages are designed for people who want to relax and
                have fun on their vacations. They include activities such as
                sightseeing, beach vacations,
              </p>
              {/* <Link to="/adduser" className="btnnb">
                book now
              </Link> */}
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="Assets/Images/img-3.jpg" alt="" />
            </div>
            <div className="content">
              <h3>ECO-TOURISM PACKAGES</h3>
              <p>
                These packages are designed for people who are interested in
                preserving the natural environment while traveling. They include
                activities such as hiking, wildlife tours, and eco-friendly
                accommodations.
              </p>
              {/* <Link to="/adduser" className="btnnb">
                book now
              </Link> */}
            </div>
          </div>
        </div>
        <div className="load-more">
          <Link to="/package" className="btnnb">
            Explore More Packages
          </Link>
        </div>
      </section>

      <section className="home-offer">
        <div className="content">
          <h3>upto 50% off</h3>
          <p>
            Ready to explore the world without breaking the bank? Take advantage
            of our limited time offer and get 50% off on your dream vacation!
          </p>
          <Link to="/package" className="btnnb">
            Explore Packages Now
          </Link>
        </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

      <script src="Assets/js/script.js"></script>
    </Fragment>
  );
}
export default Home;
