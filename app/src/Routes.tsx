import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.component';
import PublicRoute from './components/PublicRoute.component';

import Redirect404View from './views/404/Redirect404.view';
import HomeView from './views/home/Home.view';
import LoginView from './views/login/Login.view';
import RegisterView from './views/register/Register.view';

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <HomeView />
        </PrivateRoute>

        <PublicRoute exact path="/login">
          <LoginView />
        </PublicRoute>

        <PublicRoute exact path="/register">
          <RegisterView />
        </PublicRoute>

        <Route component={Redirect404View} />
      </Switch>
    </Router>
  );
};

export default Routes;
