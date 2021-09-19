import { useState } from 'react';
import './App.css';
import { defaultFields, STEPS } from "./utils/constants";
import { FormFieldsContext } from './utils/context/FormFieldContext';
import { FormStepContext } from './utils/context/FormStepContext';
import { getCurrentForm } from "./utils/helpers";
import { BrowserRouter } from 'react-router-dom/BrowserRouter'




function App() {
  const [step, setStep] = useState(STEPS.HELLO);
  const [fields, setFields] = useState(defaultFields);

  const updateFields = (field, value) => {
    const newFields = {...fields};
    newFields[field] = value;
    setFields(newFields);
  };

  return (
    <FormStepContext.Provider value={{step, setStep}}>
      <FormFieldsContext.Provider value={{fields, updateFields}}>
      <BrowserRouter basename={window.location.pathname || ''}>
       <Route exact path="/" component={Index} />
      </BrowserRouter>
        <div className="App">
          {getCurrentForm(step)}
        </div>
      </FormFieldsContext.Provider>
    </FormStepContext.Provider>
  );
}

export default App;
