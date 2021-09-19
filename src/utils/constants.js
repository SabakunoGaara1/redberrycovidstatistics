export const STEPS = {
    HELLO: 'hello',
    USERINFO : 'USER_STEP',
    COVIDINFO : 'COVID_STEP',
    VACCINEINFO : 'VACCINE_STEP',
    REVIEW : 'REVIEW_STEP',
    ERROR : 'ERROR_STEP',
    GOODBYE: 'Goodbye',
};

export const FIELDS = {
    HELLO: 'hello',
    USERINFO: 'userInfo',
    COVIDINFO: 'covid',
    VACCINEINFO: 'vaccine',
    REVIEW: 'review',
    GOODBYE: 'Goodbye',
};


export const defaultFields = {
    userInfo : {
        name: "",
        surname: "",
        email: "",
    },
    covid:{
        covidcheck: "",
        antitest: "",
        antitest1: "",
        antitest21: "",
        antitest22: "",
        vaccinecheck: "",

    },
    vaccine:{
        vaccinecheck : "",
        stepchange: "",
        whatyouwaiting: "",

    },
    review :{
        zoom: "",
        name: "",
        textarea1: "",
        textarea2: "",
    }
}