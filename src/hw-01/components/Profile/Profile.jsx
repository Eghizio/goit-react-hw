import css from "./Profile.module.css";
import { clsx } from "../../utils";

const StatCount = ({ label, count }) => (
  <li className={clsx(css.stat, css.column)}>
    <span>{label}</span>
    <span className={clsx(css.text, css.strong)}>{count}</span>
  </li>
);

const InfoText = ({ children, strong = false }) => (
  <p className={clsx(css.text, strong && css.strong)}>{children}</p>
);

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => (
  <div className={css.profile}>
    <div className={css.info}>
      <img className={css.avatar} src={image} alt="User avatar" />
      <InfoText strong>{name}</InfoText>
      <InfoText>@{tag}</InfoText>
      <InfoText>{location}</InfoText>
    </div>

    <ul className={css.statlist}>
      <StatCount label="Followers" count={followers} />
      <StatCount label="Views" count={views} />
      <StatCount label="Likes" count={likes} />
    </ul>
  </div>
);
