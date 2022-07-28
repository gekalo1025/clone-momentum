const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.user-name')


import {getTimeOfDay} from "./getTimeOfDay.js";
import {state} from "../Setting/State.js";

export function showGreeting() {
  greeting.textContent= `${greetingTranslation[getTimeOfDay()][state.language]}`
  userName.placeholder =`${greetingTranslation['placeholder'][state.language]}`

    }
