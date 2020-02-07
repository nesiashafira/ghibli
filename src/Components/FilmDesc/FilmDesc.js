import React from "react";
import Logo from "../../assets/icon.png";
import { NavLink } from "react-router-dom";
import "./FilmDesc.css";

const FilmDesc = props => {
  const { title, desc, director, producer, year, score } = props;
  return (
    <div className="desc-container">
      <img src={Logo} alt="logo" className="desc-logo"></img>

      <div style={{ margin: "25px 0 15px 0" }}>
        <h1 className="desc-title"> {title && title.toUpperCase()} </h1>
        <p className="desc-desc">{desc}</p>
      </div>

      <hr className="line"></hr>

      <div className="desc-attr">
        <div>
          <label>Director</label>
          <h1 className="desc-maker">{director}</h1>
        </div>

        <div>
          <label>Producer</label>
          <h1 className="desc-maker">{producer}</h1>
        </div>

        <div>
          <label>Year</label>
          <h1 className="desc-detail">{year}</h1>
        </div>

        <div>
          <label>Rotten Tomatoes Score</label>
          <h1 className="desc-detail">{score}</h1>
        </div>
      </div>

      <NavLink to="/" style={{ textDecoration: "none" }} className="back-btn">
        <h3 style={{ color: "black" }}>Back</h3>
      </NavLink>
    </div>
  );
};

export default FilmDesc;
