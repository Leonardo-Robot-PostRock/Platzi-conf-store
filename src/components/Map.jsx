import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon } from 'leaflet'
import '../styles/components/Map.css';

const Icon =
  'https://i.pinimg.com/474x/36/dd/16/36dd1601f1b0e6642b3556d827e1c0aa.jpg';

const position = [-32.8961554, -68.8459221];

const Map = () => (
  <MapContainer center={position} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup icon={Icon}>
        A pretty CSS3 popup.
        <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
);
export default Map;
