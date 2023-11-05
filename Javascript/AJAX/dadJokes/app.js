const giveDadJoke = async () => {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios("https://icanhazdadjoke.com/", config);
    const data = res.data;
    return data.joke;
}

const btn = document.querySelector('button');
btn.addEventListener('click', async () => {
    const joke = await giveDadJoke();
    const li = document.createElement('li');
    const ul = document.querySelector('ul');
    li.innerText = joke;
    ul.appendChild(li);
})