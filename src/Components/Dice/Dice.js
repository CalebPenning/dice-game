import { useState } from "react"
import "./Dice.css"
import Die from "../Die/Die"

const Dice = ({ numDice=6, title="Main Game", maxVal=20 }) => {
    const [numbers, setNumbers] = useState(Array.from({length: numDice}))
    // const dice = []
    // for (let i = 0; i < numDice; i++) {
    //     const randNum = Math.floor(Math.random() * maxVal) + 1
    //     dice.push(randNum)
    // }

    const rollDice = () => (
        setNumbers(numbers => (
            numbers.map(n => Math.floor(Math.random() * maxVal) + 1)
        ))
    )
    return (
        <div className="Dice">
            <h2>{title}</h2>
            <div>
            {numbers.map(num => <Die val={num} />)}
            </div>
            <button onClick={rollDice} className="rolldice">Roll Dice</button>
        </div>
    )
}

export default Dice