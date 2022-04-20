import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <img className="card-img-top" src={props.img} alt="webdev" />
      <div className="card-body">
        <p className="card-text">{props.service}</p>
      </div>
    </div>
  );
}

export default Card;
