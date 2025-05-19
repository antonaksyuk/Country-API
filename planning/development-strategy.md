# Project Name

<!-- describe your project -->

---

## Setup

<!-- what code do you need just to open the project? this might include:
  - boilerplate code (https://brandlitic.com/what-is-boilerplate-code/)
  - loading program data
  - rendering the initial user interface
-->

---

<!-- copy this section once for each must-have user story -->

## user story

<!-- each issue created from this section will have the `for: user story` label -->

> "as a ... i can ... so that ..."

<!-- write any extra notes or description -->

<!-- describe the tasks to build this user story
  these will have the `type: logic` label, for example
  not all projects will have all types of tasks
  and these are not the only possible types, just some suggestions
-->

### Logic: user story

- a _logic_ task -> this will become one issue
  - [ ] some checkboxes for this task
  - [ ] these will be copy-pasted into the issue

### Interface: user story

- an _interface_ task -> this will become one issue
  - [ ] some checkboxes for this task
  - [ ] these will be copy-pasted into the issue

### Interaction: user story

- an _interaction_ task -> this will become one issue
  - [ ] some checkboxes for this task
  - [ ] these will be copy-pasted into the issue

### Documentation: user story

- a _documentation_ task -> this will become one issue
  - [ ] some checkboxes for this task
  - [ ] these will be copy-pasted into the issue

---

// import getData from '../planning/API/api.js';

// //dom
// const dom = {
// form: document.getElementById('form'),
// input: document.getElementById('input'),
// result: document.getElementById('result'),
// error: document.getElementById('error')
// };

// //components

// const createCountryDom = (data) => {
// console.log(data);
// const countryCard = document.createElement('div');
// countryCard.classList.add('country-card');

// const countryName = document.createElement('h2');
// countryName.classList.add('country-name');
// countryName.innerText = data.name.official || data.name.common;

// const countryFlag = document.createElement('img');
// countryFlag.classList.add('country-flag');
// countryFlag.src = data.flags.svg || data.flags.png;
// countryFlag.alt = data.flags.alt || 'flag';

// const countryLanguages = document.createElement('p');
// countryLanguages.classList.add('country-languages');
// countryLanguages.innerText = `Language: ${Object.values(data.languages).join(', ')}`;

// const countryPopulation = document.createElement('p');
// countryPopulation.classList.add('country-population');
// countryPopulation.innerText = `Population: ${data.population}`;

// const countryCurrency = document.createElement('p');
// countryCurrency.classList.add('country-currency');
// countryCurrency.innerText = `Currency: ${Object.values(data.currencies).map((countryCurrency) => `${countryCurrency.name} (${countryCurrency.symbol})`).join(', ')}`;

// countryCard.append(
// countryName,
// countryFlag,
// countryLanguages,
// countryPopulation,
// countryCurrency,
// );
// return countryCard;
// };

// const updateDom = (countryDom, data) => {
// countryDom.querySelector('.country-name').innerText =
// data.name.official || data.name.common;

// countryDom.querySelector('.country-flag').src =
// data.flags.svg || data.flags.png;
// countryDom.querySelector('.country-flag').alt = data.flags.alt || 'flag';

// countryDom.querySelector('.country-languages').innerText =
// `Languages: ${Object.values(data.languages).join(', ')}`;

// countryDom.querySelector('.country-population').innerText =
// `Population: ${data.population}`;

// countryDom.querySelector('.countrey-currency').innerText = `Currency: ${Object.values(data.currencies).map((countryCurrency) => `${countryCurrency.name} (${countryCurrency.symbol})`).join(', ')}`;
// };

// //handler
// const submitHandler = async (event) => {
// event.preventDefault();
// const country = dom.input.value.trim().toLocaleLowerCase();
// if (!country) {
// dom.error.innerText = 'Enter correct name of the country';
// dom.error.classList.add('error');
// return;
// }
// if (dom.error.innerText !== '') {
// dom.error.innerText = '';
// // dom.error.classList.remove('error');
// }
// const data = await getData(country);

// if (!country) {
// dom.error.innerText = 'Not found, try again';
// dom.classList.add('error');
// return;
// }

// const countryDomExist = document.querySelector('countru-card');
// if (!countryDomExist) {
// const countryDom = createCountryDom(data[0]);
// dom.result.append(countryDom);
// } else {
// updateDom(countryDomExist, data[0]);
// }
// };

// //events
// dom.form.addEventListener('submit', (event) => {
// submitHandler(event);
// });
