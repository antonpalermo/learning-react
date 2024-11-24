import React from 'react'
import style from './App.module.css'

const names = ['Jane Doe', 'Mike Mayers', 'Obrien Dole']

function App() {
  const [name, setName] = React.useState(() => names[randomIndex()])

  function randomIndex() {
    return Math.floor(Math.random() * names.length)
  }

  function pickNames() {
    setName(names[randomIndex()])
  }

  return (
    <div className={style.container}>
      <h1>{name}</h1>
      <button onClick={pickNames}>Re-pick</button>
    </div>
  )
}

export default App
