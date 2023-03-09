import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PageLayout from "../components/GNB/common/PageLayout";
import Button from "../components/GNB/common/Button";
const StepFiveScreen = () => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const callbackToggle = useCallback(() => {
    console.log("호출");
    setToggle(!toggle);
  }, []);
  return (
    <PageLayout page={"stepFive"}>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
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
