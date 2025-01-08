import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import React, { Suspense } from "react";
import Posts from "./Posts";

const App = () => {
  return (
    <AppProvider i18n={{}}>
      <Suspense fallback={<div>Loading...</div>}>
        <Posts />
      </Suspense>
    </AppProvider>
  );
};

export default App;
