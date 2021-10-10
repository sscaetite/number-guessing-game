import styled from "styled-components";

export const MainInput = styled.input`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.26);
  box-shadow: 6px 12px 17px 6px rgba(0, 0, 0, 0.14);
  backdrop-filter: blur(9px);
  border-radius: 2em;
  padding: 1em;
  color: white;
  width: auto;
  text-align: center;
  font-size: 1.2em;
  font-weight: 400;

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: none;
  }
`;
