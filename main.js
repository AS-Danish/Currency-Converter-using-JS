let apiKey = "3e359d93cf3df5cf4fb7ee6c";
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
let result = document.getElementById("result");

const fromDropdown = document.getElementById("FROM");
const toDropDown = document.getElementById("TO");

currencies.forEach(element => {
    const option = document.createElement("option");
    option.value = element;
    option.text = element;
    fromDropdown.add(option);
});

currencies.forEach(element => {
    const option = document.createElement("option");
    option.value = element;
    option.text = element;
    toDropDown.add(option);
});

fromDropdown.value = 'USD';
toDropDown.value = 'INR';


let convertCurrency = () => {
    const amount = document.querySelector("#currencyIP").value;
    const fromCurrency = fromDropdown.value;
    const toCurrency = toDropDown.value;

    if(amount.length != 0) {
        fetch(api)
        .then((response) => response.json())
        .then((data) => {
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];

            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
        });
    }
    else{
        alert("Please enter a Amount!");
        result.innerHTML = "0";
    }
}

document.querySelector("#exchng-btn").addEventListener("click", convertCurrency);