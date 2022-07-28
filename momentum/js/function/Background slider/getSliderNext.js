  // не получилось экспортировать из-за переменной randomNum
import { setBackground } from "./setBackground.js";
import {randomNum} from "../../index.js";
const photoSource = document.getElementsByName('photo-source')[0];

export function getSlideNext(){
    if(photoSource.value == 'GitHub'){
      if(randomNum>=20){
        randomNum = 1;
        setBackground();
    }else{
        randomNum ++;
        console.log(randomNum1)
        setBackground();
  
    }
    }else{
      setBackground();
    }
  }