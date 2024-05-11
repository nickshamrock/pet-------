let buttonCount = document.getElementById('button-count'); 
let priceForText = document.getElementById('price-for-text'); 
let priceForThousandSymbols = document.getElementById('price-for-thousand-symbols'); 

buttonCount.addEventListener('click', function (event) {
  let price = (countOfSymbols / 1000) * priceForThousandSymbols.value;
  priceForText.textContent = price;
})


