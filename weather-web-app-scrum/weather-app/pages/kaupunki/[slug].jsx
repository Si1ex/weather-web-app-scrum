import React from 'react';
import dynamic from 'next/dynamic';
import ForecastSection from '@/components/ForecastSection';
import Widget from '@/components/Widget';
import WidgetMain from '@/components/WidgetMain';
/**
 * Leaflet makes direct calls to the DOM when it is loaded, therefore React Leaflet is not compatible with server-side rendering.
 * @see https://stackoverflow.com/a/64634759/9244579
 */
const WeatherMap = dynamic(() => import('@/components/WeatherMap'), {
  loading: () => <p>Ladataan...</p>,
  ssr: false,
});

export default function Home(props) {
  const { data } = props;
  console.log(props);
  return (
    <div>
      {/* <p>Dataa apista:</p>
      {/* show data like this data.Object.Object.datafield */}
      {/* <p>{data.result.location.name}</p>
      <p>{data.result.location.localtime}</p>
      <p>{data.result.current.temp_c} astetta</p>
      <p>Tuulen nopeus {data.result.current.winf_kph} km/h</p> */}
      {/* <ForecastSection
        location={data.result.location.name}
        forecastData={data.result.forecast}
      />
      <WeatherMap
        latitude={data.result.location.lat}
        longitude={data.result.location.lon}
      /> */}
      {/* <Widget data={data} /> */}
      <WidgetMain data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts.
  const query = context.query.slug;
  const res = await fetch(`http://localhost:4000/api/${query}`);
  const posts = await res.json();
  console.log(posts); // palauttaa oikein datan urlissa olevan kaupungin mukaan

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: posts,
    },
  };
}
