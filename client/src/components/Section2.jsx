import { Link } from "react-router-dom";

function Section2() {
  return (
    <div className="s2container">
      <section className="section2">
        <h2>
          Pret Pour le voyage?{" "}
          <Link to="/Map" className="mapLink">
            Map
          </Link>
        </h2>
      </section>
    </div>
  );
}

export default Section2;
