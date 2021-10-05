import Statistics from 'components/statistics';
import PropTypes from 'prop-types';
import styles from './statisticList.module.css';

function StatisticList({ stats, title = '' }) {
  return (
    <section className={styles.statisticsSection}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(item => (
          <Statistics
            color={item.color}
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
