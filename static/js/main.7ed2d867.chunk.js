(this.webpackJsonpnewredberry=this.webpackJsonpnewredberry||[]).push([[0],{17:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(9),j=c.n(i),n=(c(17),c(2)),r=c(6),l=(c(7),"hello"),b="USER_STEP",d="COVID_STEP",h="VACCINE_STEP",O="REVIEW_STEP",o="userInfo",x="covid",_="vaccine",u="review",m={userInfo:{name:"",surname:"",email:""},covid:{covidcheck:"",antitest:"",antitest1:"",antitest21:"",antitest22:"",vaccinecheck:""},vaccine:{vaccinecheck:"",stepchange:"",whatyouwaiting:""},review:{zoom:"",name:"",textarea1:"",textarea2:""}},p=Object(s.createContext)({fields:m,updateFields:function(){}}),A=Object(s.createContext)({step:b,setStep:function(){}}),g=c(5),k=c(4),v=function(){return Object(n.a)(Object(n.a)({},Object(s.useContext)(A)),Object(s.useContext)(p))},w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAYAAAAGAx/kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG0SURBVHgBnVS7bsJAELyzLVoOKGgtHhKl06UkXUrTpQt06QJ/wB8AX0DyBYEyVUiXDtJFQiDTpUDgGoSdWcsnnRwLP0Y63e5aHs/c7llnQKPRGAohrOPx+MVygoOk7/v+iBLsL57nDRzHcVlGaIZhzLA7ASvnXU3TlibAMkLf7/cuLE1KpZIA0S2WAFm/Uqnww+GwSE0kA5C9g2wHIgupwGojN4vF4rcLJBHxaKHVapnn8/kDoUk5zs3Rdb2zXq9XLI0iCcUqnVmbrILsKckqZ1dQr9dtbCOpDlhcLpceuuokKlIBZT/VanWOkbBCMhMK7XK5vKNnqYkIodVX1SrKD1GrnGVAs9m0oO6NKY1AfkdWExWpgILfUNl9oALqaEHxPLUiDLvAGAwRPssaFPW32+2EYiMNCc3W6XQiS5a0FJ0tLYmELjUGdBlOPIEu9k10QHmClTHCx7DkQslQWokiliimOyvknbhBlNDirOClpUIyli1mV8AjVqYIbWkFq7fZbGYsBXiooo0vT7NY+UdUq9W66MhUFsgKDnTAMsIoFAoLtDf4ceFm2xDxyfKCVOX5T6v4A8wd8YfFsydxAAAAAElFTkSuQmCC",E=c.p+"static/media/firstpage.cbf4d383.png",y=c(0),B=function(){var e=v(),t=e.fields,c=e.setStep,s=e.updateFields,a=Object(k.a)({defaultValues:Object(n.a)({},t.userInfo)}),i=a.register,j=a.handleSubmit,r=a.formState.errors;return Object(y.jsxs)("div",{children:[Object(y.jsx)("header",{className:"headone",children:Object(y.jsxs)("h1",{class:"REDBERY",children:["REDBERRY",Object(y.jsx)("h1",{className:"xazi",children:"__________________________________________________________________"})]})}),Object(y.jsxs)("div",{className:"page-wrapper",children:[Object(y.jsxs)("form",{onSubmit:j((function(e){console.log(e),c(d),s(o,e)}),(function(e,t){})),children:[Object(y.jsx)("div",{className:"pagination1",children:"1/4"}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"name",children:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8?*:"}),Object(y.jsx)("br",{}),Object(y.jsx)("input",Object(n.a)({type:"text",name:"name"},i("name",{required:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0",pattern:{value:/^[A-Za-z-\u10d0-\u10f0]+$/,message:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d8\u10ea\u10d0\u10d5\u10d3\u10d4\u10e1 \u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10d0\u10e1\u10dd\u10d4\u10d1\u10e1"},minLength:{value:3,message:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d3\u10d2\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 3 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10e1\u10d2\u10d0\u10dc"},maxLength:{value:255,message:"\u10db\u10d0\u10e5\u10e1\u10d8\u10db\u10e3\u10db \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d3\u10d2\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 255 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10e1\u10d2\u10d0\u10dc"}}))),r.name&&Object(y.jsxs)("h6",{children:[" ",r.name.message," "]})]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"surname",children:"\u10d2\u10d5\u10d0\u10e0\u10d8?*:"}),Object(y.jsx)("br",{}),Object(y.jsx)("input",Object(n.a)({type:"text",name:"surname"},i("surname",{required:"\u10d2\u10d5\u10d0\u10e0\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0",pattern:{value:/^[A-Za-z-\u10d0-\u10f0]+$/,message:"\u10e1\u10d0\u10ee\u10d4\u10da\u10d8 \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d8\u10ea\u10d0\u10d5\u10d3\u10d4\u10e1 \u10db\u10ee\u10dd\u10da\u10dd\u10d3 \u10d0\u10e1\u10dd\u10d4\u10d1\u10e1"},minLength:{value:3,message:"\u10db\u10d8\u10dc\u10d8\u10db\u10e3\u10db \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d3\u10d2\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 3 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10e1\u10d2\u10d0\u10dc"},maxLength:{value:255,message:"\u10db\u10d0\u10e5\u10e1\u10d8\u10db\u10e3\u10db \u10e3\u10dc\u10d3\u10d0 \u10e8\u10d4\u10d3\u10d2\u10d4\u10d1\u10dd\u10d3\u10d4\u10e1 255 \u10e1\u10d8\u10db\u10d1\u10dd\u10da\u10dd\u10e1\u10d2\u10d0\u10dc"}}))),r.surname&&Object(y.jsxs)("h6",{children:[" ",r.surname.message," "]})]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"email",children:"\u10d8\u10db\u10d4\u10d8\u10da\u10d8?*:"}),Object(y.jsx)("br",{}),Object(y.jsx)("input",Object(n.a)({type:"text",name:"email"},i("email",Object(g.a)({required:"\u10d8\u10db\u10d4\u10d8\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0",pattern:{message:"\u10d0\u10e0\u10d0\u10d5\u10d0\u10da\u10d8\u10d3\u10e3\u10e0\u10d8 \u10d8\u10db\u10d4\u10d8\u10da\u10d8"}},"pattern",{message:"\u10d2\u10d7\u10ee\u10dd\u10d5\u10d7 \u10d3\u10d0\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d3\u10d4\u10d7 \u10e0\u10d4\u10d3\u10d1\u10d4\u10e0\u10d8\u10e1 \u10db\u10d4\u10d8\u10da\u10d8\u10d7(youremail@redberry.ge)"})))),r.email&&Object(y.jsxs)("h6",{children:[" ",r.email.message]})]}),Object(y.jsx)("div",{className:"paging-wrapper",children:Object(y.jsxs)("button",{className:"buttonNext",children:[" ",Object(y.jsx)("img",{src:w})," "]})})]}),Object(y.jsx)("div",{className:"img-wrapper",children:Object(y.jsx)("img",{src:E,alt:"firstPage"})})]}),Object(y.jsxs)("h5",{children:["___________________________",Object(y.jsxs)("h5",{children:["*-\u10d8\u10d7 \u10db\u10dd\u10dc\u10d8\u10e8\u10dc\u10e3\u10da\u10d8 \u10d5\u10d4\u10da\u10d4\u10d1\u10d8\u10e1 ",Object(y.jsx)("br",{}),"\u10e8\u10d4\u10d5\u10e1\u10d4\u10d1\u10d0 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0 "]})]})]})},f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAYAAAAGAx/kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBpVQ9bsIwGLWT7gSxdIz4kRjDxphuHeEEpScgnABuUDgB4gRVx06FrVvpjEB0RyTd2kRJ+j5kVyEK+eNJTvwc++U954sZuwLNZtNCm1CfsxLQdV1TVXWK7gPxMAxHhYVarZYRBMEz6QmRPfidUkDjFAWLPiIiU/DOHsjlSEQhF6YYctCs7Xa7kHMyheDCxJvnERdruOiTi+g8niEywcKx5BRlt9uNkuYmCrXbbd3zvHk0iu/7PZhYsQvgF6LQfmhiaAmRx3iUVKFGo0G1MZQcghaizFgO3DARxXVdcmEIAaqNQVqUOE51BJEh59yIjE+LiBBUuti2/VqtVhnETOK434NrNJ5X6GyPxNd6Y7Hyz9rof0cSh8PBqVQqC0VRbkENONPQH8DdL9y95xYiOI7zg0UvtVrtG7SLpomoOl6youcsK1ocRaKqaUIUFe5mtPFw1RVRLbjlx+NxmVtIQnzVL1EiVPGmiPqJqE5mtDiSouJ46W82m3Wpo7Zer4/hbiJ5qaNWAv9lD7cnNA0/dYddA4pKpwX1/wDOzeKJdZOdigAAAABJRU5ErkJggg==",F=c.p+"static/media/second.7d58a8a5.png",N=function(){var e=v(),t=e.fields,c=e.setStep,s=e.updateFields,a=Object(k.a)({defaultValues:Object(n.a)({},t.covid)}),i=a.register,j=a.handleSubmit,r=a.formState.errors,l=a.watch,d=l("covidcheck"),O=l("antitest");return Object(y.jsxs)("div",{children:[Object(y.jsx)("header",{className:"headone",children:Object(y.jsxs)("h1",{class:"REDBERY",children:["REDBERRY",Object(y.jsx)("h1",{className:"xazi",children:"__________________________________________________________________"})]})}),Object(y.jsxs)("div",{className:"page-wrapper",children:[Object(y.jsxs)("form",{onSubmit:j((function(e){s(x,e),c(h)}),(function(e,t){})),children:[Object(y.jsx)("div",{className:"pagination2",children:"2/4"}),Object(y.jsxs)("p",{className:"app",children:[Object(y.jsx)("h3",{children:"\u10d9\u10dd\u10d5\u10d8\u10d3\u10d8 \u10d2\u10e5\u10dd\u10dc\u10d3\u10d0?*"}),Object(y.jsx)("label",{htmlFor:"covidcheck",children:"\u10d9\u10d8"}),Object(y.jsx)("input",Object(n.a)({value:"\u10d9\u10d8",type:"radio",name:"covidcheck"},i("covidcheck",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"covidcheck",children:"\u10d0\u10e0\u10d0"}),Object(y.jsx)("input",Object(n.a)({value:"\u10d0\u10e0\u10d0",type:"radio",name:"covidcheck"},i("covidcheck",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"covidcheck",children:"\u10d0\u10ee\u10da\u10d0 \u10db\u10d0\u10e5\u10d5\u10e1  "}),Object(y.jsx)("input",Object(n.a)({value:"\u10d0\u10ee\u10da\u10d0 \u10db\u10d0\u10e5\u10d5\u10e1",type:"radio",name:"covidcheck"},i("covidcheck",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),r.covidcheck&&Object(y.jsxs)("h6",{children:[" ",r.covidcheck.message," "]})]}),"\u10d9\u10d8"==d&&Object(y.jsxs)("p",{children:[Object(y.jsx)("h3",{children:"\u10d0\u10dc\u10e2\u10d8\u10e1\u10ee\u10d4\u10e3\u10da\u10d4\u10d1\u10d8\u10e1 \u10e2\u10d4\u10e1\u10e2\u10d8 \u10ee\u10dd\u10db \u10d0\u10e0 \u10d2\u10d0\u10e5\u10d5\u10e1 \u10d2\u10d0\u10d9\u10d4\u10d7\u10d4\u10d1\u10e3\u10da\u10d8?"}),Object(y.jsx)("label",{htmlFor:"antitest",children:"\u10d9\u10d8"}),Object(y.jsx)("br",{}),"  ",Object(y.jsx)("input",Object(n.a)({value:"\u10d9\u10d8",type:"radio",name:"antitest"},i("antitest",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"antitest",children:"\u10d0\u10e0\u10d0"}),Object(y.jsx)("br",{})," ",Object(y.jsx)("input",Object(n.a)({value:"\u10d0\u10e0\u10d0",type:"radio",name:"antitest"},i("antitest",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),r.antitest&&Object(y.jsxs)("h6",{children:[" ",r.antitest.message," "]})," "]}),"\u10d9\u10d8"===O&&Object(y.jsxs)("p",{children:[Object(y.jsx)("h3",{children:"\u10d7\u10e3 \u10d2\u10d0\u10ee\u10e1\u10dd\u10d5\u10e1, \u10d2\u10d7\u10ee\u10dd\u10d5 \u10db\u10d8\u10e3\u10d7\u10d8\u10d7\u10d4 \u10db\u10d8\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7\u10d8 \u10d7\u10d0\u10e0\u10d8\u10e6\u10d8 \u10d3\u10d0 \u10e0\u10d0\u10dd\u10d3\u10d4\u10dc\u10dd\u10d1\u10d0 \u10d0\u10dc\u10e2\u10d8\u10e1\u10ee\u10d4\u10e3\u10da\u10d4\u10d1\u10d8\u10e1"}),Object(y.jsx)("label",{htmlFor:"antitest1",children:"\u10e0\u10dd\u10d3\u10d8\u10e1 \u10d2\u10d0\u10d8\u10d9\u10d4\u10d7\u10d4 \u10d0\u10dc\u10e2\u10d8\u10e1\u10ee\u10d4\u10e3\u10da\u10d4\u10d1\u10d8\u10e1 \u10e2\u10d4\u10e1\u10e2\u10d8?*"}),Object(y.jsx)("br",{})," ",Object(y.jsx)("input",Object(n.a)({type:"date",name:"antitest1"},i("antitest1",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),r.antitest1&&Object(y.jsxs)("h6",{children:[" ",r.antitest1.message," "]}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"antitest11",children:"\u10d0\u10dc\u10e2\u10d8\u10e1\u10ee\u10d4\u10e3\u10da\u10d4\u10d1\u10d8\u10e1 \u10e0\u10d0\u10dd\u10d3\u10d4\u10dc\u10dd\u10d1\u10d0"}),Object(y.jsx)("br",{})," ",Object(y.jsx)("input",Object(n.a)({type:"number",name:"antitest11"},i("antitest11",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),r.antitest11&&Object(y.jsxs)("h6",{children:[" ",r.antitest11.message," "]})," "]}),"\u10d0\u10e0\u10d0"===O&&Object(y.jsxs)("p",{children:[Object(y.jsx)("h3",{children:"\u10db\u10d8\u10e3\u10d7\u10d8\u10d7\u10d4 \u10db\u10d8\u10d0\u10ee\u10da\u10dd\u10d4\u10d1\u10d8\u10d7\u10d8 \u10de\u10d4\u10e0\u10d8\u10dd\u10d3\u10d8 (\u10d3\u10e6\u10d4/\u10d7\u10d5\u10d4/\u10ec\u10d4\u10da\u10d8), \u10e0\u10dd\u10d3\u10d8\u10e1 \u10d2\u10e5\u10dd\u10dc\u10d3\u10d0 \u10d9\u10dd\u10d5\u10d8\u10d319"}),Object(y.jsx)("label",{htmlFor:"antitest21",children:"\u10de\u10d4\u10e0\u10d8\u10dd\u10d3\u10d8 \u10e0\u10dd\u10d3\u10d8\u10e1 \u10d2\u10e5\u10dd\u10dc\u10d3\u10d0 \u10d9\u10dd\u10d5\u10d8\u10d3\u10d8(\u10d3\u10d0\u10e1\u10d0\u10ec\u10e7\u10d8\u10e1\u10d8) "}),Object(y.jsx)("br",{})," ",Object(y.jsx)("input",Object(n.a)({type:"date",name:"antitest21"},i("antitest21",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),r.antitest22&&Object(y.jsxs)("h6",{children:[" ",r.antitest22.message," "]}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"antitest22",children:"\u10de\u10d4\u10e0\u10d8\u10dd\u10d3\u10d8 \u10e0\u10dd\u10d3\u10d8\u10e1 \u10d2\u10e5\u10dd\u10dc\u10d3\u10d0 \u10d9\u10dd\u10d5\u10d8\u10d3\u10d8(\u10d3\u10d0\u10e1\u10d0\u10e1\u10e0\u10e3\u10da\u10d8) "}),Object(y.jsx)("br",{})," ",Object(y.jsx)("input",Object(n.a)({type:"date",name:"antitest22"},i("antitest22",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),r.antitest22&&Object(y.jsxs)("h6",{children:[" ",r.antitest22.message," "]})," "]}),Object(y.jsxs)("div",{className:"paging-wrapper",children:[Object(y.jsx)("button",{onClick:function(){c(b)},children:Object(y.jsx)("img",{src:f,className:"buttonBack"})}),Object(y.jsxs)("button",{children:[" ",Object(y.jsx)("img",{src:w,className:"buttonNext"})," "]})]})]}),Object(y.jsx)("div",{className:"img-wrapper",children:Object(y.jsx)("img",{src:F,alt:"secondpage"})})]})]})},C=c.p+"static/media/3rdpage.682eac31.png",S=function(){var e=v(),t=e.fields,c=e.setStep,s=e.updateFields,a=Object(k.a)({defaultValues:Object(n.a)({},t.vaccine)}),i=a.register,j=a.handleSubmit,r=a.formState.errors,l=a.watch,b=l("vaccinecheck"),h=l("vaccinecheck"),o=l("stepchange"),x=l("whatyouwaiting");return Object(y.jsxs)("div",{children:[Object(y.jsx)("header",{className:"headone",children:Object(y.jsxs)("h1",{class:"REDBERY",children:["REDBERRY",Object(y.jsx)("h1",{className:"xazi",children:"__________________________________________________________________"})]})}),Object(y.jsxs)("div",{className:"page-wrapper",children:[Object(y.jsxs)("form",{onSubmit:j((function(e){s(_,e),c(O)}),(function(e,t){})),children:[Object(y.jsx)("div",{className:"pagination2",children:"3/4"}),Object(y.jsxs)("p",{className:"app",children:[Object(y.jsx)("h3",{children:"\u10e3\u10d9\u10d5\u10d4 \u10d2\u10d0\u10d9\u10d4\u10d7\u10d4\u10d1\u10e3\u10da\u10d8 \u10d2\u10d0\u10e5\u10d5\u10e1 \u10d5\u10d0\u10e5\u10ea\u10d8\u10dc\u10d0?"}),Object(y.jsx)("label",{htmlFor:"vaccinecheck",children:"\u10d9\u10d8"}),Object(y.jsx)("input",Object(n.a)({value:"\u10d9\u10d8",type:"radio",name:"vaccinecheck"},i("vaccinecheck",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"vaccinecheck",children:"\u10d0\u10e0\u10d0"}),Object(y.jsx)("input",Object(n.a)({value:"\u10d0\u10e0\u10d0",type:"radio",name:"vaccinecheck"},i("vaccinecheck",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),r.vaccinecheck&&Object(y.jsxs)("h6",{children:[" ",r.vaccinecheck.message," "]})]}),"\u10d9\u10d8"==b&&Object(y.jsxs)("p",{children:[Object(y.jsx)("h3",{children:"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4 \u10e0\u10dd\u10db\u10d4\u10da \u10d4\u10e2\u10d0\u10de\u10d6\u10d4 \u10ee\u10d0\u10e0"}),Object(y.jsx)("label",{htmlFor:"stepchange",children:"\u10de\u10d8\u10e0\u10d5\u10d4\u10da\u10d8 \u10d3\u10dd\u10d6\u10d0 \u10d3\u10d0 \u10d3\u10d0\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d8 \u10d5\u10d0\u10e0 \u10db\u10d4\u10dd\u10e0\u10d4\u10d6\u10d4"}),Object(y.jsx)("input",Object(n.a)({value:"firstDose",type:"radio",name:"stepchange"},i("stepchange",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"stepchange",children:"\u10e1\u10e0\u10e3\u10da\u10d0\u10d3 \u10d5\u10d0\u10e5\u10ea\u10d8\u10dc\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d8 \u10d5\u10d0\u10e0"}),Object(y.jsx)("input",Object(n.a)({value:"fullyVaccinated",type:"radio",name:"stepchange"},i("stepchange",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"stepchange",children:"\u10de\u10d8\u10e0\u10d5\u10d4\u10da\u10d8 \u10d3\u10dd\u10d6\u10d0 \u10d3\u10d0 \u10d0\u10e0 \u10d3\u10d0\u10d5\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d5\u10d0\u10e0 \u10db\u10d4\u10dd\u10e0\u10d4\u10d6\u10d4"}),Object(y.jsx)("input",Object(n.a)({value:"secondReg",type:"radio",name:"stepchange"},i("stepchange",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),"secondReg"===o&&Object(y.jsxs)("h6",{children:["  ",Object(y.jsx)("p",{children:"\u10e0\u10dd\u10db \u10d0\u10e6\u10d0\u10e0 \u10d2\u10d0\u10d3\u10d0\u10d3\u10dd, \u10d1\u10d0\u10e0\u10d4\u10db \u10d4\u10ee\u10da\u10d0\u10d5\u10d4 \u10d3\u10d0\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d3\u10d8 "}),Object(y.jsx)("a",{href:"https://booking.moh.gov.ge/",children:"https://booking.moh.gov.ge/"})]}),r.stepchange&&Object(y.jsxs)("div",{children:[" ",r.stepchange.message," "]})," "]}),"\u10d0\u10e0\u10d0"===h&&Object(y.jsxs)("p",{children:[Object(y.jsx)("h3",{children:"\u10e0\u10d0\u10e1 \u10d4\u10da\u10dd\u10d3\u10d4\u10d1\u10d8?"}),Object(y.jsx)("label",{htmlFor:"whatyouwaiting",children:"\u10d3\u10d0\u10e0\u10d4\u10d2\u10d8\u10e1\u10e2\u10e0\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d8 \u10d5\u10d0\u10e0 \u10d3\u10d0 \u10d5\u10d4\u10da\u10dd\u10d3\u10d4\u10d1\u10d8 \u10d7\u10d0\u10e0\u10d8\u10e6\u10e1 "}),Object(y.jsx)("input",Object(n.a)({type:"radio",name:"whatyouwaiting"},i("whatyouwaiting",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"whatyouwaiting",children:"\u10d0\u10e0 \u10d5\u10d2\u10d4\u10d2\u10db\u10d0\u10d5 "}),Object(y.jsx)("input",Object(n.a)({type:"radio",name:"whatyouwaiting"},i("whatyouwaiting",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"whatyouwaiting",children:" \u10d2\u10d0\u10d3\u10d0\u10e2\u10d0\u10dc\u10d8\u10da\u10d8 \u10db\u10d0\u10e5\u10d5\u10e1 \u10d3\u10d0 \u10d5\u10d2\u10d4\u10d2\u10db\u10d0\u10d5 \u10d0\u10ea\u10e0\u10d0\u10e1"}),Object(y.jsx)("input",Object(n.a)({value:"3",type:"radio",name:"whatyouwaiting"},i("whatyouwaiting",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),"3"===x&&Object(y.jsxs)("div",{children:["  ",Object(y.jsx)("p",{children:"\u10d0\u10ee\u10d0\u10da\u10d8 \u10de\u10e0\u10dd\u10e2\u10dd\u10d9\u10dd\u10da\u10d8\u10d7 \u10d9\u10dd\u10d5\u10d8\u10d3\u10d8\u10e1 \u10d2\u10d0\u10d3\u10d0\u10e2\u10d0\u10dc\u10d8\u10d3\u10d0\u10dc 1 \u10d7\u10d5\u10d8\u10e1 \u10e8\u10d4\u10db\u10d3\u10d4\u10d2 \u10e8\u10d4\u10d2\u10d8\u10eb\u10da\u10d8\u10d0\u10d7 \u10d5\u10d0\u10e5\u10ea\u10d8\u10dc\u10d8\u10e1 \u10d2\u10d0\u10d9\u10d4\u10d7\u10d4\u10d1\u10d0. "}),Object(y.jsx)("a",{href:"https://booking.moh.gov.ge/",children:"https://booking.moh.gov.ge/"})]}),r.whatyouwaiting&&Object(y.jsxs)("h6",{children:[" ",r.whatyouwaiting.message," "]})," "]}),Object(y.jsxs)("div",{className:"paging-wrapper",children:[Object(y.jsx)("button",{onClick:function(){c(d)},children:Object(y.jsx)("img",{className:"buttonBack",src:f})}),Object(y.jsxs)("button",{children:[" ",Object(y.jsx)("img",{src:w,className:"buttonNext"})," "]})]})]}),Object(y.jsx)("div",{className:"img-wrapper",children:Object(y.jsx)("img",{src:C,alt:"thirdpage"})})]})]})},Q=c.p+"static/media/4thpage.285d642f.png",V=function(){var e=v(),t=e.fields,c=e.setStep,s=e.updateFields,a=Object(k.a)({defaultValues:Object(n.a)({},t.REViEW)}),i=a.register,j=a.handleSubmit,r=a.formState.errors,l=a.watch,b=l("covidcheck"),d=l("antitest");console.log(b),console.log(d);return Object(y.jsxs)("div",{children:[Object(y.jsx)("header",{children:Object(y.jsx)("div",{className:"headone",children:Object(y.jsxs)("h1",{class:"REDBERY",children:["REDBERRY",Object(y.jsx)("h1",{className:"xazi",children:"__________________________________________________________________"})]})})}),Object(y.jsxs)("div",{className:"page-wrapper",children:[Object(y.jsxs)("form",{onSubmit:j((function(e){s(u,e),c()}),(function(e,t){})),children:[Object(y.jsx)("div",{className:"pagination1",children:"4/4"}),Object(y.jsxs)("p",{className:"lasttext",children:["\u10e0\u10d4\u10d3\u10d1\u10d4\u10e0\u10d8\u10e1 \u10db\u10d7\u10d0\u10d5\u10d0\u10e0\u10d8 \u10e6\u10d8\u10e0\u10d4\u10d1\u10e3\u10da\u10d4\u10d1\u10d0 \u10e9\u10d5\u10d4\u10dc\u10d8 \u10d2\u10e3\u10dc\u10d3\u10d8\u10e1 \u10d7\u10d8\u10d7\u10dd\u10d4\u10e3\u10da\u10d8 \u10ec\u10d4\u10d5\u10e0\u10d8\u10d0. \u10d2\u10d0\u10e0\u10d4\u10db\u10dd, \u10e0\u10dd\u10db\u10d4\u10da\u10e1\u10d0\u10ea \u10e9\u10d5\u10d4\u10dc\u10d8 \u10d7\u10d0\u10dc\u10d0\u10db\u10e8\u10e0\u10dd\u10db\u10da\u10d4\u10d1\u10d8 \u10e5\u10db\u10dc\u10d8\u10d7 \u10d1\u10d4\u10d5\u10e0\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1 \u10d0\u10e0\u10d8\u10e1 \u10d3\u10d0 \u10e7\u10dd\u10e4\u10d8\u10da\u10d0 \u10ec\u10da\u10d4\u10d1\u10d8\u10e1 \u10d2\u10d0\u10dc\u10db\u10d0\u10d5\u10da\u10dd\u10d1\u10d0\u10e8\u10d8 \u10d4\u10e0\u10d7\u10d0\u10d3 \u10db\u10d8\u10d6\u10dc\u10d4\u10d1\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1 \u10d1\u10e0\u10eb\u10dd\u10da\u10d8\u10e1 \u10db\u10d8\u10d6\u10d4\u10d6\u10d8, \u10d1\u10d4\u10d5\u10e0\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1 \u10d9\u10d8 - \u10e9\u10d5\u10d4\u10dc\u10d7\u10d0\u10dc \u10d2\u10d0\u10d3\u10db\u10dd\u10e1\u10d5\u10da\u10d8\u10e1. ",Object(y.jsx)("br",{})," ",Object(y.jsx)("br",{}),"\u10de\u10d0\u10dc\u10d3\u10d4\u10db\u10d8\u10d8\u10e1 \u10de\u10d4\u10e0\u10d8\u10dd\u10d3\u10e8\u10d8 \u10d4\u10e0\u10d7\u10db\u10d0\u10dc\u10d4\u10d7\u10e1\u10d0\u10ea \u10d8\u10e8\u10d5\u10d8\u10d0\u10d7\u10d0\u10d3 \u10d5\u10dc\u10d0\u10ee\u10e3\u10da\u10dd\u10d1\u10d7 \u10de\u10d8\u10e0\u10d8\u10e1\u10de\u10d8\u10e0 \u10d3\u10d0 \u10e7\u10dd\u10d5\u10d4\u10da\u10d3\u10e6\u10d8\u10e3\u10e0\u10d8 \u10d9\u10dd\u10db\u10e3\u10dc\u10d8\u10d9\u10d0\u10ea\u10d8\u10d0\u10ea \u10d2\u10d0\u10d8\u10e8\u10d5\u10d8\u10d0\u10d7\u10d3\u10d0"]}),Object(y.jsx)("p",{className:"app",children:Object(y.jsx)("h4",{children:"\u10e0\u10d0 \u10e1\u10d8\u10ee\u10e8\u10d8\u10e0\u10d8\u10d7 \u10e8\u10d4\u10d8\u10eb\u10da\u10d4\u10d1\u10d0 \u10d2\u10d5\u10e5\u10dd\u10dc\u10d3\u10d4\u10e1 \u10e1\u10d0\u10d4\u10e0\u10d7\u10dd \u10d0\u10e0\u10d0\u10e4\u10dd\u10e0\u10db\u10d0\u10da\u10e3\u10e0\u10d8 \u10dd\u10dc\u10da\u10d0\u10d8\u10dc \u10e8\u10d4\u10ee\u10d5\u10d4\u10d3\u10e0\u10d4\u10d1\u10d8, \u10e1\u10d0\u10d3\u10d0\u10ea \u10e7\u10d5\u10d4\u10da\u10d0 \u10e1\u10e3\u10e0\u10d5\u10d8\u10da\u10d8\u10e1\u10d0\u10db\u10d4\u10d1\u10e0 \u10e9\u10d0\u10d4\u10e0\u10d7\u10d5\u10d4\u10d1\u10d0?"})}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"zoom",children:"\u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8 \u10dd\u10e0\u10ef\u10d4\u10e0"}),Object(y.jsx)("input",Object(n.a)({value:"2",type:"radio",name:"zoom"},i("zoom",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"zoom",children:"\u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8 \u10d4\u10e0\u10d7\u10ee\u10d4\u10da"}),Object(y.jsx)("input",Object(n.a)({value:"1",type:"radio",name:"zoom"},i("zoom",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"covidcheck",children:"\u10dd\u10e0 \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8 \u10d4\u10e0\u10d7\u10ee\u10d4\u10da"}),Object(y.jsx)("input",Object(n.a)({value:"141",type:"radio",name:"zoom"},i("zoom",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"zoom",children:"\u10d7\u10d5\u10d4\u10e8\u10d8 \u10d4\u10e0\u10d7\u10ee\u10d4\u10da"}),Object(y.jsx)("input",Object(n.a)({value:"11",type:"radio",name:"zoom"},i("zoom",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),r.zoom&&Object(y.jsxs)("h6",{children:[" ",r.zoom.message," "]}),Object(y.jsxs)("p",{className:"app",children:[Object(y.jsx)("h4",{children:"\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8 \u10d3\u10e6\u10d4 \u10d9\u10d5\u10d8\u10e0\u10d0\u10e8\u10d8 \u10d8\u10e1\u10e3\u10e0\u10d5\u10d4\u10d1\u10d3\u10d8 \u10dd\u10e4\u10d8\u10e1\u10d8\u10d3\u10d0\u10dc \u10db\u10e3\u10e8\u10d0\u10dd\u10d1\u10d0\u10e1?"}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"weeklyWork",children:"0"}),Object(y.jsx)("input",Object(n.a)({value:"0",type:"radio",name:"weeklyWork"},i("weeklyWork",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"weeklyWork",children:"1"}),Object(y.jsx)("input",Object(n.a)({value:"1",type:"radio",name:"weeklyWork"},i("weeklyWork",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"weeklyWork",children:"2"}),Object(y.jsx)("input",Object(n.a)({value:"2",type:"radio",name:"weeklyWork"},i("weeklyWork",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"weeklyWork",children:"3"}),Object(y.jsx)("input",Object(n.a)({value:"3",type:"radio",name:"weeklyWork"},i("weeklyWork",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"weeklyWork",children:"4"}),Object(y.jsx)("input",Object(n.a)({value:"4",type:"radio",name:"weeklyWork"},i("weeklyWork",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"})))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("label",{htmlFor:"weeklyWork",children:"5"}),Object(y.jsx)("input",Object(n.a)({value:"5",type:"radio",name:"weeklyWork"},i("weeklyWork",{required:"\u10d4\u10e1 \u10d5\u10d4\u10da\u10d8 \u10d0\u10e3\u10ea\u10d8\u10da\u10d4\u10d1\u10d4\u10da\u10d8\u10d0"}))),r.weeklyWork&&Object(y.jsxs)("h6",{children:[" ",r.weeklyWork.message," "]})]})]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("h3",{children:"\u10e0\u10d0\u10e1 \u10e4\u10d8\u10e5\u10e0\u10dd\u10d1 \u10e4\u10d8\u10d6\u10d8\u10d9\u10e3\u10e0 \u10e8\u10d4\u10d9\u10e0\u10d4\u10d1\u10d4\u10d1\u10d6\u10d4?"}),Object(y.jsx)("label",{htmlFor:"textarea1"}),Object(y.jsx)("input",Object(n.a)({type:"textarea",name:"textarea1"},i("textarea1")))]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("h3",{children:"\u10e0\u10d0\u10e1 \u10e4\u10d8\u10e5\u10e0\u10dd\u10d1 \u10d0\u10e0\u10e1\u10d4\u10d1\u10e3\u10da \u10d2\u10d0\u10e0\u10d4\u10db\u10dd\u10d6\u10d4: \u10e0\u10d0 \u10db\u10dd\u10d2\u10ec\u10dd\u10dc\u10e1, \u10e0\u10d0\u10e1 \u10d3\u10d0\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d3\u10d8, \u10e0\u10d0\u10e1 \u10e8\u10d4\u10ea\u10d5\u10da\u10d8\u10d3\u10d8?"}),Object(y.jsx)("label",{htmlFor:"textarea2"}),Object(y.jsx)("input",Object(n.a)({type:"textarea",name:"textarea2"},i("textarea2")))]}),Object(y.jsxs)("div",{className:"paging-wrapper",children:[Object(y.jsx)("button",{onClick:function(){c(h)},children:Object(y.jsx)("img",{className:"buttonback",src:f})}),Object(y.jsxs)("button",{children:[" ",Object(y.jsx)("img",{src:w,className:"buttonNext"})," "]})]})]}),Object(y.jsx)("div",{className:"img-wrapper1",children:Object(y.jsx)("img",{src:Q,alt:"fourthpage"})})]})]})},L=function(){var e=v(),t=e.fields,c=e.setStep,s=e.updateFields,a=Object(k.a)({defaultValues:Object(n.a)({},t.covid)});a.register,a.handleSubmit,a.formState.errors,a.watch;return Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{className:"firstimg",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApaSURBVHgB7V1dVttYEq66NvQ8ujcwESsY99tM033avQLMCgIrCFkBsILQKwhZAe4VoJwZSJ95iVlBy9nA+HEGsGqqrn4s25IlWf+yvnN8ItsyBH+qv+/WLSHUHPR3w4ADGMIrvAEFBhAYhGQgwID4Ac4jiDm/N+d/LecpTsHm4x48QR+maFpzqDEQagZNAMIJP4aANOIv3YA8QWChkIQw4eMnfLSmUCPUghD6yRjxl3PCR+PcCYj95WARoKkUfMJ/WSZUjMoIoZExsF/hQjERBDSEOkCsB/EKFvAZ/7AsqAClE0I/GuyK4B2TMIZN/18bEOGtsuG6bGJKI4QtwoAX+MhEjKBBKJuYwglxXdMVEr2DBqMsYgolZHFsXCDQJdTYNaWCG2PwwfoEBaEQQprqnlLAxAWeF2EtCnKGWAW90NcWkyEYUY//xmPjLeSM3CykLbEiLbjIvGEX9h5yQi6EiItiq7jjw3rUE2VDYouNv+bhwjIT4pJxD2VX2HVDTqRkIkSKPBb6hIx2ZFHZMUdiUjLoYzsT0pERiUyk7ERIR0YsdiYlNSFuzPgKHRlxmHOt8kPamJKqDgkE8I6MeAxI0b1e30mBdIR02VQ6IK9u9uhOarSkH0lMyOIn4wY6MnbBkGWky6QnJyJEi4R7VoHnCZaRLhb/MC6SnBsb1LsgnhsSBfl4C2HVFjoy8sCA48nHuJO2EsL1xlnLVds8kKataBTnuiIJ0a4KKXEw2lNIAXiT5gOo6HJb1hVtIU5mYECHSBDRhL/Bz5AOg21ZV2hQdwP5n9AhGgF1l137JXuTqzQf5wB/FBbgwy0kRd68h5hyCXCFh8uMiTWra3Zd53xkgt/Cuh1cxX8Ie32DEG0dQGfQIRS6bxiVBf9dyzwVWwxpMpJlpAjjMFll00I669gKkvV0oNugTsUqxhXHk3t2W2eQpkTo2RvF9koM6WJHOuherUO4zvCdzfGAY0mgI3/VQp5hBB0SA5HG/J1l6TwZwPOqlawQ0tUdqTHg7yyRRhUFQhwHn/uE6C0BXd2xC7LKSkP3u9dYWghlMr3GAoFuOGUdc00x4odc7RaUDbJPvMO+/9r+aVbuuvfMX/fmpGbGWWYmF7QLODkQt6Wb7bSF6D0be+auEPAi2ITwKkKqs8xgQNmQlcUfj97Ioeey9q3jcB7sYJcLsqcqcFVBkN7A5BNyAvsEWkrmElA5U/pKNr0jwGuoCDY6RuG4LKzJHr8i4IiAIynAwAvYGMiMZKu0BHYmo/dg3ehz+TmUHNzRjeEo2jz7zv9AC8F/5C0cqPdeJUzHxkdPp2OJwoQtezzs4zdSfRtQIvii+b4Pr+2MH2jTBX759pv3XLsm0lehyS5hTlJlyx6PkXG0PkxAtCn26QaUjWf4RcEC/gZtgrgoYmk8QIbeRMTiH5N0ox5mv6pH65TPuQItXcAv/kelRZatiOX1ahQLAqOvx1W0ByavU5z6Lkrc8bM0adBIx4Yvs+Xqnqz0sXQLNjwFPn9S6dKDsg0pDNvisuZy9XtP9NXubCKC9fYbrWo/0zu2hAv8Y+a/LvUAVAguEI0+tAMmW8CV90S7KGf3r2RYp+uBmy1Inp8GX3OXHs6gSqC4LKggeOULlkDIFHckwZiPZWbK0M+wHuKn/wSayKsFwaBPDW6C0/UCqt/5b7ijn40nLu50MNZr3o/fEhV5AddmQNXg+kgKw+YR4hV7D9/eS2GnX7LdeCHpbkIytGvDWnX0D5oYQ/xMam2/ypxJGq9kUhGo82CD3AcHFIi5XP2SSWkyHFfjqLNiMZxJQY+9laNcR6Lugw2aYSHOFLhTvvq1e9JSOfqNy6xF4Tn07EsgZbKkbob+CGdI2mXd132EEMlCahtHdOA+VNdesedmUpfue7fSI8Vf8h2SOg3bZOlNmKBm7G+Z96Xxq6aZ1hwVi3//nE28F2QXl7dxiL/gW0Rl8L/jqB2vrnu6xKYkLrwsIGlvmnb6suBM23lwCjpfAnEXcUDcFOKYLQPCyHCFxA9Ql9GBSYFg9fkPsuq0HrKh0npzVNCXeOQCkuONveB+9kTN7Q/oCytQBzgq7VkwbY2Yo6Ldj+POHDL8OPHS7H2QHBOnfT1kuOLkVwfnw+VCksBNa0P3xGsrephNvMmmQkRj4sQ22Mrqs43MmJSqILXFVdBFCdy0Vtr1N75kHcy/U590g3NbiFiCLeSFpYceVIEpB+7TFfkbVtNaF6LkSqY1JcVr34h6VzC2sW3pO3jS3e/E68dlTpTWTQWiQ61hnYz183g17761DX0cQ9Xj7Mit1GXnTwlrASGBW78sseDFlhrjrXeeTjZI+THFXeMYQXuhExSHEJufFB/YV5ZXPbhdL/csfwz983o4ZfX2wnZbcSSmsLV8gBaDXbEugB0aCH6H4rAiCgbfCEyJ0GSIiyLEz0KG85+koViGwvgN943Hs7O27++gKiSOeKJgmMbkDEHzF4ZkUclWCgMxpNYaW65w44ccBhwVTiBH6IAsO1XDyHDaN/2Cj0k7g556csmYui06ewOOjaZ3vJTfkd0W5dKKP9ed5Q+z0HHcusagpQvSZBzAZ3ZdH+WY48b3gO2OF+tQpG79Y+/AvZnJFLLB1C03EbPRJa0NxgMhwDsXD/DURvih7cF7A+LWv1h+1rmyQMWuYrKr0BhVW3gISuf6fC0iBqzoBe5wDwfd6BvIBLCa7B6CSBjp5Phgw0HY25zWLo7/ertChpDnyiX0szHeg1nx0ViszkrZmHXC1fAHmYAGCbDeXb7xsyJGkMucD/gLQMvvoBAL0eV6j9/Og69tEpJseECoKBjyc8JabLxb2jVr8agAhA2gCZ0GZLNmBNFXrisKRo+q6+bBxyPMOgShXSd4AOf0AhtWEhe49S/qyEgEZavQZr5QBUuakd1tXQ5iArd/mqtLQUfGVug1nQgPEy0pHmgGxd+buuIO5MqReAGpIQzoEA2RSSKsQ4BbP8t6U9KB8rTavNYhAsFiOPz9nFDFJskGwgxuKgpDLqsgYh3QkREHGaR8HndSLr297Kq6MeQx0HXbWv9A6HmQEd0UungkKRc8ZLeQRVdxb4WUDI/JyBBkjyGv8AY6hMOd7ZvmI03asNM0zHe5jV52QqTzscM6nEbwHe5pmJ2QHphQzy0NVSHTbfMyEyJrIZxF5Nog0WBkvrFkPjFkqXvtL9yNp1nIEORCiFaHCXO7Y3IDMc3r5sS5ZVl8ZdzuWz+VQBd9B/mQ4fy8nKGbFmzah/tWxS5j74LcCRE4coozpwraCWdTak5WEUQhhHhw10jadOukQqwiiEIrdR1XxL9Ku1DD4caKoyLJcH5PSXC2LNuXJL28zUJh7ikMpRHioSHEzOUObOpV3eC/rScoEaUT4kET8wyjmsUYueHXBA7Vb1HdmEWjMkKC0COV0H7LVjOG8smxtPRjq0mizpqCUQtCgnDnXQ1J5tE7nfgG5AuLCE1FMAXECT7+WSu1unaErEPfpvR/etjzUObaEih3hVIP7xzAZgE69x+EFqJtyYQEZ4QITutGwDr+D7EZqLjlGVZdAAAAAElFTkSuQmCC"}),Object(y.jsx)("button",{onClick:function(e){s(),c(b)},children:Object(y.jsxs)("div",{className:"firstbutton",children:["\u10d9\u10d8\u10d7\u10ee\u10d5\u10d0\u10e0\u10d8\u10e1 ",Object(y.jsx)("br",{}),"\u10d3\u10d0\u10ec\u10e7\u10d4\u10d1\u10d0"]})})]})},R=function(){return Object(y.jsx)("div",{className:"black",children:Object(y.jsx)("h1",{children:"\u10db\u10d0\u10d3\u10da\u10dd\u10d1\u10d0"})})},I=function(e){switch(e){case l:return Object(y.jsx)(L,{});case b:return Object(y.jsx)(B,{});case d:return Object(y.jsx)(N,{});case h:return Object(y.jsx)(S,{});case O:return Object(y.jsx)(V,{});default:return Object(y.jsx)("h1",{children:Object(y.jsx)(R,{})})}};var q=function(){var e=Object(s.useState)(l),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(m),j=Object(r.a)(i,2),b=j[0],d=j[1];return Object(y.jsx)(A.Provider,{value:{step:c,setStep:a},children:Object(y.jsx)(p.Provider,{value:{fields:b,updateFields:function(e,t){var c=Object(n.a)({},b);c[e]=t,d(c)}},children:Object(y.jsx)("div",{className:"App",children:I(c)})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,j=t.getTTFB;c(e),s(e),a(e),i(e),j(e)}))};j.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root")),H()},7:function(e,t,c){}},[[20,1,2]]]);
//# sourceMappingURL=main.7ed2d867.chunk.js.map