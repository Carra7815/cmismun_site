import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root.jsx";
import Error from "./routes/Error.jsx";
import Index from "./routes/Index.jsx";
import About from "./routes/About.jsx";
import Conference_Materials from "./routes/Conference_Materials.jsx";
import Topics_and_Committees from "./routes/Topics_and_Committees.jsx";
import Chair_and_Country_Forms from "./routes/Chair_and_Country_Forms.jsx";
import Venue from "./routes/Venue.jsx";
import Schedule from "./routes/Schedule.jsx";
import Resolutions from "./routes/Resolutions.jsx";
import Contact from "./routes/Contact.jsx";
import Support from "./routes/Support.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "conference_materials",
            element: <Conference_Materials />,
          },
          {
            path: "topics_and_committees",
            element: <Topics_and_Committees />,
          },
          {
            path: "chair_and_country_forms",
            element: <Chair_and_Country_Forms />,
          },
          {
            path: "venue",
            element: <Venue />,
          },
          {
            path: "schedule",
            element: <Schedule />,
          },
          {
            path: "resolutions",
            element: <Resolutions />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "support",
            element: <Support />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
