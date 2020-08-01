import styled from 'styled-components';

export const ContainerStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

export const FormStyled = styled.div`
  background-color: white;
  max-width: 700px;
  margin: 0;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
