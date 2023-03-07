import styled, { css } from "styled-components";
import React from "react";
import flex from "../../../utils/utilFlex";
import { colors } from "../../../shared/colors";
import { useRenderCount } from "../../../hooks/useRenderCount";

const StepTwoCard = ({ data }) => {
  useRenderCount("좋은 예시 아이템 카드");
  console.log(data);
  const getMembers = (member) => {
    if (member === "해리포터") {
      return {
        name: "해리포터",
        house: "그리핀도르",
      };
    } else if (member === "드레이코 말포이") {
      return {
        name: "드레이코 말포이",
        house: "슬리데린",
      };
    } else if (member === "세드릭 디고리") {
      return {
        name: "세드릭 디고리",
        house: "후플푸프",
      };
    } else {
      return {
        name: "루나 러브굿",
        house: "래번클로",
      };
    }
  };
  return (
    <ItemCardWrapper house={getMembers(data).house}>
      <span>{getMembers(data).name}</span>
      {/* <span>{data?.house}</span> */}
    </ItemCardWrapper>
  );
};

export default React.memo(StepTwoCard);

const ItemCardWrapper = styled.div`
  width: 300px;
  height: 120px;
  background-color: aliceblue;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  ${flex({ direction: "column", gap: "10px" })};
  ${({ house }) => {
    switch (house) {
      case "그리핀도르":
        return css`
          background-color: ${colors.house.grf};
        `;
      case "슬리데린":
        return css`
          background-color: ${colors.house.sly};
        `;
      case "래번클로":
        return css`
          background-color: ${colors.house.raw};
        `;
      case "후플푸프":
        return css`
          background-color: ${colors.house.hfp};
        `;
      default:
        return css`
          background-color: aliceblue;
        `;
    }
  }}
`;
