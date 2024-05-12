let buttonClear = document.getElementById('button-clear'); 

buttonClear.addEventListener('click', function (event) { 
    event.preventDefault(); 
    result.textContent = '0';
    resultWthSymbols.textContent = 0; 
    formInputText.value = '';
    priceForText.textContent = 'кликните на «Посчитать»'
}); 