import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { handleSuccess } from "../Utils";
import "../css/navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Loggedout");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <header>
      <nav>
        <div className="logo">Quixelon</div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className="dropdown"
            >
              <span style={{ cursor: "default" }}>More</span>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <NavLink
                    to="/home/programmes"
                    className="dropdown-item"
                    activeClassName="active"
                  >
                    Programmes
                  </NavLink>
                  <NavLink
                    to="/home/gallery"
                    className="dropdown-item"
                    activeClassName="active"
                  >
                    Gallery
                  </NavLink>
                  <NavLink
                    to="/home/publication"
                    className="dropdown-item"
                    activeClassName="active"
                  >
                    Publication
                  </NavLink>
                  <NavLink
                    to="/home/announcement"
                    className="dropdown-item"
                    activeClassName="active"
                  >
                    Announcement
                  </NavLink>
                </div>
              )}
            </li>
          </ul>
          <button onClick={handleLogout} className="btn">
            LogOut
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
