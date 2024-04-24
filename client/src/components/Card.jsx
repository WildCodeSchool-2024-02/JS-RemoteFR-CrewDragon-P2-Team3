import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import terre from "../assets/bgMain/terreInfo.jpg";
import venus from "../assets/bgMain/venusInfo.jpg";
import mars from "../assets/bgMain/marsInfo.jpg";
import jupiter from "../assets/bgMain/jupiterInfo.jpg";
import saturne from "../assets/bgMain/saturneInfo.jpg";
import uranus from "../assets/bgMain/uranusInfo.jpg";

const PlanetImg = {
  Terre: terre,
  Venus: venus,
  Mars: mars,
  Jupiter: jupiter,
  Saturne: saturne,
  Uranus: uranus,
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
    if (planetName && PlanetImg[planetName]) {
      setPlanetImg(PlanetImg[planetName]);
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
      <img className="image" src={planetImg} alt={planetData.name} />
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
