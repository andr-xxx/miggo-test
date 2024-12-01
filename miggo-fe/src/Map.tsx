import {FC} from "react";

import {MapContainer, TileLayer, Marker, Polyline} from 'react-leaflet'

interface MapProps {
    position: [number, number];
    retrospectiveData?: [number, number][]
}

export const Map: FC<MapProps> = ({ position, retrospectiveData }) => {
    console.log(retrospectiveData)
    return (
        <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                retrospectiveData && retrospectiveData.map((pos, index) => (
                    <>
                        {retrospectiveData[index + 1] ? <Polyline positions={[pos, retrospectiveData[index + 1]]}/> : null}
                        <Marker position={pos}/>
                    </>
                ))
            }
        </MapContainer>
    )
}