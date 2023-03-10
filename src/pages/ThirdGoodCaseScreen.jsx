import React, { useState } from "react";
import PageLayout from "../components/GNB/common/PageLayout";
import { stepOneData } from "../shared/data/stepOne";
import styled from "styled-components";
import flex from "../utils/utilFlex";
import LogMemoCard from "../components/GNB/common/LogMemoCard";
import Button from "../components/GNB/common/Button";

const UniqueKeyList = () => {
  const [list, setList] = useState(stepOneData);
  const deleteCardHandler = () => {
    const newList = list.slice(1);
    setList(newList);
  };

  return (
    <CardsWrapper>
      <h1>나..유니크 키값..</h1>
      <Button onClick={deleteCardHandler}>인덱스 키</Button>

      {list.map((value, index) => {
        return (
          <LogMemoCard
            data={value}
            key={`unique-list-${value.name}`}
          ></LogMemoCard>
        );
      })}
    </CardsWrapper>
  );
};

const ThirdGoodCaseScreen = () => {
  return (
    <PageLayout page={`stepThree`}>
      <ListWrapper>
        <UniqueKeyList />
      </ListWrapper>
    </PageLayout>
  );
};

export default ThirdGoodCaseScreen;

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
