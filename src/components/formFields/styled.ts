import styled from 'styled-components';

export const FormContainerStyled = styled.div`
  background-color: ${props => props.theme.colors.backgroundForm};
  margin: 80px 20px 10px 20px;
  padding: 20px;
  border-radius: 10px;

  h2 {
    color: ${props => props.theme.colors.text};
    border-bottom: 2px solid ${props => props.theme.colors.primary};
    margin-bottom: 10px;
  }
`;
