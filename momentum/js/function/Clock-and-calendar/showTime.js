import {getTimeOfDay} from "../Greeting/getTimeOfDay.js";
import showData from "./showData.js";
import {state} from "../Setting/State.js";


export default function  showTime (){
    const time = document.querySelector('.time')
    const date = document.querySelector('.date')
    const DATE = new Date();
    const currentTime = DATE.toLocaleTimeString(state.language,{hour12: false})
    time.textContent = currentTime;
    setTimeout(showTime,1000);
    getTimeOfDay();
    showData();
  }
