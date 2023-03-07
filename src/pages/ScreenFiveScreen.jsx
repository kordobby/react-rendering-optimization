import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PageLayout from "../components/GNB/common/PageLayout";
import Button from "../components/GNB/common/Button";
const StepFiveScreen = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const callbackToggle = useCallback(() => {
    setToggle(!toggle);
  }, []);
  return (
    <PageLayout page={"stepFive"}>
      <Button onClick={toggleHandler}>flip button!</Button>
      <Button onClick={callbackToggle}>callback button!</Button>
      <FlipCard flip={toggle} />
    </PageLayout>
  );
};

export default StepFiveScreen;

const FlipCard = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ flip }) => (flip ? "red" : "yellow")};
`;
