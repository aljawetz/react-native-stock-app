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
  /*
  datesArr.forEach(date => {
    let valuesArr = Object.values(date);
    stockData.push(valuesArr[4]);
  });
  */
  for (let i = 0; i < datesArr.length; i++) {
    let date = datesArr[i];

    if (date == "2014-12-31") {
      return stockData;
    }

    let dateValues = Object.values(date);
    let closingValue = dateValues[4];
    stockData.push(closingValue);
  }
  return stockData;
}

async function getTimeSeriesDaily(symbol) {

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();

    const labels = getLabels(data);
    const stockData = getDatasets(data);

    return [labels, stockData];
  } catch (error) {
    console.error(error);
  }
}

export default getTimeSeriesDaily;