import styled from 'styled-components';
import { rgba } from 'polished';

export const ContainerStyled = styled.div`
  display: grid;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;

  label {
    color: ${props => props.theme.colors.text};
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 280px;
    border-radius: 3px;
    overflow: hidden;

    span {
      &.label {
        position: absolute;
        top: 20px;
        left: 12px;
        font-size: 16px;
        color: ${rgba('#424242', 0.5)};
        font-weight: 500;
        transform-origin: 0 0;
        transform: translate3d(0, 0, 0);
        transition: all 0.2s ease;
        pointer-events: none;
      }

      &.focus-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${rgba('#424242', 0.05)};
        z-index: -1;
        transform: scaleX(0);
        transform-origin: left;
      }
    }
    input {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      border: 0;
      font-family: inherit;
      padding: 16px 12px 0 12px;
      height: 56px;
      font-size: 16px;
      font-weight: 400;
      background-color: 'rgba(red, 0.02)';
      box-shadow: inset 0 -1px 0 ${rgba('#424242', 0.3)};
      color: ${props => props.theme.colors.text};
      transition: all 0.15s ease;

      &:hover {
        background: ${rgba('#424242', 0.04)};
        box-shadow: inset 0 -1px 0 ${rgba('#424242', 0.5)};
      }

      &:not(:placeholder-shown) {
        + .label {
          color: ${rgba('#424242', 0.5)};
          transform: translate3d(0, -12px, 0) scale(0.75);
        }
      }

      &:focus {
        background: ${rgba('#424242', 0.05)};
        outline: none;
        box-shadow: inset 0 -2px 0 ${props => props.theme.colors.text};
        + .label {
          color: ${props => props.theme.colors.text};
          transform: translate3d(0, -12px, 0) scale(0.75);
        }
        + .focus-bg {
          transform: scaleX(1);
          transition: all 0.1s ease;
        }
      }
    }
  }
`;
