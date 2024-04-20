import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import desc from "../data/data";

function Card({ planetName, onClose }) {
  const [planetData, setPlanetData] = useState({});

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
      <div className="infoPlanete">Nom: {planetData.name}</div>
      <img
        className="image"
        src={`./src/assets/images/${planetData.name}.png`}
        alt={planetData.name}
      />
      <div className="infoText">
        <span className="info">Information :</span>
        <br />
        BodyType: {planetData.bodyType}
        <br />
        Dimension: {planetData.dimension}
        <br />
        Gravite: {planetData.gravity}
        <br />
        Densite: {planetData.density}
        <br />
        <span className="info">Description :</span>
        <p>
          Cette {planetData.bodyType} a une gravite de {planetData.gravity} pour
          une densite de {planetData.density}. {desc[3].description}
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
