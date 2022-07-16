import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const props = { good, neutral, bad, total };
  const keys = Object.keys(props);
  const values = Object.values(props);
  const component = keys.map((el, i) => {
    return (
      <li className={css.statistics__item} key={i}>
        <p className={css.statistics__text}>
          {el}: {values[i]}
        </p>
      </li>
    );
  });

  return (
    <ul className={css.statistics__list}>
      {component}
      <li className={css.statistics__item}>
        <p className={css.statistics__text}>
          Positive feedback: {positivePercentage}
        </p>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percpositivePercentageents: PropTypes.func.isRequired,
};
