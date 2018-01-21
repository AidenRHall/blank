import {RECEIVE_CURRENT_WEATHER, RECEIVE_WEATHER_HISTORY, SET_LOCATION} from '../actions';

const defaultState = {
    location: {
        lat: 42.3601,
        lng: 71.0589,
        name: 'Boston',
    }, 
    current: null, 
    daily: [],
    hourly: [],
    timezone: null,
    showingHistory: false,
};

const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {...state, location: action.location};

        case RECEIVE_CURRENT_WEATHER:
            return {...state,
                current: action.data.currently,
                location: action.query,
                daily: action.data.daily.data,
                hourly: action.data.hourly.data,
                timezone: action.data.timezone,
                showingHistory: false,
            }

        case RECEIVE_WEATHER_HISTORY: 
            let daily = action.data.reduce(
                (acc, forecast) => [...acc, forecast.daily.data[0]], []);
            let current = action.data[0].currently;
            let hourly = action.data[0].hourly.data;
            return {...state,
                daily, 
                hourly, 
                current, 
                location: action.query,
                timezone: action.data.timezone,
                showingHistory: true,
            };
        
        default:
            return {...state};
    }
};

export default weatherReducer;
