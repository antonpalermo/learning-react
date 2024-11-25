import React from 'react'

export default function InputState() {
  const [name, setName] = React.useState('')

  return (
    <div>
      <p>Input: {name}</p>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
    </div>
  )
}
