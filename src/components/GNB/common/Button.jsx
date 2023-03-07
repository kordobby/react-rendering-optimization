import styled, { css } from "styled-components";
import { colors } from "../../../shared/colors";
import flex from "../../../utils/utilFlex";

const Button = ({ onClick, children, buttonType }) => {
  return (
    <ButtonWrapper onClick={onClick} buttonType={buttonType}>
      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  padding: 10px 10px;
  border-radius: 4px;
  ${flex({})}
  font-size: 14px;
  &:hover {
    color: ${colors.grayscale.black};
    background-color: ${colors.grayscale.gray06};
  }
  cursor: pointer;

  ${({ buttonType }) => {
    switch (buttonType) {
      case "secondary":
        return css`
          background-color: ${colors.context.done};
          color: ${colors.grayscale.white};
        `;
      default:
        return css`
          background-color: ${colors.grayscale.black};
          color: ${colors.grayscale.white};
        `;
    }
  }}
`;
