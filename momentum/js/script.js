///Clock and calendar//

const time = document.querySelector('.time')
const date = document.querySelector('.date')
const userLanguages = navigator.language
function  showTime (){
    const DATE = new Date();
    const currentTime = DATE.toLocaleTimeString()
    time.textContent = currentTime;
    showData();
    getTimeOfDay();
    setTimeout(showTime,1000);
}
function showData(){
    const DATE = new Date();
    
    const options = {weekday:'long',month: 'long', day: 'numeric', };
    const currentDate = DATE.toLocaleDateString(userLanguages,options);
    date.textContent = currentDate;
    
}
showTime();

//Greetings///

const greeting = document.querySelector('.greeting');

function getTimeOfDay(){
let timeOfDay;
const DATE = new Date();
const hours = DATE.getHours();
if(hours>=6 && hours<12){timeOfDay = 'morning'}
if(hours>=12 && hours<18){timeOfDay = 'afternoon'}
if(hours>=18 && hours<0){timeOfDay = 'evening'}
if(hours>=0 && hours<6){timeOfDay = 'night'}
return timeOfDay
}

function showGreeting() {
        greeting.textContent=`Good ${getTimeOfDay()}`
    }
showGreeting();
////сохранение переменных в local storege при событии beforeunload
const name = document.querySelector('.name')
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
  const cityWeather = document.querySelector('.city')
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  async function getWeather() {  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather.value}&lang=en&appid=58d929a5a5f597ab9ea5eb33708779fd&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`

  }

  cityWeather.addEventListener('change', getWeather);
  getWeather()


  //Quote of the day widget//

  const quote = document.querySelector('.quote')
  const author = document.querySelector('.author')
  const buttonChangeQuote = document.querySelector('.change-quote')

  async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let randomQutes = getRandomNum(0,data.length);
    quote.textContent = `"${data[randomQutes].text}"`;
    author.textContent = data[randomQutes].author
  }
  getQuotes();

  buttonChangeQuote.addEventListener('click', getQuotes);