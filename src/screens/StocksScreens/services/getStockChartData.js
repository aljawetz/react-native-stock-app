import { apiKey } from '../../../../config';

const getLabels = data => {
  const processedData = data["Time Series (Daily)"]
  let labels = Object.keys(processedData);
  return labels;
}

const getDatasets = data => {
  const processedData = data["Time Series (Daily)"];

  let datesArr = Object.values(processedData);
  let stockData = [];

  datesArr.forEach(date => {
    let valuesArr = Object.values(date);
    stockData.push(valuesArr[4]);
  });

  return stockData;
}

async function getChartData(symbol) {

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();

    const labels = getLabels(data);
    const stockData = getDatasets(data);

    return [labels, stockData.reverse()];
  } catch (error) {
    console.error(error);
  }
}

export default getChartData;