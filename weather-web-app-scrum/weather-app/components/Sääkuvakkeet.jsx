import React from 'react';

export const WEATHER_CONDITIONS = {
  Sunny: {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg',
  },
  Clear: {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg',
  },
  'Partly cloudy': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night.svg',
  },
  Cloudy: {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg',
  },
  Overcast: {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night.svg',
  },
  Mist: {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg',
  },
  'Patchy rain possible': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-rain.svg',
  },
  'Patchy snow possible': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-snow.svg',
  },
  'Patchy sleet possible': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-sleet.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-sleet.svg',
  },
  'Patchy freezing drizzle possible': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
  },
  'Thundery outbreaks possible': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night.svg',
  },
  'Blowing snow': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg',
  },
  Blizzard: {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg',
  },
  Fog: {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg',
  },
  'Freezing fog': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg',
  },
  'Patchy light drizzle': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
  },
  'Light drizzle': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
  },
  'Freezing drizzlee': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
  },
  'Heavy freezing drizzle': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
  },
  'Patchy light rain': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-rain.svg',
  },
  'Light rain': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg',
  },
  'Moderate rain at times': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-rain.svg',
  },
  'Moderate rain': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-rain.svg',
  },
  'Heavy rain at times': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-rain.svg',
  },
  'Heavy rain': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-rain.svg',
  },
  'Light freezing rain': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg',
  },
  'Moderate or heavy freezing rain': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-rain.svg',
  },
  'Light sleet': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sleet.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sleet.svg',
  },
  'Moderate or heavy sleet': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-sleet.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-sleet.svg',
  },
  'Patchy light snow': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-snow.svg',
  },
  'Light snow': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg',
  },
  'Patchy moderate snow': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-snow.svg',
  },
  'Moderate snow': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg',
  },
  'Patchy heavy snow': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-snow.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-snow.svg',
  },
  'Heavy snow': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-snow.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-snow.svg',
  },
  'Ice pellets': {
    is_day: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/hail.svg',
    night: 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/hail.svg',
  },
  'Light rain shower': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-rain.svg',
  },
  'Moderate or heavy rain shower': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-rain.svg',
  },
  'Torrential rain shower': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-rain.svg',
  },
  'Light sleet showers': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-sleet.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-sleet.svg',
  },
  'Moderate or heavy sleet showers': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-sleet.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-night-sleet.svg',
  },
  'Light snow showers': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-snow.svg',
  },
  'Moderate or heavy snow showers': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-snow.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-snow.svg',
  },
  'Light showers of ice pellets': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-hail.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-hail.svg',
  },
  'Moderate or heavy showers of ice pellets': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-hail.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-night-hail.svg',
  },
  'Patchy light rain with thunder': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-overcast-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night-overcast-rain.svg',
  },
  'Moderate or heavy rain with thunder': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme-rain.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme-rain.svg',
  },
  'Patchy light snow with thunder': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-overcast-snow.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-night-overcast-snow.svg',
  },
  'Moderate or heavy snow with thunder': {
    is_day:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme-snow.svg',
    night:
      'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme-snow.svg',
  },
};

export const suggestions = [
  'Akaa',
  'Alajärvi',
  'Alavieska',
  'Alavus',
  'Asikkala',
  'Askola',
  'Aura',
  'Brändö',
  'Eckerö',
  'Enonkoski',
  'Enontekiö',
  'Espoo',
  'Eura',
  'Eurajoki',
  'Evijärvi',
  'Finström',
  'Forssa',
  'Föglö',
  'Geta',
  'Haapajärvi',
  'Haapavesi',
  'Hailuoto',
  'Halsua',
  'Hamina',
  'Hammarland',
  'Hankasalmi',
  'Hanko',
  'Harjavalta',
  'Hartola',
  'Hattula',
  'Hausjärvi',
  'Heinola',
  'Heinävesi',
  'Helsinki',
  'Hirvensalmi',
  'Hollola',
  'Honkajoki',
  'Huittinen',
  'Humppila',
  'Hyrynsalmi',
  'Hyvinkää',
  'Hämeenkoski',
  'Hämeenkyrö',
  'Hämeenlinna',
  'Ii',
  'Iisalmi',
  'Iitti',
  'Ikaalinen',
  'Ilmajoki',
  'Ilomantsi',
  'Imatra',
  'Inari',
  'Inkoo',
  'Isojoki',
  'Isokyrö',
  'Jalasjärvi',
  'Janakkala',
  'Joensuu',
  'Jokioinen',
  'Jomala',
  'Joroinen',
  'Joutsa',
  'Juankoski',
  'Juuka',
  'Juupajoki',
  'Juva',
  'Jyväskylä',
  'Jämijärvi',
  'Jämsä',
  'Järvenpää',
  'Kaarina',
  'Kaavi',
  'Kajaani',
  'Kalajoki',
  'Kangasala',
  'Kangasniemi',
  'Kankaanpää',
  'Kannonkoski',
  'Kannus',
  'Karijoki',
  'Karkkila',
  'Karstula',
  'Karvia',
  'Kaskinen',
  'Kauhajoki',
  'Kauhava',
  'Kauniainen',
  'Kaustinen',
  'Keitele',
  'Kemi',
  'Kemijärvi',
  'Keminmaa',
  'Kemiönsaari',
  'Kempele',
  'Kerava',
  'Keuruu',
  'Kihniö',
  'Kinnula',
  'Kirkkonummi',
  'Kitee',
  'Kittilä',
  'Kiuruvesi',
  'Kivijärvi',
  'Kokemäki',
  'Kokkola',
  'Kolari',
  'Konnevesi',
  'Kontiolahti',
  'Korsnäs',
  'Koski Tl',
  'Kotka',
  'Kouvola',
  'Kristiinankaupunki',
  'Kruunupyy',
  'Kuhmo',
  'Kuhmoinen',
  'Kumlinge',
  'Kuopio',
  'Kurikka',
  'Kustavi',
  'Kuusamo',
  'Kyyjärvi',
  'Kärkölä',
  'Kärsämäki',
  'Kökar',
  'Lahti',
  'Laihia',
  'Laitila',
  'Lapinjärvi',
  'Lapinlahti',
  'Lappajärvi',
  'Lappeenranta',
  'Lapua',
  'Laukaa',
  'Lemi',
  'Lemland',
  'Lempäälä',
  'Leppävirta',
  'Lestijärvi',
  'Lieksa',
  'Lieto',
  'Liminka',
  'Liperi',
  'Lohja',
  'Loimaa',
  'Loppi',
  'Loviisa',
  'Luhanka',
  'Lumijoki',
  'Lumparland',
  'Luoto',
  'Luumäki',
  'Maalahti',
  'Maarianhamina',
  'Marttila',
  'Masku',
  'Merijärvi',
  'Merikarvia',
  'Miehikkälä',
  'Mikkeli',
  'Muhos',
  'Multia',
  'Muonio',
  'Mustasaari',
  'Muurame',
  'Mynämäki',
  'Myrskylä',
  'Mäntsälä',
  'Mänttä-Vilppula',
  'Märkäjärvi',
  'Naantali',
  'Nakkila',
  'Nastola',
  'Nivala',
  'Nokia',
  'Nousiainen',
  'Nurmes',
  'Nurmijärvi',
  'Närpiö',
  'Orimattila',
  'Oripää',
  'Orivesi',
  'Oulainen',
  'Oulu',
  'Outokumpu',
  'Padasjoki',
  'Paimio',
  'Paltamo',
  'Parainen',
  'Parikkala',
  'Parkano',
  'Pedersören kunta',
  'Pelkosenniemi',
  'Pello',
  'Perho',
  'Pertunmaa',
  'Petäjävesi',
  'Pieksämäki',
  'Pielavesi',
  'Pietarsaari',
  'Pihtipudas',
  'Pirkkala',
  'Polvijärvi',
  'Pomarkku',
  'Pori',
  'Pornainen',
  'Porvoo',
  'Posio',
  'Pudasjärvi',
  'Pukkila',
  'Punkalaidun',
  'Puolanka',
  'Puumala',
  'Pyhtää',
  'Pyhäjoki',
  'Pyhäjärvi',
  'Pyhäntä',
  'Pyhäranta',
  'Pälkäne',
  'Pöytyä',
  'Raahe',
  'Raisio',
  'Rantasalmi',
  'Ranua',
  'Rauma',
  'Rautalampi',
  'Rautavaara',
  'Rautjärvi',
  'Reisjärvi',
  'Riihimäki',
  'Ristijärvi',
  'Rovaniemi',
  'Ruokolahti',
  'Ruovesi',
  'Rusko',
  'Rääkkylä',
  'Saarijärvi',
  'Salla',
  'Salo',
  'Saltvik',
  'Sastamala',
  'Sauvo',
  'Savitaipale',
  'Savonlinna',
  'Savukoski',
  'Seinäjoki',
  'Sievi',
  'Siikainen',
  'Siikajoki',
  'Siikalatva',
  'Siilinjärvi',
  'Simo',
  'Sipoo',
  'Siuntio',
  'Sodankylä',
  'Soini',
  'Somero',
  'Sonkajärvi',
  'Sotkamo',
  'Sottunga',
  'Sulkava',
  'Sund',
  'Suomenniemi',
  'Suomussalmi',
  'Suonenjoki',
  'Sysmä',
  'Säkylä',
  'Vaala',
  'Vaasa',
  'Valkeakoski',
  'Valtimo',
  'Vantaa',
  'Varkaus',
  'Vehmaa',
  'Vesanto',
  'Vesilahti',
  'Veteli',
  'Vieremä',
  'Vihti',
  'Viitasaari',
  'Vimpeli',
  'Virolahti',
  'Virrat',
  'Vårdö',
  'Vöyri',
  'Yli-Ii',
  'Ylikiiminki',
  'Ylivieska',
  'Ylämaa',
  'Tampere',
  'Turku',
  'Ulvila',
  'Ylöjärvi',
  'Jakobstad',
  'Utsjoki',
];
