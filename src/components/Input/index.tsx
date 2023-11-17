type InputProps = {
  value: string;
  onChange: (value: string) => void;
};
const Input = ({ value, onChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <input type="text" value={value} onChange={handleInputChange} />;
};

export default Input;
