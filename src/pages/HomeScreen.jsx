import PageLayout from "../components/GNB/common/PageLayout";
import { useNavigate } from "react-router-dom";
import Button from "../components/GNB/common/Button";
const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <PageLayout page={`home`}>
      <Button
        onClick={() => {
          navigate("/step/one/bad");
        }}
      >
        STEP ONE BAD CASE
      </Button>
      <Button
        onClick={() => {
          navigate("/step/one/good");
        }}
      >
        STEP ONE GOOD CASE
      </Button>
      <Button
        onClick={() => {
          navigate("/steptwo");
        }}
      >
        STEP TWO
      </Button>
      <Button
        onClick={() => {
          navigate("/stepthree");
        }}
      >
        STEP THREE
      </Button>
      <Button
        onClick={() => {
          navigate("/stepfour");
        }}
      >
        STEP FOUR
      </Button>
      <Button
        onClick={() => {
          navigate("/stepfive");
        }}
      >
        STEP FIVE
      </Button>
    </PageLayout>
  );
};

export default HomeScreen;
