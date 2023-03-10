import React, { useState } from "react";
import PageLayout from "../components/GNB/common/PageLayout";
import { stepOneData } from "../shared/data/stepOne";
import styled from "styled-components";
import flex from "../utils/utilFlex";
import Button from "../components/GNB/common/Button";
import LogMemoCard from "../components/GNB/common/LogMemoCard";

const IndexKeyList = () => {
  const [list, setList] = useState(stepOneData);

  const deleteCardHandler = () => {
    const newList = list.slice(1);
    setList(newList);
  };
  return (
    <CardsWrapper>
      <Button onClick={deleteCardHandler}>인덱스 키</Button>
      {list.map((value, index) => {
        return <LogMemoCard data={value} key={index}></LogMemoCard>;
      })}
    </CardsWrapper>
  );
};

const ThirdBadCaseScreen = () => {
  return (
    <PageLayout page={`stepThree`}>
      <ListWrapper>
        <IndexKeyList />
      </ListWrapper>
    </PageLayout>
  );
};

export default ThirdBadCaseScreen;

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
