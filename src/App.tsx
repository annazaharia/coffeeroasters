import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "./styles/main.scss";
import CreatePlan from "./pages/CreatePlan";
import { PlanProvider } from "./contexts/PlanProvider";
import Checkout from "./pages/checkout";


export default function App() {
  return (
    <PlanProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/create-plan" element={<CreatePlan />} />
        <Route path="/checkout" element = {<Checkout/>}/>
      </Routes>
    </PlanProvider>
  );
}
