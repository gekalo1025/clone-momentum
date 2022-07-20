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
  }
  window.addEventListener('beforeunload', setLocalStorage)

  //при загрузки если есть ключ name добавляет ее value
  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
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