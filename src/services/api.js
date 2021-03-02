const apiKey = 'XXXXX'
const url = `https://api.hgbrasil.com/finance?key=${apiKey}`;

async function getFinanceData() {
  try {
    let response = await fetch(url);
    let data = await response.json();

    let currencies = Object.entries(data["results"]["currencies"]);
    let stocks = data["results"]["stocks"];
    let taxes = data["results"]["taxes"][0];

    currencies.shift();
    currencies = currencies.map(currency => {
      let temp = { ...currency };
      return { "symbol": temp[0], ...temp[1] };
    });

    return [currencies, Object.values(stocks), taxes];

  } catch (error) {
    console.error(error);
  }
}
export default getFinanceData;
