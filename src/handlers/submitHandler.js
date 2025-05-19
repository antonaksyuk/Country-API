import createCountryDom from "../components/card-render.js";
import dom from "../dom/dom.js";
import getData from "../API/api.js";

const submitHandler = async (event) => {
    event.preventDefault();

    const country = dom.input.value.trim().toLowerCase();

    // Clearing result and errors
    dom.result.innerHTML = '';
    dom.error.textContent = '';
    dom.error.classList.remove('active');

    if (!country) {
        dom.error.textContent = 'Please enter a country name.';
        dom.error.classList.add('active');
        return;
    }

    const data = await getData(country);

    if (!data || !Array.isArray(data) || data.length === 0) {
        dom.error.textContent = 'Country not found. Please try again.';
        dom.error.classList.add('active');
        return;
    }

    const card = createCountryDom(data[0]);
    dom.result.appendChild(card);
};

export default submitHandler;