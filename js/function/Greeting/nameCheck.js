import { state, userName } from "../Setting/State.js";

export function nameCheck() {
  if (userName.value === "") {
    userName.value = localStorage.getItem("name");
  }
}
