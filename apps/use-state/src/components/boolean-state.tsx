import React from 'react'

export default function BooleanState() {
  const [single, setSingle] = React.useState(false)

  return (
    <form>
      <input
        type='checkbox'
        name='single'
        id='single'
        checked={single}
        onChange={e => setSingle(e.target.checked)}
      />{' '}
      single
      <p>{single ? 'single' : 'merried'}</p>
    </form>
  )
}
