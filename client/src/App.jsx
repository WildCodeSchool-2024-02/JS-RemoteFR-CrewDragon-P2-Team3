import { Link, Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/Map">Map</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
