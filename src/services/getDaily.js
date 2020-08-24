const apiKey = 'C77RP7AVYDQ3KWVC'

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
  let lastData = Object.values(datesArr[0]);

  return [stockData, lastData];
}

async function getTimeSeriesDaily(symbol) {

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();

    const labels = getLabels(data);
    const [stockData, lastData] = getDatasets(data);

    return [labels, stockData.reverse(), lastData];
  } catch (error) {
    console.error(error);
  }
}

export default getTimeSeriesDaily;