import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { COLORS, SIZES, WEIGHTS, FAMILIES } from '../../../theme';

const buttonStyles = `
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${FAMILIES.normal};
  font-weight: ${WEIGHTS.normal};
  font-size: ${SIZES.m};

  border-radius: 4px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  margin-top: 25px;
  padding: 10px;
  width: 90px;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;

  &:hover,
  &:focus {
    background-color: ${COLORS.secondary};
    color: ${COLORS.black}
  }
`;

export const StyledLink = styled(Link)`
  ${buttonStyles}
`;
export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  ${buttonStyles}
`;

export const StyledBtn = styled(Button)`
  && {
    background-color: ${(p) => {
      return p.theme.COLORS.primary;
    }};
    &:hover {
      background-color: ${(p) => {
        return p.theme.COLORS.hover;
      }};
    }
    font-family: Righteous;
  }
`;

export const StyledSwitch = styled(Switch)`
  & .MuiSwitch-track {
    background-color: ${(p) => {
      return p.theme.COLORS.black;
    }};
  }

  & .MuiSwitch-thumb {
    background-color: ${(p) => {
      return p.theme.COLORS.primary;
    }};
  }
`;

export const StyledSwitchWrapper = styled(FormControlLabel)`
  && {
    .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label {
      font-family: 'Capriola';
      font-size: 12px;
    }
  }
`;
