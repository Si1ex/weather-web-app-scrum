import React, { useState } from 'react';

export default function WidgetWeekForecast(props) {
  const { data } = props;

  const weatherCondition = data.result.current.condition.text;

  const iconPath =
    WEATHER_CONDITIONS[weatherCondition][is_day ? 'is_day' : 'night'];
  const weatherCondition1 =
    data.result.forecast.forecastday[1].day.condition.text;
  const iconPath1 = WEATHER_CONDI;
  TIONS[weatherCondition1][is_day ? 'is_day' : 'night'];
  const weatherCondition2 =
    data.result.forecast.forecastday[2].day.condition.text;
  const weatherCondition3 =
    data.result.forecast.forecastday[3].day.condition.text;
  const weatherCondition4 =
    data.result.forecast.forecastday[4].day.condition.text;
  const weatherCondition5 =
    data.result.forecast.forecastday[5].day.condition.text;
  const iconPath2 =
    WEATHER_CONDITIONS[weatherCondition2][is_day ? 'is_day' : 'night'];
  const iconPath3 =
    WEATHER_CONDITIONS[weatherCondition3][is_day ? 'is_day' : 'night'];
  const iconPath4 =
    WEATHER_CONDITIONS[weatherCondition4][is_day ? 'is_day' : 'night'];
  const iconPath5 =
    WEATHER_CONDITIONS[weatherCondition5][is_day ? 'is_day' : 'night'];

  const dates = [];
  const daysOfWeek = [];
  const datesWithoutYear = [];

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
      <div className="flex flex-col space-y-6 max-w-screen-sm mx-20 bg-repeat-space bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400 p-8 mt-10 rounded-3xl ring-8 ring-white ring-opacity-40">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg w-1/4">
            {daysOfWeek[1]}, {datesWithoutYear[1]}
          </span>
          <div className="flex items-center justify-center w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[1].day.avghumidity}%
            </span>
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="14.8"
                  x2="124.2"
                  y1="42.3"
                  y2="231.7"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#3392d6" />
                  <stop offset=".5" stop-color="#3392d6" />
                  <stop offset="1" stop-color="#2477b2" />
                </linearGradient>
                <symbol id="b" viewBox="0 0 164 245.6">
                  <path
                    fill="url(#a)"
                    stroke="#2885c7"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z"
                  >
                    <animateTransform
                      additive="sum"
                      attributeName="transform"
                      calcMode="spline"
                      dur="6s"
                      keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                      repeatCount="indefinite"
                      type="scale"
                      values="1 1; 1 .9; 1 1"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                xlinkHref="#b"
                width="164"
                height="245.6"
                transform="translate(173.9 133.01)"
              />
              <path
                fill="#fff"
                d="M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 01-.6 2.6l-53 73.3a9.4 9.4 0 01-2.8 2.8 12.3 12.3 0 01-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 01.7-2.8l53-73.3a7 7 0 012.6-2.7 12.7 12.7 0 014.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z"
              />
            </svg>
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
            <p className="font-semibold text-xl ">
              {data.result.forecast.forecastday[1].day.maxtemp_c}°C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm">
                &nbsp; &nbsp;{' '}
                {data.result.forecast.forecastday[1].day.mintemp_c}°C
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg w-1/4">
            {daysOfWeek[2]}, {datesWithoutYear[2]}
          </span>
          <div className="flex items-center justify-center w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[2].day.avghumidity}%
            </span>
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="14.8"
                  x2="124.2"
                  y1="42.3"
                  y2="231.7"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#3392d6" />
                  <stop offset=".5" stop-color="#3392d6" />
                  <stop offset="1" stop-color="#2477b2" />
                </linearGradient>
                <symbol id="b" viewBox="0 0 164 245.6">
                  <path
                    fill="url(#a)"
                    stroke="#2885c7"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z"
                  >
                    <animateTransform
                      additive="sum"
                      attributeName="transform"
                      calcMode="spline"
                      dur="6s"
                      keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                      repeatCount="indefinite"
                      type="scale"
                      values="1 1; 1 .9; 1 1"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                xlinkHref="#b"
                width="164"
                height="245.6"
                transform="translate(173.9 133.01)"
              />
              <path
                fill="#fff"
                d="M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 01-.6 2.6l-53 73.3a9.4 9.4 0 01-2.8 2.8 12.3 12.3 0 01-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 01.7-2.8l53-73.3a7 7 0 012.6-2.7 12.7 12.7 0 014.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z"
              />
            </svg>
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
              {data.result.forecast.forecastday[2].day.maxtemp_c}°C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm">
                &nbsp; &nbsp;{' '}
                {data.result.forecast.forecastday[2].day.mintemp_c}°C
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg w-1/4">
            {daysOfWeek[3]}, {datesWithoutYear[3]}
          </span>
          <div className="flex items-center justify-center w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[3].day.avghumidity}%
            </span>
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="14.8"
                  x2="124.2"
                  y1="42.3"
                  y2="231.7"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#3392d6" />
                  <stop offset=".5" stop-color="#3392d6" />
                  <stop offset="1" stop-color="#2477b2" />
                </linearGradient>
                <symbol id="b" viewBox="0 0 164 245.6">
                  <path
                    fill="url(#a)"
                    stroke="#2885c7"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z"
                  >
                    <animateTransform
                      additive="sum"
                      attributeName="transform"
                      calcMode="spline"
                      dur="6s"
                      keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                      repeatCount="indefinite"
                      type="scale"
                      values="1 1; 1 .9; 1 1"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                xlinkHref="#b"
                width="164"
                height="245.6"
                transform="translate(173.9 133.01)"
              />
              <path
                fill="#fff"
                d="M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 01-.6 2.6l-53 73.3a9.4 9.4 0 01-2.8 2.8 12.3 12.3 0 01-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 01.7-2.8l53-73.3a7 7 0 012.6-2.7 12.7 12.7 0 014.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z"
              />
            </svg>
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
              {data.result.forecast.forecastday[3].day.maxtemp_c}°C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm">
                &nbsp; &nbsp;{' '}
                {data.result.forecast.forecastday[3].day.mintemp_c}°C
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg w-1/4">
            {daysOfWeek[4]}, {datesWithoutYear[4]}
          </span>
          <div className="flex items-center justify-center w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[4].day.avghumidity}%
            </span>
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="14.8"
                  x2="124.2"
                  y1="42.3"
                  y2="231.7"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#3392d6" />
                  <stop offset=".5" stop-color="#3392d6" />
                  <stop offset="1" stop-color="#2477b2" />
                </linearGradient>
                <symbol id="b" viewBox="0 0 164 245.6">
                  <path
                    fill="url(#a)"
                    stroke="#2885c7"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z"
                  >
                    <animateTransform
                      additive="sum"
                      attributeName="transform"
                      calcMode="spline"
                      dur="6s"
                      keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                      repeatCount="indefinite"
                      type="scale"
                      values="1 1; 1 .9; 1 1"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                xlinkHref="#b"
                width="164"
                height="245.6"
                transform="translate(173.9 133.01)"
              />
              <path
                fill="#fff"
                d="M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 01-.6 2.6l-53 73.3a9.4 9.4 0 01-2.8 2.8 12.3 12.3 0 01-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 01.7-2.8l53-73.3a7 7 0 012.6-2.7 12.7 12.7 0 014.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z"
              />
            </svg>
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
              {data.result.forecast.forecastday[4].day.maxtemp_c}°C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm">
                &nbsp; &nbsp;{' '}
                {data.result.forecast.forecastday[4].day.mintemp_c}°C
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg w-1/4">
            {daysOfWeek[5]}, {datesWithoutYear[5]}
          </span>
          <div className="flex items-center justify-center w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[5].day.avghumidity}%
            </span>
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="14.8"
                  x2="124.2"
                  y1="42.3"
                  y2="231.7"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#3392d6" />
                  <stop offset=".5" stop-color="#3392d6" />
                  <stop offset="1" stop-color="#2477b2" />
                </linearGradient>
                <symbol id="b" viewBox="0 0 164 245.6">
                  <path
                    fill="url(#a)"
                    stroke="#2885c7"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3 80-35.5 80-79.3S130.7 75.5 82 3.6Z"
                  >
                    <animateTransform
                      additive="sum"
                      attributeName="transform"
                      calcMode="spline"
                      dur="6s"
                      keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                      repeatCount="indefinite"
                      type="scale"
                      values="1 1; 1 .9; 1 1"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                xlinkHref="#b"
                width="164"
                height="245.6"
                transform="translate(173.9 133.01)"
              />
              <path
                fill="#fff"
                d="M218.8 250.5q4.8-4.5 13.7-4.5t13.6 4.5q4.8 4.4 4.8 12.4v8q0 7.8-4.8 12.2t-13.6 4.4q-9 0-13.7-4.4t-4.8-12.2v-8q0-8 4.8-12.4Zm71.2-1.6a2.8 2.8 0 01-.6 2.6l-53 73.3a9.4 9.4 0 01-2.8 2.8 12.3 12.3 0 01-4.6.6h-4.4c-1.3 0-2.1-.4-2.5-1.1a2.8 2.8 0 01.7-2.8l53-73.3a7 7 0 012.6-2.7 12.7 12.7 0 014.4-.5h4.9c1.2 0 2 .4 2.3 1.1Zm-57.5 7.6q-7.7 0-7.7 7v6.7q0 7 7.7 7t7.7-7v-6.8q0-6.9-7.7-6.9Zm33.4 36.4q4.7-4.5 13.7-4.5t13.6 4.5q4.8 4.5 4.8 12.4v8q0 7.8-4.8 12.2t-13.7 4.5q-8.9 0-13.6-4.4t-4.8-12.3v-8q0-8 4.8-12.4Zm13.6 6.1q-7.6 0-7.6 7v6.6q0 7 7.6 7t7.7-7v-6.7q0-6.9-7.7-6.9Z"
              />
            </svg>
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
              {data.result.forecast.forecastday[5].day.maxtemp_c}°C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm">
                &nbsp; &nbsp;{' '}
                {data.result.forecast.forecastday[5].day.mintemp_c}°C
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
