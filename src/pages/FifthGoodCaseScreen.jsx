import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PageLayout from "../components/GNB/common/PageLayout";
import Button from "../components/GNB/common/Button";
import { stepOneData } from "../shared/data/stepOne";
import LogMemoButton from "../components/GNB/common/LogMemoButton";

const FifthGoodCaseScreen = () => {
  const [input, setInput] = useState("");

  const [members, setMembers] = useState(stepOneData);

  const deleteMemberCallback = useCallback(() => {
    setMembers();
  }, []);

  return (
    <>
      <PageLayout page={"stepFive"}>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        {members.map((value, index) => {
          return (
            <LogMemoButton onClick={deleteMemberCallback} key={`${value.name}`}>
              {value.name}
            </LogMemoButton>
          );
        })}
      </PageLayout>
    </>
  );
};

export default FifthGoodCaseScreen;
