import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
