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
if(hours>=12 && hours<18){timeOfDay = 'day'}
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