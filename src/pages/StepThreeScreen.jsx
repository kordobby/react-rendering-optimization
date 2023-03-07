import React, { useId, useState } from "react";
import PageLayout from "../components/GNB/common/PageLayout";
import { stepOneData } from "../shared/data/stepOne";
import ItemCard from "../components/GNB/common/ItemCard";
import styled from "styled-components";
import flex from "../utils/utilFlex";

const IndexKeyList = () => {
  const [list, setList] = useState(stepOneData);

  const deleteCardHandler = () => {
    const newList = list.slice(1);
    setList(newList);
  };
  return (
    <CardsWrapper>
      <h1>키가 인덱스로 만들어졋따..</h1>
      <button onClick={deleteCardHandler}>인덱스 키</button>
      {list.map((value, index) => {
        return <ItemCard data={value} key={index}></ItemCard>;
      })}
    </CardsWrapper>
  );
};

const UniqueKeyList = () => {
  const [list, setList] = useState(stepOneData);
  const deleteCardHandler = () => {
    const newList = list.slice(1);
    setList(newList);
  };

  return (
    <CardsWrapper>
      <h1>나..유니크 키값..</h1>
      <button onClick={deleteCardHandler}>인덱스 키</button>

      {list.map((value, index) => {
        return (
          <ItemCard data={value} key={`unique-list-${value.name}`}></ItemCard>
        );
      })}
    </CardsWrapper>
  );
};

const StepThreeScreen = () => {
  return (
    <PageLayout page={`stepThree`}>
      <ListWrapper>
        <IndexKeyList />
        <UniqueKeyList />
      </ListWrapper>
    </PageLayout>
  );
};

export default StepThreeScreen;

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
