///Clock and calendar//

const time = document.querySelector('.time')
const date = document.querySelector('.date')
const userLanguages = navigator.language
function  showTime (){
    const DATE = new Date();
    const currentTime = DATE.toLocaleTimeString()
    time.textContent = currentTime;
    showData();
    setTimeout(showTime,1000);
}
function showData(){
    const DATE = new Date();
    
    const options = {weekday:'long',month: 'long', day: 'numeric', };
    const currentDate = DATE.toLocaleDateString(userLanguages,options);
    date.textContent = currentDate;
    
}
showTime();
