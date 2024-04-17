import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Section1 from "../components/Section1";

function Home() {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <Section1 />
      <Footer />
    </div>
  );
}

export default Home;
