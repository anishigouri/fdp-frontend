import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Pilot from '../pages/admin/Pilot';

import LoginRoute from '../templates/login';
import AdminRoute from '../templates/adm';
import Home from '../pages/admin/Home';

const Routes: React.FC = () => (
  <Switch>
    <AdminRoute exact path="/" component={Home} />
    <AdminRoute path="/admin/pilots" component={Pilot} />
    <LoginRoute path="/login" component={Login} />
    <AdminRoute path="/admin" component={Home} />
  </Switch>
);

export default Routes;
