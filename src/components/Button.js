import PropTypes from 'prop-types';

export default function Button({
  onClick,
  className,
  disabled = false,
  children,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any.isRequired,
};
