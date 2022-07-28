import showTime  from "./function/Clock-and-calendar/showTime.js";
import {getRandomNum} from "./function/Background slider/getRandomNum.js";
import {showGreeting} from "./function/Greeting/showGreeting.js";
import {setBackground} from "./function/Background slider/setBackground.js";
import {hideTags} from "./function/Setting/hideTags.js";
import {state, userName} from "./function/Setting/State.js";
import {settingTranslite} from "./function/Setting/settingTranslite.js";
import {hideBlock} from "./function/Setting/hideBlock.js";
import {getLinkToImageFlickr} from "./function/Background slider/getLinkToImageFlickr.js";
import {getLinkToImageUnsplash} from "./function/Background slider/getLinkToImageUnsplash.js";
import {getWeather} from "./function/Weather/getWeather.js";
import {getQuotes} from "./function/Quote/getQuotes.js";
import {audio, playAudio, playNext, playPrev, toggleBtn, muteAudio, currentTimeAudio, seekAudio, showAudioDuration} from "./function/Audio player/player.js";
import {playList} from "./playList.js";
import {createElementPlaylist} from "./function/Audio player/createElementPlaylist.js";
import {setLocalStorage} from "./function/Local storage/setLocalStorage.js";
import {getLocalStorage} from "./function/Local storage/getLocalStorage.js";
import {nameCheck} from "./function/Greeting/nameCheck.js";

const volumeSlider = document.querySelector('.volume-slider')
const seek = document.querySelector('.seek');
const muteButton = document.querySelector('.mute');
const settingBlocks = document.querySelectorAll('.setting-name input')
const blockTimeSetting = document.getElementsByName('time');
const blockDateSetting = document.getElementsByName('date');
const blockGreetingSetting = document.getElementsByName('greeting');
const blockQuoteSetting = document.getElementsByName('quote');
const blockWeatherSetting = document.getElementsByName('weather');
const blockAudioSetting = document.getElementsByName('audio');
const language = document.getElementsByName('language')[0]
const photoSource = document.getElementsByName('photo-source')[0]
const nextSlide = document.querySelector('.slide-next');
const prevSlide = document.querySelector('.slide-prev');
const tags = document.querySelector('.tag')
export let randomNum = getRandomNum(1,20);
const cityWeather = document.querySelector('.city')
const buttonChangeQuote = document.querySelector('.change-quote')
const play = document.querySelector('.play');
const playPrevButton  = document.querySelector('.play-prev');
const playNextButton = document.querySelector('.play-next');




/// Settings ///
hideTags();
settingTranslite();

document.querySelector('body').addEventListener('click', (event) => {
  const popupSetting = document.querySelector('.popup-setting');
  const tags = document.querySelector('.tag')
  const settingButton = document.querySelector('.setting-button');

  if(event.target.closest('.setting-button')){
    popupSetting.classList.toggle('active')

  }
  if (!event.target.closest('.popup-setting, .setting-button')) {
    popupSetting.classList.remove('active')
 }

});

// изменить этот блок если возможно
blockTimeSetting[0].addEventListener('change',hideBlock)
blockDateSetting[0].addEventListener('change',hideBlock)
blockGreetingSetting[0].addEventListener('change',hideBlock)
blockQuoteSetting[0].addEventListener('change',hideBlock)
blockWeatherSetting[0].addEventListener('change',hideBlock)
blockAudioSetting[0].addEventListener('change',hideBlock)
//

language.addEventListener('change',() => {
  state.language = language.value ;
  getWeather();
  showTime();
  showGreeting();
  getQuotes();
  settingTranslite();

});

photoSource.addEventListener('change',() => {
  state.photoSource = photoSource.value ;
  setBackground();
  hideTags();

});

tags.addEventListener('change',() => {
state.tags = tags.value ;
getLinkToImageFlickr();
getLinkToImageUnsplash();
setBackground();
});


/// Clock and calendar ///
showTime();

/// Greetings ///
userName.addEventListener('change',nameCheck)

userName.addEventListener('change', ()=>{
state.userName = userName.value;


});
showGreeting();

/// BackgroundSlider ///

setBackground();

nextSlide.addEventListener('click', getSlideNext);
prevSlide.addEventListener('click', getSlidePrev);

// Исправить если это возможно!
// не получилось импортировать эти функции так как переменная randomNum экспортируется как константа и ее увеличение не передается обратно.
function getSlidePrev(){
    if(photoSource.value == "GitHub"){
      if(randomNum <= 1){
        randomNum = 20;
        setBackground();
    }else{
        randomNum --;
        setBackground();
    }
    }else{
      setBackground();
    }
  };

  function getSlideNext(){
    if(photoSource.value == 'GitHub'){
      if(randomNum >= 20){
        randomNum = 1;
        setBackground();
    }else{
        randomNum ++;
        setBackground();
  
    }
    }else{
      setBackground();
    }
  }
 
  // Weather // 

  getWeather();

  cityWeather.addEventListener('change', ()=>{
    state.cityWeather=cityWeather.value;
    getWeather();
  });


  //Quote of the day widget//

  getQuotes();
  buttonChangeQuote.addEventListener('click', getQuotes);

  // Audio player//

audio.addEventListener('ended',playNext);

play.addEventListener('click', playAudio);
play.addEventListener('click', toggleBtn);

playNextButton.addEventListener('click', playNext);
playNextButton.addEventListener('click', toggleBtn);

playPrevButton.addEventListener('click', playPrev);
playPrevButton.addEventListener('click', toggleBtn);

muteButton.addEventListener('click',muteAudio)


createElementPlaylist(playList);

currentTimeAudio();
showAudioDuration();
seek.addEventListener('change',seekAudio);


muteButton.addEventListener('mouseover', ()=>{
  volumeSlider.style.opacity = 1;
})

muteButton.addEventListener('mouseout', ()=>{
  
  if(event.relatedTarget.classList.contains('player-controls')){
    volumeSlider.style.opacity = 0;
  }
})

volumeSlider.addEventListener('mouseout', ()=>{

  volumeSlider.style.opacity = 0;

})



//local storege//
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);