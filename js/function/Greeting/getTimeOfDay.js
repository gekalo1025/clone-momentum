
export function getTimeOfDay(){
const DATE = new Date();
const minutes = (DATE.getHours()*60)+DATE.getMinutes();
let timeOfDay ='';
if(minutes>=0 && minutes<360){timeOfDay = 'night'}
if(minutes>=360 && minutes<720){timeOfDay = 'morning'}
if(minutes>=720 && minutes<1080){timeOfDay = 'afternoon'}
if(minutes >= 1080 && minutes< 1440){timeOfDay = 'evening'}

return timeOfDay
}