import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "./styles/main.scss";
import CreatePlan from "./pages/CreatePlan";
import Checkout from "./pages/Checkout";
import Login from "./components/checkout/Login";
import Register from "./components/checkout/Register";
import Confirm from "./pages/Confirm";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/create-plan" element={<CreatePlan />} />
      <Route path="/checkout" element={<Checkout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/checkout/confirm" element={<Confirm />} />
    </Routes>
  );
}
