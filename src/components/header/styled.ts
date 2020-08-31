import styled from 'styled-components';

export const AsideStyled = styled('aside')`
  .MuiAppBar-root {
    background-color: ${props => props.theme.colors.background};
    .MuiToolbar-root {
      color: ${props => props.theme.colors.text};
    }
    img {
      position: relative;
      margin-left: auto;
      width: 150px;
      max-width: 100%;
    }
  }
  .MuiDrawer-root {
    .MuiIconButton-root {
      color: ${props => props.theme.colors.text};
    }
    .MuiPaper-root {
      display: flex;
      flex-direction: column;
      background-color: ${props => props.theme.colors.backgroundForm};
      .MuiList-root {
        a {
          color: ${props => props.theme.colors.text};
          text-decoration: none;
          .MuiListItem-button:hover {
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.backgroundWithText};
            .MuiListItemIcon-root {
              color: ${props => props.theme.colors.backgroundWithText};
            }
          }
          .MuiListItemIcon-root {
            color: ${props => props.theme.colors.text};
          }
        }
      }
    }
  }
`;
