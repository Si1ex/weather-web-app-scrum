import React, { useState } from 'react';
import { WEATHER_CONDITIONS } from './Sääkuvakkeet';

function WidgetHourForecast(props) {
  const { data } = props;
  /* Aiheuttaa virheen
  const times = [];
  const weatherConditions = [];
  const temperatures = [];
  const is_day = []

  const currentDateTime = new Date();
  const hourData = data.result.forecast.forecastday[0].hour;
  const firstHourIndex = hourData.findIndex(hour => new Date(hour.time) >= currentDateTime);

  for (let i = firstHourIndex; i < firstHourIndex + 5; i++) {
    const hour = hourData[i];
    const dateObj = new Date(hour.time);
    const hourString = dateObj.getHours().toString().padStart(2, '0') + ':' + dateObj.getMinutes().toString().padStart(2, '0');
    times.push(hourString);
    weatherConditions.push(hour.condition.text);
    temperatures.push(hour.temp_c);
    is_day.push(hour.is_day)
  }*/

  /**Huomisen datan käsittely */
  function getNextHours(nextHours, data) {
    //NextHours tells how many hours are needed from tomorrow
    const date = new Date(); //Date
    const startingTime = date.getHours() + 1; //starting from the next full hour ( 15.13 => 16:00)
    const extendedData = []; //New array for extending todays data with tomorrows data
    for (let i = startingTime; i <= 23; i++) {
      //Todays remaining hours
      extendedData.push(data.result.forecast.forecastday[0].hour[i]);
    }
    for (let i = 0; i < nextHours; i++) {
      //next hours from tomorrow
      extendedData.push(data.result.forecast.forecastday[1].hour[i]);
    }

    /* //for-looppi datan katseluun, voi poistaa
    for (let i = 0; i < extendedData.length; i++) { 
      console.log(extendedData[i].time);
    }*/

    //return combined weather data from current and next day.
    //extendedData can have up to 23h+nextHours worth of hourly data
    return extendedData;
  }

  function HourForecastElement(porps) {
    // https://www.geeksforgeeks.org/how-to-map-data-into-components-using-reactjs/
    const tomorrowsHours = 5; //How many hours needed from tomorrow
    const nextHours = getNextHours(tomorrowsHours, data); //combined data from next full hour and tomorrows hours
    const firstFive = nextHours.slice(0, 5); //Show only first five hours from nextHours

    const weatherByHour = firstFive.map((hour, index) => {
      const hourTemp = hour && hour.temp_c ? hour.temp_c : '';
      const hourTime = hour.time && hour.time ? hour.time : '';
      const hourIsDay = hour.is_day[0] ? 'is_day' : 'night'; //HUOM ei taida toimia

      return (
        <div key={hour.time} className="flex flex-col items-center">
          <span className="font-semibold text-lg">
            {Math.round(hourTemp)}°C
          </span>
          <div>
            <img
              className="w-16 h-16"
              src={WEATHER_CONDITIONS[hour.condition.text][hourIsDay]}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <span className="font-semibold mt-1 text-sm">
            {hourTime.slice(-5)}
          </span>
        </div>
      );
    });

    return <div className="flex justify-between mt-12">{weatherByHour}</div>;
  }
  /* Aiheuttaa virheen
  const iconPath =
    WEATHER_CONDITIONS[weatherConditions[0]][is_day[0] ? 'is_day' : 'night']
  const iconPath1 =
    WEATHER_CONDITIONS[weatherConditions[1]][is_day[1] ? 'is_day' : 'night']
  const iconPath2 =
    WEATHER_CONDITIONS[weatherConditions[2]][is_day[2] ? 'is_day' : 'night']
  const iconPath3 =
    WEATHER_CONDITIONS[weatherConditions[3]][is_day[3] ? 'is_day' : 'night']
  const iconPath4 =
    WEATHER_CONDITIONS[weatherConditions[4]][is_day[4] ? 'is_day' : 'night']
*/
  return (
    <>
      <HourForecastElement />

      {/*
      <div className="flex justify-between mt-12">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">
            {Math.round(temperatures[0])}°C
          </span>
          <div>
            <img
              className="w-16 h-16"
              src={iconPath}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <span className="font-semibold mt-1 text-sm">{times[0]}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">
            {Math.round(temperatures[1])}°C
          </span>
          <div>
            <img
              className="w-16 h-16"
              src={iconPath1}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <span className="font-semibold mt-1 text-sm">{times[1]}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">
            {Math.round(temperatures[2])}°C
          </span>
          <div>
            <img
              className="w-16 h-16"
              src={iconPath2}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <span className="font-semibold mt-1 text-sm">{times[2]}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">
            {Math.round(temperatures[3])}°C
          </span>
          <div>
            <img
              className="w-16 h-16"
              src={iconPath3}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <span className="font-semibold mt-1 text-sm">{times[3]}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">
            {Math.round(temperatures[4])}°C
          </span>
          <div>
            <img
              className="w-16 h-16"
              src={iconPath4}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <span className="font-semibold mt-1 text-sm">{times[4]}</span>
        </div>
      </div>**/}
    </>
  );
}

export default WidgetHourForecast;
