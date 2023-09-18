interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | boolean;
  placeholder: string;
}

export type { InputFieldProps };
