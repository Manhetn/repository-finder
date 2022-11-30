import { useEffect, useState } from 'react';
import useActions from '../../hooks/actions';
import useDebounce from '../../hooks/debounce';
import { useSearchUserQuery } from '../../store/github/github.api';
import Input from '../common/Input/Input';
import Error from '../common/Error/Error';
import Preloader from '../common/Preloader/Preloader';
import { IUser } from '../../models/models';
import classes from './UserSearch.module.css';

const UserSearch = () => {
  const [search, serSearch] = useState('');
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
      debounced.length > 3 && Array.isArray(users) && users.length !== 0 || isLoading
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
        type="search"
      />
      {showDropdown && (
        <div className={classes['users-conteiner']}>
          {isError && <Error />}
          {isLoading && <Preloader />}
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
        </div>
      )}
    </div>
  );
};

export default UserSearch;
