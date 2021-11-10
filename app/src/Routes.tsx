import { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Redirect404View from './views/404/Redirect404.view';
import LoginView from './views/login/Login.view';

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route exact path="/login" component={LoginView} />

        <Route component={Redirect404View} />
      </Switch>
    </Router>
  );
};

export default Routes;
