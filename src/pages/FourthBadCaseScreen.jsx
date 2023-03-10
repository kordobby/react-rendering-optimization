import React, { useState } from "react";
import PageLayout from "../components/GNB/common/PageLayout";
import { stepFourData } from "../shared/data/stepFour";
import styled from "styled-components";
import LogCard from "../components/GNB/common/LogCard";

const FourthBadCaseScreen = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <PageLayout page="stepFour">
        <div>
          <Input placeholder="렌더링이 오지는 마법" onChange={setInput} />

          {stepFourData.map((value, index) => {
            return <LogCard key={index} data={value} />;
          })}
        </div>
      </PageLayout>
    </>
  );
};

export default FourthBadCaseScreen;

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  outline: none;
  width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
