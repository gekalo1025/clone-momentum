import {getTimeOfDay} from "../Greeting/getTimeOfDay.js";
const tags = document.querySelector('.tag');

  export const imgUnsplash = new Image();

  export async function getLinkToImageUnsplash() {
    let url;
    if(tags.value){
      url = `https://api.unsplash.com/photos/random?query=${tags.value}&client_id=JOsDS9Zcf48JPaV00O7TLVMCHBd41Qx6AAOXgoivMPg`;

    }else{
    url = `https://api.unsplash.com/photos/random?query=${getTimeOfDay()}&client_id=JOsDS9Zcf48JPaV00O7TLVMCHBd41Qx6AAOXgoivMPg`;

    }
    const res = await fetch(url);
    const data = await res.json();
    let link = data.urls.regular;
    imgUnsplash.src = `${link}`;

  }