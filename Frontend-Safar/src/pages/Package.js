 
import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { lin } from "../signup-page/Login";

function Package() {
  const [packagesData, setPackagesData] = React.useState([]);
  const [visibility, setVisibility] = React.useState(3);
  const [loading, setLoading] = React.useState(true);
  const [book, setBookto] = useState("");


  useEffect(() => {
    if (lin) {
      setBookto("/adduser");
    } else {
      setBookto("/login");
    }
  }, [lin]);


  React.useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxvCT3CJnO4GlqzUZsaXFxSWZHDy_QwRGkZPlDMbH-yhp3uEtpvgB3xIOwnBdBO6sS1/exec"
    )
      .then((res) => res.json())
      .then((data) => {setPackagesData(data);
        setLoading(false);
      });
  },[]);

  if (loading) {
    return <div className="Loading_news"
    >Loading... Please wait</div>;
  }
  const elements = packagesData.slice(0, visibility).map((d, index) => (
    <div className="box">
      <div className="image">
        <img src={d["image"]} alt="" />
      </div>
      <div className="content">
        <h3>{d["name"]}</h3>
        <p>{d["description"]}</p>
        {/* <NavLink to="/adduser" className="btnnb">
          book now
        </NavLink> */}
      </div>
    </div>
  ));

  const handleClick = () => {
    setVisibility((prev) => prev + 3);
  };

  return (
    <Fragment>
      <div
        className="heading"
        style={{ background: "url(Assets/Images/Beach.jpg) no-repeat" }}
      >
        <h1>Packages</h1>
      </div>

      <section className="packages">
        <h1 className="heading-title">top destinations</h1>

        <div className="box-container">{elements}</div>

        {visibility === 12 ? (
          <h1
            style={{
              justifyContent: "center",
              textAlign: "center",
              margin: "2rem 1rem",
            }}
          >
            End of Packages
          </h1>
        ) : (
          <div className="load-more" onClick={handleClick}>
            <span className="btnnb">load more</span>
          </div>
        )}
      </section>

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <script src="Assets/js/script.js"></script>
    </Fragment>
  );
}
export default Package;
