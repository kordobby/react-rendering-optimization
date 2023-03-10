import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PageLayout from "../components/GNB/common/PageLayout";
import Button from "../components/GNB/common/Button";
import CallbackButton from "../components/GNB/common/CallBackButton";
import { stepOneData } from "../shared/data/stepOne";

const CommonFunctionScreen = () => {
  const [members, setMembers] = useState(stepOneData);

  const deleteMember = (member) => {
    console.log(member);
    setMembers((value) => value.filter((el) => el.name !== member));
  };

  return (
    <>
      <PageLayout page={"stepFive"}>
        {members.map((value, index) => {
          return (
            <Button
              onClick={() => {
                deleteMember(value.name);
              }}
              key={`${value.name}`}
            >
              {value.name}
            </Button>
          );
        })}
      </PageLayout>
    </>
  );
};

export default CommonFunctionScreen;
