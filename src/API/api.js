const getData = async (country) => {
    try {
        const res = await fetch(
            `https://restcountries.com/v3.1/name/${country}`
        );
        if (res.status !== 200) {
            throw new Error(`fetch is failed ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};
export default getData;
