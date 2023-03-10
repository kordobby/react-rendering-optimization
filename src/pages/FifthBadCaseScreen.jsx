import React, { useState } from "react";
import PageLayout from "../components/GNB/common/PageLayout";
import { stepOneData } from "../shared/data/stepOne";
import LogMemoButton from "../components/GNB/common/LogMemoButton";
import styled from "styled-components";

const FifthBadCaseScreen = () => {
  const [input, setInput] = useState("");
  const [members, setMembers] = useState(stepOneData);

  const deleteMember = () => {
    setMembers();
  };

  return (
    <>
      <PageLayout page={"stepFive"}>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        <Blank />
        {members.map((value, index) => {
          return (
            <LogMemoButton onClick={deleteMember} key={`${value.name}`}>
              {value.name}
            </LogMemoButton>
          );
        })}
      </PageLayout>
    </>
  );
};

export default FifthBadCaseScreen;

export const Blank = styled.div`
  width: 100%;
  height: 100px;
`;
