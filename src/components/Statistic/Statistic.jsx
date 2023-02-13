import css from './Statistic.module.css';
import PropTypes from 'prop-types';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistic}>
      <ul className={css.statisticList}>
        <li className={css.statisticItem}>Good: {good}</li>
        <li className={css.statisticItem}>Neutral: {neutral}</li>
        <li className={css.statisticItem}>Bad: {bad}</li>
        <li className={css.statisticItem}>Total: {total}</li>
        <li className={css.statisticItem}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
