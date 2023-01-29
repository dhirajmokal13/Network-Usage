import './App.css';
import { MapContainer, TileLayer, Popup, Circle } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Coverage from './Coverage.js';

function App() {
  return (
    <>
    <h3 className='webHead'>City Wise availablity Map ({Coverage.length} Cities Data Available)</h3>
      <div className="container">
        <MapContainer center={{ lat: 21.1458, lng: 79.0882 }} zoom={5}>
          <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=VQ7cKnFLBfkQ4RMUGDmT'
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {
            Coverage && Coverage.map((item, index) => {
              let color;
              if (item.data >= 900) { color = '#0e0ee3' } else if (item.data >= 600) { color = '#6969eb' } else if (item.data >= 450) { color = '#a6a6ed' } else if (item.data >= 300) { color = '#a2e0fa' } else { color = '#e8b5b5' }
              return (
                //<Pane style={{ zIndex: 100 }} key={index}>
                <Circle key={index} center={[item.coordinates[0], item.coordinates[1]]} radius={item.radius} pathOptions={{ color: color }} >
                  <Popup>
                    <span className="text-secondary d-block"><span className="city-name">City: </span>{item.name}</span><br />
                    <span className="text-secondary d-block"><span className="city-name">Network Availablity: </span>{item.data}</span><br />
                    <span className="text-secondary d-block"><span className="city-name">Area: </span>{item.radius} Km<sup>2</sup></span>
                  </Popup>
                </Circle>
                // </Pane>
              )
            })
          }
        </MapContainer>
        <div style={{ marginTop: '0.5vh',marginBottom: '1vh' }}>
          <h5 className='barHead'>City Wise Network available</h5>
          <div className="bar" style={{ width: '10%', backgroundColor: '#e8b5b5', color: 'white'  }}>Availablity: 0 - 299</div>
          <div className="bar" style={{ width: '20%', backgroundColor: '#a2e0fa', color: 'white'  }}>Availablity: 300 - 449</div>
          <div className="bar" style={{ width: '30%' , backgroundColor: '#a6a6ed', color: 'white' }}>Availablity: 450 - 599</div>
          <div className="bar" style={{ width: '40%', backgroundColor: '#6969eb', color: 'white' }}>Availablity: 600 - 899</div>
          <div className="bar" style={{ width: '50%', backgroundColor: '#0e0ee3', color: 'white' }}>Availablity: 900 - 1000</div>
        </div>
      </div>
    </>
  );
}

export default App;
