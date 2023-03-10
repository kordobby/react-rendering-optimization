import React, { useState } from "react";
import { useRenderCount } from "../hooks/useRenderCount";
import Button from "../components/GNB/common/Button";
import { stepOneData } from "../shared/data/stepOne";
import PageLayout from "../components/GNB/common/PageLayout";
import ItemCard from "../components/GNB/common/ItemCard";
import styled from "styled-components";
import flex from "../utils/utilFlex";

const FlatList = ({ listProps }) => {
  return (
    <>
      <CardsWrapper>
        <div>
          {listProps.map((value, index) => {
            return <ItemCard key={`list-${index}`} data={value} />;
          })}
        </div>
      </CardsWrapper>
    </>
  );
};

const OtherComponent = () => {
  /* 렌더링이 되지 않았으면 하는 컴포넌트 */
  useRenderCount("other-component");
  return <></>;
};

const FirstBadCaseScreen = () => {
  const [list, setList] = useState(stepOneData);

  const addListHandler = () => {
    console.log("클릭 이벤트 들어왔다.");
    setList((prev) => [
      ...prev,
      {
        name: "론 위즐리",
        house: "그리핀도르",
      },
    ]);
  };

  return (
    <PageLayout page={"stepOne"}>
      <Button onClick={addListHandler}>페이지에 있는 버튼</Button>
      <FlatList listProps={list}></FlatList>
      <OtherComponent />
    </PageLayout>
  );
};

export default FirstBadCaseScreen;

const CardsWrapper = styled.div`
  padding-top: 30px;
  ${flex({ gap: "10px", align: "flex-start" })}
`;
