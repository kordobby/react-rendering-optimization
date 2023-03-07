import React, { useState, useMemo } from "react";
import PageLayout from "../components/GNB/common/PageLayout";
import { stepFourData } from "../shared/data/stepFour";
import Button from "../components/GNB/common/Button";
import ItemCard from "../components/GNB/common/ItemCard";
import styled from "styled-components";

const MemberScore = ({ list }) => {
  const getScore = () => {
    console.log("연산이 오지는 마법..");
    return list.reduce((value, user) => {
      return (user.houseScore / user.score) * 100;
    });
  };

  return <AverageWrapper>{getScore()}</AverageWrapper>;
};

const MemoizingMemberScore = ({ list }) => {
  const getScore = useMemo(() => {
    console.log("useMemo가 살아남는 방법");
    return list.reduce((value, user) => {
      return (user.houseScore / user.score) * 100;
    });
  }, [list]);

  return <MemoAverageWrapper>{getScore}</MemoAverageWrapper>;
};

const StepFourScreen = () => {
  const [list, setList] = useState(stepFourData);
  const [input, setInput] = useState("");

  return (
    <PageLayout page="stepFour">
      <Input placeholder="렌더링이 오지는 마법" onChange={setInput} />
      <MemberScore list={list} />
      <MemoizingMemberScore list={list} />
      {list.map((value, index) => {
        return <ItemCard key={index} data={value} />;
      })}
    </PageLayout>
  );
};

export default StepFourScreen;

const AverageWrapper = styled.div`
  padding: 10px;
  background-color: yellow;
  margin-bottom: 20px;
`;

const MemoAverageWrapper = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
  margin-bottom: 40px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  outline: none;
  width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
