import React from 'react'

export default function BasicState() {
  const names = ['Jane Doe', 'Max Lane', 'David Jones', 'Sin Clare']
  const [prePickCount, setPrePickCount] = React.useState(0)
  const [selectedName, setSelectedName] = React.useState(() => getRandomName())

  function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex]
  }

  function repickRandomName() {
    const name = getRandomName()

    setPrePickCount(prev => prev + 1)
    setSelectedName(name)
  }

  return (
    <div>
      <h1>{selectedName}</h1>
      <button onClick={repickRandomName}>Re Pick Name : {prePickCount}</button>
    </div>
  )
}
