import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import ScoreKeeper from './ScoreKeeper'
import Die from './Lucky7/Die'
import Dice from './Lucky7/Dice'
import LuckyN from './Lucky7/LuckyN'
import UsernameForm from './UsernameForm'


function App() {
  return (
    <>
      <UsernameForm />
      {/* <LuckyN /> */}
      {/* <Dice dice={[6, 6]} /> */}
      {/* <ScoreKeeper numPlayers ={4}/> */}
    </>
  )
}

export default App
