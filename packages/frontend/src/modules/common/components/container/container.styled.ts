import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  padding-left: ${(props) => {
    return props.theme.SPACES.container(1);
  }};
  padding-right: ${(props) => {
    return props.theme.SPACES.container(1);
  }};

  @media (min-width: 426px) and (max-width: 768px) {
    padding-left: ${(props) => {
      return props.theme.SPACES.container(2);
    }};
    padding-right: ${(props) => {
      return props.theme.SPACES.container(2);
    }};
  }
  @media (min-width: 769px) {
    padding-left: ${(props) => {
      return props.theme.SPACES.container(2.5);
    }};
    padding-right: ${(props) => {
      return props.theme.SPACES.container(2.5);
    }};
  }
`;
