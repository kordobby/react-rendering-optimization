import styled from "styled-components";
import flex from "../../utils/utilFlex";
import { colors } from "../../shared/colors";
const Header = () => {
  return (
    <HeaderWrapper>
      <h1>리윤트와 함께하는 리액트 렌더링 최적화</h1>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.grayscale.black};
  color: ${colors.grayscale.white};
  ${flex({ justify: "center", align: "center" })};

  position: fixed;
  top: 0;
`;
