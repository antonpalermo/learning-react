import React from 'react'

function UserForm() {
  const [name, setName] = React.useState('Jane Doe')

  return (
    <div>
      <input
        type='text'
        name='name'
        id='name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default function ResetState() {
  const [version, setVersion] = React.useState(0)

  function reset() {
    setVersion(prev => prev + 1)
  }

  return (
    <div>
      <button onClick={reset}>reset</button>
      <UserForm key={version} />
    </div>
  )
}
