import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
import DoubleDice from './DoubleDice'
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'
import PropertiesList from './PropertiesList'
import Clicker from './Clicker'
import Counter from './Counter'


const data = [
  { id: 1, item: 'eggs', qty: 12, completed: false },
  { id: 2, item: 'milk', qty: 1, completed: true },
  { id: 3, item: 'bread', qty: 4, completed: false },
  { id: 4, item: 'carrots', qty: 6, completed: true },
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {

  return (
    <>
      <Counter />
      {/* <Clicker /> */}
      {/* <PropertiesList properties={properties} /> */}
      {/* <ShoppingList items={data}/> */}
      {/* <ColorList colors={['red', 'pink', 'blue', 'yellow']}/> */}

      {/* <Greeter first="Bill" last="Burr" age={20}/>
    <Greeter />
    <DoubleDice/> */}
    </>
  )
}

export default App
