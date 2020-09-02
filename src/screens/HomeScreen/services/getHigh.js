const apiKey = '474d9395';
const urlHigh = `https://api.hgbrasil.com/finance/stock_price?key=${apiKey}&symbol=get-high`;
const urlLow = `https://api.hgbrasil.com/finance/stock_price?key=${apiKey}&symbol=get-low`;

async function getStock(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();

    let results = data["results"];
    let info = Object.values(results)[0];

    return info;

  } catch (error) {
    console.error(error);
  }
}

async function getFinanceData() {
  try {
    let high = await getStock(urlHigh);
    let low = await getStock(urlLow);

    return [high, low];

  } catch (error) {
    console.error(error);
  }
}


export default getFinanceData;