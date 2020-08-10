import React from 'react';

import { Switch, Router } from 'react-router-dom';

import Login from '../pages/Login';
import Pilot from '../pages/admin/Pilot';

import LoginRoute from '../templates/login';
import AdminRoute from '../templates/adm';
import Home from '../pages/admin/Home';
import history from '../history';

const Routes: React.FC = () => (
  <Switch>
    <Router history={history}>
      <AdminRoute exact path="/" component={Home} />
      <AdminRoute path="/admin/pilots" component={Pilot} />
      <LoginRoute path="/login" component={Login} />
      <AdminRoute path="/admin" component={Home} />
    </Router>
  </Switch>
);

export default Routes;
