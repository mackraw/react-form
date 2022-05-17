import PropTypes from 'prop-types';

export default function SubmitButton({
  onClick,
  className,
  disabled = false,
  children,
}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

SubmitButton.propTypes = {
  onClick: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
};
