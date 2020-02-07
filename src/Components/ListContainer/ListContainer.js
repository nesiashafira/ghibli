import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FilmImage } from "../../data/FilmImage.js";
import "./ListContainer.css";

const ListContainer = () => {
  const [datas, setDatas] = useState([]);

  const getName = async () => {
    const { data } = await axios.get("https://ghibliapi.herokuapp.com/films");
    await setDatas(prevState => {
      return prevState.length > 0 ? [...prevState, ...data] : [...data];
    });
  };

  useEffect(() => {
    getName();
  }, []);

  useEffect(() => {
    const a = document.getElementsByClassName("film-list")[0];
    a.addEventListener("scroll", () => {
      if (a.scrollTop + a.clientHeight >= a.scrollHeight) {
        getName();
      }
    });
  }, []);

  return (
    <div className="film-list">
      {datas &&
        datas.map((film, index) => {
          return (
            <NavLink
              key={index}
              to={`film/${film.id}`}
              className="card-item"
              onClick={() => localStorage.setItem("filmId", film.id)}
            >
              <img
                src={
                  FilmImage[film.id] && FilmImage[film.id].image
                    ? FilmImage[film.id].image
                    : "https://placeholder.com/150"
                }
                className="card-poster"
                alt={film.title}
              ></img>
            </NavLink>
          );
        })}
    </div>
  );
};

export default ListContainer;
