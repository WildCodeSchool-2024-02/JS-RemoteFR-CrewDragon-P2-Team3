import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import Tableau from "../components/Tableau";
import Section2 from "../components/Section2";
import PlanetInfo from "../components/PlanetInfo";

function Home() {
  return (
    <div className="app-container">
      <Section1 />
      <PlanetInfo />
      <Section2 />
      <Tableau />
      <Footer />
    </div>
  );
}

export default Home;
