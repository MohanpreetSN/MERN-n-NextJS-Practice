import { useState } from "react";

export default function ScoreKeeper({numPlayers=4, target = 5}) {
    let initScore = new Array(numPlayers).fill(0);
    const [scores, setScore] = useState(initScore);
    const upScore = (i) => {
        setScore(scores => {
            // const copyScore = [...scores];
            // copyScore[i] += 1;
            // return copyScore;
            return scores.map((score, idx) => {
                if (i === idx) return score + 1;
                return score;
            })
        })
    }
    const resetScore = () => {
        setScore(initScore);
    }
    return (
        <>
            <div>
            <ul>
                {scores.map((el, i) => {
                    return <li key={i}>Player {i+1}: {el} 
                    <button onClick={() => upScore(i)}>+1</button> 
                    {el >= target && 'You Win !!'}</li>
                })}
            </ul>
            <button onClick={resetScore}> reset </button>
            </div>
        </>
    )
}