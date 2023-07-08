// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

// function Book() {
//   const handleNameInvalid = (event) => {
//     event.target.setCustomValidity("Only Alphabets Allowed.");
//   };

//   const handleEmailInvalid = (event) => {
//     event.target.setCustomValidity("Invalid Email Address.");
//   };

//   const handlePhoneInvalid = (event) => {
//     event.target.setCustomValidity("Invalid Phone Number (Min 10 digits required).");
//   };

//   return (
//     <Fragment>
//       <div
//         className="heading"
//         style={{ background: "url(Assets/Images/beach-3.jpg)" }}
//       >
//         <h1>Book Now</h1>
//       </div>

//       <section className="booking">
//         <h1 className="heading-title">book your trip!</h1>

//         <form action="#" className="book-form">
//           <div className="flex">
//             <div className="inputBox">
//               <span>Name : </span>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter Your Name"
//                 pattern="^[a-zA-Z\s]{2,}$"
//                 onInvalid={handleNameInvalid}
//                 required
//               />
//             </div>

//             <div className="inputBox">
//               <span>Email : </span>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Your Email"
//                 pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
//                 onInvalid={handleEmailInvalid}
//                 required
//               />
//             </div>

//             <div className="inputBox">
//               <span>Phone : </span>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter Your Number"
//                 pattern="[0-9]{10}"
//                 onInvalid={handlePhoneInvalid}
//                 required
//               />
//             </div>

//             <div className="inputBox">
//               <span>Address : </span>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Enter Your Address"
//                 required
//               />
//             </div>

//             <div className="inputBox">
//               <span>Where To : </span>
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Place you want to visit "
//                 required
//               />
//             </div>

//             <div className="inputBox">
//               <span>How Many Person: </span>
//               <input
//                 type="number"
//                 name="guests"
//                 defaultValue="1"
//                 min="1"
//                 required
//               />
//             </div>

//             <div className="inputBox">
//               <span>Arrivals : </span>
//               <input type="date" name="arrivals" required />
//             </div>

//             <div className="inputBox">
//               <span>Leaving : </span>
//               <input type="date" name="leaving" required />
//             </div>
//           </div>

//           <input type="submit" value="Submit" className="btn" name="send" />
//         </form>
//       </section>

//       <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
//       <script src="Assets/js/script.js"></script>
//     </Fragment>
//   );
// }

// export default Book;
