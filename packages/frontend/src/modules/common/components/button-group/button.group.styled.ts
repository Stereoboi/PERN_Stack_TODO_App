import styled from 'styled-components';

export const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
  /* align-items: end; */
  @media (min-width: 769px) {
    flex-direction: row;
    margin-bottom: 0px;
  }
`;
