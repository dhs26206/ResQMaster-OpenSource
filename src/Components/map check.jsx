import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markers from "./markers.json"
export function MapShow() {
    console.log('MapShow component rendering...');

  return (
    <MapContainer className="fixed inset-0" center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px',zIndex:"100" }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lon]}>
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
