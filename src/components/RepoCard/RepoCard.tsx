import classes from './RepoCard.module.css';
import { IRepository } from '../../models/models';
import useActions from '../../hooks/actions';
import useAppSelector from '../../hooks/redux';
import { useState } from 'react';
import Button from '../common/Button/Button';

interface IRepoCard {
  repo: IRepository;
  fullCard?: boolean;
}

const RepoCard = ({ repo, fullCard = false }: IRepoCard) => {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.gitHub);
  const [isFavourit, setIsFavourit] = useState(
    favourites.some((favourit) => repo.id === favourit.id)
  );

  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    addFavourite(repo);
    setIsFavourit(true);
  };

  const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    removeFavourite(repo);
    setIsFavourit(false);
  };

  return (
    <div className={classes.container}>
      {fullCard && (
        <a
          className={classes.link + ' ' + classes.owner}
          href={repo.owner.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <h3 className={classes.login}>{repo.owner.login}</h3>
          <img
            className={classes.avatar}
            src={repo.owner.avatar_url}
            alt={`Avatar ${repo.owner.login}`}
            title={repo.owner.login}
          ></img>
        </a>
      )}
      <a
        className={classes.link}
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className={classes.name}>{repo.full_name}</h2>
      </a>
      <p>Forks: {repo.forks}</p>
      <p>Watchers: {repo.watchers}</p>
      <p className={classes.description}>{repo.description}</p>
      {isFavourit ? (
        <Button handlerOnClick={removeFromFavourite}>remove</Button>
      ) : (
        <Button handlerOnClick={addToFavourite}>add</Button>
      )}
    </div>
  );
};

export default RepoCard;
