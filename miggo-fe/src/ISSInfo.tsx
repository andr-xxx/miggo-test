import {FC} from "react";
import {IssData} from "./interfaces";
import {formatTimestamp} from "./utils";

interface ISSInfoProps {
    info: IssData;
    updatePosition: () => void
}

export const ISSInfo: FC<ISSInfoProps> = ({ info, updatePosition }) => {
    const { position: { longitude, latitude}, height, velocity, period } = info
    return <div className="info">
        <h3>ISS</h3>
        <p>Last update time: {formatTimestamp(info.timestamp)}</p>
        <ul>
            <li>Latitude: {latitude}</li>
            <li>Longitude: {longitude}</li>
            <li>Height: {height}</li>
            <li>Velocity: {velocity}</li>
            <li>Period: {period}</li>
        </ul>
        <button onClick={updatePosition}>
            Update ISS Position
        </button>
    </div>
}