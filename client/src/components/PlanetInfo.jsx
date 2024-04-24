import mercure from "../assets/bgMain/mercureInfo.jpg";
import venus from "../assets/bgMain/venusInfo.jpg";
import terre from "../assets/bgMain/terreInfo.jpg";
import mars from "../assets/bgMain/marsInfo.jpg";
import jupiter from "../assets/bgMain/jupiterInfo.jpg";
import saturn from "../assets/bgMain/saturneInfo.jpg";
import uranus from "../assets/bgMain/uranusInfo.jpg";
import neptune from "../assets/bgMain/neptuneInfo.jpg";

function PlanetInfo() {
  return (
    <section className="planetInfo">
      <div className="title">
        <h2>Les Planètes à visiter :</h2>
      </div>
      <div className="allPlanets">
        <div className="planets-container">
          <img className="img" src={mercure} alt="mercure" />
          <p className="planetText">Mercure</p>
        </div>
        <div className="planets-container">
          <img className="img" src={venus} alt="venus" />
          <p className="planetText">Venus</p>
        </div>
        <div className="planets-container">
          <img className="img" src={terre} alt="terre" />
          <p className="planetText">Terre</p>
        </div>
        <div className="planets-container">
          <img className="img" src={mars} alt="mars" />
          <p className="planetText">Mars</p>
        </div>
        <div className="planets-container">
          <img className="img" src={jupiter} alt="jupiter" />
          <p className="planetText">Jupiter</p>
        </div>
        <div className="planets-container">
          <img className="img" src={saturn} alt="saturn" />
          <p className="planetText">Saturn</p>
        </div>
        <div className="planets-container">
          <img className="img" src={uranus} alt="uranus" />
          <p className="planetText">Uranus</p>
        </div>
        <div className="planets-container">
          <img className="img" src={neptune} alt="neptune" />
          <p className="planetText">Neptune</p>
        </div>
      </div>
    </section>
  );
}

export default PlanetInfo;
