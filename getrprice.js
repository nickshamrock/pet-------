let buttonCount = document.getElementById('button-count'); 
let priceForText = document.getElementById('price-for-text'); 
let priceForThousandSymbols = document.getElementById('price-for-thousand-symbols'); 

buttonCount.addEventListener('click', function (event) {
  let price = (countOfSymbols/*переменная из app.js*/ / 1000) * priceForThousandSymbols.value;
  priceForText.textContent = price.toFixed(2) + ' руб.';
})


