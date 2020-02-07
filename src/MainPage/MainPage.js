import React, { useEffect } from "react";
import AppContainer from ".././AppContainer/AppContainer";
import ListContainer from "../Components/ListContainer/ListContainer";
import Logo from "../assets/icon.png";
import "./MainPage.css";

const MainPage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <AppContainer>
      <div className="app-title">
        <img src={Logo} alt="Logo" className="app-logo"></img>
        <p>
          Here is the list of Studio Ghibli's movies for those of you who who
          apa yee
        </p>
      </div>
      <ListContainer></ListContainer>
    </AppContainer>
  );
};

export default MainPage;
