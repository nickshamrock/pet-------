export let srting = 'Привет, я из sessionStorage!'  

let formInputText = document.querySelector('.input-textarea');
let result = document.getElementById('result');
let resultWthSymbols = document.getElementById('result-wth-symbols');
//в переменную ниже записывается количество символов без пробелов 
let countOfSymbols;

formInputText.addEventListener('input', function (event) {
  let lengthOfText = formInputText.value; 
  result.textContent = lengthOfText.length;
  resultWthSymbols.textContent = lengthOfText.replace(/\s+/gu, '').length;
  //записываем в переменную countOfSymbols количество символов без пробелов
  countOfSymbols = lengthOfText.replace(/\s+/gu, '').length; 
});

