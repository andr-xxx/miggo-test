import {FC} from "react";

import {MapContainer, TileLayer, Marker, Polyline} from 'react-leaflet'

interface MapProps {
    positions: [number, number][]
}

export const Map: FC<MapProps> = ({ positions }) => {
    return (
        <MapContainer center={positions[positions.length - 1]} zoom={7} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                positions.map((pos, index) => (
                    <>
                        {positions[index + 1] ? <Polyline positions={[pos, positions[index + 1]]}/> : null}
                        <Marker position={pos}/>
                    </>
                ))
            }
        </MapContainer>
    )
}