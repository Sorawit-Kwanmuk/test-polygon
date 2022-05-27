import './App.css';
import { Loader } from '@googlemaps/js-api-loader';

function App() {
  // let map;

  // const loader = new Loader({
  //   apiKey: 'AIzaSyBQdM6-2q5JDY4Q4XWG3Dg1A5FWonZCDbc',
  //   version: 'weekly',
  // });

  // loader.load().then(() => {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });

  // function initMap() {

  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: {
  //       lat: -34.397,
  //       lng: 150.644,
  //     },
  //     zoom: 8,
  //   });
  // }

  // initMap();
  return <div id='map'></div>;
}

export default App;
