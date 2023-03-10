import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepOneScreen from "../pages/StepOneScreen";
import StepTwoScreen from "../pages/StepTwoScreen";
import StepThreeScreen from "../pages/StepThreeScreen";
import StepFourScreen from "../pages/StepFourScreen";
import StepFiveScreen from "../pages/ScreenFiveScreen";
import HomeScreen from "../pages/HomeScreen";

import FirstBadCaseScreen from "../pages/FirstBadCaseScreen";
import FirstGoodCaseScreen from "../pages/FirstGoodCaseScreen";
import SecondBadCaseScreen from "../pages/SecondBadCaseScreen";
import SecondGoodCaseScreen from "../pages/SecondGoodCaseScreen";
import ThirdBadCaseScreen from "../pages/ThirdBadCaseScreen";
import ThirdGoodCaseScreen from "../pages/ThirdGoodCaseScreen";
import FourthBadCaseScreen from "../pages/FourthBadCaseScreen";
import FourthGoodCaseScreen from "../pages/FourthGoodCaseScreen";
import FifthBadCaseScreen from "../pages/FifthBadCaseScreen";
import FifthGoodCaseScreen from "../pages/FifthGoodCaseScreen";
import CommonCallbackScreen from "../pages/CommonCallbackScreen";
import CommonFunctionScreen from "../pages/CommonFunctionScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/1/bad" element={<FirstBadCaseScreen />} />
        <Route path="/1/good" element={<FirstGoodCaseScreen />} />
        <Route path="/2/bad" element={<SecondBadCaseScreen />} />
        <Route path="/2/good" element={<SecondGoodCaseScreen />} />
        <Route path="/3/bad" element={<ThirdBadCaseScreen />} />
        <Route path="/3/good" element={<ThirdGoodCaseScreen />} />
        <Route path="/4/bad" element={<FourthBadCaseScreen />} />
        <Route path="/4/good" element={<FourthGoodCaseScreen />} />
        <Route path="/5/bad" element={<FifthBadCaseScreen />} />
        <Route path="/5/good" element={<FifthGoodCaseScreen />} />
        <Route path="/5/callback" element={<CommonCallbackScreen />} />
        <Route path="/5/common" element={<CommonFunctionScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
