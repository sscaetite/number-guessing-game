import Button from "../components/Button";
import GlassContainer from "../components/GlassContainer";
import Input from "../components/Input";
import MainContainer from "../components/MainContainer";
import Spacer from "../components/Spacer";
import Text from "../components/Text";

const MainArea = () => {
  return (
    <MainContainer>
      <GlassContainer>
        <Text>Adivinhe o número</Text>
        <Spacer />
        <Text>Você ainda tem três chances</Text>
        <Spacer />
        <Text>O número sorteado é menor...</Text>
        <Spacer />
        <Input placeholder="Entre com um número entre 0 e 10" />
        <Spacer />
        <Button>Enviar</Button>
      </GlassContainer>
    </MainContainer>
  );
};

export default MainArea;
