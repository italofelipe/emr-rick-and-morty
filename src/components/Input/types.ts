import { InputHTMLAttributes } from 'react';
export type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  otherProps?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;