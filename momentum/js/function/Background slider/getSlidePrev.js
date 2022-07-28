  // не получилось экспортировать из-за переменной randomNum
  import { setBackground } from "./setBackground.js";
  import {randomNum} from "../../index.js";//

  export function getSlidePrev(){
    console.log(randomNum)
    if(state.photoSource = "GitHub"){
      if(randomNum<=1){
        randomNum = 20;
        setBackground();
    }else{
        randomNum --;
        setBackground();
    }
    }else{
      setBackground();
    }
  }