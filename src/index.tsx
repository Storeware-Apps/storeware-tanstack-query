import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { QueryProvider } from "./QueryProvider";

const container = document.getElementById("root");
const root = createRoot(container!); // Ensure the root element exists

root.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
