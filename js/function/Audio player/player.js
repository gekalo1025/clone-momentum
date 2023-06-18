import {playList} from "../../playList.js";
import { activeAudio} from "../../index.js";
const playPrevButton  = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
export const audio = new Audio();
const muteButton = document.querySelector('.mute');
const seek = document.querySelector('.seek');
const audioDuration = document.querySelector('.audioDuration')
const currentAudioDuration = document.querySelector('.currentaudioDuration')
const audioTitle = document.querySelector('.audio-title')
const volumeSlider = document.querySelector('.volume-slider')
const playItem =document.querySelectorAll('.play-item')
let currentDuration=  0;

let isPlay = false;
export let playNum = 0;


export function playAudio() {

if(!isPlay){
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
    audio.volume = 0.7;
    audio.play();
    isPlay=true;
    activeAudio(playNum);
  }else{
    audio.pause();
    isPlay=false;
  }

}

export function toggleBtn() {
  if(isPlay){
    play.classList.add('pause');
  }else{
    play.classList.remove('pause');
  }
}

export function playNext() {
  if(playNum===playList.length-1){
    playNum=0;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay=true;
    audio.classList.add('active');
  }else{
    playNum++;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay=true;
  }
  activeAudio(playNum);
}
export function playPrev() {
  if(playNum===0){
    playNum=playList.length-1;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay=true;
  }else{
    playNum--;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay=true;
  }
  activeAudio(playNum);
}

export function muteAudio (){
  muteButton.classList.toggle('active')
  
  if(muteButton.classList.contains('active') == false ){
    muteButton.style.backgroundImage= `url("./assets/svg/sound-on.svg")` 
    audio.muted = false;
  }
  if(muteButton.classList.contains('active') == true){
    muteButton.style.backgroundImage= `url("./assets/svg/mute.svg")` 
    audio.muted = true;
  }
  
}

export function currentTimeAudio(){
  seek.min=0;
  seek.max = audio.duration;
  seek.value=audio.currentTime 
  currentDuration = seek.value
  setTimeout(currentTimeAudio,1000)
}
export function seekAudio(){
  audio.currentTime=seek.value
}

export function showAudioDuration(){
  seetVolume ()
  if(audio.duration){
    audioTitle.textContent = `${playList[playNum].title}`
    if(audio.duration<60){
      audioDuration.textContent = `0:${Math.round(audio.duration)}`
    }
    if(audio.duration>=60){
      audioDuration.textContent = `${Math.trunc(audio.duration/60)}:${Math.round(audio.duration)%60}`
    }
  }
 setTimeout(showAudioDuration,100)
 showCurrentAudioDuration()
}

function showCurrentAudioDuration(){
  
  if(audio.duration){
    if(currentDuration<60){
      currentAudioDuration.textContent = `0:${String(currentDuration).padStart(2, "0")}  /`
    }
    if(currentDuration>=60){
      currentAudioDuration.textContent = `${Math.trunc(currentDuration/60)}:${String(Math.round(currentDuration)%60).padStart(2, "0")}  /`
    }
}

}
function seetVolume (){
  volumeSlider.min=0;
  volumeSlider.max = 1;
  volumeSlider.step =0.1;
  audio.volume=volumeSlider.value
  if (volumeSlider.value <=0.05){
  muteButton.style.backgroundImage= `url("./assets/svg/mute.svg")` 
  }
   if(volumeSlider.value > 0.05 && muteButton.classList.contains('active') == false ){
    muteButton.style.backgroundImage= `url("./assets/svg/sound-on.svg")` 
  }
}