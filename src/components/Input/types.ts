import { InputHTMLAttributes } from 'react';
export type InputProps = {
  value: string;
  onChange: (value: string) => void; // Alteração na tipagem aqui
  placeholder?: string;
  otherProps?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;