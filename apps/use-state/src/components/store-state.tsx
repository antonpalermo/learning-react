import React from 'react'

function Counter({ count }: { count: number }) {
  const [status, setStatus] = React.useState('')
  const [prevCount, setPrevCount] = React.useState(count)

  if (prevCount !== count) {
    setPrevCount(count)
    setStatus(count > prevCount ? 'increasing' : 'decreasing')
  }

  return (
    <p>
      current count is {count} and currently {status}
    </p>
  )
}

export default function StoreState() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <div>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      </div>
      <Counter count={count} />
    </div>
  )
}
