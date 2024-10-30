import css from "./FriendList.module.css";

const Status = ({ online = false }) =>
  online ? (
    <p className={css.online}>Online</p>
  ) : (
    <p className={css.offline}>Offline</p>
  );

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={css.item}>
    <img src={avatar} alt={`${name} Avatar`} width="48" />
    <p className={css.name}>{name}</p>
    <Status online={isOnline} />
  </div>
);

export const FriendList = ({ friends }) => (
  <ul className={css.friendlist}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);
