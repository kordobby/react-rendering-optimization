import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepOneScreen from "../pages/StepOneScreen";
import StepTwoScreen from "../pages/StepTwoScreen";
import StepThreeScreen from "../pages/StepThreeScreen";
import HomeScreen from "../pages/HomeScreen";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/stepone" element={<StepOneScreen />} />
        <Route path="/steptwo" element={<StepTwoScreen />} />
        <Route path="/stepthree" element={<StepThreeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
