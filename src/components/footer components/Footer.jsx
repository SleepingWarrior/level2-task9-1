import React from "react";

function Footer() {
  return (
    // <div className="footer">
    <footer id="footer-2-cols" class="site-footer">
      <div id="footer-container">
        <div id="left-footer-section" class="footer-section">
          <div id="footer-search">
            <form action="">
              <input type="search" placeholder="Web design" />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div id="right-footer-section" class="footer-section">
          <div class="footer-links">
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
                <a href=" ">Leave a Feedback</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="copyright-information">
          <div id="copyright-text">&copy; Reimu Inc. 2022. All rights reserved.</div>
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
