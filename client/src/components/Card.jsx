import PropTypes from "prop-types";

function Card({ planet }) {
  return (
    <div className="cardInfo">
      <div className="infoPlanete">
        Planète :{planet.name}/{planet.englishName}
      </div>
      <img className="image" src="./src/assets/images/Terra.png" alt="Earth" />
      <div className="infoText">
        <span className="info">Information :</span>
        <br />
        <br />
        Densite: {planet.density}
      </div>
    </div>
  );
}
Card.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    englishName: PropTypes.string,
    density: PropTypes.number,
  }).isRequired,
};
export default Card;
