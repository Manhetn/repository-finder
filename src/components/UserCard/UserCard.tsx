import { IUser } from '../../models/models';

const UserCard = ({ login, avatar_url }: IUser) => {
  return (
    <div>
      <h3>
        {login}
        {avatar_url}
      </h3>
    </div>
  );
};

export default UserCard;
