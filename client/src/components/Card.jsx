import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import desc from "../data/data";

function Card() {
  const [planetData, setPlanetData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 285);
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((response) => {
        setPlanetData(response.data.bodies[20]);
      });
  }, []);

  return (
    <div className="cardInfo">
      <div className="infoPlanete">Nom: {planetData.name}</div>
      <img className="image" src="./src/assets/images/Terra.png" alt="Earth" />
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
  planet: PropTypes.shape({
    name: PropTypes.string,
    englishName: PropTypes.string,
    density: PropTypes.number,
    gravity: PropTypes.number,
    dimension: PropTypes.string,
    bodyType: PropTypes.string,
  }).isRequired,
};

export default Card;
