import Container from '../../components/common/Container/Container';
import FavouritesList from '../../components/FavouritesList/FavouritesList';
import RepoCard from '../../components/RepoCard/RepoCard';
import useAppSelector from '../../hooks/redux';

const FavoritesPage = () => {
  const { favourites } = useAppSelector((state) => state.gitHub);

  return (
    <>
      <Container>
        <FavouritesList favourites={favourites} />
      </Container>
    </>
  );
};

export default FavoritesPage;
