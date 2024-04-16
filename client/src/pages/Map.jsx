import Footer from "../components/Footer";
import Header from "../components/Header";
import Canva from "../components/Canva";
import Card from "../components/Card";
import Nav from "../components/Nav";
import "../App.css";

function Map() {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <Canva className="canva" />
      <Card />
      <Footer />
    </div>
  );
}

export default Map;
