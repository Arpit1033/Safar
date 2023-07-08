import React, { useEffect, useState } from "react";
import { createClient } from "pexels";

const Card = () => {
  const [loading, setLoading] = React.useState(true);



  // Defined state variables to store the fetched gallery photos
  const [galleryPhoto, setPhoto] = useState([]);

  // Defined state variable to track the number of photos to fetch
  const [num, setNum] = useState(10);

  // Defined state variable to store the query string for photo search
  // user can search desired place from search box
  const [queryy, setQueryy] = useState("jaipur");

  // Function to increment the number of photos to fetch
  const toggle = () => {
    setNum((prev) => prev + 10);
  };

  // Function to perform a photo search based on the entered query
  const search_photo = () => {
    const searchValue = document.getElementById("search_id").value;
    setQueryy(searchValue);
  };

  // Function to fetch photos using the Pexels API based on the query and number of photos
  const fetchPhoto = async () => {
    const client = createClient(
      "Gv3szbGhHkRJknx4qs2lKgezyd5dmQiUyYp4zolHjDudDTzaitFgJw6M"
    );
    
    const photos = await client.photos.search({ query: queryy, per_page: num });
    setPhoto(photos.photos);
    setLoading(false);
  };

  // Fetch photos when the component mounts or when num or queryy changes
  useEffect(() => {
    fetchPhoto();
  }, [num, queryy]);

  // Map over the galleryPhoto array to render each photo
  const element = galleryPhoto.map((elem) => {
    return (
      <div key={elem.id} className="gallery">
        <img src={elem.src.landscape} alt="photo" />
      </div>
    );
  });

  if (loading) {
    return <div className="Loading_news"
    >Loading... Please wait</div>;
  }
  // Render the Card component
  return (
    <>
      {/* Input and button for performing photo search */}
      <div className="gallery_search_div">
        <input
          type="text"
          id="search_id"
          placeholder="Enter a tourism place to explore..."
        />
        <button className="load_more_gallery" onClick={search_photo}>
          Search
        </button>
      </div>

      {/* Rendered gallery photos */}
      <div className="gallery-container">{element}</div>

      {/* Button to load more photos */}
      <div className="load-more"
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "2rem 1rem",
                  }}
      onClick={toggle}>
            <span className="btnnb">load more</span>
          </div>
    </>
  );
};

export default Card;
