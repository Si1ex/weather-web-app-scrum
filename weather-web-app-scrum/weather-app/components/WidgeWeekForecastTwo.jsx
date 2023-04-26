import React, { useState } from 'react';
import { WEATHER_CONDITIONS } from './Sääkuvakkeet';
import { HumiditySVG } from './HumiditySVG';

export default function WidgetWeekForecastTwo(props) {
  const { data } = props;
  const dates = [];
  const daysOfWeek = [];
  const datesWithoutYear = [];
  const weekWeather = data.result.forecast.forecastday;

  data.result.forecast.forecastday.forEach((day) => {
    const date = new Date(day.date);
    const dayOfWeek =
      date
        .toLocaleString('fi-FI', { weekday: 'short' })
        .slice(0, 1)
        .toUpperCase() +
      date.toLocaleString('fi-FI', { weekday: 'short' }).slice(1);
    const dateWithoutYear = date.toLocaleString('fi-FI', {
      month: 'short',
      day: 'numeric',
    });

    dates.push(day.date);
    daysOfWeek.push(dayOfWeek);
    datesWithoutYear.push(dateWithoutYear);
  });
  const weekForecast = data.result.forecast.forecastday;
  const weatherCondition = data.result.current.condition.text;
  const is_day = data.result.current.is_day;
  /* const iconPath =
    WEATHER_CONDITIONS[weatherCondition][is_day ? 'is_day' : 'night']
  const weatherCondition1 =
    data.result.forecast.forecastday[1].day.condition.text
  const iconPath1 =
    WEATHER_CONDITIONS[weatherCondition1][is_day ? 'is_day' : 'night']
  const weatherCondition2 =
    data.result.forecast.forecastday[2].day.condition.text
  const weatherCondition3 =
    data.result.forecast.forecastday[3].day.condition.text
  const weatherCondition4 =
    data.result.forecast.forecastday[4].day.condition.text
  const weatherCondition5 =
    data.result.forecast.forecastday[5].day.condition.text
  const iconPath2 =
    WEATHER_CONDITIONS[weatherCondition2][is_day ? 'is_day' : 'night']
  const iconPath3 =
    WEATHER_CONDITIONS[weatherCondition3][is_day ? 'is_day' : 'night']
  const iconPath4 =
    WEATHER_CONDITIONS[weatherCondition4][is_day ? 'is_day' : 'night']
  const iconPath5 =
    WEATHER_CONDITIONS[weatherCondition5][is_day ? 'is_day' : 'night']*/

  const astrosunrise = data.result.forecast.forecastday[0].astro.sunrise; // e.g. "7:30 AM"
  const dateObj = new Date(`01/01/2000 ${astrosunrise}`); // create a date object from the time string
  const options = { hour: '2-digit', minute: '2-digit', hour12: false };
  const auringonnousuTänään = dateObj.toLocaleTimeString('fi-FI', options); // convert to European time format

  const astrosunset = data.result.forecast.forecastday[0].astro.sunset; // e.g. "7:30 AM"
  const dateObj1 = new Date(`01/01/2000 ${astrosunset}`); // create a date object from the time string
  const options1 = { hour: '2-digit', minute: '2-digit', hour12: false };
  const auringonlaskuTänään = dateObj1.toLocaleTimeString('fi-FI', options1); // convert to European time format

  const tableRows = weekForecast.map((m, index) => {
    //Prevents undefined properties error
    const maxTemp = m.day && m.day.maxtemp_c ? m.day.maxtemp_c : '';
    //Return
    return <td key={index}> </td>;
  });

  function WeekForecastElement(props) {
    // https://www.geeksforgeeks.org/how-to-map-data-into-components-using-reactjs/

    const weatherByDay = weekWeather.map((i, index) => {
      const avgTemp = i.day.avg_temp && i.day.avg_temp ? i.day.avg_temp : '';
      const iTime = i.time && i.time ? i.time : '';
      // const iIsDay = i.hour[0].is_day=1 ? 'is_day' : 'night' //is_day meaning is it daytime, day meaning day of the week
      //const iIsDay = i.hour[0].is_day=1 ? 'is_day' : 'night'
      return (
        <div key={i.date} className="flex justify-between items-center">
          <span className="font-semibold text-lg  w-1/4">
            {daysOfWeek[index]}, {datesWithoutYear[index]}
          </span>
          <div className="flex items-center justify-center  w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[index].day.avghumidity}%
            </span>
            <HumiditySVG />
          </div>
          <div className="w-12 h-12">
            <img
              className="w-full h-full scale-125 "
              src={WEATHER_CONDITIONS[i.day.condition.text]['is_day']}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-xl ">
              {Math.round(
                data.result.forecast.forecastday[index].day.maxtemp_c,
              )}
              °C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm ">
                &nbsp; &nbsp;{' '}
                {Math.round(
                  data.result.forecast.forecastday[index].day.mintemp_c,
                )}
                °C
              </p>
            </div>
          </div>
        </div>
      );
    });

    return <> {weatherByDay} </>;
  }

  return (
    <>
      {' '}
      <WeekForecastElement />
      {/**
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg  w-1/4">
          {daysOfWeek[1]}, {datesWithoutYear[1]}
        </span>

        <div className="flex items-center justify-center  w-1/4">
          <span className="font-semibold">
            {data.result.forecast.forecastday[1].day.avghumidity}%
          </span>
          <HumiditySVG />
        </div>
        <div className="w-12 h-12">
          <img
            className="w-full h-full scale-125 "
            src={iconPath1}
            decoding="async"
            data-nimg="true"
          />
        </div>
        <div className="flex items-center">
          <p className="font-semibold  text-xl ">
            {Math.round(data.result.forecast.forecastday[1].day.maxtemp_c)}°C
          </p>
          <div className="items-end">
            <p className="font-semibold  text-sm">
              &nbsp; &nbsp;{' '}
              {Math.round(data.result.forecast.forecastday[1].day.mintemp_c)}
              °C
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg  w-1/4">
          {daysOfWeek[2]}, {datesWithoutYear[2]}
        </span>
        <div className="flex items-center justify-center  w-1/4">
          <span className="font-semibold">
            {data.result.forecast.forecastday[2].day.avghumidity}%
          </span>
          <HumiditySVG />
        </div>
        <div className="w-12 h-12">
          <img
            className="w-full h-full scale-125 "
            src={iconPath2}
            decoding="async"
            data-nimg="true"
          />
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-xl ">
            {Math.round(data.result.forecast.forecastday[2].day.maxtemp_c)}°C
          </p>
          <div className="items-end">
            <p className="font-semibold text-sm ">
              &nbsp; &nbsp;{' '}
              {Math.round(data.result.forecast.forecastday[2].day.mintemp_c)}
              °C
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg  w-1/4">
          {daysOfWeek[3]}, {datesWithoutYear[3]}
        </span>
        <div className="flex items-center justify-center  w-1/4">
          <span className="font-semibold">
            {data.result.forecast.forecastday[3].day.avghumidity}%
          </span>
          <HumiditySVG />
        </div>
        <div className="w-12 h-12">
          <img
            className="w-full h-full scale-125 "
            src={iconPath3}
            decoding="async"
            data-nimg="true"
          />
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-xl ">
            {Math.round(data.result.forecast.forecastday[3].day.maxtemp_c)}°C
          </p>
          <div className="items-end">
            <p className="font-semibold text-sm ">
              &nbsp; &nbsp;{' '}
              {Math.round(data.result.forecast.forecastday[3].day.mintemp_c)}
              °C
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg  w-1/4">
          {daysOfWeek[4]}, {datesWithoutYear[4]}
        </span>
        <div className="flex items-center justify-center w-1/4">
          <span className="font-semibold">
            {data.result.forecast.forecastday[4].day.avghumidity}%
          </span>
          <HumiditySVG />
        </div>
        <div className="w-12 h-12">
          <img
            className="w-full h-full scale-125 "
            src={iconPath4}
            decoding="async"
            data-nimg="true"
          />
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-xl ">
            {Math.round(data.result.forecast.forecastday[4].day.maxtemp_c)}°C
          </p>
          <div className="items-end">
            <p className="font-semibold text-sm">
              &nbsp; &nbsp;{' '}
              {Math.round(data.result.forecast.forecastday[4].day.mintemp_c)}
              °C
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg  w-1/4">
          {daysOfWeek[5]}, {datesWithoutYear[5]}
        </span>
        <div className="flex items-center justify-center w-1/4">
          <span className="font-semibold">
            {data.result.forecast.forecastday[5].day.avghumidity}%
          </span>
          <HumiditySVG />
        </div>
        <div className="w-12 h-12">
          <img
            className="w-full h-full scale-125 "
            src={iconPath5}
            decoding="async"
            data-nimg="true"
          />
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-xl ">
            {Math.round(data.result.forecast.forecastday[5].day.maxtemp_c)}°C
          </p>
          <div className="items-end">
            <p className="font-semibold text-sm">
              &nbsp; &nbsp;{' '}
              {Math.round(data.result.forecast.forecastday[5].day.mintemp_c)}
              °C
            </p>
          </div>
        </div>
      </div>
      */}
      {/* <div className="grid grid-cols-4"></div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg w-1/4">Fri, 22 Jan</span>
        <div className="flex items-center justify-end w-1/4 pr-10">
          <span className="font-semibold">12%</span>
          <svg
            className="w-6 h-6 fill-current ml-1"
            viewBox="0 0 16 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1,0,0,1,-4,-2)">
              <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
            </g>
          </svg>
        </div>
        <svg
          className="h-8 fill-current w-1/4"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
        </svg>
        <span className="font-semibold text-lg w-1/4 text-right">
          18° / 32°
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg w-1/4">Sat, 23 Jan</span>
        <div className="flex items-center justify-end pr-10 w-1/4">
          <span className="font-semibold">0%</span>
          <svg
            className="w-6 h-6 fill-current ml-1"
            viewBox="0 0 16 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1,0,0,1,-4,-2)">
              <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
            </g>
          </svg>
        </div>
        <svg
          className="h-8 fill-current w-1/4"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
        </svg>
        <span className="font-semibold text-lg w-1/4 text-right">
          22° / 34°
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg w-1/4">Sun, 24 Jan</span>
        <div className="flex items-center justify-end pr-10 w-1/4">
          <span className="font-semibold">20%</span>
          <svg
            className="w-6 h-6 fill-current ml-1"
            viewBox="0 0 16 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1,0,0,1,-4,-2)">
              <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
            </g>
          </svg>
        </div>
        <svg
          className="h-8 fill-current w-1/4"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
        </svg>
        <span className="font-semibold text-lg w-1/4 text-right">
          21° / 32°
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg w-1/4">Mon, 25 Jan</span>
        <div className="flex items-center justify-end pr-10 w-1/4">
          <span className="font-semibold">50%</span>
          <svg
            className="w-6 h-6 fill-current ml-1"
            viewBox="0 0 16 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1,0,0,1,-4,-2)">
              <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
            </g>
          </svg>
        </div>
        <svg
          className="h-8 fill-current w-1/4"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z" />
        </svg>
        <span className="font-semibold text-lg w-1/4 text-right">
          18° / 29°
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg w-1/4">Mon, 25 Jan</span>
        <div className="flex items-center justify-center w-1/4">
          <span className="font-semibold">80%</span>
          <svg
            className="w-6 h-6 fill-current ml-1"
            viewBox="0 0 16 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1,0,0,1,-4,-2)">
              <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
            </g>
          </svg>
        </div>
        <svg
          className="h-8 fill-current w-1/4"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z" />
        </svg>
        <span className="font-semibold text-lg w-1/4 text-right">
          20° / 29°
        </span>
      </div>*/}
    </>
  );
}
