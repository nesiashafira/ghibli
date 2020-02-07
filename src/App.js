import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import FilmDetail from "./FilmDetail/FilmDetail";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/film/:filmId" component={FilmDetail} />
      </Router>
    </div>
  );
};

export default App;
