import React from "react";
import "../css/MainFooter.css";
import { Link } from "react-router-dom";

function MainFooter() {
  const Instagram =
    "https://www.instagram.com/samydroid_gmr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const Discord = "https://discord.gg/qtQhHHy24W";

  const Github = "https://github.com/samydroidg";

  return (
    <div>
      <footer className="main-footer">
        <div className="footer-left">
          <div className="navigaation-links"></div>
        </div>
        <div className="footer-right">
          <div className="social-links">
            <ul>
              <li>
                <Link to={Instagram}>Instagram</Link>
              </li>
              <li>
                <Link to={Discord}>Discord</Link>
              </li>
              <li>
                <Link to={Github}>GitHub</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainFooter;
