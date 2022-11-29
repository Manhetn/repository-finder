import Container from '../../components/container';
import RepoCard from '../../components/RepoCard/RepoCard';
import useAppSelector from '../../hooks/redux';

const FavoritesPage = () => {
  const { favourites } = useAppSelector((state) => state.gitHub);

  return (
    <>
      <Container>
        <h1>Favorites repositories</h1>
        <div>
          {favourites.map((repo, index) => {
            return (
              <RepoCard
                repo={repo}
                fullCard={true}
                key={repo.id + '-' + index}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default FavoritesPage;
