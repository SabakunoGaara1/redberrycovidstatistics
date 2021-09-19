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
import fourth from '../images/4thpage.png';



export const ReviewFormDetails = () => {
  const {fields, setStep, updateFields  } = useFormStateContext();
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
      defaultValues : {...fields.REViEW}
    });

    const goBack =() =>{
      setStep(STEPS.VACCINEINFO)
  }




  const makeitlonger = watch('covidcheck')
  const makeitlonger1 = watch('antitest')
  var string = "chasma";

  console.log(makeitlonger);
  console.log(makeitlonger1);


    const onSubmit = (data) => {
        updateFields(FIELDS.REVIEW, data)
        setStep();
    }

    const onError = (errors, error) => {};

    return (
        <div>
            
            <header >
<div className="headone">
    <h1 class="REDBERY">REDBERRY
    <h1 className="xazi">__________________________________________________________________</h1>
    </h1>
</div>
</header>
 

        <div className="page-wrapper">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className='pagination1'>4/4</div>
            <p className="lasttext">
                რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით 
                ბევრისთვის არის და ყოფილა წლების განმავლობაში ერთად მიზნებისთვის ბრძოლის მიზეზი, 
                ბევრისთვის კი - ჩვენთან გადმოსვლის. <br/> <br/>პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ 
                პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა
            </p>

            <p className="app">
            <h4>რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, 
                სადაც ყველა სურვილისამებრ ჩაერთვება?</h4>
        

            </p>
            <p>
            <label htmlFor="zoom">კვირაში ორჯერ</label>
                <input
                value="2"
                type="radio"
                name="zoom"
                {...register('zoom',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
            </p>
            <p>
            <label htmlFor="zoom">კვირაში ერთხელ</label>
                
                <input
                value="1"
                type="radio"
                name="zoom"
                {...register('zoom',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
            </p>

            <p>
            <label htmlFor="covidcheck">ორ კვირაში ერთხელ</label>
                
                <input
                value="141"
                type="radio"
                name="zoom"
                {...register('zoom',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
            </p>
            <p>
              <label htmlFor="zoom">თვეში ერთხელ</label>
                
                <input
                value="11"
                type="radio"
                name="zoom"
                {...register('zoom',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
            </p>
            
            {errors.zoom && (<h6> {errors.zoom.message} </h6>)
            }
            <p className="app">
            <h4>რამდენი დღე კვირაში ისურვებდი ოფისიდან მუშაობას?</h4>
        
            <p>
            <label htmlFor="weeklyWork">0</label>
                <input
                value="0"
                type="radio"
                name="weeklyWork"
                {...register('weeklyWork',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
            </p>
            
            <p>
            <label htmlFor="weeklyWork">1</label>
                <input
                value="1"
                type="radio"
                name="weeklyWork"
                {...register('weeklyWork',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
            </p>
            <p>
            <label htmlFor="weeklyWork">2</label>
                
                <input
                value="2"
                type="radio"
                name="weeklyWork"
                {...register('weeklyWork',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
            </p>

            <p>
            <label htmlFor="weeklyWork">3</label>
                
                <input
                value="3"
                type="radio"
                name="weeklyWork"
                {...register('weeklyWork',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
            </p>
            <p>
              <label htmlFor="weeklyWork">4</label>
                
                <input
                value="4"
                type="radio"
                name="weeklyWork"
                {...register('weeklyWork',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
            </p>
            <p>    
            <label htmlFor="weeklyWork">5</label>
                
                <input
                value="5"
                type="radio"
                name="weeklyWork"
                {...register('weeklyWork',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />     
                {errors.weeklyWork && (<h6> {errors.weeklyWork.message} </h6>)
            }
            </p>

            </p>
            
            <p>    
                <h3>
                რას ფიქრობ ფიზიკურ შეკრებებზე?
                </h3>
            <label htmlFor="textarea1"></label>
                
                <input
                type="textarea"
                name="textarea1"
                {...register('textarea1')}
                />     
            </p>

             
            <p>    
                <h3>
                რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
                </h3>
            <label htmlFor="textarea2"></label>
                
                <input
                type="textarea"
                name="textarea2"
                {...register('textarea2')}
                />     
            </p>


            <div className="paging-wrapper">
                <button   onClick={goBack}><img  className="buttonback" src = {logo2} /></button>
                <button> <img src = {logo1} className="buttonNext"/> </button>
            </div>



            
        </form>
                
        <div className="img-wrapper1">
            <img src={fourth} alt="fourthpage" />
        </div>

        </div>
       </div>
        );   

}