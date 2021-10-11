import { MainText } from "./styles";

const Text = ({ children, size }) => {
  return <MainText size={size}>{children}</MainText>;
};

export default Text;
