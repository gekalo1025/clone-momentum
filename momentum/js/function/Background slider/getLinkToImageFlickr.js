import {getTimeOfDay} from "../Greeting/getTimeOfDay.js";
import { getRandomNum } from "./getRandomNum.js";
const tags = document.querySelector('.tag');

export  const imgFlickr = new Image();

export async function getLinkToImageFlickr() {
        let url;
        if(tags.value){
          url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2592cb1a018c47146cbc218bd58490e7&tags=${tags.value}&extras=url_l&format=json&nojsoncallback=1`;
        }else{
          url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2592cb1a018c47146cbc218bd58490e7&tags=${getTimeOfDay()}&extras=url_l&format=json&nojsoncallback=1`;
        }
        const res = await fetch(url);
        const data = await res.json();
        const link = await data.photos.photo[getRandomNum(0,data.photos.photo.length)].url_l;
        imgFlickr.src = `${link}`;
      }
