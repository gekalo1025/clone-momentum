import {state} from "./State.js";

const settingBlocks = document.querySelectorAll('.setting-name input')
const time = document.querySelector('.time')
const date = document.querySelector('.date')
const greetingContainer = document.querySelector('.greeting-container')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const buttonChangeQuote = document.querySelector('.change-quote')
const weather = document.querySelector('.weather')
const player = document.querySelector('.player')

export function hideBlock(){
      for(let key of settingBlocks){
         let nameblock=key.name;
        if(key.checked === true){
          switch (key.name) {
            case 'time':
              state.blockTime = true;
              time.classList.add('hide');
              break;
            case 'date':
              state.blockData = true
              date.classList.add('hide');
              break;
            case 'greeting':
              state.blockGreeting = true;
              greetingContainer.classList.add('hide');
              break;
            case 'quote':
              state.blockQuote = true;
              quote.classList.add('hide');
              author.classList.add('hide');
              buttonChangeQuote.classList.add('hide');
              break;
            case 'weather':
              state.blockWeather = true;
              weather.classList.add('hide');
              break;
            case 'audio':
              state.blockAudio = true;
              player.classList.add('hide');
              break;
          
          }
        }
        if(key.checked === false){
          switch (key.name) {
            case 'time':
              state.blockTime = false;
              time.classList.remove('hide');
              break;
            case 'date':
              state.blockData = false;
              date.classList.remove('hide');
              break;
            case 'greeting':
              state.blockGreeting = false;
              greetingContainer.classList.remove('hide');
              break;
            case 'quote':
              state.blockQuote = false;
              quote.classList.remove('hide');
              author.classList.remove('hide');
              buttonChangeQuote.classList.remove('hide');
              break;
            case 'weather':
              state.blockWeather = false;
              weather.classList.remove('hide');
              break;
            case 'audio':
              state.blockAudio = false;
              player.classList.remove('hide');
              break;
          
          }
    
        }
    }
    };