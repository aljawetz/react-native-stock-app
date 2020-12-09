const apiKey = 'BZ4ESNSRHRYNWRZ4'

async function getCompanyOverview(symbol) {

  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}

export default getCompanyOverview;