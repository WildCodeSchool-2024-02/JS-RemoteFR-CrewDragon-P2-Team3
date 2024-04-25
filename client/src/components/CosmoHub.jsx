import systemeimg from "../assets/imagesHub/systemeSolaire.jpg";
import voyager1 from "../assets/imagesHub/voyager1.jpg";
import voyager2 from "../assets/imagesHub/voyager2.jpg";
import intelsat from "../assets/imagesHub/intelsat.jpg";
import GPS from "../assets/imagesHub/GPS.jpg";
import landsat from "../assets/imagesHub/landsat.jpg";
import equipeApollo from "../assets/imagesHub/equipe-apollo11.jpg";
import launchApollo from "../assets/imagesHub/launch-apollo11.jpg";
import launchTeam from "../assets/imagesHub/launch-team.jpg";
import moonApollo from "../assets/imagesHub/moon-apollo11.jpg";
import iss from "../assets/imagesHub/iss.jpg";
import issDetail from "../assets/imagesHub/issDetail.jpg";
import issHublot from "../assets/imagesHub/isshublot.jpg";
import Orion from "../assets/imagesHub/Orion.jpg";
import CrewDragon from "../assets/imagesHub/crew-dragon.jpg";
import SpaceShuttle from "../assets/imagesHub/space-shuttle.jpg";
import curiosity from "../assets/imagesHub/curiosity.jpg";
import curiosityLanding from "../assets/imagesHub/landingCuriosity.jpg";
import curiosityWork from "../assets/imagesHub/curiosityWork.png";
import curiosityView from "../assets/imagesHub/curiosityView.jpg";
import MenuBar from "./MenuBar";

function CosmoHub() {
  return (
    <main className="CosmoHub">
      <div className="separator">.</div>
      <MenuBar />
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
          <img src={GPS} alt="GPS" />
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
          <img src={landsat} alt="Landsat" />
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
      <h4 className="title-hub">Les missions spatiales :</h4>
      <p className="titleText">Apollo 11 :</p>
      <div className="apollo-container">
        <img className="img-apollo" src={equipeApollo} alt="équipe Apollo11" />
        <img className="img-apollo" src={launchApollo} alt="fusée Apollo11" />
        <img className="img-apollo1" src={launchTeam} alt="atterisage lune" />
        <img className="img-apollo1" src={moonApollo} alt="img lune" />
      </div>
      <div className="apolloText-container">
        <p className="apolloText">
          Le lundi 21 juillet 1969 reste un jalon inégalé dans l'histoire de
          l'exploration spatiale. Les images emblématiques de l'équipe composée
          de Neil Armstrong, Buzz Aldrin et Michael Collins, ainsi que de son
          lancement, symbolisent l'audace et la bravoure humaines. La silhouette
          majestueuse du vaisseau spatial s'élevant vers les cieux incarne
          l'esprit pionnier de l'humanité. Les moments capturés lors de la
          mission, depuis le décollage jusqu'à l'alunissage historique,
          résonnent comme des témoins de notre capacité à surmonter les défis
          les plus vertigineux. Ces images iconiques, telles que l'équipage
          compact à bord du module lunaire et le pas de géant de Neil Armstrong,
          continuent d'inspirer les générations futures à repousser les limites
          de l'exploration spatiale. Apollo 11 demeure un rappel indélébile de
          ce que l'humanité peut accomplir lorsque nous nous unissons dans la
          poursuite d'un objectif commun.
        </p>
      </div>
      <p className="titleText">L'ISS (Station Spatiale Internationale) :</p>
      <div className="iss-img-container">
        <img className="iss-img1" src={iss} alt="station iss" />
        <img className="iss-img" src={issDetail} alt="détail de l'iss" />
        <img className="iss-img2" src={issHublot} alt="vue du hublot" />
      </div>
      <div className="issText-container">
        <p className="issText">
          La Station spatiale internationale (ISS) représente une prouesse
          monumentale dans l'histoire de l'exploration spatiale moderne. Les
          images emblématiques de sa construction en orbite terrestre, avec ses
          modules interconnectés formant une structure complexe, symbolisent la
          coopération internationale et l'ingéniosité humaine. La silhouette
          élégante de la station, évoluant gracieusement dans l'espace, incarne
          l'esprit d'innovation et de collaboration qui unit les nations du
          monde entier. Les moments inoubliables de la mission, tels que les
          sorties extravéhiculaires des astronautes et les expériences
          scientifiques menées dans son laboratoire en apesanteur, témoignent de
          l'ingéniosité et de la détermination de l'humanité à explorer les
          confins de l'espace. Ces images captivantes, telles que l'équipage
          international travaillant en harmonie à bord de l'ISS et les vues
          panoramiques époustouflantes de la Terre depuis l'espace, continuent
          d'inspirer les générations futures à collaborer dans la quête de
          découvertes scientifiques et de réalisations technologiques. L'ISS
          demeure un symbole vivant de l'unité mondiale et de notre capacité à
          réaliser des exploits extraordinaires lorsque nous travaillons
          ensemble pour atteindre des objectifs communs dans l'exploration
          spatiale.
        </p>
      </div>
      <h3 className="title-hub">Les Navettes spatiales :</h3>
      <div className="navette-container">
        <div className="navette1">
          <img src={Orion} alt="Orion" />
          <div className="navetteText-container">
            <p className="navetteText">
              <span className="titleText">Orion :</span>
              <br />
              <br />
              Orion est un vaisseau spatial conçu par la NASA pour transporter
              des astronautes au-delà de l'orbite terrestre basse, dans le cadre
              de missions d'exploration lointaine, telles que des missions vers
              la Lune, des astéroïdes ou Mars. Le vaisseau spatial Orion est
              équipé de systèmes de support de vie, de propulseurs, de
              parachutes et d'autres équipements nécessaires pour soutenir des
              missions longues et complexes dans l'espace profond. Avec sa
              capacité à transporter jusqu'à six membres d'équipage, Orion
              représente une étape importante dans les efforts de l'humanité
              pour explorer et coloniser l'espace lointain.
            </p>
          </div>
        </div>
        <div className="navette">
          <img src={CrewDragon} alt="CrewDragon" />
          <div className="navetteText-container">
            <p className="navetteText">
              <span className="titleText">Crew Dragon :</span>
              <br />
              <br />
              Crew Dragon est un vaisseau spatial développé par SpaceX, fondée
              par Elon Musk, dans le cadre du programme Commercial Crew de la
              NASA. Il est conçu pour transporter des astronautes vers et depuis
              la Station spatiale internationale (ISS) et d'autres destinations
              en orbite terrestre basse. Crew Dragon est équipé de systèmes de
              navigation avancés, de propulseurs de manœuvre, de parachutes et
              de sièges d'éjection pour assurer la sécurité des astronautes
              pendant le lancement, l'amarrage et le retour sur Terre. Avec sa
              capacité à transporter jusqu'à sept membres d'équipage, Crew
              Dragon ouvre la voie à une nouvelle ère de voyages spatiaux
              habités et commerciaux.
            </p>
          </div>
        </div>
        <div className="navette2">
          <img src={SpaceShuttle} alt="Space Shuttle" />
          <div className="navetteText-container">
            <p className="navetteText">
              <span className="titleText">Space Shuttle</span>
              <br />
              <br />
              La navette spatiale, officiellement appelée Space Transportation
              System (STS), a été le premier vaisseau spatial réutilisable et a
              servi de principal moyen de transport spatial de la NASA de 1981 à
              2011. Conçue pour transporter des astronautes et des charges
              utiles vers l'orbite terrestre basse, la navette spatiale a permis
              le déploiement de satellites, la construction de la Station
              spatiale internationale (ISS) et la réalisation de nombreuses
              missions scientifiques. Avec sa capacité à transporter jusqu'à
              sept membres d'équipage et des charges utiles importantes dans sa
              soute, la navette spatiale a marqué une étape importante dans
              l'exploration et l'utilisation de l'espace par l'humanité.
            </p>
          </div>
        </div>
      </div>
      <p className="titleText">Curiosity :</p>
      <div className="curiosity-container">
        <img className="curiosity-img" src={curiosityLanding} alt="curiosity" />
        <img
          className="curiosity-img"
          src={curiosity}
          alt="curiosity-Landing"
        />
        <img
          className="curiosity-img1"
          src={curiosityWork}
          alt="curiosity-Work"
        />
        <img
          className="curiosity-img1"
          src={curiosityView}
          alt="curiosity-View"
        />
      </div>
      <div className="apolloText-container">
        <p className="apolloText">
          L'arrivée triomphante du rover Curiosity sur Mars représente un
          chapitre captivant dans le récit de l'exploration spatiale moderne.
          Les images saisissantes de son déploiement sur la surface martienne,
          avec ses dimensions imposantes se détachant contre l'horizon lointain,
          symbolisent l'ingéniosité et la persévérance de l'humanité. La
          silhouette robuste du rover, parcourant avec grâce les vastes étendues
          martiennes, incarne l'esprit d'exploration insatiable de notre espèce.
          Les moments emblématiques de la mission, tels que ses premières images
          à couper le souffle de la surface de Mars et ses découvertes
          révolutionnaires sur l'histoire géologique de la planète rouge,
          résonnent comme des témoins de notre quête incessante de connaissance.
          Ces images empreintes de grandeur, telles que Curiosity s'aventurant
          courageusement dans les canyons martiens et ses analyses minutieuses
          des échantillons de sol, continuent de stimuler l'imaginaire collectif
          et d'inspirer les générations futures à poursuivre l'exploration de
          l'univers qui nous entoure. Curiosity demeure un symbole vivant de la
          détermination humaine et de notre capacité à surmonter les obstacles,
          repoussant ainsi les frontières de l'exploration spatiale vers de
          nouveaux horizons.
        </p>
      </div>
    </main>
  );
}

export default CosmoHub;
