const testVariable = document.querySelector(".outputfromJs");
const totalKoinEl = document.querySelector("#totalKoin");
const annualrateEl = document.querySelector(".annualRate");
const priceKoinEl = document.querySelector(".priceRate");
const runScriptBtn = document.querySelector(".runScript");
const outputfromJsEl = document.querySelector(".outputFromJS");

// API from CoinGecko used to populate price of Koin.
const settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=koinos&vs_currencies=usd,",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  priceKoinEl.value = response.koinos.usd;
});

// Declaring JS variables used for calculation
let koinTotal = 0;
let rate = 0;
let price = 0;

// This function will be used to filter extra commas before converting String input to Number.
const calculateNumbers = function () {
  koinTotal = Number(totalKoinEl.value.replace(/,/gi, ""));
  rate = Number(annualrateEl.value);
  price = Number(priceKoinEl.value);
};

// This function runs calculations with parameters.
const runNumbers = function () {
  for (let i = 1; i <= 1; i++) {
    let koinReturn = (koinTotal * rate) / 100;
    outputfromJsEl.innerHTML = `Your Koin total for the beginning of the year is: ${Math.floor(
      koinTotal
    ).toLocaleString("en-US")} KOIN equal to: $${Math.floor(
      koinTotal * price
    ).toLocaleString("en-US")}. <br><br>
      Your return for this year at a rate of ${rate}% is: ${Math.floor(
      koinReturn
    ).toLocaleString(
      "en-US"
    )} KOIN. <br> This would be approximately ${Math.floor(
      koinReturn / 12
    ).toLocaleString(
      "en-US"
    )} KOIN per month. <br><br> This amount of Koin at today's price would cost you: $${Math.floor(
      koinReturn * price
    ).toLocaleString("en-US")}. <br><br> Your new Koin total is: ${Math.floor(
      koinTotal + koinReturn
    ).toLocaleString("en-US")} KOIN.`;
  }
};

// Converts the Koin input to US comma format.
totalKoinEl.addEventListener("keyup", function (event) {
  if (event.which >= 37 && event.which <= 40) return;

  // format number
  $(this).val(function (index, value) {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
});

totalKoinEl.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    calculateNumbers();
    runNumbers();
  }
});

annualrateEl.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    calculateNumbers();
    runNumbers();
  }
});

priceKoinEl.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    calculateNumbers();
    runNumbers();
  }
});
