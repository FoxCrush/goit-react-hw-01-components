import PropTypes from 'prop-types';
import s from './statistics.module.css';

function Statistics(props) {
  const { id, label, percentage } = props;
  return (
    <li className={s.item} key={id}>
      <span className="label">{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
