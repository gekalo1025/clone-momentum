import * as Const from "../Setting/State.js"; 
import { getWeather } from "../Weather/getWeather.js";
import  showTime  from "../Clock-and-calendar/showTime.js";
import  {showGreeting}  from "../Greeting/showGreeting.js";
import  {getQuotes}  from "../Quote/getQuotes.js";
import  {settingTranslite}  from "../Setting/settingTranslite.js";
import { setBackground } from "../Background slider/setBackground.js";
import { hideTags } from "../Setting/hideTags.js";
import { getLinkToImageFlickr } from "../Background slider/getLinkToImageFlickr.js";
import {getLinkToImageUnsplash} from "../Background slider/getLinkToImageUnsplash.js";
import { hideBlock } from "../Setting/hideBlock.js";


 
 export function getLocalStorage() {
    // if(localStorage.getItem('isHideBlockAudio')) {
    //   console.log(localStorage.getItem('isHideBlockAudio'))
    //   Const.blockAudioSetting.checked = Boolean(localStorage.getItem('isHideBlockAudio')); 
    //   Const.state.blockAudio = localStorage.getItem('isHideBlockAudio');
    //   hideBlock();
    // }

    if(localStorage.getItem('city')) {
      Const.cityWeather.value = localStorage.getItem('city');
      getWeather();
    }
    if(localStorage.getItem('name')) {
      Const.userName.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('language')) {
      Const.language.value = localStorage.getItem('language');
      Const.state.language = localStorage.getItem('language');
      getWeather();
      showTime();
      showGreeting();
      getQuotes();
      settingTranslite();
    }

    if(localStorage.getItem('photoSource')) {
      Const.photoSource.value = localStorage.getItem('photoSource');
      Const.state.photoSource = localStorage.getItem('photoSource');
      setBackground();
      hideTags();
    }
    if(localStorage.getItem('tags')) {
      Const.tags.value = localStorage.getItem('tags');
      Const.state.tags = localStorage.getItem('tags');
      getLinkToImageFlickr();
      getLinkToImageUnsplash();
      setBackground();
    }

  }