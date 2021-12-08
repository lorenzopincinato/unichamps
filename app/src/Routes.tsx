import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.component';
import PublicRoute from './components/PublicRoute.component';

import Redirect404View from './views/404/Redirect404.view';
import HomeView from './views/home/Home.view';
import LoginView from './views/login/Login.view';
import RegisterView from './views/register/Register.view';
import TeamDetails from './views/teams/TeamDetails.view';
import TeamsList from './views/teams/TeamsList.view';
import TournamentDetails from './views/tournaments/TournamentDetails.view';
import Tournaments from './views/tournaments/Tournaments.view';

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

        <PublicRoute path="/register">
          <RegisterView />
        </PublicRoute>

        <PrivateRoute exact path="/teams">
          <TeamsList />
        </PrivateRoute>

        <PrivateRoute exact path="/teams/:id">
          <TeamDetails />
        </PrivateRoute>

        <PrivateRoute exact path="/tournaments">
          <Tournaments />
        </PrivateRoute>

        <PrivateRoute exact path="/tournaments/:id">
          <TournamentDetails />
        </PrivateRoute>

        <Route component={Redirect404View} />
      </Switch>
    </Router>
  );
};

export default Routes;
