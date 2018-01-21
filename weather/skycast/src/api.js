import axios from 'axios';
import queryString from 'query-string';

const localUrl = "http://localhost:8080/";
const herokuUrl = "http://skycast-server.herokuapp.com/";

const url = process.env.NODE_ENV === 'production' ? herokuUrl : localUrl;

const $ = axios.create({withCredentials: true});

export const signUp = ({username, password}) => {
    return $.post(url + 'signup', (queryString.stringify({ username, password})));
};

export const signIn = ({username, password}) => {
    return $.post(url + 'signin', (queryString.stringify({ username, password})));
};

export const logout = () => {
    return $.get(url + 'logout');
};

export const postQuery = (query) => {
    return $.post(url + 'addquery', (queryString.stringify(query)));
};

export const fetchCurrentWeather = (latLng) => {
    return $.post(url + 'weather', (queryString.stringify(latLng)));
};

export const fetchWeatherHistory = (latLng, time) => {
    return $.post(url + 'history', (queryString.stringify({...latLng, time})));
}
