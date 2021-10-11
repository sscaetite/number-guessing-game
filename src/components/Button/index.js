import { MainButton } from "./styles";

const Button = ({ children, ...props }) => {
  return <MainButton {...props}>{children}</MainButton>;
};

export default Button;
