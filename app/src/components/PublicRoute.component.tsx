import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

type PublicRouteProps = {
  exact?: boolean;
  path?: string;
};

const PublicRoute: FC<PublicRouteProps> = ({ exact, path, children }) => {
  return (
    <Route exact={exact} path={path}>
      {localStorage.getItem('token') ? <Redirect to="/" /> : children}
    </Route>
  );
};

export default PublicRoute;
