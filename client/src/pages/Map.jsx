// Map.js
import { useEffect } from "react";
import Footer from "../components/Footer";
import Canva from "../components/Canva";
import "../App.scss";

function Map() {
  useEffect(() => {
    window.scrollTo(0, 398);
  }, []);

  return (
    <div className="app-container">
      <Canva className="canva" />

      <Footer />
    </div>
  );
}

export default Map;
