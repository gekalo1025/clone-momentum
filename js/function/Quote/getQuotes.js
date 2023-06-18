import {getRandomNum} from "../Background slider/getRandomNum.js";
import {state} from "../Setting/State.js";
 export async function getQuotes() {  
  const quote = document.querySelector('.quote')
  const author = document.querySelector('.author')
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let randomQutes = getRandomNum(0,data[state.language].length-1);
    quote.textContent = `"${data[state.language][randomQutes].text}"`;
    author.textContent = data[state.language][randomQutes].author
  }