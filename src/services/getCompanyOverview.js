const apiKey = 'C77RP7AVYDQ3KWVC'

async function getCompanyOverview(symbol) {
  let symbolAAA = 'AAPL';

  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbolAAA}&apikey=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error(error);
  }
}

export default getCompanyOverview;