import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LandingPage from './scenes/LandingPage/LandingPage';
import SearchPage from './scenes/SearchPage/SearchPage';
import MovieDetail from './scenes/MovieDetail/MovieDetail';
import UtilsProvider from './providers/utilsProvider';
import SearchProvider from './providers/searchProvider';
import PopularProvider from './providers/popularProvider';

import './App.scss';

const App = () => (
  <Router>
    <Switch>
      <UtilsProvider>
        <SearchProvider>
          <Route exact path="/">
            <PopularProvider>
              <LandingPage />
            </PopularProvider>
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
        </SearchProvider>
      </UtilsProvider>
    </Switch>
  </Router>
);

export default App;
