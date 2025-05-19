// Card components
const createCountryDom = (data) => {
    const countryCard = document.createElement('div');
    countryCard.classList.add('country-card');

    countryCard.innerHTML = `
    <h2 class="country-name">${data.name.official || data.name.common}</h2>
    <img class="country-flag" src="${data.flags.svg || data.flags.png}" alt="${data.flags.alt || 'flag'}">
    <p class="country-languages">Languages: ${Object.values(data.languages).join(', ')}</p>
    <p class="country-population">Population: ${data.population.toLocaleString()}</p>
    <p class="country-currency">Currency: ${Object.values(data.currencies)
        .map((cur) => `${cur.name} (${cur.symbol})`)
        .join(', ')}</p>
  `;

    return countryCard;
};

export default createCountryDom;