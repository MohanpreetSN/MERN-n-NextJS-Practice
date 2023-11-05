let max = parseInt(prompt("Enter your max number"));

while (!max) {
    max = parseInt(prompt("Enter a valid max number"));
}

let guess = prompt("Ok Start guessing");
let x = Math.floor(Math.random() * max) + 1;
let attempts = 1;

while (parseInt(guess) !== x) {
    if (guess === 'q') break;
    attempts++;
    if (parseInt(guess) < x) {
        guess = prompt("too low");
    } else {
        guess = prompt("too high");
    }

}

console.log(`You win! the answer is ${x}, it took ${attempts} attempts`);