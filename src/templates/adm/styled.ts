import styled from 'styled-components';

export const ContainerStyled = styled.div`
  background-color: ${props => props.theme.colors.background};
  position: absolute;
  width: 100%;
  z-index: -1;
  height: 100vh;
`;
