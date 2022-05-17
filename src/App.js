import Form from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A React Form UI</h1>
      </header>
      <Form />
      <p className="info">
        This is a React UI for a multi-step form. Data is loaded from an array
        of objects. State is saved and preserved while the modal remains open.
        The form also performs client-side validation of all input elements, and
        demonstrates phone formatting.
      </p>
    </div>
  );
}

export default App;
