// we need to use the api for the currency exchange

const api = "https://api.exchangerate-api.com/v4/latest/USD";

// controls

var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// changing the currency
fromCurrrency.addEventListener('change', (event)=>{
  resultFrom = `${event.target.value}`;
});

toCurrency.addEventListener('change', (event)=>{
  resultTo = `${event.target.value}`;
});


// update the value of the currency
function updateValue (e){
  searchValue = e.target.value;
}
// call the function when clicked
convert.addEventListener("click", getResults);

// function for getResults
function getResults(){
  fetch(`${api}`)
    .then(currency => {
      return currency.json();
    }).then(displayResults);
}

// display the convertion to the user
function displayResults(currency){
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValue.innerHTML = 
  ((toRate / fromRate) * searchValue).toFixed(2);
  finalAmount.style.display = "block";
}

// function for reset button
function clearVal(){
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = ""; 
}


