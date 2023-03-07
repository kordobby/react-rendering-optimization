import styled, { css } from "styled-components";
import flex from "../../../utils/utilFlex";
import { pageData } from "../../../shared/data/pageData";
const PageLayout = ({ page, children }) => {
  return (
    <PageLayoutWrapper>
      <StTitle>{pageData[page][`title`]}</StTitle>
      <StTitle subtitle>{pageData[page][`subtitle`]}</StTitle>
      {children}
    </PageLayoutWrapper>
  );
};

const PageLayoutWrapper = styled.div`
  width: 100%;
  padding: 30px;
  ${flex({ direction: "column" })};
`;

const StTitle = styled.h1`
  ${({ subtitle }) => {
    if (subtitle) {
      return css`
        font-size: 18px;
        margin: 20px;
      `;
    } else {
      return css`
        font-size: 24px;
        font-weight: 600;
        margin-top: 40px;
      `;
    }
  }}
`;

export default PageLayout;
