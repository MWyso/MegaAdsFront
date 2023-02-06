import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import '../../utils/fix-map-icon'

import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {
    return (
        <MapContainer center={[52.2257495, 21.0071009]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
            />
            <Marker position={[52.2257495, 21.0071009]}>
                <Popup>
                    <h2>Warszawa</h2>
                    <p>Stolica Polski</p>
                </Popup>
            </Marker>
            <Marker position={[50.26561, 18.9917058]}>
                <Popup>
                    <h2>IT.focus</h2>
                    <p>Firma Jakuba MegaK</p>
                </Popup>
            </Marker>
        </MapContainer>
    )
}