import React from 'react';
import Footeri from './Footeri';
import NavBar from './NavBar';
import dynamic from 'next/dynamic';
import { useState } from 'react';

//Widget inner components
import WidgetTop from './WidgetTop';
import WidgetWeekForecastTwo from './WidgeWeekForecastTwo';
import WidgetHourForecast from './WidgetHourForecast';
import WidgetDetails from './WidgetDetails';

/**
 * Leaflet makes direct calls to the DOM when it is loaded, therefore React Leaflet is not compatible with server-side rendering.
 * @see https://stackoverflow.com/a/64634759/9244579
 */
const WeatherMap = dynamic(() => import('@/components/WeatherMap'), {
  loading: () => <p>Ladataan...</p>,
  ssr: false,
});

function WidgetMain(props) {
  const { data } = props;
  console.log(props);
  const [center, setCenter] = useState({
    lat: data.result.location.lat,
    lng: data.result.location.lon,
  });

  return (
    <>
      <div className="grid grid-cols-1 pt-10 lg:grid-cols-6 gap-4 bg-repeat-space bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
        <NavBar />
        <div className="lg:col-start-1 lg:col-span-2 max-w-screen-full  min-w-screen-sm justify-center mx-2 sm:mx-10 lg:mr-5 mt-20 p-7 rounded-3xl ring-8 ring-white ring-opacity-40 bg-repeat-space bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400">
          <WidgetTop data={data} />
          <WidgetHourForecast data={data} />
        </div>
        <div className=" flex flex-col lg:col-start-3 lg:col-span-4 max-w-screen-full min-w-screen-lg justify-center mx-2 sm:mx-10 min-h-[20rem] mt-10 md:mt-20 rounded-3xl ring-8 ring-white ring-opacity-40 bg-repeat-space bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400">
          <WeatherMap
            latitude={data.result.location.lat}
            longitude={data.result.location.lon}
          />
        </div>
        <div className="flex flex-col lg:col-start-1 lg:col-span-3 space-y-6 max-w-screen-full  mx-2 sm:mx-10 p-5 sm:p-10 mt-10 rounded-3xl ring-8 ring-white ring-opacity-40 bg-repeat-space bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400">
          <WidgetWeekForecastTwo data={data} />
        </div>

        <div className="flex flex-col lg:col-start-4 lg:col-span-3  space-y-6 max-w-screen-full mx-2 sm:mx-10 p-10 mt-10 rounded-3xl ring-8 ring-white ring-opacity-40 bg-repeat-space bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400">
          <WidgetDetails data={data} />
        </div>
        <Footeri position="relative" />
      </div>
      {/*   
      
      <div className="bg-repeat-space bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
        <NavBar />
        <p>Responsiivisuutta:</p>
        <div className="w-full max-w-screen-md bg-white justify-center mt-24 mx-auto p-9 rounded-3xl ring-8 ring-white ring-opacity-40">
          <WidgetTop data={data} />
          <WidgetHourForecast />
        </div>
        <div
          
          className="w-full max-w-screen-md bg-white justify-center mt-10 mx-auto p-9 rounded-3xl ring-8 ring-white ring-opacity-40"
        >
          <WeatherMap
            latitude={data.result.location.lat}
            longitude={data.result.location.lon}
          />
        </div>
        <div className="flex flex-col space-y-6 w-full max-w-screen-md mx-auto bg-white p-10 mt-10 rounded-3xl ring-8 ring-white ring-opacity-40">
          <WidgetWeekForecast />
        </div>{' '}
        <div className="flex flex-col space-y-6 w-full max-w-screen-md mx-auto bg-white p-10 mt-10 rounded-3xl ring-8 ring-white ring-opacity-40">
          <h1 className="text-xl font-semibold mb-2">Tarkemmat säätiedot:</h1>
        </div>
        <Footeri position="relative" />
      </div>*/}
    </>
  );
}

export default WidgetMain;
