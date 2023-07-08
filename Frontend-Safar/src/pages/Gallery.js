import React , { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { setupMenu, setupSwiper, setupLoadMore } from './Assets/js/script.js';

// // Call the setup functions
// setupMenu();
// setupSwiper();
// setupLoadMore();
function Gallery(){
  return (
    <Fragment>
 <>

        <div className="gallery-container">
          <img className="gallery-img" src="Assets/Images/gallery-1.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-2.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-3.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-4.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-5.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-6.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-7.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-8.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-9.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-10.jpeg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-11.jpg" alt="" />
          <img className="gallery-img" src="Assets/Images/gallery-12.jpg" alt="" />
        </div>

        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
        <script src="script.js"></script>
      </>    </Fragment>
  )
}
export default Gallery;