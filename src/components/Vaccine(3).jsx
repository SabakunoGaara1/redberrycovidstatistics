import { useForm } from "react-hook-form";
import { FIELDS, STEPS } from "../utils/constants";
import { useContext } from "react";
import { FormStepContext } from "../utils/context/FormStepContext";
import { useFormStateContext } from "../utils/hooks";
import logo1 from '../images/Vector2.png';
import logo2 from '../images/Vector9.png';
import '../App.css'
import third from '../images/3rdpage.png';


export const VaccineInfo = () => {
    const {fields, setStep, updateFields  } = useFormStateContext();
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        defaultValues : {...fields.vaccine}
      });

    const goBack =() =>{
      
        setStep(STEPS.COVIDINFO)
    };

    const onSubmit = (data) => {
        updateFields(FIELDS.VACCINEINFO, data)
        setStep(STEPS.REVIEW);
    };

    
    const makeitlonger = watch('vaccinecheck');
    const makeitlonger1 = watch('vaccinecheck');
    const secondReg = watch('stepchange');
    const whatyouwaiting = watch('whatyouwaiting');


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
              <div className='pagination2'>3/4</div>
    
                <p className="app">
                <h3>უკვე გაკეთებული გაქვს ვაქცინა?</h3>
                <label htmlFor="vaccinecheck">კი</label>
            
                <input
                value="კი"
                  type="radio"
                  name="vaccinecheck"
                  {...register('vaccinecheck',{
                    required: 'ეს ველი აუცილებელია',
                })}
                />
                </p>
                
                <p>
                <label htmlFor="vaccinecheck">არა</label>
                <input
                value="არა"
                  type="radio"
                  name="vaccinecheck"
                  {...register('vaccinecheck',{
                      required: 'ეს ველი აუცილებელია',
                  })}
                />

                {errors.vaccinecheck && (<h6> {errors.vaccinecheck.message} </h6>)
                }
                </p>
    
                { makeitlonger=="კი" && <p> 
                  <h3>აირჩიე რომელ ეტაპზე ხარ</h3>
              
                  <label htmlFor="stepchange">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label> 
                 <input value = "firstDose" type="radio" name="stepchange" 
                  {...register('stepchange',{ required: 'ეს ველი აუცილებელია', })} /> 
                  <br/>
                  <label htmlFor="stepchange">სრულად ვაქცინირებული ვარ</label> 
               <input value = "fullyVaccinated" type="radio" name="stepchange" 
                  {...register('stepchange',{ required: 'ეს ველი აუცილებელია', })} /> 
                  <br/>
                  <label htmlFor="stepchange">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label> 
               <input value = "secondReg" type="radio" name="stepchange" {...register('stepchange',{ required: 'ეს ველი აუცილებელია', })} /> 
                  {secondReg==="secondReg" && <h6>  <p>რომ აღარ გადადო, ბარემ ეხლავე დარეგისტრირდი </p> 
                       <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a></h6>}
                  {errors.stepchange && (<div> {errors.stepchange.message} </div>) } </p> 
                } 
          
    
              
                  
    
             
    
                { makeitlonger1==="არა" && <p>  
                <h3>რას ელოდები?</h3>
                  <label htmlFor="whatyouwaiting">დარეგისტრირებული ვარ და ველოდები თარიღს </label> 
                  <input  type="radio" name="whatyouwaiting" {...register('whatyouwaiting',{ required: 'ეს ველი აუცილებელია', })} /> 
                 
                  <br/>
                  <label htmlFor="whatyouwaiting">არ ვგეგმავ </label> 
                 <input  type="radio" name="whatyouwaiting" {...register('whatyouwaiting',{ required: 'ეს ველი აუცილებელია', })} /> 
                
                  <br/>
                  <label htmlFor="whatyouwaiting"> გადატანილი მაქვს და ვგეგმავ აცრას</label> 
            <input  value = "3" type="radio" name="whatyouwaiting" {...register('whatyouwaiting',{ required: 'ეს ველი აუცილებელია', })} /> 
                  {whatyouwaiting==="3" && <div>  <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. </p> 
                       <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a></div>}
                  {errors.whatyouwaiting && (<h6> {errors.whatyouwaiting.message} </h6>) } </p> 
                  
                }   
    
    
    
    
                
                
    <div className="paging-wrapper">
        <button   onClick={goBack}><img className="buttonBack" src = {logo2} /></button>
            <button> <img src = {logo1} className="buttonNext"/> </button>
            </div>
            </form>
            <div className="img-wrapper">
               <img src={third} alt="thirdpage" />
             </div>

             

           </div>
           </div>
        );   

}