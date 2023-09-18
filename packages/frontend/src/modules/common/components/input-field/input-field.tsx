import React, { useState } from 'react';

import {
  Input,
  InputWrapper,
  CloseButton,
  LabelWrapper,
  InputErrorText
} from './input-field.styled';
import { InputFieldProps } from '../../types/input.props.types';

export const InputFieldComponent: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  error,
  placeholder
}) => {
  const [isActive, setIsActive] = useState(false);

  const clearInput = () => {
    onChange({ target: { name, value: '' } } as React.ChangeEvent<HTMLInputElement>);
    setIsActive(false);
  };

  return (
    <InputWrapper>
      {isActive && type === 'text' && value && <CloseButton onClick={clearInput}>x</CloseButton>}
      <LabelWrapper>
        <label htmlFor={id}>{label}</label>
        <InputErrorText>{error}</InputErrorText>
      </LabelWrapper>
      <Input
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => {
          return setIsActive(true);
        }}
      />
    </InputWrapper>
  );
};
