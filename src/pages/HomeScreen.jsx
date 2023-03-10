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
      route: "/5/common",
      span: "STEP FIVE COMMON FUNCTION",
    },
    {
      route: "/5/callback",
      span: "STEP FIVE USECALLBACK",
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
    </PageLayout>
  );
};

export default HomeScreen;
