import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Home from "./pages/Home";
import Map from "./pages/Map";
import CosmoHub from "./pages/CosmoHub";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Map",
        element: <Map />,
      },
      {
        path: "/CosmoHub",
        element: <CosmoHub />,
      },
      {},
    ],
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
