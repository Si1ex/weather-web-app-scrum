import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { useMapEvent } from 'react-leaflet/hooks';
import 'leaflet/dist/leaflet.css';

function MyComponent() {
  const map = useMapEvent({});
  L.tileLayer(
    'https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=S2SM4FrLssvaCXzwMk8M',
    {
      attribution:
        '&copy; <a style="margin-right:40px" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ',
    },
  ).addTo(map);

  var apiData = {};
  var mapFrames = [];
  var lastPastFramePosition = -1;
  var mapLayers = [];
  let rainRadar = true;

  //Options for RainViewer api fetch
  var optionTileSize = 256; // can be 256 or 512.
  var optionColorScheme = 8; // from 0 to 8. Check the https://rainviewer.com/api/color-schemes.html for additional information
  var optionSmoothData = 1; // 0 - not smooth, 1 - smooth
  var optionSnowColors = 1; // 0 - do not show snow colors, 1 - show snow colors
  //var sourceBuilder = 'https://tilecache.rainviewer.com/12/256/{z}/{x}/{y}/8/1_1.png' //addLayer kokoaa tällaisen linkin, Palauttaa vain sade (ja lumi) alueet

  var loadingTilesCount = 0;
  var loadedTilesCount = 0;

  function startLoadingTile() {
    loadingTilesCount++;
  }
  function finishLoadingTile() {
    // Delayed increase loaded count to prevent changing the layer before
    setTimeout(function () {
      loadedTilesCount++;
    }, 250);
  }

  /**
   * Load all the available maps frames from RainViewer API
   * Info: https://www.w3schools.com/xml/xml_http.asp
   */
  var apiRequest = new XMLHttpRequest();
  apiRequest.open(
    'GET',
    'https://api.rainviewer.com/public/weather-maps.json',
    true,
  );
  apiRequest.onload = function (e) {
    // store the API response for re-use purposes in memory
    apiData = JSON.parse(apiRequest.response);
    initialize(apiData);
  };
  apiRequest.send();

  /**
   * Initialize internal data from the API response and options
   */
  function initialize(api) {
    // empty current layers
    for (var i in mapLayers) {
      map.removeLayer(mapLayers[i]);
    }
    mapLayers = [];
    mapFrames = api.radar.past;
    lastPastFramePosition = api.radar.past.length - 1;
    var newestFrame = mapFrames[lastPastFramePosition];

    if (rainRadar) {
      addLayer(api.radar.past[api.radar.past.length - 1]);
      mapLayers[newestFrame.path].setOpacity(0.35);
    }
  }

  function toggleRain() {
    if (!rainRadar) rainRadar = true;
    else rainRadar = false;
    initialize(apiData);
  }

  /**
   * Kokoaa tällaisen linkin, Palauttaa vain sade (ja lumi) alueet:
   * 'https://tilecache.rainviewer.com/12/256/{z}/{x}/{y}/8/1_1.png'
   * Lopuksi haettu kartta lisätään uudeksi kerrokseksi
   * @param path - Path to the XYZ tile
   */
  function addLayer(frame) {
    console.log('Haetan TileLayer..');
    if (!mapLayers[frame.path]) {
      var source = new L.TileLayer(
        apiData.host +
          frame.path +
          '/' +
          optionTileSize +
          '/{z}/{x}/{y}/' +
          optionColorScheme +
          '/' +
          optionSmoothData +
          '_' +
          optionSnowColors +
          '.png',
        {
          tileSize: 256,
          opacity: 0.01,
          zIndex: frame.time,
        },
      );

      // Track layer loading state to not display the overlay
      // before it will completelly loads
      source.on('loading', startLoadingTile);
      source.on('load', finishLoadingTile);
      source.on('remove', finishLoadingTile);

      mapLayers[frame.path] = source;

      console.log('Tilelayer HAEUTTU: ' + source);
    }
    if (!source) {
      console.log('Ei SOURCEA');
    }
    if (!map.hasLayer(mapLayers[frame.path])) {
      try {
        map.addLayer(mapLayers[frame.path]);
      } catch {}
    }
  }

  /**
   * Display particular frame of animation for the @position
   * @param position
   */
  function changeRadarPosition(position) {
    var nextFrame = mapFrames[position];
    addLayer(mapFrames[position]);
    mapLayers[nextFrame.path].setOpacity(0.35);
  }

  /**
   * Check avialability and show particular frame position from the timestamps list
   */
  function showFrame(nextPosition) {
    //changeRadarPosition(nextPosition)
    var nextFrame = mapFrames[nextPosition];
    addLayer(mapFrames[nextPosition]);
    mapLayers[nextFrame.path].setOpacity(0.35);
  }
  return null;
}

export default function WeatherMap(props) {
  const [center, setCenter] = useState({
    lat: props.latitude,
    lng: props.longitude,
  });

  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={false}
      className="w-full h-full rounded-3xl"
    >
      {/**
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/winter-v2/{z}/{x}/{y}.png?key=S2SM4FrLssvaCXzwMk8M"
      /> */}
      <MyComponent />
    </MapContainer>
  );
}
