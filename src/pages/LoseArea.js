import { useHistory } from "react-router";
import Button from "../components/Button";
import GlassContainer from "../components/GlassContainer";
import MainContainer from "../components/MainContainer";
import Spacer from "../components/Spacer";
import Text from "../components/Text";

const LoseArea = () => {
  const { push } = useHistory();

  const goToMainPage = () => {
    push("/");
  };

  return (
    <MainContainer gradient={["#E1296C", "#AE4409"]}>
      <GlassContainer>
        <Text>Você perdeu :(</Text>
        <Spacer />
        <Text>Você não adivinhou o número correto</Text>
        <Spacer />
        <Button onClick={goToMainPage}>Jogar novamente</Button>
      </GlassContainer>
    </MainContainer>
  );
};

export default LoseArea;
