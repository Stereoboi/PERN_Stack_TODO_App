import styled from 'styled-components';

export const StyledFormPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: ${(p) => {
    return p.theme.SPACES.container(55);
  }};
  background-color: ${(p) => {
    return p.theme.COLORS.lightGrey;
  }};
  padding: ${(p) => {
    return p.theme.SPACES.container(2);
  }};
  border-radius: ${(p) => {
    return p.theme.SPACES.container(1);
  }};
  box-shadow: ${(p) => {
    return p.theme.SHADOW.normal;
  }};
  font-family: ${(props) => {
    return props.theme.FAMILIES.normal;
  }};
`;

export const StyledFormTitle = styled.h2`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${(p) => {
    return p.theme.SPACES.container(1.5);
  }};
`;

export const Form = styled.form`
  max-width: ${(p) => {
    return p.theme.SPACES.container(45);
  }};
  margin: 0 auto;
`;
