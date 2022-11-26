import { Redirect, Route, Switch } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
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
