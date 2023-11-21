import { Container, InputWrapper, Label, StyledForm } from "./styles";
import Button from "../Button";
import Input from "../Input";
import { useState } from "react";

type FormProps = {
  onSubmit: (value: string) => void;
};
const Form = ({ onSubmit }: FormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    onSubmit(inputValue);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Container>
        <InputWrapper>
          <Label htmlFor="character">Nome do personagem</Label>
          <Input
            id="character"
            placeholder="Rick Sanchez"
            value={inputValue}
            onChange={(value) => handleInputChange(value as string)}
          />
        </InputWrapper>
        <Button type="submit" disabled={!inputValue}>
          Procurar
        </Button>
      </Container>
    </StyledForm>
  );
};

export default Form;
