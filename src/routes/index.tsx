import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Pilot from '../pages/Pilot';

import LoginRoute from '../templates/login';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Pilot} />
    <LoginRoute path="/login" component={Login} />
  </Switch>
);

export default Routes;
