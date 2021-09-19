import {useForm } from "react-hook-form";
import { FIELDS, STEPS } from "../utils/constants";
import { useFormStateContext } from "../utils/hooks";
import logo1 from '../images/Vector2.png';
import logo2 from '../images/Vector9.png';
import '../App.css'
import second from '../images/second.png';

export const CovidForm = () => {
  const {fields, setStep, updateFields  } = useFormStateContext();
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
      defaultValues : {...fields.covid}
    });
    const goBack =() =>{
      setStep(STEPS.USERINFO)
  }

  const makeitlonger = watch('covidcheck')
  const makeitlonger1 = watch('antitest')

    const onSubmit = (data) => {
        updateFields(FIELDS.COVIDINFO, data)
        setStep(STEPS.VACCINEINFO);
    }
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
        <div className='pagination2'>2/4</div>
          <p className="app">
          <h3>კოვიდი გქონდა?*</h3>
          <label htmlFor="covidcheck">კი</label>

          <input
          value="კი"
            type="radio"
            name="covidcheck"
            {...register('covidcheck',{
              required: 'ეს ველი აუცილებელია',
          })}
          />
          </p>
          <p>
          <label htmlFor="covidcheck">არა</label>
          <input
          value="არა"
            type="radio"
            name="covidcheck"
            {...register('covidcheck',{
                required: 'ეს ველი აუცილებელია',
            })}
          />
          </p>
          <p>
          <label htmlFor="covidcheck">ახლა მაქვს  </label>
          <input
          value="ახლა მაქვს"
            type="radio"
            name="covidcheck"
            {...register('covidcheck',{
                required: 'ეს ველი აუცილებელია',
            })}
          />
          {errors.covidcheck && (<h6> {errors.covidcheck.message} </h6>)
          }
          </p>
          { makeitlonger=="კი" && <p> 
            <h3>ანტისხეულების ტესტი ხომ არ გაქვს გაკეთებული?</h3>
            <label htmlFor="antitest">კი</label> 
            <br/>  <input value = "კი" type="radio" name="antitest" 
            {...register('antitest',{ required: 'ეს ველი აუცილებელია', })} /> 
            <br/>
            <label htmlFor="antitest">არა</label> 
            <br/> <input value = "არა" type="radio" name="antitest" {...register('antitest',{ required: 'ეს ველი აუცილებელია', })} /> 
            {errors.antitest && (<h6> {errors.antitest.message} </h6>) } </p> 
          } 

          { makeitlonger1==="კი" && <p> 
            <h3>თუ გახსოვს, გთხოვ მიუთითე მიახლოებითი თარიღი და რაოდენობა ანტისხეულების</h3>
            <label htmlFor="antitest1">როდის გაიკეთე ანტისხეულების ტესტი?*</label> 
            <br/> <input type="date" name="antitest1" 
            {...register('antitest1',{ required: 'ეს ველი აუცილებელია', })} /> 
            {errors.antitest1 && (<h6> {errors.antitest1.message} </h6>) } 
            <br/>
            <label htmlFor="antitest11">ანტისხეულების რაოდენობა</label> 
            <br/> <input type="number" name="antitest11" {...register('antitest11',{ required: 'ეს ველი აუცილებელია', })} /> 
            {errors.antitest11 && (<h6> {errors.antitest11.message} </h6>) } </p> 
          }   

          { makeitlonger1==="არა" && <p>  
          <h3>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი), როდის გქონდა კოვიდ19</h3>
            <label htmlFor="antitest21">პერიოდი როდის გქონდა კოვიდი(დასაწყისი) </label> 
            <br/> <input  type="date" name="antitest21" {...register('antitest21',{ required: 'ეს ველი აუცილებელია', })} /> 
            {errors.antitest22 && (<h6> {errors.antitest22.message} </h6>) }
            <br/>
            <label htmlFor="antitest22">პერიოდი როდის გქონდა კოვიდი(დასასრული) </label> 
            <br/> <input  type="date" name="antitest22" {...register('antitest22',{ required: 'ეს ველი აუცილებელია', })} /> 
            {errors.antitest22 && (<h6> {errors.antitest22.message} </h6>)} </p> 
            
          }   
          <div className="paging-wrapper">
          <button   onClick={goBack}><img src = {logo2} className="buttonBack" /></button>
          <button> <img src = {logo1} className="buttonNext"/> </button>
        </div>
      </form>
            <div className="img-wrapper">
            <img src={second} alt="secondpage" />
      </div>
    </div>
  </div>   
);   

}         