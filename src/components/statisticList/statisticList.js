import Statistics from 'components/statistics';
import PropTypes from 'prop-types';

function StatisticList({ items }) {
  console.log(items);

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
  Statistics: PropTypes.node,
};
export default StatisticList;
