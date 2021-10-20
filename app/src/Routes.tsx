import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './components/layout/Layout.component';
import GlobalStyle from './themes/GlobalStyle';
import lightTheme from './themes/light.theme';

import Redirect404View from './views/404/Redirect404.view';
import IndexView from './views/index/Index.view';

const Routes: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={IndexView} />

            <Route component={Redirect404View} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
