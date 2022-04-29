import React from "react";
import "../home/home.css"

function Home() {
  return (
    <div className="container-home">
      <h1>Need A New Website?</h1>
      <h2>We offer Infinite Possibilities. . .</h2>
      <img className="home-image" src={"./images/LandingPage.jpg"} alt="WebPage Design"></img>
    </div>
  );
}

export default Home;