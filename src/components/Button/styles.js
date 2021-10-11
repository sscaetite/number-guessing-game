import styled from "styled-components";

export const MainButton = styled.button`
  color: ${({ disabled }) => (disabled ? "rgba(255,255,255,0.4)" : "white")};
  padding: 1em 1.8em;
  text-transform: uppercase;
  font-size: 1em;
  background: ${({ disabled }) =>
    disabled ? "rgba(247, 238, 242, 0.02)" : "#ed338c"};
  border: 1px solid rgba(255, 255, 255, 0.26);
  box-shadow: ${({ disabled }) =>
    disabled
      ? "inset 6px 12px 17px 6px rgba(0, 0, 0, 0.14)"
      : "6px 12px 17px 6px rgba(0, 0, 0, 0.14)"};
  transition: all 0.2s ease-in-out;
  border-radius: 49px;

  &:hover {
    background: ${({ disabled }) => !disabled && "#dd1e7a"};
  }
`;
