import styled from 'styled-components';

export const StyledTabTodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  height: 300px;
  border-radius: 10px;
  font-family: ${(p) => {
    return p.theme.FAMILIES.normal;
  }};
  background: ${(p) => {
    return p.theme.GRADIENT.normal;
  }};
  padding: ${(p) => {
    return p.theme.SPACES.container(1.5);
  }};
  box-shadow: ${(p) => {
    return p.theme.SHADOW.normal;
  }};
  @media (max-width: 424px) {
    margin-bottom: 10px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: ${(p) => {
    return p.theme.SIZES.m;
  }};
  color: ${(p) => {
    return p.theme.COLORS.black;
  }};
  margin-bottom: ${(p) => {
    return p.theme.SPACES.container(1);
  }};
  font-weight: ${(p) => {
    return p.theme.WEIGHTS.bold;
  }};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StyledSubtitle = styled.p`
  font-size: ${(p) => {
    return p.theme.SIZES.s;
  }};
  color: ${(p) => {
    return p.theme.COLORS.black;
  }};
  margin-bottom: ${(p) => {
    return p.theme.SPACES.container(1);
  }};
  font-weight: ${(p) => {
    return p.theme.WEIGHTS.normal;
  }};
`;
export const StyledText = styled.p`
  font-size: ${(p) => {
    return p.theme.SIZES.s;
  }};
  color: ${(p) => {
    return p.theme.COLORS.black;
  }};

  font-weight: ${(p) => {
    return p.theme.WEIGHTS.normal;
  }};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
