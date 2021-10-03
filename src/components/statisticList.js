import Statistics from './statistics';
import PropTypes from 'prop-types';

function StatisticList({ items }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {items.map(item => (
          <Statistics
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticList.protoTypes = {
  id: PropTypes.number,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticList;
