import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/admin/Home';
import Pilot from '../pages/admin/Pilot/Form';
import Login from '../pages/Login';
import AdminRoute from '../templates/adm';
import LoginRoute from '../templates/login';
import PilotList from '../pages/admin/Pilot/List';

const Routes: React.FC = () => (
  <Switch>
    <AdminRoute exact path="/" component={Home} />
    <AdminRoute exact path="/admin" component={Home} />
    <AdminRoute path="/admin/pilots" component={PilotList} />
    <AdminRoute path="/admin/pilots/:id" component={Pilot} />
    <LoginRoute path="/login" component={Login} />
  </Switch>
);

export default Routes;
