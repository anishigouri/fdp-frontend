import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../../styles/global';
import light from '../../styles/themes/light';

const Body: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const LoginRoute: React.FC<any> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Body>
        <Component {...matchProps} />
      </Body>
    )}
  />
);

LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LoginRoute;
