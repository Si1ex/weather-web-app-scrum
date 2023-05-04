import { useState } from 'react';
import { useEffect } from 'react';

export default function ForecastSection(props) {
  //Get an array of days as props
  const forecastData = props.forecastData.forecastday || [];
  //Today's forecast
  const forecastDataToday = props.forecastData.forecastday[0].hour || [];

  function ForecastTable() {
    const rows = forecastData;
    const hours = forecastDataToday;
    // Headers for forecast table
    const tableHeaders = rows.map((m, index) => <td key={index}>{m.date}</td>);

    // Data fields for forecast table
    const tableRows = rows.map((m, index) => {
      // Prevents undefined properties error
      const maxTemp = m.day && m.day.maxtemp_c ? m.day.maxtemp_c : '';
      const avgTemp = m.day && m.day.avgtemp_c ? m.day.avgtemp_c : '';

      return <td key={index}>Max lämpötila:{maxTemp}</td>;
    });
    //Hourly forecast data
    const weatherByHour = hours.map((m, index) => {
      const hourTemp = m && m.temp_c ? m.temp_c : '';
      const hourTime = m.time && m.time ? m.time : '';
      //Use only clock time from m.time (yyy-mm-dd 00:00)
      return (
        <td key={index}>
          Klo:{hourTime.slice(-5)} ennuste:{hourTemp}
        </td>
      );
    });

    return (
      <div>
        <h2>ForecastData</h2>
        <table>
          <thead>
            <tr>{tableHeaders}</tr>
          </thead>
          <tbody>
            <tr>{tableRows}</tr>
            <tr>{weatherByHour}</tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <ForecastTable />
    </div>
  );
}
