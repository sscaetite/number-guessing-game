import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../components/Button";
import GlassContainer from "../components/GlassContainer";
import Input from "../components/Input";
import MainContainer from "../components/MainContainer";
import Spacer from "../components/Spacer";
import Text from "../components/Text";
import { getDrawNumber } from "../utils/numberFunctions";

const MainArea = () => {
  const [drawNumber, setDrawNumber] = useState();
  const [guessNumber, setGuessNumber] = useState();
  const [alertText, setAlertText] = useState("Insira um número para começar");
  const [remainingChances, setRemainingChances] = useState(3);
  const { push } = useHistory();

  useEffect(() => {
    setDrawNumber(getDrawNumber(0, 10));
  }, []);

  const changeGuessValue = (event) => {
    const guessValue = parseInt(event.target.value);
    setGuessNumber(guessValue);
  };

  const modifyAlertText = () => {
    const drawIsSmaller = "O número sorteado é menor";
    const drawIsBigger = "O número sorteado é maior";
    if (drawNumber > guessNumber) {
      setAlertText(drawIsBigger);
    } else {
      setAlertText(drawIsSmaller);
    }
  };

  const handleGuess = () => {
    if (drawNumber === guessNumber) {
      push("/win");
    } else if (remainingChances === 1) {
      push("/lose");
    } else {
      modifyAlertText();
      setRemainingChances(remainingChances - 1);
    }
  };

  return (
    <MainContainer>
      <GlassContainer>
        <Text>Adivinhe o número</Text>
        <Spacer />
        <Text>Você ainda tem {remainingChances} chances</Text>
        <Spacer />
        <Text>{alertText}</Text>
        <Spacer />
        <Input
          placeholder="Entre com um número entre 0 e 10"
          onChange={changeGuessValue}
        />
        <Spacer />
        <Button onClick={handleGuess}>Enviar</Button>
      </GlassContainer>
    </MainContainer>
  );
};

export default MainArea;
