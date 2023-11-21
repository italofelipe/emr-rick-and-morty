import { InputProps } from "./types";
import { StyledInput } from "./styles";

const Input = ({ placeholder, value, onChange, ...otherProps }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};
export default Input;
