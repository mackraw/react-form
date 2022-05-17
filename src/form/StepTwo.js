import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import validator from 'validator';

export default function StepTwo({ formData, setFormData }) {
  const [error, setError] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    setFormData(formData);
  }, [setFormData, formData]);

  useEffect(() => {
    setError(error);
  }, [error]);

  const formatPhone = (e) => {
    const backspace = e.key === 'Backspace';
    const val = e.target.value;
    let newVal = '';
    newVal = val.replace(/\D/g, '');

    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }

    if (newVal.length >= 4 && newVal.length < 7) {
      newVal = `(${newVal.slice(0, 3)}) ${newVal.slice(3)}`;
    } else if (newVal.length >= 7) {
      newVal = `(${newVal.slice(0, 3)}) ${newVal.slice(3, 6)}-${newVal.slice(
        6,
        10
      )}`;
    }
    e.target.value = newVal;
  };

  const validate = (e) => {
    const fieldName = e.target.name;
    let errorMsg = '';
    const val = e.target.value;
    let value = validator.ltrim(val);

    if (
      fieldName === 'name' &&
      !validator.isAlpha(value, 'en-US', { ignore: ' ' })
    ) {
      errorMsg = 'Only letters and spaces are allowed.';
    } else if (fieldName === 'phone' && !validator.isMobilePhone(value)) {
      errorMsg = 'Please enter a valid phone number.';
    } else if (fieldName === 'email' && !validator.isEmail(value)) {
      errorMsg = 'Please enter a valid email.';
    }

    if (!value) {
      errorMsg = 'This field is required.';
    }

    e.target.value = value;
    value = validator.rtrim(value);
    setError((state) => ({ ...state, [fieldName]: errorMsg }));
    return errorMsg !== '';
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    if (fieldName === 'phone') {
      formatPhone(e);
    }
    const errors = validate(e);

    if (!errors) {
      setFormData((state) => ({ ...state, [fieldName]: e.target.value }));
    }
  };

  return (
    <div className="formSection">
      <h1 className="title">What are your details?</h1>
      <div>
        <p className="required">All fields are required.</p>
        <div className="inputItem">
          <label className="inputName" htmlFor="name">
            Full Name
          </label>
          <input
            className="inputBox"
            type="text"
            name="name"
            defaultValue={formData.name}
            required
            onChange={handleChange}
          />
          <p className="errorMsg">{error.name}</p>
        </div>
        <div className="inputItem">
          <label className="inputName" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="inputBox"
            type="tel"
            name="phone"
            defaultValue={formData.phone}
            required
            onChange={handleChange}
          />
          <p className="errorMsg">{error.phone}</p>
        </div>
        <div className="inputItem">
          <label className="inputName" htmlFor="email">
            Email
          </label>
          <input
            className="inputBox"
            type="text"
            name="email"
            defaultValue={formData.email}
            required
            onChange={handleChange}
          />
          <p className="errorMsg">{error.email}</p>
        </div>
      </div>
    </div>
  );
}

StepTwo.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
};
