import PropTypes from 'prop-types';

export default function StepThree({ formData }) {
  const obj = `{
    name: ${formData.name}
    phone: ${formData.phone}
    email: ${formData.email}
    totalPrice: ${formData.price}
    selectedDrinks: [${formData.selectedDrinks.map(
      (drink) => `\n        "${drink}"`
    )}
    ]
}`;

  return (
    <div className="formSection">
      <p className="title center">Get excited!</p>
      <p className="message center">
        At this point, the form data would be sent to the back-end for
        processing. Since this is a model UI, the email isn't actually sent.
        Here is the data object (<code>totalPrice</code> is stored in cents):
      </p>
      <pre className="code" wrap="true">
        {obj}
      </pre>
    </div>
  );
}

StepThree.propTypes = {
  formData: PropTypes.object,
};
