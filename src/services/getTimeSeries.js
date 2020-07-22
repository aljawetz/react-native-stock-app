const apiKey = 'C77RP7AVYDQ3KWVC'

const getLabels = data => {
  const processedData = data["Time Series (5min)"]
  let labels = Object.keys(processedData);
  return labels;
}

const getDatasets = data => {
  const processedData = data["Time Series (5min)"];

  let newData = Object.values(processedData);
  let stockData = [];
  for (let i = 0; i < newData.length; i++) {
    let date = newData[i]
    let dateValues = Object.values(date);
    let closingValue = dateValues[3];

    stockData.push(closingValue);
  }
  return stockData;
}

async function getTimeSeries(symbol) {

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();

    const labels = getLabels(data);
    const stockData = getDatasets(data);

    let reducedLabels = [];
    let reducedData = [];
    let amostra = stockData.length;

    for (let i = 0; i < amostra; i++) {
      if (i == 0 || i == amostra - 1) reducedLabels[i] = labels[i];
      else reducedLabels.push('');
      //reducedData[i] = stockData[i];
    }

    return stockData;

  } catch (error) {
    console.error(error);
  }
}

export default getTimeSeries;