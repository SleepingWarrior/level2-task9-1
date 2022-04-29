import "./footer.css";
import React from "react";


function Footer() {
  return (
    // <div className="footer">
    <footer className="footer-2-cols site-footer">
      <div className="footer-container">
        <div id="right-footer-section" className="footer-section">
          <div className="footer-links">
            <ul>
              <li role="menuitem">
                <a href=" ">Home</a>
              </li>
              <li role="menuitem">
                <a href=" ">About</a>
              </li>
              <li role="menuitem">
                <a href=" ">Contact Information</a>
              </li>
              <li role="menuitem">
                <a href=" ">Terms of Use & Legal Information</a>
              </li>
              <li role="menuitem">
                <a href=" ">Message Us</a>
              </li>
              <li role="menuitem">
                <a href=" ">Leave Feedback</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="copyright-information">
          <div id="copyright-text">&copy; Tech-Savvy. 2022. All rights reserved.</div>
          <div id="social-buttons">
            <img src={"https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"} alt="facebook" />
            <img src={"https://img.icons8.com/ios-filled/25/999999/telegram-app.png"} alt="telegtram" />
            <img src={"https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"} alt="pinterest" />
            <img src={"https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
    // </div>
  );
}

export default Footer;
