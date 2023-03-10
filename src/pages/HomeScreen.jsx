import PageLayout from "../components/GNB/common/PageLayout";
import { useNavigate } from "react-router-dom";
import Button from "../components/GNB/common/Button";
const HomeScreen = () => {
  const navigate = useNavigate();

  const pageData = [
    {
      route: "/1/bad",
      span: "STEP ONE BAD CASE",
    },
    {
      route: "/1/good",
      span: "STEP ONE GOOD CASE",
    },
    {
      route: "/2/bad",
      span: "STEP TWO BAD CASE",
    },
    {
      route: "/2/good",
      span: "STEP TWO GOOD CASE",
    },
    {
      route: "/3/bad",
      span: "STEP THREE BAD CASE",
    },
    {
      route: "/3/good",
      span: "STEP THREE GOOD CASE",
    },
    {
      route: "/4/bad",
      span: "STEP FOUR BAD CASE",
    },
    {
      route: "/4/good",
      span: "STEP FOUR GOOD CASE",
    },
    {
      route: "/5/bad",
      span: "STEP FIVE BAD CASE",
    },
    {
      route: "/5/good",
      span: "STEP FIVE GOOD CASE",
    },
  ];

  return (
    <PageLayout page={`home`}>
      {pageData.map((value, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              navigate(value.route);
            }}
          >
            {value.span}
          </Button>
        );
      })}
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
          navigate("/step/two/bad");
        }}
      >
        STEP TWO BAD CASE
      </Button>
      <Button
        onClick={() => {
          navigate("/step/two/good");
        }}
      >
        STEP TWO GOOD CASE
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
