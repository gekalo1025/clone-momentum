///Clock and calendar//

const time = document.querySelector('.time')
const date = document.querySelector('.date')
const userLanguages = navigator.language
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
const name = document.querySelector('.name')
name.placeholder =`${greetingTranslation['placeholder'][userLanguages]}`

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
    }
showGreeting();


////сохранение переменных в local storege при событии beforeunload
function setLocalStorage() {
    localStorage.setItem('name',name.value);
    localStorage.setItem('city',cityWeather.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  //при загрузки если есть ключ name добавляет ее value
  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
      cityWeather.value = localStorage.getItem('city');
    }
  }
  window.addEventListener('load', getLocalStorage)
  

  name.addEventListener('change',nameCheck)

function nameCheck(){     //изменить название функции оно не корекктное

if (name.value== ""){
  name.value = localStorage.getItem('name');
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
  const img = new Image();
  async function getLinkToImageUnsplash() {
    const url = `https://api.unsplash.com/photos/random?query=${getTimeOfDay()}&client_id=JOsDS9Zcf48JPaV00O7TLVMCHBd41Qx6AAOXgoivMPg`;
    const res = await fetch(url);
    const data = await res.json();
    let link = data.urls.regular
    img.src = `${link}`
    if (data == '403'){
      return false;
    }
  }
  //Flickr API
  async function getLinkToImageFlickr() {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2592cb1a018c47146cbc218bd58490e7&tags=${getTimeOfDay()}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    const link = await data.photos.photo[getRandomNum(0,data.photos.photo.length)].url_l
    img.src = `${link}`
    if (data == '403'){
      return false;
    }
  }
//  getLinkToImageFlickr()
// getLinkToImageUnsplash();

  const body = document.querySelector('body')
   
  function setBg(){
    if (getLinkToImageUnsplash()){
      getLinkToImageFlickr()
      img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`;
    }
  }
    else if(getLinkToImageFlickr){
      getLinkToImageUnsplash()
      img.onload = () => {      
        body.style.backgroundImage = `url(${img.src})`;
    }

    }
}
  setBg();//видно старое изображение при обновлении страницы. переход не плавный

  const nextSlide = document.querySelector('.slide-next')
  const prevSlide = document.querySelector('.slide-prev')

  function getSlideNext(){
        setBg();
  }
  function getSlidePrev(){
       setBg();
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


  // Audio player//
const playPrevButton  = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
const audio = new Audio();
const playListContainer =document.querySelector('.play-list')

let isPlay = false;
let playNum = 0;

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


///settings//
