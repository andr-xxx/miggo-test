import {FC} from "react";

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

interface MapProps {
    position: [number, number];
}

export const Map: FC<MapProps> = ({ position }) => {
   return (
        <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}