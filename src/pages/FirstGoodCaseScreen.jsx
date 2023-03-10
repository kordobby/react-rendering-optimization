import React, { useState } from "react";
import { useRenderCount } from "../hooks/useRenderCount";
import Button from "../components/GNB/common/Button";
import { stepOneData } from "../shared/data/stepOne";
import PageLayout from "../components/GNB/common/PageLayout";
import ItemCard from "../components/GNB/common/ItemCard";
import styled from "styled-components";
import flex from "../utils/utilFlex";

const FlatList = () => {
  const [list, setList] = useState(stepOneData);

  const addListHandler = () => {
    console.log("클릭 이벤트 들어왔따.");
    setList((prev) => [
      ...prev,
      {
        name: "지니 위즐리",
        house: "그리핀도르",
      },
    ]);
  };

  return (
    <>
      <Button buttonType={`secondary`} onClick={addListHandler}>
        리스트에 있는 버튼
      </Button>
      <CardsWrapper>
        <div>
          {list.map((value, index) => {
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

const FirstGoodCaseScreen = () => {
  return (
    <PageLayout page={"stepOne"}>
      <FlatList />
      <OtherComponent />
    </PageLayout>
  );
};

export default FirstGoodCaseScreen;

const CardsWrapper = styled.div`
  padding-top: 30px;
  ${flex({ gap: "10px", align: "flex-start" })}
`;
