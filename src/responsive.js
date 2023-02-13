import { css } from "styled-components";

export const mobile = (propes) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${propes}
    }
  `;
};
