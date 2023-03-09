import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PageLayout from "../components/GNB/common/PageLayout";
import Button from "../components/GNB/common/Button";
import CallbackButton from "../components/GNB/common/CallBackButton";
import { stepOneData } from "../shared/data/stepOne";

const StepFiveScreen = () => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const [members, setMembers] = useState(stepOneData);

  const deleteMember = (member) => {
    console.log(member);
    setMembers((value) => value.filter((el) => el.name !== member));
  };

  const deleteMemberCallback = useCallback((member) => {
    setMembers((value) => value.filter((el) => el.name !== member));
  }, []);

  const callbackToggle = useCallback(() => {
    console.log("호출");
    setToggle(!toggle);
  }, []);

  return (
    <>
      {/* //{" "}
      <PageLayout page={"stepFive"}> */}
      {/* <input type="text" onChange={(e) => setInput(e.target.value)}></input> */}
      {members.map((value, index) => {
        return (
          <button
            onClick={() => {
              deleteMember(value.name);
            }}
            key={`${value.name}`}
          >
            {value.name}
          </button>
        );
      })}
      {/* <Button></Button>
      <CallbackButton onClick={toggleHandler}>flip button!</CallbackButton>
      <CallbackButton onClick={callbackToggle}>callback button!</CallbackButton>
      <FlipCard flip={toggle} /> */}
      {/* //{" "}
      </PageLayout> */}
    </>
  );
};

export default StepFiveScreen;

const FlipCard = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ flip }) => (flip ? "red" : "yellow")};
`;
