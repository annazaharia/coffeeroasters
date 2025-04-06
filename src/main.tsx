import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { CoffeePlanProvider } from "./contexts/CoffeePlanProvider.tsx";
import { AuthProvider } from "./contexts/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CoffeePlanProvider>
          <App />
        </CoffeePlanProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
