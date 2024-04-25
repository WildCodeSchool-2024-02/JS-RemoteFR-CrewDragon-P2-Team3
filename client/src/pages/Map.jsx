// Map.js
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Canva from "../components/Canva";
import Nav from "../components/Nav";
import "../App.scss";

function Map() {
  useEffect(() => {
    window.scrollTo(0, 328);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Nav />
      <Canva className="canva" />

      <Footer />
    </div>
  );
}

export default Map;
