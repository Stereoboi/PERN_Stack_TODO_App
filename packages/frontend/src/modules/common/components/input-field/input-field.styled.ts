import styled from 'styled-components';

export const Input = styled.input`
  background-color: #f7fafc;
  border: 1px solid #d2d6dc;
  color: #1a202c;
  font-size: 14px;
  border-radius: 6px;
  width: 100%;
  padding: 0.625rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  font-family: ${(props) => {
    return props.theme.FAMILIES.normal;
  }};
`;

export const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 33px;
  right: 10px;
  transition: color 0.2s ease-out;
  &:hover {
    color: red;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const InputErrorText = styled.p`
  font-size: ${(p) => {
    return p.theme.SPACES.container(1.2);
  }};
  color: red;
`;
