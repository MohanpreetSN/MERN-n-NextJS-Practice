import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button.jsx";

export default function LuckyN({ numDice = 2, wincheck = Lucky7Wincheck }) {
    const [dice, setDice] = useState(rollDice(numDice));
    const isWin = wincheck(dice);
    const reRoll = () => {
        setDice(rollDice(numDice));
    }

    return (
        <div className="LuckyN">
            <h1>Lucky 7 Game</h1>
            {isWin && <h2>You Win</h2>}
            <Dice dice={dice} />
            <Button onClick={reRoll} text={"Re-roll"} />
            {/* <button onClick={reRoll}>Re-roll</button> */}
        </div>
    )
}

function Lucky7Wincheck(dice) {
    return sumArr(dice) === 7;
}

function rng(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollDice(numDice = 2, sides = 6) {
    const diceArr = [];
    for (let i = 0; i < numDice; i++) {
        diceArr.push(rng(sides));
    }
    return diceArr;
}

function sumArr(arr) {
    return arr.reduce((partialSum, a) => partialSum + a, 0);
}

