import React from 'react'
import { Maps } from '../widget/map'

function MapsWidgetContent({ zoomLevel }: { zoomLevel: number }) {
  const containerRef = React.useRef(null)
  const mapRef = React.useRef(null)

  React.useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new Maps(containerRef.current)
    }

    const map = mapRef.current
    map.setZoomLevel(zoomLevel)
  }, [zoomLevel])

  return <div ref={containerRef} style={{ width: 200, height: 200 }} />
}

export default function MapsWidget() {
  const [zoomLevel, setZoomLevel] = React.useState<number>(0)

  return (
    <div>
      <button onClick={() => setZoomLevel(prev => prev + 1)}>Zoom In</button>
      <button onClick={() => setZoomLevel(prev => prev - 1)}>Zoom Out</button>
      <MapsWidgetContent zoomLevel={zoomLevel} />
    </div>
  )
}
