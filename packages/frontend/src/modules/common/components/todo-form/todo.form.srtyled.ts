import styled from 'styled-components';

export const TodoStyledForm = styled.form`
  width: 250px;
  padding: 0 20px 20px 20px;

  font-family: ${(props) => {
    return props.theme.FAMILIES.normal;
  }};

  @media (min-width: 425px) {
    width: 350px;
  }
  @media (min-width: 768px) {
    width: 550px;
  }
`;
