import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <li className={css.notification}>
      <p className={css.notification__text}>{message}</p>
    </li>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
