import PropTypes from 'prop-types';

function Statistics(props) {
  const { id, label, percentage } = props;
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
