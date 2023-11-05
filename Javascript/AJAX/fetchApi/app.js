// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         const data = res.json();
//         return data;
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

const getStarwarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}
getStarwarsPeople();
