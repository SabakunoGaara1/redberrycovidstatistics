import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormStepContext } from "../utils/context/FormStepContext";
import { FIELDS, STEPS } from "../utils/constants";
import { useFormStateContext } from "../utils/hooks";
import {Radio, RadioGroup} from '@adobe/react-spectrum';
import logo from '../images/Vector2.png';
import '../App.css'




export const UserForm = () => {
  const { fields, setStep, updateFields } = useFormStateContext();
    const {
      register, 
      handleSubmit, 
      formState: {errors},
    } = useForm({
      defaultValues: {
          ...fields.userInfo,
      },
    });

    const onSubmit = (data) => {
        console.log(data);
        setStep(STEPS.COVIDINFO);
        updateFields(FIELDS.USERINFO, data);
    };

    const onError = (errors, error) => {};
    
  return (
<div>
    <header className="headone">

      <h1 class="REDBERY">REDBERRY
      <h1 className="xazi">__________________________________________________________________</h1>
      </h1>
    </header>
    <div className="page-wrapper">
                    
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className='pagination1'>1/4</div>
          <p>
          <label htmlFor="name">სახელი?*:</label>
          <br/>
          <input
          type="text"
          name="name"
                                  
          {...register('name',{
            required: 'სახელი აუცილებელია',
            pattern: {
              value: /^[A-Za-z-ა-ჰ]+$/,
              message: 'სახელი უნდა შეიცავდეს მხოლოდ ასოებს'
            },
            minLength: {
              value: 3,
              message: 'მინიმუმ უნდა შედგებოდეს 3 სიმბოლოსგან' 
            },
            maxLength: {
              value: 255,
              message: 'მაქსიმუმ უნდა შედგებოდეს 255 სიმბოლოსგან' 
            },
            

          })}
          />                   
                
          {errors.name && (<h6> {errors.name.message} </h6>)
          }
          </p>
          <p>
          <label htmlFor="surname">გვარი?*:</label>
          <br/>
          <input
          type="text"
          name="surname"                      

          {...register('surname',{                      
          required: 'გვარი აუცილებელია',
          pattern: {
          value: /^[A-Za-z-ა-ჰ]+$/,
          message: 'სახელი უნდა შეიცავდეს მხოლოდ ასოებს'
          },
          minLength: {
          value: 3,
          message: 'მინიმუმ უნდა შედგებოდეს 3 სიმბოლოსგან' 
          },
          maxLength: {
          value: 255,
          message: 'მაქსიმუმ უნდა შედგებოდეს 255 სიმბოლოსგან' 
          },
          })}
          />
          {errors.surname && (<h6> {errors.surname.message} </h6>)
          }
          </p>
          <p>
          <label htmlFor="email">იმეილი?*:</label>
          <br/>
          <input
          type="text"
          name="email"
                                  
          {...register('email',{
          required: 'იმეილი აუცილებელია',
          pattern: {

          message: 'არავალიდური იმეილი' 
          },
          pattern: {
          value:  /@redberry.ge/,
          message: 'გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)' 
          },
                                      
          })}
          />
          {errors.email && (<h6> {errors.email.message}</h6>)
          }
          </p>
          <div className="paging-wrapper"> 
          <button className="buttonNext"> <img src = {logo}/> </button>
        </div>
      </form>                 
                        
      <div className="img-wrapper">
      <img src="https://raw.githubusercontent.com/SabakunoGaara1/redberrycovidstatistics/master/src/images/firstpage.png" alt="firstPage" />
      </div>
        
    </div>
    <h5>___________________________<h5>*-ით მონიშნული ველების <br/>
                          შევსება აუცილებელია </h5></h5>    
 </div>
);
}
                