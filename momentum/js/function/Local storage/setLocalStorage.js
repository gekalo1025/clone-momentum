import {state} from "../Setting/State.js";


export function setLocalStorage() {
    localStorage.setItem('state',JSON.stringify(state));
    localStorage.setItem('name',state.userName);
    // localStorage.setItem('city',state.cityWeather);
    // localStorage.setItem('language',state.language);
    // localStorage.setItem('photoSource',state.photoSource);
    // localStorage.setItem('tags',state.tags);
    // localStorage.setItem('isHideBlockTime',state.blockTime);
    // localStorage.setItem('isHideBlockData',state.blockData);
    // localStorage.setItem('isHideBlockGreeting',state.blockGreeting);
    // localStorage.setItem('isHideBlockQuote',state.blockQuote);
    // localStorage.setItem('isHideBlockWeather',state.blockWeather);
    // localStorage.setItem('isHideBlockAudio',state.blockAudio);

  }