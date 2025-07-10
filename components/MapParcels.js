// components/MapParcels.js
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Custom green Leaflet marker
const greenIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// Recenter the map to fit all parcels
function RecenterMap({ parcels }) {
  const map = useMap()

  if (parcels.length > 0) {
    const bounds = parcels
      .flatMap(f => f.geometry.coordinates[0])
      .map(([lng, lat]) => [lat, lng])

    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [20, 20] })
    }
  }

  return null
}

export default function MapParcels({ parcels }) {
  const onEachFeature = (feature, layer) => {
    const props = feature.properties
    const label = `Section ${props.section} – ${props.numero} (${props.contenance} m²)`
    layer.bindPopup(label, { closeButton: false, offset: [0, -10] })
    layer.on('mouseover', () => layer.openPopup())
    layer.on('mouseout', () => layer.closePopup())
  }

  return (
    <MapContainer
      center={[48.86, 2.35]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%', borderRadius: '1rem' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      />

      {/* Automatically recenters when parcels change */}
      <RecenterMap parcels={parcels} />

      {/* Parcelle shapes */}
      {parcels.map((feature, i) => (
        <GeoJSON
          key={`geo-${i}`}
          data={feature}
          style={{ color: 'green', weight: 2, fillOpacity: 0.4 }}
          onEachFeature={onEachFeature}
        />
      ))}

      {/* Centroid markers */}
      {parcels.map((feature, i) => {
        const props = feature.properties
        return (
          <Marker
            key={`marker-${i}`}
            position={[props.centroid_lat, props.centroid_lon]}
            icon={greenIcon}
          >
            <Popup>
              Section {props.section} – {props.numero}
              <br />
              Surface : {props.contenance} m²
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
