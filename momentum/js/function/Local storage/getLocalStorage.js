import * as Const from "../Setting/State.js"; 
 
 export function getLocalStorage() {
    if(localStorage.getItem('state')) {
    const config = JSON.parse(localStorage.getItem('state'))
    Const.userName.value = config.userName;
    Const.cityWeather.value = config.cityWeather;
    Const.language.value = config.language;
    Const.photoSource.value = config.photoSource;
    Const.tags.value = config.tags;
    }
    // if(localStorage.getItem('city')) {
    //   cityWeather.value = localStorage.getItem('city');
    // }
    // if(localStorage.getItem('language')) {
    //   language.value = localStorage.getItem('language');
    // }
    // if(localStorage.getItem('photoSource')) {
    //   photoSource.value = localStorage.getItem('photoSource');
    // }
    // if(localStorage.getItem('tags')) {
    //   tags.value = localStorage.getItem('tags');
    // }
    // if(localStorage.getItem('isHideBlockTime')) {
    //   state.blockTime = localStorage.getItem('isHideBlockTime');
    //   blockTimeSetting[0].checked = localStorage.getItem('isHideBlockTime');
    // }
  }