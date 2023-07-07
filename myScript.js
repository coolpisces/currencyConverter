const currencyFirst = document.getElementById('currencyFirst');
const currencySecond = document.getElementById('currencySecond');
const count = document.getElementById('count');
const equal = document.getElementById('equal');
const exchangeRate = document.getElementById('exchangeRate');

updateCurrency();

function updateCurrency() {
    fetch(`https://v6.exchangerate-api.com/v6/f66c86d993b033826111f4c0/latest/${currencyFirst.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const rate = data.conversion_rates[currencySecond.value];
            equal.textContent = rate * count.value;
            exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;
        })
};

currencyFirst.addEventListener('click', updateCurrency);
currencySecond.addEventListener('click', updateCurrency);
count.addEventListener('input', updateCurrency);