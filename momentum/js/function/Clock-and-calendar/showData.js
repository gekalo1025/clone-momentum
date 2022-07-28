import {state} from "../Setting/State.js";
 export default function showData(){
    const date = document.querySelector('.date')
    const DATE = new Date();
    const options = {weekday:'long',month: 'long', day: 'numeric',};
    const currentDate = DATE.toLocaleDateString(state.language,options);

    date.textContent = currentDate;
    
}
