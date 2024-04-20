import { Link, Outlet } from "react-router-dom";

import "../App.scss";

function App() {
  return (
    <>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/Map">Map</Link>
        <Link to="/CosmoHub">CosmoHub</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
