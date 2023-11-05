// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// const arr = ["Scooby", "Velma", "Shaggy"];
// const len = arr.length;

// for (let i = len - 1; i >= 0; i--) {
//     console.log(arr[i].toUpperCase);
// }

const SECRET = "password";

let guess = prompt("Enter code");
while (guess !== SECRET) {
    guess = prompt("Enter code");
}