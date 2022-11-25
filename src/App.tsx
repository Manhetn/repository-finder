import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <>
      <h1>App</h1>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
