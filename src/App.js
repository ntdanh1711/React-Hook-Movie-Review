import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LandingPage from './scenes/LandingPage/LandingPage';
import SearchPage from './scenes/SearchPage/SearchPage';
import UtilsProvider from './providers/utilsProvider';
import SearchProvider from './providers/searchProvider';

import './App.scss';

const App = () => (
  <Router>
    <Switch>
      <UtilsProvider>
        <SearchProvider>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </SearchProvider>
      </UtilsProvider>
    </Switch>
  </Router>
);

export default App;
