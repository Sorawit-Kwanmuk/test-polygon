import './App.css';
import { Loader } from '@googlemaps/js-api-loader';

function App() {
  //   function componentDidMount() {
  //     const googleScript = document.getElementById('google-map-script');

  //     if (window.google) {
  //       console.log('Google map already loaded');
  //     }

  //     googleScript.addEventListener('load', () => {
  //       // Patiently waiting to do the thing
  //       console.log('Google map script loaded');
  //     });
  //   }
  //   componentDidMount();
  // const google = window.google;
  // console.log(window);
  // console.log(google);
  // Create the script tag, set the appropriate attributes
  var script = document.createElement('script');
  script.src =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQdM6-2q5JDY4Q4XWG3Dg1A5FWonZCDbc&callback=initMap';
  script.async = true;
  script.defer = true;
  script.type = 'text/javascript';

  // Attach your callback function to the `window` object
  window.initMap = function () {
    // JS API is loaded and available
    function initMap() {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {
          lat: 24.886,
          lng: -70.268,
        },
        mapTypeId: 'terrain',
      });

      // Define the LatLng coordinates for the polygon's path.
      const triangleCoords = [
        {
          lat: 25.774,
          lng: -80.19,
        },
        {
          lat: 18.466,
          lng: -66.118,
        },
        {
          lat: 32.321,
          lng: -64.757,
        },
        {
          lat: 25.774,
          lng: -80.19,
        },
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
    }

    initMap();
  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
  // function initMap() {
  //   const map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 5,
  //     center: {
  //       lat: 24.886,
  //       lng: -70.268,
  //     },
  //     mapTypeId: 'terrain',
  //   });

  //   // Define the LatLng coordinates for the polygon's path.
  //   const triangleCoords = [
  //     {
  //       lat: 25.774,
  //       lng: -80.19,
  //     },
  //     {
  //       lat: 18.466,
  //       lng: -66.118,
  //     },
  //     {
  //       lat: 32.321,
  //       lng: -64.757,
  //     },
  //     {
  //       lat: 25.774,
  //       lng: -80.19,
  //     },
  //   ];

  //   // Construct the polygon.
  //   const bermudaTriangle = new google.maps.Polygon({
  //     paths: triangleCoords,
  //     strokeColor: '#FF0000',
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: '#FF0000',
  //     fillOpacity: 0.35,
  //   });

  //   bermudaTriangle.setMap(map);
  // }

  // initMap();
  return <div id='map'></div>;
}

export default App;
