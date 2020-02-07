import React, { useState, useEffect } from "react";
import axios from "axios";
import AppContainer from ".././AppContainer/AppContainer";
import FilmDesc from ".././Components/FilmDesc/FilmDesc";
import FilmFrame from ".././Components/FilmFrame/FilmFrame";
import { FilmImage } from "../data/FilmImage.js";

const FilmDetail = () => {
  const [filmDetail, setFilmDetail] = useState({});
  const id = localStorage.getItem("filmId");
  const getFilmDetail = async () => {
    const { data } = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${id}`
    );
    setFilmDetail(data);
  };

  useEffect(() => {
    getFilmDetail();
  }, []);

  return (
    <AppContainer>
      <FilmDesc
        title={filmDetail.title}
        desc={filmDetail.description}
        director={filmDetail.director}
        producer={filmDetail.producer}
        year={filmDetail.release_date}
        score={filmDetail.rt_score}
      ></FilmDesc>

      <FilmFrame
        poster={FilmImage[id].image}
        trailer={FilmImage[id].trailer}
      ></FilmFrame>
    </AppContainer>
  );
};

export default FilmDetail;
