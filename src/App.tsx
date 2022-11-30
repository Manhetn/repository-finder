import { Redirect, Route, Switch } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
