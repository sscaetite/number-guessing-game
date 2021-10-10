import Button from "../components/Button";
import GlassContainer from "../components/GlassContainer";
import MainContainer from "../components/MainContainer";
import Spacer from "../components/Spacer";
import Text from "../components/Text";

const WinArea = () => {
  return (
    <MainContainer>
      <GlassContainer>
        <Text>Parabéns, você ganhou!</Text>
        <Spacer />
        <Text>Você adivinhou o número correto</Text>
        <Spacer />
        <Button>Jogar novamente</Button>
      </GlassContainer>
    </MainContainer>
  );
};

export default WinArea;
