const apiKey = 'C77RP7AVYDQ3KWVC'

const getLabels = data => {
  const processedData = data["Time Series FX (Daily)"]
  let labels = Object.keys(processedData);
  return labels;
}

const getDatasets = data => {
  const processedData = data["Time Series FX (Daily)"];

  let datesArr = Object.values(processedData);
  let stockData = [];

  datesArr.forEach(date => {
    let valuesArr = Object.values(date);
    stockData.push(valuesArr[3]);
  });

  console.log(stockData);
  return stockData;
}

async function getCurrencyDaily(symbol) {

  const url = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=BRL&to_symbol=${symbol}&apikey=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();

    const labels = getLabels(data);
    const datasets = getDatasets(data);
    return [labels, datasets.reverse()];
  } catch (error) {
    console.error(error);
  }
}

export default getCurrencyDaily;