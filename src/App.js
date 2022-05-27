import { useEffect } from 'react';
import './App.css';

function App() {
  function initMap() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: { lat: 13.87256, lng: 100.54448 },
      mapTypeId: 'terrain',
    });

    // Define the LatLng coordinates for the polygon's path.
    const triangleCoords = [
      [
        { lat: 13.8524323, lng: 100.4931031 },
        { lat: 13.8100946, lng: 100.4508744 },
        { lat: 13.7740849, lng: 100.5051194 },
        { lat: 13.818096, lng: 100.5466615 },
        { lat: 13.8524323, lng: 100.4931031 },
      ],
      [
        { lat: 13.8546323, lng: 100.6260549 },
        { lat: 13.8209631, lng: 100.5851995 },
        { lat: 13.7576118, lng: 100.6425344 },
        { lat: 13.760613, lng: 100.7087957 },
        { lat: 13.827964, lng: 100.7695638 },
        { lat: 13.8546323, lng: 100.6260549 },
      ],
      [
        { lat: 13.7178632, lng: 100.4771926 },
        { lat: 13.6671613, lng: 100.4758193 },
        { lat: 13.663158, lng: 100.747731 },
        { lat: 13.7258678, lng: 100.747731 },
        { lat: 13.7178632, lng: 100.4771926 },
      ],
    ];

    // Construct the polygon.
    const bermudaTriangle = new window.google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    });

    bermudaTriangle.setMap(map);
    console.log(map);
  }
  useEffect(() => {
    initMap();
  }, []);

  return <div id='map'></div>;
}

export default App;
