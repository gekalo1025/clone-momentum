import {state} from "./State.js";

const titleLanguage =document.querySelector('.setting.language');
const titlePhotoSourse = document.querySelector('.setting.link-background');
const titleTags = document.querySelector('.setting.tags');
const titleBlocks = document.querySelectorAll('.block >span')
const titleSetting =document.querySelector('.setting-title h3')

export function settingTranslite (){
  titleSetting.textContent = `${settingTranslation['setting'][state.language]}`;
  titleLanguage.textContent = `${settingTranslation['Language'][state.language]}`;
  titlePhotoSourse.textContent =`${settingTranslation['photosource'][state.language]}`;
  titleTags.textContent =`${settingTranslation['tags'][state.language]}`;
  titleBlocks[0].textContent =`${settingTranslation['timeBlock'][state.language]}`;
  titleBlocks[1].textContent =`${settingTranslation['dateBlock'][state.language]}`;
  titleBlocks[2].textContent =`${settingTranslation['greetingBlock'][state.language]}`;
  titleBlocks[3].textContent =`${settingTranslation['quoteBlock'][state.language]}`;
  titleBlocks[4].textContent =`${settingTranslation['weatherBlock'][state.language]}`;
  titleBlocks[5].textContent =`${settingTranslation['audioBlock'][state.language]}`;

};
