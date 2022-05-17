import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';

export default function Input({ id, name, checked, onChange, price }) {
  return (
    <label htmlFor={id} className="label">
      <div className="checkboxWrapper">
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          name={name}
          value={name}
          checked={checked}
          onChange={onChange}
        />
        <span className="customCheckbox" />
      </div>
      {name} - <span className="price">{formatMoney(price)}</span>
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  price: PropTypes.number,
};
