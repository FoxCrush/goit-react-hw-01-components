import PropTypes from 'prop-types';
import s from './userCard.module.css';

const defaultImage = 'https://bastion.if.ua/images/joomlart/demo/default.jpg';

function CreateUserCard(props) {
  const { name, tag, location, avatar = defaultImage, stats } = props;

  return (
    <div
      className={s.profile}
      style={{ backgroundColor: 'rgb(213, 211, 211)' }}
    >
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers </span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views </span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes </span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

CreateUserCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default CreateUserCard;
