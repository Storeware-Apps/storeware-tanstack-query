import React from "react";
import { createRoot } from "react-dom/client";
import { QueryProvider } from "storeware-tanstack-query";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container!); // Ensure the root element exists

root.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
