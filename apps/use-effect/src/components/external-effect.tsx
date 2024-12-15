import React from 'react'

export default function ExternalEffect() {
  const [data, setData] = React.useState(undefined)

  React.useEffect(() => {
    async function getPlaceholderData() {
      const request = await fetch(
        'https://jsonplaceholder.typicode.com/users/1/albums'
      )
      setData(await request.json())
    }

    getPlaceholderData()
  }, [])

  return <div>{JSON.stringify(data)}</div>
}
