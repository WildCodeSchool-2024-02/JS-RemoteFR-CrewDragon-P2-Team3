import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import terre from "../assets/bgMain/terreInfo.jpg";
import venus from "../assets/bgMain/venusInfo.jpg";
import mars from "../assets/bgMain/marsInfo.jpg";
import jupiter from "../assets/bgMain/jupiterInfo.jpg";
import saturn from "../assets/bgMain/saturneInfo.jpg";
import uranus from "../assets/bgMain/uranusInfo.jpg";
import mercure from "../assets/bgMain/mercureInfo.jpg";
import soleil from "../assets/bgMain/soleil.jpg";
import neptune from "../assets/bgMain/neptuneInfo.jpg";

const PlanetsImg = {
  terre,
  venus,
  mars,
  jupiter,
  saturn,
  uranus,
  mercure,
  soleil,
  neptune,
};

function Card({ planetName, onClose }) {
  const [planetData, setPlanetData] = useState({});
  const [planetImg, setPlanetImg] = useState("");

  useEffect(() => {
    if (planetName) {
      axios
        .get(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
        .then((response) => {
          setPlanetData(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    if (planetName && PlanetsImg[planetName]) {
      setPlanetImg(PlanetsImg[planetName]);
    }
  }, [planetName]);

  const handleClose = () => {
    onClose();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClose();
    }
  };

  return (
    <div className="cardInfo">
      <div className="closeButtonContainer">
        <div
          className="closeButton"
          onClick={handleClose}
          onKeyPress={handleKeyPress}
          tabIndex={0}
          role="button"
        >
          X
        </div>
      </div>
      <div className="infoPlanete">
        <h4>Nom: {planetData.name}</h4>
      </div>
      <img className="image" src={planetImg} alt={planetData.name} />
      <div className="infoText">
        <span className="info">
          <h4>Information :</h4>
        </span>
        <p>
          <br />
          BodyType: {planetData.bodyType}
          <br />
          Dimension: {planetData.dimension}
          <br />
          Gravite: {planetData.gravity}
          <br />
          Densite: {planetData.density}
          <br />
        </p>
        <span className="info">
          <h4>Description :</h4>
        </span>
        <p>
          Cette {planetData.bodyType} a une gravite de {planetData.gravity} pour
          une densite de {planetData.density}.{" "}
          {planetData ? planetData.description : ""}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  planetName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Card;
