import styled from 'styled-components';
import { tint, shade } from 'polished';

export const ContainerStyled = styled.button`
  padding: 10px 15px 10px 15px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  font-weight: 500;

  &.default {
    background-color: ${props => props.theme.colors.default};
    color: ${props => props.theme.colors.text};

    &:hover {
      background-color: ${props => shade(0.2, props.theme.colors.default)};
    }
  }

  &.primary {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};

    &:hover {
      background-color: ${props => tint(0.3, props.theme.colors.primary)};
    }
  }

  &.secondary {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};

    &:hover {
      background-color: ${props => tint(0.3, props.theme.colors.secondary)};
    }
  }

  &.danger {
    background-color: ${props => props.theme.colors.danger};
    color: ${props => props.theme.colors.text};

    &:hover {
      background-color: ${props => tint(0.3, props.theme.colors.danger)};
    }
  }

  &.warning {
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.text};

    &:hover {
      background-color: ${props => tint(0.3, props.theme.colors.warning)};
    }
  }

  &.success {
    background-color: ${props => props.theme.colors.success};
    color: ${props => props.theme.colors.text};

    &:hover {
      background-color: ${props => tint(0.3, props.theme.colors.success)};
    }
  }
`;
