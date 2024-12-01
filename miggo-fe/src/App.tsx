import React from 'react';
import './App.css';
import { Map } from './Map'
import {ISSInfo} from "./ISSInfo";
import {useISSData} from "./useISSData";

function App() {
    const { data, fetchData } = useISSData()

    if (!data) {
        return <div>Loading...</div>
    }

    const position: [number, number] = [Number(data.position.latitude), Number(data.position.longitude)]

    return (
      <main className="app">
          <div className="map">
              <Map position={position}/>
          </div>
          <ISSInfo info={data} updatePosition={fetchData}/>
      </main>
    );
}

export default App;
