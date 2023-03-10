import PageLayout from "../components/GNB/common/PageLayout";
import React, { useState } from "react";
import { stepTwoData } from "../shared/data/stepTwo";
import Button from "../components/GNB/common/Button";
import styled from "styled-components";
import flex from "../utils/utilFlex";
import LogMemoCard from "../components/GNB/common/LogMemoCard";

const BadMemberList = () => {
  const [counter, setCounter] = useState(0);

  const getMembers = (member) => {
    switch (member) {
      case "해리포터":
        return {
          name: "해리포터",
          house: "그리핀도르",
        };
      case "드레이코 말포이":
        return {
          name: "드레이코 말포이",
          house: "슬리데린",
        };
      case "세드릭 디고리":
        return {
          name: "세드릭 디고리",
          house: "후플푸프",
        };
      case "루나 러브굿":
        return {
          name: "루나 러브굿",
          house: "래번클로",
        };
      default:
        return {
          name: "루나 러브굿",
          house: "래번클로",
        };
    }
  };

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <CardsWrapper>
      <Button onClick={addCounter}>렌더링 과다 마법을 보여줄게</Button>
      <CounterText>{counter}</CounterText>
      {stepTwoData.map((value, index) => {
        return (
          <LogMemoCard
            data={getMembers(value.name)}
            key={`${value}-${index}`}
          />
        );
      })}
    </CardsWrapper>
  );
};

const SecondBadCaseScreen = () => {
  return (
    <PageLayout page="stepTwo">
      <ListWrapper>
        <BadMemberList />
      </ListWrapper>
    </PageLayout>
  );
};

export default SecondBadCaseScreen;

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
