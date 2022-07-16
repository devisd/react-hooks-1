import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => {
  const props = { good, neutral, bad };
  const state = Object.keys(props);

  const component = state.map(e => {
    return (
      <li className={css.button__item} key={e}>
        <button type={css.button} onClick={onLeaveFeedback}>
          {e}
        </button>
      </li>
    );
  });

  return <ul className={css.button__list}>{component}</ul>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
