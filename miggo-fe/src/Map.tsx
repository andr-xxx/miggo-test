import {FC} from "react";

import {MapContainer, TileLayer, useMap, Marker, Popup, SVGOverlay} from 'react-leaflet'
import {type LatLngBoundsExpression, LatLngExpression} from "leaflet";

const position: LatLngExpression = [51.505, -0.09]
const bounds: LatLngBoundsExpression = [
    [51.49, -0.08],
    [51.5, -0.06],
]

export const Map: FC = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}