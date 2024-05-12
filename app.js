let formInputText = document.querySelector('.input-textarea');
let result = document.getElementById('result');
let resultWthSymbols = document.getElementById('result-wth-symbols');
//в переменную ниже записывается количество символов без пробелов из функции-обработчика ниже, используется в файле getprice.js 
let countOfSymbols;

formInputText.addEventListener('input', function (event) {
  let text = formInputText.value; 
  result.textContent = text.length;
  resultWthSymbols.textContent = text.replace(/\s+/gu, '').length;
  //записываем в переменную countOfSymbols количество символов без пробелов
  countOfSymbols = text.replace(/\s+/gu, '').length; 
  //добавим текст-заглушку в цену, если пользователь изменит текст после подсчета
  priceForText.textContent = 'кликните на «Посчитать»'; 
});

