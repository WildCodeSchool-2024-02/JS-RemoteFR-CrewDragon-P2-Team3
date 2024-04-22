function PlanetInfo() {
  return (
    <section className="planetInfo">
      <div className="title">
        <h2>Les Planètes à visiter :</h2>
      </div>
      <div className="allPlanets">
        <div className="planets-container">
          <img
            className="img"
            src="./src/assets/bgMain/mercureInfo.jpg"
            alt="mercure"
          />
          <p className="planetText">Mercure</p>
        </div>
        <div className="planets-container">
          <img
            className="img"
            src="./src/assets/bgMain/venusInfo.jpg"
            alt="venus"
          />
          <p className="planetText">Venus</p>
        </div>
        <div className="planets-container">
          <img
            className="img"
            src="./src/assets/bgMain/terreInfo.jpg"
            alt="terre"
          />
          <p className="planetText">Terre</p>
        </div>
        <div className="planets-container">
          <img
            className="img"
            src="./src/assets/bgMain/marsInfo.jpg"
            alt="mars"
          />
          <p className="planetText">Mars</p>
        </div>
        <div className="planets-container">
          <img
            className="img"
            src="./src/assets/bgMain/jupiterInfo.jpg"
            alt="jupiter"
          />
          <p className="planetText">Jupiter</p>
        </div>
        <div className="planets-container">
          <img
            className="img"
            src="./src/assets/bgMain/saturneInfo.jpg"
            alt="saturn"
          />
          <p className="planetText">Saturn</p>
        </div>
        <div className="planets-container">
          <img
            className="img"
            src="./src/assets/bgMain/uranusInfo.jpg"
            alt="uranus"
          />
          <p className="planetText">Uranus</p>
        </div>
        <div className="planets-container">
          <img
            className="img"
            src="./src/assets/bgMain/neptuneInfo.jpg"
            alt="neptune"
          />
          <p className="planetText">Neptune</p>
        </div>
      </div>
    </section>
  );
}

export default PlanetInfo;
