import { state, userName, cityWeather } from "../Setting/State.js";

export function setLocalStorage() {
  localStorage.setItem("name", userName.value);
  localStorage.setItem("city", cityWeather.value);
  localStorage.setItem("language", state.language);
  localStorage.setItem("photoSource", state.photoSource);
  localStorage.setItem("tags", state.tags);
}
