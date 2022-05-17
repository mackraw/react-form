import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { data } from '../assets/data';
import Input from '../components/Input';

export default function StepOne({
  formData,
  setFormData,
  setServiceNotSelected,
}) {
  useEffect(() => {
    setFormData(formData);
  }, [setFormData, formData]);

  const handleChange = (e) => {
    const itemData = data[e.target.id.replace(/\D/gi, '')];
    let { price, selectedDrinks } = formData;
    const itemSelected = selectedDrinks.indexOf(itemData.name) > -1;

    if (!itemSelected) {
      price += itemData.price;
      selectedDrinks.push(itemData.name);
    } else if (itemSelected) {
      price -= itemData.price;
      selectedDrinks.splice(selectedDrinks.indexOf(itemData.name), 1);
    }

    setFormData((state) => ({
      ...state,
      price,
      selectedDrinks,
    }));

    if (formData.selectedDrinks.length !== 0) {
      setServiceNotSelected(false);
    }
  };

  return (
    <div className="formSection">
      <h1 className="title">Select one or more drinks</h1>
      <ul className="list">
        {data.map(({ name, price }, index) => (
          <li key={index} className="item">
            <Input
              type="checkbox"
              id={`item${index}`}
              name={name}
              value={name}
              checked={formData.selectedDrinks.indexOf(name) !== -1}
              onChange={handleChange}
              price={price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

StepOne.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  setServiceNotSelected: PropTypes.func,
};
