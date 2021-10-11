import { GradientCircle, MainWrapper, ChildrenContainer } from "./styles";

const MainContainer = ({ children, gradient }) => {
  return (
    <MainWrapper>
      <ChildrenContainer>{children}</ChildrenContainer>
      <GradientCircle gradient={gradient} />
    </MainWrapper>
  );
};

export default MainContainer;
