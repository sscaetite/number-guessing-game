import { GradientCircle, MainWrapper, ChildrenContainer } from "./styles";

const MainContainer = ({ children }) => {
  return (
    <MainWrapper>
      <ChildrenContainer>{children}</ChildrenContainer>
      <GradientCircle />
    </MainWrapper>
  );
};

export default MainContainer;
