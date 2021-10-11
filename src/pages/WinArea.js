import { useHistory } from "react-router";
import Button from "../components/Button";
import GlassContainer from "../components/GlassContainer";
import MainContainer from "../components/MainContainer";
import Spacer from "../components/Spacer";
import Text from "../components/Text";

const WinArea = () => {
  const { push } = useHistory();

  const goToMainPage = () => {
    push("/");
  };

  return (
    <MainContainer gradient={["#07BA19", "#09AEA4"]}>
      <GlassContainer>
        <Text>Parabéns, você ganhou!</Text>
        <Spacer />
        <Text>Você adivinhou o número correto</Text>
        <Spacer />
        <Button onClick={goToMainPage}>Jogar novamente</Button>
      </GlassContainer>
    </MainContainer>
  );
};

export default WinArea;
