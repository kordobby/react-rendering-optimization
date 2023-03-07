import { css } from "styled-components";

const flex = ({
  justify = "center",
  align = "center",
  gap = "0",
  direction = "row",
}) => {
  return css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-direction: ${direction};
  `;
};

export default flex;
