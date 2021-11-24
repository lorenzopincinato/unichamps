import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

type PrivateRouteProps = {
  exact?: boolean;
  path?: string;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ exact, path, children }) => {
  return (
    <Route exact={exact} path={path}>
      {localStorage.getItem('token') ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
