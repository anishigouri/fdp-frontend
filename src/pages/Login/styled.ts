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
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  button {
    width: 100%;
  }

  a {
    margin-top: 10px;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
