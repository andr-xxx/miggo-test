import React from 'react';
import './App.css';
import { Map } from './Map'
import {ISSInfo} from "./ISSInfo";
import {useISSData} from "./useISSData";

function App() {
    const { current, currentPosition, retrospectiveData, fetchData } = useISSData()

    if (!currentPosition) {
        return <div>Loading...</div>
    }

    return (
        <main className="app">
          <div className="map">
              <Map position={currentPosition} retrospectiveData={retrospectiveData}/>
          </div>
          {current && <ISSInfo info={current} updatePosition={fetchData}/>}
      </main>
    );
}

export default App;
