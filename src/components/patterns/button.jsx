import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  ariaLabel,
  classes,
  ctaText,
  ctaUrl,
  isReversed,
  isSolid,
  onClick,
}) => {
  if (onClick) {
    return (
      <button
        className={`button ${isReversed ? 'button--reversed' : ''} ${
          isSolid ? 'button--solid' : ''
        } ${classes}`}
        type="button"
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <span>{ctaText}</span>
      </button>
    );
  }

  return (
    <a
      className={`button ${isReversed ? 'button--reversed' : ''} ${
        isSolid ? 'button--solid' : ''
      } ${classes}`}
      href={ctaUrl}
      aria-label={ariaLabel}
    >
      <span>{ctaText}</span>{' '}
    </a>
  );
};

Button.propTypes = {
  ariaLabel: PropTypes.string,
  classes: PropTypes.string,
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string,
  isReversed: PropTypes.bool,
  isSolid: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  ariaLabel: null,
  classes: '',
  ctaUrl: '',
  isReversed: false,
  isSolid: false,
  onClick: null,
};

export default Button;
