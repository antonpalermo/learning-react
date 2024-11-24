import React from 'react'
import style from './App.module.css'
import Input from './Input'
import BooleanState from './Boolean'
import ObjectState from './ObjectState'

const names = ['Jane Doe', 'Mike Mayers', 'Obrien Dole']

function App() {
  const [pickCount, setPickCount] = React.useState(0)
  const [name, setName] = React.useState(() => names[randomIndex()])

  function randomIndex() {
    return Math.floor(Math.random() * names.length)
  }

  function pickNames() {
    setName(names[randomIndex()])
    setPickCount(prev => prev + 1)
  }

  return (
    <div className={style.container}>
      <h1>{name}</h1>
      <button onClick={pickNames}>Re-pick {pickCount}</button>
      <Input />
      <BooleanState />
      <ObjectState />
    </div>
  )
}

export default App
