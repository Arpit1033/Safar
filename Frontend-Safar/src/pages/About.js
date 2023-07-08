import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <Fragment>
      <div
        className="heading"
        style={{ background: "url(Assets/Images/header-1.jpg) no-repeat" }}
      >
        <h1>About Us</h1>
      </div>

      {/* about section starts */}
      <section className="about">
        <div className="image">
          <img src="Assets/Images/img-4.jpg" alt="" />
        </div>

        <div className="content">
          <h3>Why choose us?</h3>
          <p>
            Welcome to our tourism website! We are a team of travel enthusiasts
            who believe that the best way to experience a new culture or
            destination is through immersive and personalized travel packages.
          </p>
          <p>
            Our packages are carefully designed to showcase the best of each
            destination, from popular tourist attractions to hidden gems that
            only locals know about. We offer a wide range of packages that cater
            to different interests, budgets, and durations.
          </p>
          <div className="icons-container">
            <div className="icons">
              <i className="fa fa-map"></i>
              <span>top destination</span>
            </div>
            <div className="icons">
              <i className="fa fa-hand-holding-usd"></i>
              <span>affordable price</span>
            </div>
            <div className="icons">
              <i className="fa fa-headset"></i>
              <span>24/7 guide service</span>
            </div>
          </div>
        </div>
      </section>
      {/* about section ends */}

      {/* review section starts */}
      <section className="reviews">
        <h1 className="heading-title">clients reviews</h1>

        {/* <div className="swiper reviews-slider"> */}
          <div className="swiper-wrapper" style={{display:"flex",flexDirection:"column"}}>
            <div className="swiper-slide client-Testimonials slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                I recently booked a tourism package through this website and it
                exceeded my expectations! The itinerary was well-planned and
                included all the must-visit destinations along with some hidden
                gems.
              </p>
              <h3>Arpit Dubey</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf1.jpg" alt="" />
            </div>

            <div className="swiper-slide client-Testimonials slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                I had a wonderful time exploring a new country with the tourism
                package I booked through this website. The package was great
                value for money and included all the activities and experiences
                I wanted to have.
              </p>
              <h3>Bikram</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf4.jpg" alt="" />
            </div>

            <div className="swiper-slide client-Testimonials slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                I cannot thank this website enough for the amazing travel
                experience they provided. The package was very well-organized
                and included everything from airport transfers to sightseeing
                tours. The tour guide was very friendly and knowledgeable and
                made sure we were comfortable throughout the trip.
              </p>
              <h3>Devendra Gurnani</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf2.jpg" alt="" />
            </div>

            <div className="swiper-slide client-Testimonials slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                Safar.com is a great agency with immediate response and
                customize the requirements. Safar.com made our north east
                experience memorable. I will suggest people planning to travel
                Assam, Meghalaya must also visit Majuli island My best wishes to
                Safar.com
              </p>
              <h3>Harsh Kumar Singh</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf3.jpg" alt="" />
            </div>

            <div className="swiper-slide client-Testimonials slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                Overall experience was good and overwhelming as the hotel, cabs
                and service was great which makes our overall trip also great as
                expected.
              </p>
              <h3>Krish Garg</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf1.jpg" alt="" />
            </div>

            <div className="swiper-slide client-Testimonials slide">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                It was a good experience would be looking forward to plan trips
                Driver is co-operative and hotel staff was well behaved.
              </p>
              <h3>Siddhant Mukund</h3>
              <span>traveler</span>
              <img src="Assets/Images/pf4.jpg" alt="" />
            </div>
          </div>
        {/* </div> */}
      </section>

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <script src="Assets/js/script"></script>
    </Fragment>
  );
}
export default About;
