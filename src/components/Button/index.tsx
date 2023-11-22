import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button = ({ children, disabled, type, ...otherProps }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} type={type} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
