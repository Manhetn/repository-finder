import { useEffect, useState } from 'react';
import useActions from '../../hooks/actions';
import useDebounce from '../../hooks/debounce';
import { useSearchUserQuery } from '../../store/github/github.api';
import Input from '../common/Input/Input';
import Error from '../Error/Error';
import Preloader from '../Preloader/Preloader';
import { IUser } from '../../models/models';
import classes from './UserSearch.module.css';

const UserSearch = () => {
  const [search, serSearch] = useState('vladilenm');
  const debounced = useDebounce(search);
  const {
    data: users,
    isError,
    isLoading
  } = useSearchUserQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const { updateFoundUser } = useActions();

  
  const handlerSelectUser = (user: IUser): void => {
    updateFoundUser(user);
    setShowDropdown(false);
  };

  useEffect(() => {
    setShowDropdown(
      debounced.length > 3 && Array.isArray(users) && users.length !== 0
    );
  }, [debounced, users]);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Find your favorite developer</h1>
      <Input
        name="search"
        value={search}
        onChange={(data) => serSearch(data.value)}
        error=""
        placeholder="Search for GitHub user name"
      />
      {isError && <Error />}
      {isLoading && <Preloader />}
      {showDropdown && (
        <ul className={classes['users-list']}>
          {users?.length &&
            users.map((user, index) => {
              return (
                <li
                  className={classes.user}
                  key={user.id}
                  onClick={() => handlerSelectUser(user)}
                >
                  {user.login}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default UserSearch;
