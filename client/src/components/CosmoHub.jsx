import systemeimg from "../assets/imagesHub/systemeSolaire.jpg";
import voyager1 from "../assets/imagesHub/voyager1.jpg";
import voyager2 from "../assets/imagesHub/voyager2.jpg";
import intelsat from "../assets/imagesHub/intelsat.jpg";
import GPS from "../assets/imagesHub/GPS.jpg";
import landsat from "../assets/imagesHub/landsat.jpg";

function CosmoHub() {
  return (
    <main className="CosmoHub">
      <div className="separator">.</div>
      <h1 className="title-hub">Le systeme Solaire :</h1>
      <div className="img-container">
        <img className="systemImg" src={systemeimg} alt="SystemeSolaire" />
      </div>
      <p className="systemText">
        Le système solaire est un système planétaire composé du soleil et des
        objets célestes qui gravitent autour de lui. Les principaux objets sont
        les planètes (telluriques et géantes gazeuses), les lunes, les
        astéroïdes, les comètes et les planètes naines. Les missions spatiales
        ont permis d'explorer et de comprendre davantage le système solaire,
        notamment avec des sondes comme Voyager 1 et Voyager 2.
      </p>
      <h2 className="title-hub">Les Sondes spatiales :</h2>
      <div className="voyager-container">
        <div className="voyager2">
          <img src={voyager2} alt="voyage2" />
          <div className="sondeText-container">
            <p className="sondeText">
              <span className="titleText">Voyager2 :</span>
              <br />
              <br />
              Lancée par la NASA le 20 août 1977, Voyager 2 est une sonde
              spatiale légendaire dont l'objectif principal était d'explorer les
              planètes extérieures du système solaire, notamment Jupiter,
              Saturne, Uranus et Neptune, ainsi que leurs lunes. Après son
              lancement, Voyager 2 a réalisé une série de découvertes
              révolutionnaires. Puis, en 1981, elle a étudié Saturne et ses
              lunes, offrant de nouvelles perspectives sur ces mondes éloignés.
              Après ses passages par Jupiter et Saturne, Voyager 2 a poursuivi
              son voyage vers l'extérieur du système solaire, survolant Uranus
              en 1986 et Neptune en 1989. Ces survols ont permis de révéler de
              nouvelles informations sur les atmosphères et les caractéristiques
              des deux géantes de glace.
            </p>
          </div>
        </div>
        <div className="voyager1">
          <img src={voyager1} alt="voyager1" />
          <div className="sondeText-container">
            <p className="sondeText">
              <span className="titleText">Voyager1 :</span>
              <br />
              <br />
              Lancée par la NASA le 5 septembre 1977, Voyager 1 est l'une des
              sondes spatiales les plus emblématiques de tous les temps. Son
              principal objectif était d'explorer les planètes extérieures du
              système solaire, en particulier Jupiter et Saturne, ainsi que
              leurs lunes et environnements magnétiques. Après son lancement,
              Voyager 1 a réalisé une série de découvertes remarquables,
              notamment la révélation des volcans actifs sur Io, l'une des lunes
              de Jupiter, et l'étude approfondie des anneaux et des lunes de
              Saturne. En 2012, Voyager 1 est devenue la première sonde spatiale
              à entrer dans l'espace interstellaire, franchissant la frontière
              de l'héliopause, où le vent solaire rencontre le milieu
              interstellaire.
            </p>
          </div>
        </div>
      </div>
      <h3 className="title-hub">Les Satellites artificiels :</h3>
      <div className="satellites-container">
        <div className="voyager2">
          <img src={intelsat} alt="voyage2" />
          <div className="satteliteText-container">
            <p className="satteliteText">
              <span className="titleText">Intelsat 1 :</span>
              <br />
              <br />
              Lancé en 1965, Intelsat 1, également connu sous le nom de "Early
              Bird", était le premier satellite de communication commercial
              géostationnaire. Il a inauguré l'ère des télécommunications par
              satellite, permettant des communications internationales en temps
              réel via des liaisons téléphoniques, télégraphiques et
              télévisuelles.Prévu à l'origine pour fonctionner durant dix-huit
              mois, Early Bird resta en service durant quatre ans et fut
              désactivé en janvier 1969.
            </p>
          </div>
        </div>
        <div className="voyager1">
          <img src={GPS} alt="voyager1" />
          <div className="satteliteText-container">
            <p className="satteliteText">
              <span className="titleText">
                GPS (Global Positioning System) :
              </span>
              <br />
              <br />
              Déployé par les forces armées américaines à partir des années
              1970, le GPS est un système de navigation par satellite mondial
              qui fournit des informations de localisation précises à des
              utilisateurs du monde entier. Il est largement utilisé dans la
              navigation terrestre, maritime, aérienne, ainsi que dans des
              applications telles que la géolocalisation de véhicules et les
              dispositifs de navigation personnelle.
            </p>
          </div>
        </div>
        <div className="voyager1">
          <img src={landsat} alt="voyager1" />
          <div className="satteliteText-container">
            <p className="satteliteText">
              <span className="titleText">Landsat :</span>
              <br />
              <br />
              Lancé pour la première fois en 1972, le programme Landsat est une
              série de satellites d'observation de la Terre gérés par la NASA et
              l'USGS (United States Geological Survey). Ces satellites
              fournissent des données satellitaires essentielles pour la
              surveillance des ressources naturelles, la cartographie,
              l'agriculture, la gestion des terres, la surveillance
              environnementale et bien d'autres applications scientifiques et
              commerciales.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CosmoHub;
