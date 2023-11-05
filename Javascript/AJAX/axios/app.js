// axios.get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log(res);
//     }).catch((e) => {
//         console.log(e);
//     })

const getSWP = async () => {
    try {
        const config = { headers: { HeaderName: 'someValue' } };
        const data = axios.get("https://swapi.dev/api/people/1/", config);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}
getSWP();

