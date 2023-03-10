import PageLayout from "../components/GNB/common/PageLayout";
import React, { useState } from "react";
import { stepTwoData } from "../shared/data/stepTwo";
import Button from "../components/GNB/common/Button";
import styled from "styled-components";
import StepTwoCard from "../components/GNB/common/StepTwoCard";
import flex from "../utils/utilFlex";

const GoodMemberList = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <CardsWrapper>
      <Button buttonType={`secondary`} onClick={addCounter}>
        렌더링 안되는 마법을 보여줄게
      </Button>
      <CounterText>{counter}</CounterText>
      {stepTwoData.map((value, index) => {
        return <StepTwoCard data={value.name} key={`${value}-${index}`} />;
      })}
    </CardsWrapper>
  );
};

const SecondGoodCaseScreen = () => {
  return (
    <PageLayout page="stepTwo">
      <ListWrapper>
        <GoodMemberList />
      </ListWrapper>
    </PageLayout>
  );
};

export default SecondGoodCaseScreen;

const CounterText = styled.span`
  margin: 20px;
  font-weight: 600;
`;

const ListWrapper = styled.div`
  /* padding-top: 30px; */
  ${flex({
    gap: "30px",
    justify: "flex-start",
  })}/* flex-direction: column; */
`;

const CardsWrapper = styled.div`
  padding-top: 30px;
  /* border: 1px solid red; */
  ${flex({ gap: "10px", justify: "flex-start", direction: "column" })}
`;
