import PropTypes from "prop-types";
import desc from "../data/data";

function Card({ planet }) {
  console.info(desc);
  return (
    <div className="cardInfo">
      <div className="infoPlanete">
        Nom/name: {planet.name}/{planet.englishName}
      </div>
      <img className="image" src="./src/assets/images/Terra.png" alt="Earth" />
      <div className="infoText">
        <span className="info">Information :</span>
        <br />
        BodyType: {planet.bodyType}
        <br />
        Dimension: {planet.dimension}
        <br />
        Gravite: {planet.gravity}
        <br />
        Densite: {planet.density}
        <br />
        <span className="info">Description :</span>
        <p>
          Cette {planet.bodyType} a une gravite de {planet.gravity} pour une
          densite de {planet.density}. {desc[3].description}
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
