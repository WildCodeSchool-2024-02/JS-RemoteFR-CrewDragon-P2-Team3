import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Hub from "../components/CosmoHub";

function CosmoHub() {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <Hub />
      <Footer />
    </div>
  );
}

export default CosmoHub;
