import React from 'react';

import { StyledLink } from './button.styled';

interface CustomButtonProps {
  buttonText: string;
  to: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ buttonText, to }) => {
  return <StyledLink to={to}>{buttonText}</StyledLink>;
};
