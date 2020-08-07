import styled from 'styled-components';

export const AsideStyled = styled('aside')`
  .MuiAppBar-root {
    background-color: ${props => props.theme.colors.background};
    .MuiToolbar-root {
      color: ${props => props.theme.colors.text};
    }
  }
  .MuiDrawer-root {
    .MuiList-root {
      a {
        color: #000;
        text-decoration: none;
      }
    }
  }
`;
