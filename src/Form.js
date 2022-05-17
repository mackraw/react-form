import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import StepOne from './form/StepOne';
import StepTwo from './form/StepTwo';
import StepThree from './form/StepThree';
import Button from './components/Button';
import SubmitButton from './components/SubmitButton';

export default function Form() {
  const [step, setStep] = useState(1);
  const [drinkNotSelected, setDrinkNotSelected] = useState(false);

  const defaultFormData = {
    name: '',
    phone: '',
    email: '',
    price: 0,
    selectedDrinks: [],
  };

  const [formData, setFormData] = useState(defaultFormData);

  const showModal = (e) => {
    e.target.disabled = true;
    document.querySelector('.form').classList.add('isModalShowing');
    document.querySelector('.overlay').classList.add('isOverlayShowing');
  };

  const nextStep = () => {
    if (formData.selectedDrinks.length !== 0) {
      setStep(step + 1);
    } else {
      setDrinkNotSelected(true);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const close = () => {
    document.querySelector('.showModalBtn').disabled = false;
    document.querySelector('.form').classList.remove('isModalShowing');
    document.querySelector('.overlay').classList.remove('isOverlayShowing');
    document
      .querySelectorAll('.checkbox')
      .forEach((item) => (item.checked = false));
    setFormData(defaultFormData);
    setStep(1);
  };

  const populateContent = () => {
    let content = <StepOne formData={formData} setFormData={setFormData} />;
    if (step === 1) {
      content = (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          setServiceNotSelected={setDrinkNotSelected}
        />
      );
    } else if (step === 2) {
      content = <StepTwo formData={formData} setFormData={setFormData} />;
    } else if (step === 3) {
      content = <StepThree formData={formData} />;
    }
    return content;
  };

  return (
    <>
      <div className="overlay" onClick={close} role="presentation" />
      <button className="btn showModalBtn" onClick={showModal} type="button">
        Open form
      </button>
      <form onSubmit={handleSubmit} className="form">
        <Button onClick={close} className="closeBtn">
          <AiFillCloseCircle className="closeBtnIcon" />
        </Button>
        <div className="formContent">
          {populateContent()}

          <div className="formErrorsWrapper">
            {drinkNotSelected ? (
              <p className="errorMsg">Please select at least one option.</p>
            ) : null}
          </div>
        </div>

        <div className="buttonsWrapper">
          {step === 1 ? (
            <>
              <Button onClick={prevStep} disabled className="btn">
                Previous
              </Button>

              <Button onClick={nextStep} className="btn">
                Next
              </Button>
            </>
          ) : null}
          {step === 2 ? (
            <>
              <Button onClick={prevStep} disabled={false} className="btn">
                Previous
              </Button>

              <SubmitButton className="btn">Submit</SubmitButton>
            </>
          ) : null}
          {step === 3 ? (
            <>
              <Button onClick={prevStep} disabled className="btn">
                Previous
              </Button>

              <Button onClick={close} className="btn">
                Close
              </Button>
            </>
          ) : null}
        </div>
      </form>
    </>
  );
}
