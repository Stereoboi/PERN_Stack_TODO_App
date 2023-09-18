import styled from 'styled-components';

export const StyledSliderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  height: 500px;
  margin-top: 15px;
`;

export const StyledBtnSliderWrapper = styled.div`
  display: flex;
`;

export const StyledSliderBtn = styled.button`
  position: absolute;
  z-index: 10;
  bottom: 40px;
  right: 0;
  padding: 6px 16px;
  outline: none;
  border: none;
  border-radius: 6px;
  color: white;
  background-color: ${(p) => {
    return p.theme.COLORS.primary;
  }};
  &:hover {
    background-color: ${(p) => {
      return p.theme.COLORS.hover;
    }};
  }
  font-family: Righteous;
`;
export const StyledSliderBtnBack = styled.button`
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 0;
  padding: 6px 16px;
  outline: none;
  border-radius: 6px;
  border: none;
  color: white;
  background-color: ${(p) => {
    return p.theme.COLORS.primary;
  }};
  &:hover {
    background-color: ${(p) => {
      return p.theme.COLORS.hover;
    }};
  }
  font-family: Righteous;
`;
