import React from 'react'

export default function App() {
  const [coordinates, setCoordinates] = React.useState()

  React.useEffect(() => {
    window.addEventListener('mousemove', ev => console.log(ev))
    return () =>
      window.removeEventListener('mousemove', () => console.log('removed'))
  }, [])

  return (
    <div>
      <p>{JSON.stringify(coordinates)}</p>
    </div>
  )
}
