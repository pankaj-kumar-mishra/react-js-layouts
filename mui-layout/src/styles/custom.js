import styled, { css } from "styled-components";

export const LayoutDiv = styled.div`
  ${({ fh }) =>
    fh &&
    css`
      height: fh;
      overflow-y: scroll;
    `}
`;
