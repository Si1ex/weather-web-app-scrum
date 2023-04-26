import React from 'react';
import { WEATHER_CONDITIONS } from './Sääkuvakkeet';
import { HumiditySVG } from './HumiditySVG';

function WidgetDetails(props) {
  const { data } = props;
  const { code } = data.result.current.condition;
  const { is_day } = data.result.current;

  const weatherCondition = data.result.current.condition.text;
  /*
  const iconPath =
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
    WEATHER_CONDITIONS[weatherCondition5][is_day ? 'is_day' : 'night']
*/
  const dates = [];
  const daysOfWeek = [];
  const datesWithoutYear = [];
  const detailWeather = data.result.forecast.forecastday;
  const astrosunrise = data.result.forecast.forecastday[0].astro.sunrise; // e.g. "7:30 AM"
  const dateObj = new Date(`01/01/2000 ${astrosunrise}`); // create a date object from the time string
  const options = { hour: '2-digit', minute: '2-digit', hour12: false };
  const auringonnousuTänään = dateObj.toLocaleTimeString('fi-FI', options); // convert to European time format

  const astrosunset = data.result.forecast.forecastday[0].astro.sunset; // e.g. "7:30 AM"
  const dateObj1 = new Date(`01/01/2000 ${astrosunset}`); // create a date object from the time string
  const options1 = { hour: '2-digit', minute: '2-digit', hour12: false };
  const auringonlaskuTänään = dateObj1.toLocaleTimeString('fi-FI', options1); // convert to European time format

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

  return (
    <>
      <h1 className="text-xl font-semibold mb-2">
        Tarkemmat säätiedot: {data.result.location.name}
      </h1>
      <div className="lg:flex justify-between items-center">
        <HumiditySVG />
        <div className="flex mr-auto">
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            Kosteus:{' '}
          </p>
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            {data.result.current.humidity} %
          </p>
        </div>
        <img
          className="w-12 h-12 scale-125"
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg"
          alt=""
        />
        <div className="flex">
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            Auringonnousu:{' '}
          </p>
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            {auringonnousuTänään}
          </p>
        </div>
      </div>
      <div className="lg:flex justify-between items-center">
        <div>
          <img
            className="w-12 h-12 scale-125"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/uv-index.svg"
            alt=""
          />
        </div>
        <div className="flex mr-auto">
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            UV-indeksi:{' '}
          </p>
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            {data.result.current.uv}
          </p>
        </div>
        <img
          className="w-12 h-12 scale-125"
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg"
          alt=""
        />
        <div className="flex">
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            Auringonlasku:{' '}
          </p>
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            {auringonlaskuTänään}
          </p>
        </div>
      </div>
      <div className="lg:flex justify-between items-center">
        <div>
          <svg
            className="w-12 h-12 scale-125"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path
              fill="none"
              stroke="#e5e7eb"
              stroke-dasharray="35 22"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M43.64 20a5 5 0 113.61 8.46h-35.5"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="2s"
                repeatCount="indefinite"
                values="-57; 57"
              />
            </path>
            <path
              fill="none"
              stroke="#e5e7eb"
              stroke-dasharray="24 18"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M29.14 44a5 5 0 103.61-8.46h-21"
            >
              <animate
                attributeName="stroke-dashoffset"
                begin="-1.5s"
                dur="2s"
                repeatCount="indefinite"
                values="-39; 39"
              />
            </path>
            <g>
              <path
                fill="none"
                stroke="#fde68a"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M21.5 39.5h9"
              />
              <animateTransform
                attributeName="transform"
                dur=".9s"
                repeatCount="indefinite"
                type="translate"
                values="0 0; 15 0"
              />
              <animate
                attributeName="opacity"
                dur=".9s"
                repeatCount="indefinite"
                values="0; 1; 1; 1; 0"
              />
            </g>
            <g>
              <path
                fill="none"
                stroke="#fde68a"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M11.5 24.5h9"
              />
              <animateTransform
                attributeName="transform"
                begin="-.3s"
                dur=".9s"
                repeatCount="indefinite"
                type="translate"
                values="-3 0; 18 0"
              />
              <animate
                attributeName="opacity"
                begin="-.3s"
                dur=".9s"
                repeatCount="indefinite"
                values="0; 1; 1; 1; 0"
              />
            </g>
            <g>
              <path
                fill="none"
                stroke="#fde68a"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M27.5 32h9"
              />
              <animateTransform
                attributeName="transform"
                begin="-.6s"
                dur=".9s"
                repeatCount="indefinite"
                type="translate"
                values="-6 0; 12 0"
              />
              <animate
                attributeName="opacity"
                begin="-.6s"
                dur=".9s"
                repeatCount="indefinite"
                values="0; 1; 1; 1; 0"
              />
            </g>
          </svg>
        </div>
        <div className="flex items-center mr-auto">
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            Tuulenpuuskat:{' '}
          </p>
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            {Math.round(data.result.current.gust_kph)} km/h
          </p>
          <p className="font-semibold text-sm">
            {' '}
            &nbsp;({Math.round(data.result.current.wind_kph * (5 / 18))} m/s)
          </p>
        </div>
        <svg
          className="w-12 h-12 scale-125"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <linearGradient
              id="a"
              x1="14.85"
              y1="42.34"
              x2="124.18"
              y2="231.72"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#3392d6" />
              <stop offset="0.45" stop-color="#3392d6" />
              <stop offset="1" stop-color="#2477b2" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="188.85"
              y1="170.77"
              x2="298.18"
              y2="360.15"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#f3f7fe" />
              <stop offset="0.45" stop-color="#f3f7fe" />
              <stop offset="1" stop-color="#deeafb" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="310.54"
              y1="152.47"
              x2="425.46"
              y2="351.53"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#d4d7dd" />
              <stop offset="0.45" stop-color="#d4d7dd" />
              <stop offset="1" stop-color="#bec1c6" />
            </linearGradient>
            <clipPath id="d">
              <path fill="none">
                <animate
                  attributeName="d"
                  values="
                            M168,252H344V380H168Z;
                            M168,220H376V380H168Z;
                            M168,252H344V380H168Z
                            "
                  dur="3s"
                  calcMode="spline"
                  keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                  repeatCount="indefinite"
                />
              </path>
            </clipPath>
            <symbol id="e" viewBox="0 0 164 245.57">
              <path
                d="M82,3.57c-48.7,72-80,117-80,160.75s35.79,79.25,80,79.25,80-35.47,80-79.25S130.7,75.54,82,3.57Z"
                stroke="#2885c7"
                stroke-miterlimit="10"
                stroke-width="4"
                fill="url(#a)"
              />
            </symbol>
          </defs>
          <path
            d="M256,132c-48.7,72-80,117-80,160.75S211.79,372,256,372s80-35.47,80-79.25S304.7,204,256,132Z"
            stroke="#2885c7"
            stroke-miterlimit="10"
            stroke-width="4"
            fill="url(#b)"
          />
          <path
            d="M352,132h32V372H352m8-120h24m-16,56h16M368,188h16"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
            stroke="url(#c)"
          />
          <path
            fill="none"
            stroke="url(#a)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
            d="M352 132h32v240h-32m8-120h24m-16 56h16m-16-120h16"
          />
          <g clip-path="url(#d)">
            <use
              width="164"
              height="245.57"
              transform="translate(174.11 128.99)"
              xlinkHref="#e"
            />
          </g>
        </svg>
        <div className="flex">
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            Sademäärä:{' '}
          </p>
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            {data.result.current.precip_mm} mm
          </p>
        </div>
      </div>

      <div className="lg:flex justify-between items-center">
        <svg
          className="w-12 h-12 scale-125"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient
              id="a"
              x1="22.56"
              x2="39.2"
              y1="21.96"
              y2="50.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#f3f7fe" />
              <stop offset=".45" stop-color="#f3f7fe" />
              <stop offset="1" stop-color="#deeafb" />
            </linearGradient>
          </defs>
          <path
            fill="#f3f7fe"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width=".5"
            d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
          >
            <animateTransform
              attributeName="transform"
              dur="7s"
              repeatCount="indefinite"
              type="translate"
              values="-3 0; 3 0; -3 0"
            />
          </path>
        </svg>
        <div className="flex mr-auto">
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            Pilvisyys:{' '}
          </p>
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            {data.result.current.cloud} %
          </p>
        </div>
        <img
          className="w-12 h-12 scale-125"
          src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/horizon.svg"
          alt=""
        />
        <div className="flex">
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            Näkyvyys:{' '}
          </p>
          <p className="font-semibold text-lg whitespace-nowrap ml-2">
            {data.result.current.vis_km} km
          </p>
        </div>
      </div>
    </>
  );
}

export default WidgetDetails;
