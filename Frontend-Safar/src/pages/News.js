import React, { useState, useEffect } from "react";

export default function News() {
  //  Define state variables using the useState hook
  const [newsData, setNewsData] = useState([]); // stores the news data
  const [expandedDiv, setExpandedDiv] = useState(null); // stores the index of the expanded news item
  const [loading, setLoading] = useState(true); // indicates whether the news data is being loaded
  const [visibility, setVisibility] = React.useState(6);
  //  Use the useEffect hook to fetch news data from an API when the component mounts
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbza1yCW8KbEspQ-mKv2zlrc15K9N84ESA4MOy2OBOPZhkt5ZyJ0WqAsDkOtcGGW4_SEFg/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        const cleanedData = data.data.slice(1); // Remove the first element (There was some error in first data)
        setNewsData(cleanedData); // Update the newsData state with the fetched data
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  //  Define a function to toggle the expanded state of a news item
  const toggleDetail2 = (index) => {
    setExpandedDiv((prevExpandedDiv) =>
      prevExpandedDiv === index ? null : index
    );
  };

  const handleClick = () => {
    setVisibility((prev) => prev + 6);
  };

  // Define a function to truncate long text (To not show whole data at once )
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  //  Render a loading message while the data is being fetched
  if (loading) {
    return <div className="Loading_news"
    >Loading... Please wait</div>;
  }

  // Map over the newsData array to render each news item
  const newsItems = newsData.slice(0,visibility).map((d, index) => (
    <div
      className={`news ${expandedDiv === index ? "show-detail" : ""}`}
      key={d["web-scraper-order"]}
      onClick={() => toggleDetail2(index)}
    >
      <div className="div_photo">
        <img src={d["photo-src"]} alt="bnd" className="photo" />
      </div>
      <div className="data">
        <h2 className="heading_gallery">{d["links"]}</h2>
        <p className="detail_1">
          {expandedDiv === index
            ? d["detail_1"]
            : truncateText(d["detail_1"], 115)}
        </p>
        {expandedDiv === index && <p className="detail_2">{d["detail_2"]}</p>}
      </div>
    </div>
  ));

  //  Render the News component
  return (
    <>
      <div className="welcome">
        <h2>Welcome to our exciting collection of tourism articles,</h2>
        <p>
          where we invite you to discover extraordinary destinations and enrich
          your travel experiences, we are here to ignite your wanderlust and
          guide you through remarkable adventures.
        </p>
      </div>
      <div className="news-box">{newsItems}</div>
      {visibility >= 40 ? (
          <h1
            style={{
              justifyContent: "center",
              textAlign: "center",
              margin: "2rem 1rem",
            }}
          >
            End of News
          </h1>
        ) : (
          <div className="load-more"
          style={{
            justifyContent:"center",
            margin:"2rem 1rem",
            textAlign:"center",
          }} 
          onClick={handleClick}>
            <span className="btnnb">load more</span>
          </div>
        )}
    </>
  );
}
