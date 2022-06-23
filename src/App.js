import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
let map;
let infoWindow;
function App() {
  const [markerInsideArea, setMarkerInsideArea] = useState();
  // 100.564648 13.7571651, 100.543362 13.6974657, 100.6339992 13.6607714, 100.6525386 13.719146, 100.564648 13.7571651
  const triangleCoords = [
    [
      { lat: 13.7571651, lng: 100.564648 },
      { lat: 13.6974657, lng: 100.543362 },
      { lat: 13.6607714, lng: 100.6339992 },
      { lat: 13.719146, lng: 100.6525386 },
      { lat: 13.7571651, lng: 100.564648 },
    ],
  ];
  const checkMarkerInArea = (lat, lng) => {
    let isInside = false;
    for (let i = 0; i < triangleCoords.length; i++) {
      isInside = checkPointInPolygon({ lat: lat, lng: lng }, triangleCoords[i]);
      if (isInside) {
        break;
      }
    }
    return isInside;
  };
  const checkPointInPolygon = (point, polygon) => {
    let isInside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      if (
        polygon[i].lat > point.lat != polygon[j].lat > point.lat &&
        point.lng <
          ((polygon[j].lng - polygon[i].lng) * (point.lat - polygon[i].lat)) /
            (polygon[j].lat - polygon[i].lat) +
            polygon[i].lng
      ) {
        isInside = !isInside;
      }
    }
    return isInside;
  };

  function initMap() {
    const bangalore = { lat: 12.97, lng: 77.59 };
    map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 13.87256, lng: 100.54448 },
      mapTypeId: "terrain",
    });

    // Construct the polygon.
    const bermudaTriangle = new window.google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

    bermudaTriangle.setMap(map);

    bermudaTriangle.addListener("click", showArrays);
    infoWindow = new window.google.maps.InfoWindow();

    window.google.maps.event.addListener(map, "click", event => {
      addMarker(event.latLng, map, event);
    });

    // Add a marker at the center of the map.
    addMarker(bangalore, map);
  }
  function addMarker(location, map, event) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.

    if (event) {
      console.log(checkMarkerInArea(event.latLng.lat(), event.latLng.lng()));
    }
    new window.google.maps.Marker({
      position: location,
      map: map,
    });
  }
  function showArrays(event) {
    // @ts-ignore
    const polygon = this;
    const vertices = polygon.getPath();
    let contentString = `${event.latLng.lat()},${event.latLng.lng()}`;
    if (event) {
      console.log(checkMarkerInArea(event.latLng.lat(), event.latLng.lng()));
    }
    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
  }
  useEffect(() => {
    initMap();
  }, []);
  // console.log("markerInArea :", markerInArea);
  return <div id='map'></div>;
}

export default App;
