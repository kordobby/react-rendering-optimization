import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepOneScreen from "../pages/StepOneScreen";
import StepTwoScreen from "../pages/StepTwoScreen";
import StepThreeScreen from "../pages/StepThreeScreen";
import StepFourScreen from "../pages/StepFourScreen";
import StepFiveScreen from "../pages/ScreenFiveScreen";
import HomeScreen from "../pages/HomeScreen";

import FirstBadCaseScreen from "../pages/FirstBadCaseScreen";
import FirstGoodCaseScreen from "../pages/FirstGoodCaseScreen";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/step/one/bad" element={<FirstBadCaseScreen />} />
        <Route path="/step/one/good" element={<FirstGoodCaseScreen />} />

        <Route path="/steptwo" element={<StepTwoScreen />} />
        <Route path="/stepthree" element={<StepThreeScreen />} />
        <Route path="/stepfour" element={<StepFourScreen />} />
        <Route path="/stepfive" element={<StepFiveScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
