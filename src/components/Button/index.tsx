import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button = ({ children, disabled, type }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
