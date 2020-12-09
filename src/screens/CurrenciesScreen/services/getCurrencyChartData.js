const apiKey = 'C77RP7AVYDQ3KWVC'

const getLabels = data => {
  const processedData = data["Time Series FX (Daily)"]
  let labels = Object.keys(processedData);
  return labels;
}

const getDatasets = data => {
  const processedData = data["Time Series FX (Daily)"];

  let datesArr = Object.values(processedData);

  let currencyData = [];

  datesArr.forEach(date => {
    let valuesArr = Object.values(date);
    currencyData.push(valuesArr[3]);
  });
  let lastData = datesArr[0];

  return [currencyData, lastData];
}

async function getCurrencyChartData(symbol) {

  const url = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=BRL&to_symbol=${symbol}&apikey=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();

    const labels = getLabels(data);
    const [datasets, lastData] = getDatasets(data);

    return [labels, datasets.reverse(), lastData];
  } catch (error) {
    console.error(error);
  }
}

export default getCurrencyChartData;