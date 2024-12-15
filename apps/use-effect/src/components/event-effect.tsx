import React from 'react'

function useEventListener(props: { listener: (e: PointerEvent) => void }) {
  React.useEffect(() => {
    window.addEventListener('pointermove', props.listener)
    return () => {
      window.removeEventListener('pointermove', props.listener)
    }
  }, [props.listener])
}

export default function EventEffect() {
  const [coordinates, setCoordinates] = React.useState<
    { x: number; y: number } | undefined
  >(undefined)

  useEventListener({
    listener: e => setCoordinates({ x: e.clientX, y: e.clientY })
  })

  return <p>Mouse Coordinates: {JSON.stringify(coordinates)}</p>
}
