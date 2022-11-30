import Container from '../../components/container';
import FoundUser from '../../components/FoundUser/FoundUser';
import UserSearch from '../../components/UserSearch/UserSearch';
import useAppSelector from '../../hooks/redux';
// import useAppSelector from '../../hooks/redux';

const SearchPage = () => {
  const { foundUser } = useAppSelector((state) => state.foundUser);

  return (
    <Container>
      <UserSearch />
      {foundUser && <FoundUser foundUser={foundUser} />}
    </Container>
  );
};

export default SearchPage;
