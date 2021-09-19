import { UserForm } from "../components/userInfo(1)"
import { CovidForm } from "../components/covid(2)";
import { VaccineInfo } from "../components/Vaccine(3)";
import { ReviewFormDetails } from "../components/Review(4)";
import { STEPS } from "./constants";
import { Hello } from "../components/Hello";
import { Goodbye } from "../components/Goodbye";

export const getCurrentForm = (step) => {
    switch(step) {
        case STEPS.HELLO:
            return <Hello />;   
        case STEPS.USERINFO:
            return <UserForm />;   
        case STEPS.COVIDINFO:
            return <CovidForm />;   
        case STEPS.VACCINEINFO:
            return <VaccineInfo />;   
       case STEPS.REVIEW:
            return <ReviewFormDetails />;
        default:
            return <h1><Goodbye /></h1>;
    }
};