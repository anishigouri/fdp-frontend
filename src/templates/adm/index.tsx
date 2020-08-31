import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../../styles/global';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import Header from '../../components/header';
import Notification from '../../components/notification';
import { ContainerStyled } from './styled';

const Body: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <ContainerStyled>
        <Header />
        <Notification />
        <GlobalStyle />
        {children}
      </ContainerStyled>
    </ThemeProvider>
  );
};

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const AdminRoute: React.FC<any> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Body>
        <Component {...matchProps} />
      </Body>
    )}
  />
);

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AdminRoute;
