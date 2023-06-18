    import {state} from "../Setting/State.js";
    export async function getWeather() {  

      const cityWeather = document.querySelector('.city')
      const weatherIcon = document.querySelector('.weather-icon');
      const temperature = document.querySelector('.temperature');
      const weatherDescription = document.querySelector('.weather-description');
      const wind = document.querySelector('.wind');
      const humidity = document.querySelector('.humidity');
      const language = document.getElementsByName('language')[0]
      
      if(cityWeather.value ==''){
        cityWeather.value = 'Minsk';
      };
      if(cityWeather.value =="Minsk" || cityWeather.value =="Минск"){
        cityWeather.value = weatherTranslation['defaultCity'][language.value];
        state.cityWeather = weatherTranslation['defaultCity'][language.value];
      };

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather.value}&lang=${state.language}&appid=58d929a5a5f597ab9ea5eb33708779fd&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    if(cityWeather.value && !data.message){
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `${weatherTranslation['windSpeed'][state.language]}: ${Math.round(data.wind.speed)} m/s`
      humidity.textContent = `${weatherTranslation['Humidity'][state.language]}: ${Math.round(data.main.humidity)}%`
    }else {
      weatherIcon.className = 'weather-icon owf';
      temperature.textContent = '';
      weatherDescription.textContent = 'Enter an existing city';
      wind.textContent = '';
      humidity.textContent = '';
      cityWeather.value = '';
    }
    
  }