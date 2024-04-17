import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Canva from "../components/Canva";
import Card from "../components/Card";
import Nav from "../components/Nav";

import "../App.scss";

function Map() {
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    window.scrollTo(0, 285);
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      // Use this data to update the state
      .then((response) => {
        setPlanet(response.data.bodies[1]);
      });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Nav />
      <Canva className="canva" />
      <Card planet={planet} />
      <Footer />
    </div>
  );
}

export default Map;
