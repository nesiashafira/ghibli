import React from "react";
import "./AppContainer.css";

const AppContainer = props => {
  return <div className="app-container">{props.children}</div>;
};

export default AppContainer;
