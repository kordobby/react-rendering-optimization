import React from "react";
import styled from "styled-components";
import flex from "../../utils/utilFlex";
import Header from "./Header";
import { colors } from "../../shared/colors";
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header></Header>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  /* height: 100vh; */
  ${flex({ justify: "center", align: "center" })};
  padding-top: 100px;
  /* background-color: ${colors.grayscale.gray09}; */
`;
