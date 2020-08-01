import styled from 'styled-components';

export const ContainerStyled = styled.div`
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-size: 15px;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
  }

  input {
    border: 0;
  }
`;
