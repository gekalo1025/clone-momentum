///settings//
let language = document.getElementsByName('language')[0]
const photoSource = document.getElementsByName('photo-source')[0]
const tags = document.querySelector('.tag')
const settingButton = document.querySelector('.setting-button');
const popupSetting = document.querySelector('.popup-setting');


const settingBlocks = document.querySelectorAll('.setting-name input')
const blockTimeSetting = document.getElementsByName('time');
const blockDateSetting = document.getElementsByName('date');
const blockGreetingSetting = document.getElementsByName('greeting');
const blockQuoteSetting = document.getElementsByName('quote');
const blockWeatherSetting = document.getElementsByName('weather');
const blockAudioSetting = document.getElementsByName('audio');
const greetingContainer = document.querySelector('.greeting-container')
const weather = document.querySelector('.weather')
const player = document.querySelector('.player')

const state = {
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

let userLanguages = state.language;


language.addEventListener('change',() => {
  state.language = language.value ;
  userLanguages = state.language;
  getWeather()
  showTime ()
  showGreeting()
  getQuotes()
  settingTranslit()

});

photoSource.addEventListener('change',() => {
  state.photoSource = photoSource.value ;
  setBg();
  hideTags();

});
tags.addEventListener('change',() => {
state.tags = tags.value ;
getLinkToImageFlickr();
getLinkToImageUnsplash();
setBg();
});

const settingTags = document.querySelector('.setting-tags')
function hideTags (){
  if(photoSource.value === "unsplash" || photoSource.value === "flickr"){
    settingTags.classList.remove('hide');
  }
  else{
    settingTags.classList.add('hide');
  }
}

hideTags();
blockTimeSetting[0].addEventListener('change',hideBlock)
blockDateSetting[0].addEventListener('change',hideBlock)
blockGreetingSetting[0].addEventListener('change',hideBlock)
blockQuoteSetting[0].addEventListener('change',hideBlock)
blockWeatherSetting[0].addEventListener('change',hideBlock)
blockAudioSetting[0].addEventListener('change',hideBlock)
function hideBlock(){

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
document.querySelector('body').addEventListener('click', (event) => {
  // console.log(event.target)
  if(event.target.closest('.setting-button')){
    popupSetting.classList.toggle('active')

  }
  if (!event.target.closest('.popup-setting, .setting-button')) {
    popupSetting.classList.remove('active')
 }

});
const titleLanguage =document.querySelector('.setting.language');
const titlePhotoSourse = document.querySelector('.setting.link-background');
const titleTags = document.querySelector('.setting.tags');
const titleBlocks = document.querySelectorAll('.block >span')
const titleSetting =document.querySelector('.setting-title h3')


function settingTranslit (){
  titleSetting.textContent = `${settingTranslation['setting'][userLanguages]}`;
  titleLanguage.textContent = `${settingTranslation['Language'][userLanguages]}`;
  titlePhotoSourse.textContent =`${settingTranslation['photosource'][userLanguages]}`;
  titleTags.textContent =`${settingTranslation['tags'][userLanguages]}`;
  titleBlocks[0].textContent =`${settingTranslation['timeBlock'][userLanguages]}`;
  titleBlocks[1].textContent =`${settingTranslation['dateBlock'][userLanguages]}`;
  titleBlocks[2].textContent =`${settingTranslation['greetingBlock'][userLanguages]}`;
  titleBlocks[3].textContent =`${settingTranslation['quoteBlock'][userLanguages]}`;
  titleBlocks[4].textContent =`${settingTranslation['weatherBlock'][userLanguages]}`;
  titleBlocks[5].textContent =`${settingTranslation['audioBlock'][userLanguages]}`;


};
settingTranslit();

///Clock and calendar//

const time = document.querySelector('.time')
const date = document.querySelector('.date')
function  showTime (){
  const DATE = new Date();
    const currentTime = DATE.toLocaleTimeString(userLanguages,{hour12: false})
    time.textContent = currentTime;
    showData();
    getTimeOfDay();
    setTimeout(showTime,1000);
  }
function showData(){
    const DATE = new Date();
    
    const options = {weekday:'long',month: 'long', day: 'numeric',};
    const currentDate = DATE.toLocaleDateString(userLanguages,options);
    date.textContent = currentDate;
    
}
showTime();

//Greetings///
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.user-name')

function getTimeOfDay(){
  let timeOfDay;
  const DATE = new Date();
const minutes = (DATE.getHours()*60)+DATE.getMinutes();
if(minutes>=0 && minutes<360){timeOfDay = 'night'}
if(minutes>=360 && minutes<720){timeOfDay = 'morning'}
if(minutes>=720 && minutes<1080){timeOfDay = 'afternoon'}
if(minutes >= 1080 && minutes< 1440){timeOfDay = 'evening'}
return timeOfDay
}

function showGreeting() {
  greeting.textContent= `${greetingTranslation[getTimeOfDay()][userLanguages]}`
  userName.placeholder =`${greetingTranslation['placeholder'][userLanguages]}`
    }
showGreeting();


////сохранение переменных в local storege при событии beforeunload
function setLocalStorage() {
    localStorage.setItem('name',userName.value);
    localStorage.setItem('city',cityWeather.value);
    localStorage.setItem('language',state.language);
    localStorage.setItem('photoSource',state.photoSource);
    localStorage.setItem('tags',state.tags);
    localStorage.setItem('isHideBlockTime',state.blockTime);
    localStorage.setItem('isHideBlockData',state.blockData);
    localStorage.setItem('isHideBlockGreeting',state.blockGreeting);
    localStorage.setItem('isHideBlockQuote',state.blockQuote);
    localStorage.setItem('isHideBlockWeather',state.blockWeather);
    localStorage.setItem('isHideBlockAudio',state.blockAudio);

  }
  window.addEventListener('beforeunload', setLocalStorage)

  //при загрузки если есть ключи добавляет ее value
  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      userName.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
      cityWeather.value = localStorage.getItem('city');
    }
    if(localStorage.getItem('language')) {
      language.value = localStorage.getItem('language');
    }
    if(localStorage.getItem('photoSource')) {
      photoSource.value = localStorage.getItem('photoSource');
    }
    if(localStorage.getItem('tags')) {
      tags.value = localStorage.getItem('tags');
    }
    // if(localStorage.getItem('isHideBlockTime')) {
    //   state.blockTime = localStorage.getItem('isHideBlockTime');
    //   blockTimeSetting[0].checked = localStorage.getItem('isHideBlockTime');
    // }
  }
  window.addEventListener('load', getLocalStorage)

  userName.addEventListener('change',nameCheck)

function nameCheck(){     //изменить название функции оно не корекктное

if (userName.value== ""){
  userName.value = localStorage.getItem('name');
}
}
  /////slider image///
  function getRandomNum(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  
  }
//Получение фонового изображения от API//
  //Unsplash API
  const imgGit = new Image();
  const imgFlickr = new Image();
  const imgUnsplash = new Image();

  async function getLinkToImageUnsplash() {
    let url;
    if(tags.value){
      url = `https://api.unsplash.com/photos/random?query=${tags.value}&client_id=JOsDS9Zcf48JPaV00O7TLVMCHBd41Qx6AAOXgoivMPg`;

    }else{
    url = `https://api.unsplash.com/photos/random?query=${getTimeOfDay()}&client_id=JOsDS9Zcf48JPaV00O7TLVMCHBd41Qx6AAOXgoivMPg`;

    }
    const res = await fetch(url);
    const data = await res.json();
    let link = data.urls.regular;
    imgUnsplash.src = `${link}`;

  }
  //Flickr API
  async function getLinkToImageFlickr() {
    let url;
    if(tags.value){
      url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2592cb1a018c47146cbc218bd58490e7&tags=${tags.value}&extras=url_l&format=json&nojsoncallback=1`;
    }else{
      url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2592cb1a018c47146cbc218bd58490e7&tags=${getTimeOfDay()}&extras=url_l&format=json&nojsoncallback=1`;
    }
    const res = await fetch(url);
    const data = await res.json();
    const link = await data.photos.photo[getRandomNum(0,data.photos.photo.length)].url_l;
    imgFlickr.src = `${link}`;
  }
  //github api/
  function getLinkToImageGitHub(){
    if(randomNum < 10){
        imgGit.src =`https://raw.githubusercontent.com/gekalo1025/momentum-image/assets/images/${getTimeOfDay()}/0${randomNum}.jpg`
    }else{
        imgGit.src =`https://raw.githubusercontent.com/gekalo1025/momentum-image/assets/images/${getTimeOfDay()}/${randomNum}.jpg`
    }
    
  }


  const body = document.querySelector('body')
  let randomNum = getRandomNum(1,20);

  function setBg(){
   if(photoSource.value === "GitHub"){
  getLinkToImageGitHub();
  imgGit.onload = () => {      
    body.style.backgroundImage = `url(${imgGit.src})`;
  }
   }
   else if(photoSource.value === "unsplash"){
    getLinkToImageUnsplash()
      imgUnsplash.onload = () => {      
      body.style.backgroundImage = `url(${imgUnsplash.src})`;
   }
  }
   else if(photoSource.value === "flickr"){
     getLinkToImageFlickr()
     imgFlickr.onload = () => {      
       body.style.backgroundImage = `url(${imgFlickr.src})`;
   }}


  }
  setBg();//видно старое изображение при обновлении страницы. переход не плавный

  const nextSlide = document.querySelector('.slide-next')
  const prevSlide = document.querySelector('.slide-prev')

  function getSlideNext(){
    if(state.photoSource = "GitHub"){
      if(randomNum>=20){
        randomNum = 1;
        setBg();
    }else{
        randomNum ++;
        setBg();
  
    }
    }else{
      setBg();
    }
  }
  function getSlidePrev(){
    if(state.photoSource = "GitHub"){
      if(randomNum<=1){
        randomNum = 20;
        setBg();
    }else{
        randomNum --;
        setBg();
  
    }
    }else{
      setBg();
    }
  }
  nextSlide.addEventListener('click', getSlideNext);
  prevSlide.addEventListener('click', getSlidePrev);


  ///Weather widget//
  let cityWeather = document.querySelector('.city')
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  // не работает 
  if(cityWeather.value =="Minsk" || cityWeather.value =="Минск"){
    cityWeather.value = weatherTranslation['defaultCity'][userLanguages];
  }else{
    cityWeather.value = localStorage.getItem('city');
  }

  async function getWeather() {  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather.value}&lang=${userLanguages}&appid=58d929a5a5f597ab9ea5eb33708779fd&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    if(cityWeather.value && !data.message){
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `${weatherTranslation['windSpeed'][userLanguages]}: ${Math.round(data.wind.speed)} m/s`
      humidity.textContent = `${weatherTranslation['Humidity'][userLanguages]}: ${Math.round(data.main.humidity)}%`
    }else {
      weatherIcon.className = 'weather-icon owf';
      temperature.textContent = '';
      weatherDescription.textContent = 'Enter an existing city';
      wind.textContent = '';
      humidity.textContent = '';
      alert('City not found');
      
    }
    
  }
  
  cityWeather.addEventListener('change', getWeather);
  window.addEventListener('load', getWeather);
  getWeather();


  //Quote of the day widget//

  const quote = document.querySelector('.quote')
  const author = document.querySelector('.author')
  const buttonChangeQuote = document.querySelector('.change-quote')

  async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let randomQutes = getRandomNum(0,data[userLanguages].length-1);
    quote.textContent = `"${data[userLanguages][randomQutes].text}"`;
    author.textContent = data[userLanguages][randomQutes].author
  }
  getQuotes();

  buttonChangeQuote.addEventListener('click', getQuotes);


  // Audio player//+ продвинутый 
const playPrevButton  = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
const audio = new Audio();
const playListContainer =document.querySelector('.play-list')
let isPlay = false;
let playNum = 0;




audio.addEventListener('ended', () => playNext());
function playAudio() {
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

function toggleBtn() {
  if(isPlay){
    play.classList.add('pause');
  }else{
    play.classList.remove('pause');
  }
}

function playNext() {
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
function playPrev() {
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

play.addEventListener('click', playAudio);
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);
play.addEventListener('click', toggleBtn);
playNextButton.addEventListener('click', toggleBtn);
playPrevButton.addEventListener('click', toggleBtn);

playList.forEach(el => {
  let li = document.createElement('li');
  li.classList.add('play-item')
  li.textContent= `${el.title}`
  playListContainer.append(li)
})


