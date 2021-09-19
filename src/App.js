import { useState } from 'react';
import './App.css';
import { defaultFields, STEPS } from "./utils/constants";
import { FormFieldsContext } from './utils/context/FormFieldContext';
import { FormStepContext } from './utils/context/FormStepContext';
import { getCurrentForm } from "./utils/helpers";
import {
  BrowserRouter, 
  Route,
  Index,
} from "react-router-dom";

function App() {
  const [step, setStep] = useState(STEPS.HELLO);
  const [fields, setFields] = useState(defaultFields);

  const updateFields = (field, value) => {
    const newFields = {...fields};
    newFields[field] = value;
    setFields(newFields);
  };

  return (
  <BrowserRouter basename={window.location.pathname || ''}>
    <FormStepContext.Provider value={{step, setStep}}>
      <FormFieldsContext.Provider value={{fields, updateFields}}>
        <div className="App">
          {getCurrentForm(step)}
        </div>
      </FormFieldsContext.Provider>
    </FormStepContext.Provider>
  </BrowserRouter>
  );
}

export default App;
