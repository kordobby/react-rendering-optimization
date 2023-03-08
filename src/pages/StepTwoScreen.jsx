import PageLayout from "../components/GNB/common/PageLayout";
import React, { useState } from "react";
import { stepTwoData } from "../shared/data/stepTwo";
import ItemCard from "../components/GNB/common/ItemCard";
import Button from "../components/GNB/common/Button";
import styled from "styled-components";
import StepTwoCard from "../components/GNB/common/StepTwoCard";
import flex from "../utils/utilFlex";

const BadMemberList = () => {
  const [counter, setCounter] = useState(0);

  const getMembers = (member) => {
    const source = new Map(
      [
        [
          "해리포터",
          {
            name: "해리포터",
            house: "그리핀도르",
          },
        ],
      ],
      [
        [
          "드레이코 말포이",
          {
            name: "드레이코 말포이",
            house: "슬리데린",
          },
        ],
      ],
      [
        [
          "세드릭 디고리",
          {
            name: "세드릭 디고리",
            house: "후플푸프",
          },
        ],
      ],
      [
        [
          "루나 러브굿",
          {
            name: "루나 러브굿",
            house: "래번클로",
          },
        ],
      ]
    );
    return source.get(member);
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
          <ItemCard data={getMembers(value.name)} key={`${value}-${index}`} />
        );
      })}
    </CardsWrapper>
  );
};

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

const StepTwoScreen = () => {
  return (
    <PageLayout page="stepTwo">
      <ListWrapper>
        <BadMemberList />
        <GoodMemberList />
      </ListWrapper>
    </PageLayout>
  );
};

export default StepTwoScreen;

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
