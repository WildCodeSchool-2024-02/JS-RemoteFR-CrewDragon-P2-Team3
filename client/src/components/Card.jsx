import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import desc from "../data/data";

function Card() {
  const [showCard, setShowCard] = useState(false);
  const [planetData, setPlanetData] = useState({});
  const [planetName, setPlanetName] = useState("");

  useEffect(() => {
    if (planetName) {
      axios
        .get(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
        .then((response) => {
          setPlanetData(response.data);
          setShowCard(true);
        })
        .catch((error) => {
          console.error("Error fetching planet data:", error);
        });
    }
  }, [planetName]);

  const fetchData = (planetNameParam) => {
    setPlanetName(planetNameParam);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleCloseCard();
    }
  };

  return (
    <div>
      {showCard && (
        <div className="cardInfo">
          <div className="closeButtonContainer">
            <div
              className="closeButton"
              onClick={handleCloseCard}
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
              Cette {planetData.bodyType} a une gravite de {planetData.gravity}{" "}
              pour une densite de {planetData.density}. {desc[3].description}
            </p>
          </div>
          <button type="button" onClick={handleCloseCard}>
            Fermer
          </button>
        </div>
      )}
      {!showCard && (
        <div className="cardInfo">
          <button type="button" onClick={() => fetchData("mars")}>
            Afficher les informations de Mars
          </button>
          <button type="button" onClick={() => fetchData("jupiter")}>
            Afficher les informations de Jupiter
          </button>
          {/* Ajouter d'autres boutons pour d'autres planètes si nécessaire */}
        </div>
      )}
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
