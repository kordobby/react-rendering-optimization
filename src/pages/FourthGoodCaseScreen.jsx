import React, { useState, useMemo } from "react";
import PageLayout from "../components/GNB/common/PageLayout";
import { stepFourData } from "../shared/data/stepFour";
import styled from "styled-components";
import LogCard from "../components/GNB/common/LogCard";

const FourthGoodCaseScreen = () => {
  const [input, setInput] = useState("");

  const Lists = useMemo(() => {
    return (
      <>
        {stepFourData.map((value, index) => {
          return <LogCard key={index} data={value} />;
        })}
      </>
    );
  }, [stepFourData]);

  return (
    <>
      <PageLayout page="stepFour">
        <div>
          <Input placeholder="렌더링이 오지는 마법" onChange={setInput} />
          {Lists}
        </div>
      </PageLayout>
    </>
  );
};

export default FourthGoodCaseScreen;

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  outline: none;
  width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
