const settingTags = document.querySelector('.setting-tags')
const photoSource = document.getElementsByName('photo-source')[0]
export function hideTags (){ //изменить название функции
  if(photoSource.value === "unsplash" || photoSource.value === "flickr"){
    settingTags.classList.remove('hide');
  }
  else{
    settingTags.classList.add('hide');
  }
}