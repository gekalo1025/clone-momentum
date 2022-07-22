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
  const body = document.querySelector('body')

  function getRandomNum(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 

  }

  let randomNum = getRandomNum(1,20);
  function setBg(){
    let timeOfDay = getTimeOfDay();
    const img = new Image();
    if(randomNum < 10){
        img.src =`https://raw.githubusercontent.com/gekalo1025/momentum-image/assets/images/${timeOfDay}/0${randomNum}.jpg`
    }else{
        img.src =`https://raw.githubusercontent.com/gekalo1025/momentum-image/assets/images/${timeOfDay}/${randomNum}.jpg`
    }
    img.onload = () => {      
      body.style.backgroundImage = `url(${img.src})`;
    }; 
  }
  setBg();//видно старое изображение при обновлении страницы. переход не плавный
  const nextSlide = document.querySelector('.slide-next')
  const prevSlide = document.querySelector('.slide-prev')

  function getSlideNext(){
    if(randomNum>=20){
        randomNum = 1;
        setBg();
    }else{
        randomNum ++;
        setBg();

    }
  }
  function getSlidePrev(){
    if(randomNum<=1){
        randomNum = 20;
        setBg();
    }else{
        randomNum --;
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
    let randomQutes = getRandomNum(0,data[userLanguages].length);
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
