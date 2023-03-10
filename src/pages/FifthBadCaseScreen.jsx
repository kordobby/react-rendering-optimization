import React, { useState } from "react";
import PageLayout from "../components/GNB/common/PageLayout";
import { stepOneData } from "../shared/data/stepOne";
import LogMemoButton from "../components/GNB/common/LogMemoButton";

const FifthBadCaseScreen = () => {
  const [input, setInput] = useState("");
  const [members, setMembers] = useState(stepOneData);

  const deleteMember = (member) => {
    console.log(member);
    setMembers((value) => value.filter((el) => el.name !== member));
  };

  return (
    <>
      <PageLayout page={"stepFive"}>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        {members.map((value, index) => {
          return (
            <LogMemoButton
              onClick={() => {
                deleteMember(value.name);
              }}
              key={`${value.name}`}
            >
              {value.name}
            </LogMemoButton>
          );
        })}
      </PageLayout>
    </>
  );
};

export default FifthBadCaseScreen;
