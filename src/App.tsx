import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "./styles/main.scss";
import CreatePlan from "./pages/CreatePlan";
import { PlanProvider } from "./contexts/PlanProvider";
import Checkout from "./pages/Checkout";
import Login from "./components/checkout/Login";
import Register from "./components/checkout/Register";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <PlanProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/create-plan" element={<CreatePlan />} />
        <Route path="/checkout" element={<Checkout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </PlanProvider>
  );
}
