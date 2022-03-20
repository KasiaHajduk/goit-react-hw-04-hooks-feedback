import './Feedback.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
  return (<button className="feedback__button" name={options} onClick={onLeaveFeedback}>{options}</button>);
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
