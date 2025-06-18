
const btcPriceElement = document.getElementById('btc-price');

// Simulasi update harga
setInterval(() => {
    const fakePrice = 68000 + Math.random() * 200;
    btcPriceElement.innerText = "$" + fakePrice.toFixed(2);
}, 2000);
