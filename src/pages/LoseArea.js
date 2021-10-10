import Button from "../components/Button";
import GlassContainer from "../components/GlassContainer";
import MainContainer from "../components/MainContainer";
import Spacer from "../components/Spacer";
import Text from "../components/Text";

const LoseArea = () => {
  return (
    <MainContainer>
      <GlassContainer>
        <Text>Você perdeu :(</Text>
        <Spacer />
        <Text>Você não adivinhou o número correto</Text>
        <Spacer />
        <Button>Jogar novamente</Button>
      </GlassContainer>
    </MainContainer>
  );
};

export default LoseArea;
