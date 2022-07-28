import {getTimeOfDay} from "../Greeting/getTimeOfDay.js";
import {randomNum} from "../../index.js";

export const imgGit = new Image();

export function getLinkToImageGitHub(){
    if(randomNum < 10){
        imgGit.src =`https://raw.githubusercontent.com/gekalo1025/momentum-image/assets/images/${getTimeOfDay()}/0${randomNum}.jpg`
    }else{
        imgGit.src =`https://raw.githubusercontent.com/gekalo1025/momentum-image/assets/images/${getTimeOfDay()}/${randomNum}.jpg`
    }
    
  }


