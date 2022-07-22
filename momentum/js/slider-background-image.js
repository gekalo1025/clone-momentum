const body = document.querySelector('body')

let randomNum = getRandomNum(1,20);
function setBg(){
  let timeOfDay = getTimeOfDay();
  const img = new Image();
  if(randomNum < 10){
      img.src =`https://raw.githubusercontent.com/gekalo1025/momentum-image/assets/images/${timeOfDay}/0${randomNum}.jpg`
  }else{
      img.src =`https://raw.githubusercontent.com/gekalo1025/momentum-image/assets/images/${timeOfDay}/${randomNum}.jpg`
  }
  img.onload = () => {      
    body.style.backgroundImage = `url(${img.src})`;
  }; 
}
setBg();//видно старое изображение при обновлении страницы. переход не плавный

const nextSlide = document.querySelector('.slide-next')
const prevSlide = document.querySelector('.slide-prev')

function getSlideNext(){
  if(randomNum>=20){
      randomNum = 1;
      setBg();
  }else{
      randomNum ++;
      setBg();

  }
}
function getSlidePrev(){
  if(randomNum<=1){
      randomNum = 20;
      setBg();
  }else{
      randomNum --;
      setBg();

  }
}
nextSlide.addEventListener('click', getSlideNext);
prevSlide.addEventListener('click', getSlidePrev);
