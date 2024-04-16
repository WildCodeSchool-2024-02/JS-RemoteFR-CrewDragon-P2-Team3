import Footer from "./components/Footer";
import Header from "./components/Header";
import Canva from "./components/Canva";
import Card from "./components/Card";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Canva className="canva" />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
