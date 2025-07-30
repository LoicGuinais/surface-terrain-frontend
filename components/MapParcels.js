import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'

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

  useEffect(() => {
    if (parcels.length > 0) {
      const bounds = parcels
        .flatMap(f => f.geometry.coordinates[0])
        .map(([lng, lat]) => [lat, lng])
      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [20, 20] })
      }
    }
  }, [parcels, map])

  return null
}

export default function MapParcels({ parcels }) {
  const franceCenter = [46.603354, 1.888334] // Default center on France

  const onEachFeature = (feature, layer) => {
    const props = feature.properties
    const label = `Section ${props.section} – ${props.numero} (${props.contenance} m²)`
    layer.bindPopup(label, { closeButton: false, offset: [0, -10] })

    // Safely open the popup right after binding
    try {
      layer.openPopup()
    } catch (e) {
      console.error('Popup failed to open:', e)
    }
  }

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden border border-surface-border">
      {/* Overlay message when no parcels */}
      {parcels.length === 0 && (
        <div className="absolute top-4 left-4 z-[1000] bg-white/90 text-black text-sm px-4 py-2 rounded shadow">
          Aucune parcelle à afficher pour l’instant.
        </div>
      )}

      <MapContainer
        center={franceCenter}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />

        <RecenterMap parcels={parcels} />

        {/* Parcel polygons with auto-opening popups */}
        {parcels.map((feature, i) => (
          <GeoJSON
            key={`geo-${i}`}
            data={feature}
            style={{ color: 'green', weight: 2, fillOpacity: 0.4 }}
            onEachFeature={onEachFeature}
          />
        ))}

        {/* Centroid markers (clickable) */}
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
    </div>
  )
}
