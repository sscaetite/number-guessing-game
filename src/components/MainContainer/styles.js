import styled from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  background-color: #070c59;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChildrenContainer = styled.div`
  z-index: 1;
`;

export const GradientCircle = styled.div`
  position: absolute;
  left: 20%;
  top: 20%;
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  background: ${({ gradient }) =>
    "linear-gradient(180deg, " + gradient[0] + " 0%, " + gradient[1] + " 100%)"};
  z-index: 0;
`;
