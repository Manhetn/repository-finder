// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { IUser } from '../../models/models';
import { useGetUserReposQuery } from '../../store/github/github.api';
import Error from '../common/Error/Error';
import Preloader from '../common/Preloader/Preloader';
import RepoCard from '../RepoCard/RepoCard';
import classes from './FoundUser.module.css';

interface IFoundUserProps {
  foundUser: IUser;
}
const FoundUser = ({ foundUser }: IFoundUserProps) => {
  const [showList, setShowList] = useState(false);

  const {
    isError,
    isLoading,
    data: repositories
  } = useGetUserReposQuery(foundUser.login);

  useEffect(() => {
    setShowList(Array.isArray(repositories) && repositories.length !== 0);
  }, [repositories]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <a
          className={classes.link}
          href={foundUser.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <h3 className={classes.login}>Developer: {foundUser.login}</h3>
        </a>
        <a
          className={classes.link}
          href={foundUser.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes.avatar}
            src={foundUser.avatar_url}
            alt={`Avatar ${foundUser.login}`}
            title={foundUser.login}
          ></img>
        </a>
      </div>
      {isError && <Error />}
      {isLoading && <Preloader />}
      {showList && (
        <ul className={classes.list}>
          {repositories?.map((repo) => {
            return (
              <li className={classes.item} key={repo.id}>
                {<RepoCard repo={repo} />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FoundUser;
