import styled from 'styled-components';

export const ActionTodoWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
  }
`;

export const TodoPageWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TodoNavigationWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row-reverse;
  /* align-items: end; */
`;

export const ButtonWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const StyledInputWrapper = styled.form`
  width: 100%;
`;
