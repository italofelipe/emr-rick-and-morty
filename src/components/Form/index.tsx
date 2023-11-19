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
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={(value) => setInputValue(value)} />
        <button type="submit">Procurar</button>
      </form>
    </>
  );
};

export default Form;
