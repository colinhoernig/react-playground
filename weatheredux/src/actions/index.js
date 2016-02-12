import axios from 'axios';

import { API_KEY } from '../../API_KEY';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const searchUrl = `${API_URL}&q=${city},us`; // Only cities in United States for now
  const request = axios.get(searchUrl); // this is a promise, but redux-middlware handles it

  return {
    type: FETCH_WEATHER,
    payload: request // redux-middleware is going resolve the request
  };
}
