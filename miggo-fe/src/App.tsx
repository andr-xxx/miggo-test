import React from 'react';
import './App.css';
import { Map } from './Map'
import {ISSInfo} from "./ISSInfo";
import {useISSData} from "./useISSData";

function App() {
    const { current, positions, fetchData } = useISSData()

    if (!positions.length) {
        return <div>Loading...</div>
    }

    return (
        <main className="app">
          <div className="map">
              <Map positions={positions}/>
          </div>
          {current && <ISSInfo info={current} updatePosition={fetchData}/>}
      </main>
    );
}

export default App;
