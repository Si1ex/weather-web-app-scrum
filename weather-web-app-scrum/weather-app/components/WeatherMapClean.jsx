import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { useMapEvent } from 'react-leaflet/hooks';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

function MyComponent(props) {
  //console.log('im MyComponent')
  const map = useMapEvent({});
  const [markers, setMarkers] = useState([props.markers]);
  L.tileLayer(
    'https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=S2SM4FrLssvaCXzwMk8M',
    {
      attribution:
        '&copy; <a style="margin-right:40px" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ',
    },
  ).addTo(map);

  return null;
}
var greenIcon = L.icon({
  iconUrl: 'https://www.svgrepo.com/show/302636/map-marker.svg',
  //shadowUrl: 'https://freesvg.org/img/marker-15.png',

  iconSize: [38, 95], // size of the icon
  shadowSize: [38, 95], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
export default function WeatherMap(props) {
  const [center, setCenter] = useState({
    lat: props.latitude,
    lng: props.longitude,
  });
  const [markers, setMarkers] = useState(props.markers);
  //console.log(markers)
  try {
    //console.log('lat,long' + [markers[0].latitude, markers[0].longitude])
  } catch {}
  const customIcon = new Icon({
    iconUrl: require('../public/vercel.svg'),
    //iconUrl: "./MapElements/location-pin.png",
    iconSize: [38, 38],
  });
  function MarkSpots() {
    const markerSpots = markers.map((marker) => {
      return (
        <Marker
          key={marker.latitude + marker.longitude}
          icon={greenIcon}
          position={[marker.latitude, marker.longitude]}
        ></Marker>
      );
    });
    return <>{markerSpots}</>;
  }

  const position = [51.505, -0.09];
  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom={false}
      className="w-full h-full rounded-3xl"
    >
      <MyComponent markers={markers} />

      <MarkSpots />
    </MapContainer>
  );
}
