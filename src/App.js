import './App.css';
import { MapContainer, TileLayer, Popup, Circle } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Coverage from './Coverage.js';

function App() {
  return (
    <>
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
                    <span className="text-secondary d-block">City: {item.name}</span><br />
                    <span className="text-secondary d-block">Network Usage: {item.data}</span><br />
                    <span className="text-secondary d-block">Area: {item.radius}</span>
                  </Popup>
                </Circle>
                // </Pane>
              )
            })
          }
        </MapContainer>
      </div>
    </>
  );
}

export default App;
