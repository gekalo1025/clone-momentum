import {getLinkToImageGitHub, imgGit} from "./getLinkToImageGitHub.js";
import { getLinkToImageFlickr,imgFlickr } from "./getLinkToImageFlickr.js";
import {getLinkToImageUnsplash, imgUnsplash} from "./getLinkToImageUnsplash.js";


const photoSource = document.getElementsByName('photo-source')[0];
const body = document.querySelector('body')

 export function setBackground(){
   if(photoSource.value === "GitHub"){
  getLinkToImageGitHub();
  imgGit.onload = () => {      
    body.style.backgroundImage = `url(${imgGit.src})`;
  }
   }
   else if(photoSource.value === "unsplash"){
    getLinkToImageUnsplash();
      imgUnsplash.onload = () => {      
      body.style.backgroundImage = `url(${imgUnsplash.src})`;
   }
  }
   else if(photoSource.value === "flickr"){
     getLinkToImageFlickr();
     imgFlickr.onload = () => {      
       body.style.backgroundImage = `url(${imgFlickr.src})`;
   }}


  }