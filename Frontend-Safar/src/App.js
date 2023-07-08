import Home from "./pages/Home";
import Book from "./pages/Book";
import Package from "./pages/Package";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import News from "./pages/News";
import Card from "./pages/Card";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//Backend
import AddUser from "./backend/Users/AddUser";
import EditUser from "./backend/Users/EditUser";
import ViewUser from "./backend/Users/ViewUser";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

// import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import Bookings from "./backend/Pages/Bookings";
import { Login } from "./signup-page/Login";
import { Register } from "./signup-page/Register";
import { useState } from "react";

function App() {
  const [currentForm, setCurrentForm] = useState("/login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/book" element={<Book />} /> */}
          <Route path="/booking" element={<Bookings />} />
          <Route path="news" element={<News />} />
          <Route path="card" element={<Card />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/package" element={<Package />} />
          <Route
            path="/login"
            element={
              currentForm === "/login" ? (
                <Login onFormSwitch={toggleForm} />
              ) : (
                <Register onFormSwitch={toggleForm} />
              )
            }
          />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* Backend  */}

          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Route>
      </Routes>
      {/* <div className="App">
      {
        currentForm === '/login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      </div> */}
    </BrowserRouter>
  );
}

export default App;
