import React, { useEffect, useState } from "react";
import "../css/MainBody.css";
import { Link, useNavigate } from "react-router-dom";
import Image1 from "../images/1.png";

function MainBody() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  return (
    <div>
      <main className="main_body_container">
        <div className="main__text">
          <h1>
            Welcome, <span>{loggedInUser}</span>!
          </h1>
          <div className="subText">
            <p>
              This is <span>QUIXELON</span> a self made project to learn and
              improve skills in web development. You can find{" "}
              <Link to="/programmes" className="Link">project ideas</Link>,{" "}
              <Link to="/programmes" className="Link">resources to learn</Link>{" "}
              and many more things here.
            </p>
          </div>
          <div className="main__buttons">
            <button className="main__button" onClick={() => navigate("/home")}>
              About Us!
            </button>
            <button className="main__button" onClick={() => navigate("/home")}>
              Explore Now!
            </button>
          </div>
        </div>
        <div className="image_right">
          <img src={Image1} />
        </div>
      </main>
    </div>
  );
}

export default MainBody;
