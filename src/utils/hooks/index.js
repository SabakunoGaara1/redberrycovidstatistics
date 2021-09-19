import { useContext } from "react";
import { FormFieldsContext } from "../context/FormFieldContext";
import { FormStepContext } from "../context/FormStepContext";


export const useFormStateContext = () => ({
    ...useContext(FormStepContext),
    ...useContext(FormFieldsContext),

});