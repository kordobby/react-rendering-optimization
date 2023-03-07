import PageLayout from "../components/GNB/common/PageLayout";
import { useNavigate } from "react-router-dom";
import Button from "../components/GNB/common/Button";
const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <PageLayout page={`home`}>
      <Button
        onClick={() => {
          navigate("/stepone");
        }}
      >
        STEP ONE
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
      <Button>STEP ONE</Button>
      <Button>STEP ONE</Button>
    </PageLayout>
  );
};

export default HomeScreen;
