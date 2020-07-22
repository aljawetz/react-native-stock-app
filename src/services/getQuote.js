const apiKey = 'C77RP7AVYDQ3KWVC'

async function getQuote(symbol) {

  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}

export default getQuote;