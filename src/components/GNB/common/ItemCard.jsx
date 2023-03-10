import styled, { css } from "styled-components";
import React from "react";
import flex from "../../../utils/utilFlex";
import { colors } from "../../../shared/colors";
import { useRenderCount } from "../../../hooks/useRenderCount";

const ItemCard = ({ data }) => {
  return (
    <ItemCardWrapper house={data?.house}>
      <span>{data?.name}</span>
      {/* <span>{data?.house}</span> */}
    </ItemCardWrapper>
  );
};

export default React.memo(ItemCard);

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
