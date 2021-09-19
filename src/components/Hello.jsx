import { Controller, useForm } from "react-hook-form";

import { FIELDS, STEPS } from "../utils/constants";
import { useContext } from "react";
import { FormStepContext } from "../utils/context/FormStepContext"
import { useFormStateContext } from "../utils/hooks";
import ReactDOM from "react-dom";
import {Radio, RadioGroup} from '@adobe/react-spectrum';
import logo1 from '../images/Vector2.png';
import logo2 from '../images/Vector9.png';
import '../App.css'
import second from '../images/second.png';
import vector from '../images/Vector.png';



export const Hello = () => {
  const {fields, setStep, updateFields  } = useFormStateContext();
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
      defaultValues : {...fields.covid}
    });

  



    const onSubmit = (data) => {
        updateFields()
        setStep(STEPS.USERINFO);
    }



    return (

     <div>
     
        <img className="firstimg" src={vector} />
        <button onClick={onSubmit}><div className="firstbutton">კითხვარის <br/>დაწყება</div></button>

     
    </div>

  
        );   
     
}