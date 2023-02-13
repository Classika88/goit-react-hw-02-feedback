import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div className={css.feedback}>
      {options.map(item => (
        <button
          name={item}
          type="button"
          onClick={onLeaveFeedback}
          className={css.Btn}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
