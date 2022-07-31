export async function getList(country) {
    const data = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
    return await data.json();
  }