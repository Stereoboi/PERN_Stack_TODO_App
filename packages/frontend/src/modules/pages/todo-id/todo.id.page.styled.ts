import styled from 'styled-components';

export const TodoIdPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: ${(p) => {
    return p.theme.FAMILIES.normal;
  }};
`;

export const StyledTitle = styled.h1`
  font-size: ${(p) => {
    return p.theme.SIZES.m;
  }};
  @media (min-width: 769px) {
    font-size: ${(p) => {
      return p.theme.SIZES.l;
    }};
  }
  color: ${(p) => {
    return p.theme.COLORS.black;
  }};
  margin-bottom: ${(p) => {
    return p.theme.SPACES.container(1);
  }};
  font-weight: ${(p) => {
    return p.theme.WEIGHTS.bold;
  }};
`;

export const StyledSubtitle = styled.p`
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StyledContentWrapper = styled.div`
  /* margin: 0 auto; */
  max-width: 650px;
  max-height: 450px;
  background-color: ${(p) => {
    return p.theme.COLORS.black;
  }};
  border-radius: ${(p) => {
    return p.theme.SPACES.container(1);
  }};

  padding: ${(p) => {
    return p.theme.SPACES.container(2.5);
  }};
  text-decoration: none;
  background-color: ${(p) => {
    return p.theme.COLORS.lightGrey;
  }};
  background: ${(p) => {
    return p.theme.GRADIENT.normal;
  }};
  box-shadow: ${(p) => {
    return p.theme.SHADOW.normal;
  }};
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const StyledSwitchesWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin: 10px 0 10px 0;
`;

export const Wrapper = styled.div`
  @media (max-width: 769px) {
    margin-top: 15px;
  }
`;
