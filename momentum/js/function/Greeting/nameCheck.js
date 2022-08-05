import {state, userName} from "../Setting/State.js";

export function nameCheck(){     //изменить название функции оно не корекктное

if (userName.value=== ""){
   userName.value = localStorage.getItem('name');
}

}