import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${(props) => {
    return props.theme.COLORS.primary;
  }};
  font-weight: ${(props) => {
    return props.theme.WEIGHTS.normal;
  }};

  font-family: ${(props) => {
    return props.theme.FAMILIES.title;
  }};
  font-size: ${(props) => {
    return props.theme.SIZES.l;
  }};

  @media (min-width: 769px) {
    font-size: 42px;
  }
`;

export const AppDescription = styled.p`
  font-size: ${(props) => {
    return props.theme.SIZES.m;
  }};
  font-family: ${(props) => {
    return props.theme.FAMILIES.normal;
  }};
  text-align: center;
  margin: 20px 0 20px 0;
`;

export const ButtonWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
