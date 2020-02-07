import React, { useState } from "react";

const FilmFrame = props => {
  const [showTrailer, setShowTrailer] = useState(false);
  const { poster, trailer } = props;
  const styles = {
    background: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      height: "100vh",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundColor: "#292828",
      backgroundImage: `url(${poster})`
    },
    button: {
      position: "absolute",
      right: "0px",
      bottom: "0px",
      width: "10%",
      height: "50px",
      border: "none",
      backgroundColor: "white",
      fontWeight: "600"
    },
    frameContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)"
    }
  };

  const watchTrailer = () => {
    const button = document.getElementsByClassName("trailer-button")[0];
    setShowTrailer(!showTrailer);
    button.innerHTML = showTrailer ? "Watch Trailer" : "Close Trailer";
  };

  return (
    <div style={styles.background} className="film-frame">
      {showTrailer && (
        <div style={styles.frameContainer} className="film-trailer">
          <iframe
            title="trailer"
            width="85%"
            height="70%"
            src={trailer}
            style={{ border: "none" }}
          ></iframe>
        </div>
      )}
      <button
        style={styles.button}
        className="trailer-button"
        onClick={() => watchTrailer()}
      >
        Watch Trailer
      </button>
    </div>
  );
};

export default FilmFrame;
