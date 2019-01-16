import React from "react";
import "./TrekCard.css";

const TrekCard = props => (
  <div className="card">
  <div className="img-container">
      {/*onClick will call selectCharacter in App.js and pass character parameter*/}
      <a onClick={() => props.selectCharacter(props.charName)} 
          className={props.currentScore === 0 ? "imgStyle" : "imgStyle"}>
          <img className="cusImg" alt={props.charName} src={props.image} />
      </a>
  </div>
</div>
);

export default TrekCard;