export const blockTimeSetting = document.getElementsByName('time');
export const blockDateSetting = document.getElementsByName('date');
export const blockGreetingSetting = document.getElementsByName('greeting');
export const blockQuoteSetting = document.getElementsByName('quote');
export const blockWeatherSetting = document.getElementsByName('weather');
export const blockAudioSetting = document.getElementsByName('audio');
export const tags = document.querySelector('.tag')
export const language = document.getElementsByName('language')[0]
export const photoSource = document.getElementsByName('photo-source')[0]
export const cityWeather = document.querySelector('.city')
export const userName = document.querySelector('.user-name')



export const state = {
    cityWeather: cityWeather.value,
    userName: userName.value,
    language: language.value,
    photoSource : photoSource.value,  
    tags : tags.value,
    blockTime : Boolean(blockTimeSetting[0].checked),
    blockData :  Boolean(blockDateSetting[0].checked),
    blockGreeting :  Boolean(blockGreetingSetting[0].checked),
    blockQuote :  Boolean(blockQuoteSetting[0].checked),
    blockWeather :  Boolean(blockWeatherSetting[0].checked),
    blockAudio :  Boolean(blockAudioSetting[0].checked),
    
  }