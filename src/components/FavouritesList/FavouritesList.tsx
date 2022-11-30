import { IRepository } from '../../models/models';
import RepoCard from '../RepoCard/RepoCard';
import classes from './FavouritesList.module.css';

interface IFavouritesListProps {
  favourites: IRepository[];
}

const FavouritesList = ({ favourites }: IFavouritesListProps) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Your favourites favourites</h1>
      <ul className={classes.list}>
        {favourites.length ? (
          favourites.map((repo, index) => {
            return (
              <li className={classes.item} key={repo.id + '-' + index}>
                <RepoCard repo={repo} fullCard={true} />
              </li>
            );
          })
        ) : (
          <div>You don&apos;t have repositories yet</div>
        )}
      </ul>
    </div>
  );
};

export default FavouritesList;
