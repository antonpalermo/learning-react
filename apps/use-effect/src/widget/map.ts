import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'

export class Maps {
  private map: L.Map

  constructor(element: string | HTMLElement) {
    this.map = L.map(element, {
      zoomControl: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      scrollWheelZoom: false,
      zoomAnimation: false,
      touchZoom: false,
      zoomSnap: 1.0
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map)

    this.map.setView([0, 0], 0)
  }

  setZoomLevel(level: number) {
    this.map.setZoom(level)
  }
}
