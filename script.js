//получаем форму ввода текста
let formInputText = document.querySelector('.input-textarea');

// поля вывода количества символов в span, под формой
let result = document.getElementById("result");
let resultWthSymbols = document.getElementById("result-wth-symbols"); 

//функция для проверки работы кнопки
let button = document.querySelector('button'); 
button.addEventListener('click', (event) => alert('Кнопка работает'))

//функция для подсчета символов, выводит в span  
formInputText.addEventListener('input', (event) => {
  //счетчик в span для кол-ва символов с пробелами
  let lengthOfText = formInputText.value; 
  result.textContent = lengthOfText.length;
  //счетчик в span для кол-ва символов без пробелов
  let textWthSymbols = formInputText.value;
  let trimmedText = textWthSymbols.trim()
  resultWthSymbols.textContent = trimmedText.length;
});

//команды для проверки и отладки 
// нужно использовать метод trim для подсчета количества символов без пробелов 
// нужно использовать свойство length для подсчета количества символов с пробелами или без пробелов 
/* 

документацию и полезные советы можно и нужно взять из этой статьи на Доке 

https://doka.guide/js/string-length/#:~:text=%D0%A1%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE%20length%20%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%20%D0%B4%D0%BB%D0%B8%D0%BD%D1%83%20%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8,%D0%94%D0%BB%D0%B8%D0%BD%D0%B0%20%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B9%20%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8%20%D1%80%D0%B0%D0%B2%D0%BD%D0%B0%200.

*/