import React from 'react';
import Footeri from '../components/Footeri';
import NavBar from '../components/NavBar';
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import markerData from '../components/markerData.json';
import CollectionBox from '@/components/CollectionPanel/CollectionBox';
import SpotTable2 from '@/components/SpotTable2';
import SpotList from '@/components/SpotList';

const WeatherMapClean = dynamic(() => import('@/components/WeatherMapClean'), {
  loading: () => <p>Ladataan...</p>,
  ssr: false,
});

function CollectionPanel(props) {
  const { data } = props;
  console.log(data);
  // const { data } = [
  //   {
  //     markers: [],
  //     response: {
  //       _id: '',
  //       email: '',
  //       password: '',
  //       locations: [],
  //     },
  //   },
  // ];
  const [selectedMarkers, setSelectedMarkers] = useState([]);
  //todo:
  //testidataa oikeeseen MOngodb
  //kirjautuneen käyttäjän locations haku mongodbstä (nyt oletus test5@testi5.com)
  //Collection sivun piilotus käyttäjältä
  //Responsiivisuus?

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    // If data doesnt exists
    if (data === undefined) {
      setIsEmpty(true);
    }
  });

  //Tähän tyhjän locations datan käsittely tarvitaan joku oletus kansio
  const collection = data.response.locations;

  const [cityName, setCityName] = useState('');
  const [center, setCenter] = useState({
    lat: 48.8584,
    lng: 48.8584,
  });

  const [selectedCollection, setSelectedCollection] = useState(collection); //data from selected card
  const [fetchCounter, setFetchCounter] = useState(0); //useState for triggering data fetching

  function handleCollectionSelection() {
    setSelectedMarkers(props.spots);
    setSelectedCollection(props);
  }

  function UpdateMap(props) {
    console.log('markkerit:', props.selectedMarkers);

    // If there is no data
    if (
      props.selectedMarkers === undefined ||
      props.selectedMarkers.length === 0
    ) {
      return <h1>Ei valittuja sijainteja</h1>;
    } else {
      return (
        <WeatherMapClean
          classNAme="col-span-5 "
          latitude={center.lat}
          longitude={center.lng}
          markers={props.selectedMarkers}
        />
      );
    }
  }
  function handleCityInput() {
    if (cityName && cityName.length != 0) {
      setFetchCounter(fetchCounter + 1);
    }
  }

  function HandleLatChange(lat) {
    //controls latitude of map
    setCenter((previousState) => {
      //https://www.w3schools.com/react/react_usestate.asp
      return { ...previousState, lat: lat };
    });
  }
  function HandleLngChange(lng) {
    //controls longitude of map
    setCenter((previousState) => {
      //https://www.w3schools.com/react/react_usestate.asp
      return { ...previousState, lng: lng };
    });
  }

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 bg-repeat-space bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
        <NavBar />
        <div className="col-start-1 col-span-2 lg:col-span-6 justify-center mx-2 lg:mx-44 mt-36 p-2 rounded-3xl ring-8 ring-white ring-opacity-40 bg-repeat-space bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400">
          <div className="grid grid-cols-5 gap-4 ">
            <div className="col-span-5 rounded-3xl p-7 ring-4 ring-white ring-opacity-40 bg-gradient-to-r from-blue-100 to-indigo-50">
              <CollectionBox
                markers={collection}
                handleCollectionSelection={handleCollectionSelection}
              />
            </div>
            <div className="col-span-5 hidden lg:block lg:ml-5">
              <SpotTable2 collection={selectedCollection} />
            </div>
            <div className="col-span-5 ml-0 lg:hidden lg:ml-5">
              <SpotList propsi={selectedCollection} />
            </div>

            <div
              id="locationField"
              className="col-start-1 col-span-2 relative h-10 w-full"
            >
              <input
                onChange={(e) => HandleLatChange(e.target.value)}
                type="number"
                name="latitude"
                className="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Lat
              </label>
            </div>
            <div
              id="locationField"
              className="col-start-4 col-span-2 relative h-10 w-full "
            >
              <input
                onChange={(e) => HandleLngChange(e.target.value)}
                type="number"
                name="longitude"
                className="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Long
              </label>
            </div>
            <div className="col-span-5 mt-5">
              <UpdateMap selectedMarkers={selectedMarkers} />
            </div>
            <div className=" col-span-5">
              <button className="ring-2 ring-white ring-opacity-40 w-full h-full rounded-2xl  hover:bg-teal-400 active:bg-teal-300   ">
                Lisää
              </button>
            </div>
          </div>
        </div>
        <Footeri position="relative" />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts.
  const query = context.query.slug;
  const res = await fetch(
    `http://localhost:4000/api/collection?user=testi5@testi5.com`,
  );
  const posts = await res.json();
  console.log(posts); // palauttaa oikein datan urlissa olevan kaupungin mukaan

  return {
    props: {
      data: posts,
    },
  };
}

export default CollectionPanel;
