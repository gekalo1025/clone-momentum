import {playList} from "../../playList.js";

const playPrevButton  = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
export const audio = new Audio();
const playListContainer =document.querySelector('.play-list')
let isPlay = false;
let playNum = 0;


export function playAudio() {
  if(!isPlay){
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay=true;
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
  }else{
    playNum++;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay=true;
  }

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

}