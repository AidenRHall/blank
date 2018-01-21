import * as $ from '../api';

export const ADD_QUERY = 'ADD_QUERY';
export const RECEIVE_CURRENT_WEATHER = 'RECEIVE_CURRENT_WEATHER';
export const RECEIVE_WEATHER_HISTORY = 'RECEIVE_WEATHER_HISTORY';
export const UPDATE_SESSION_FORM_USERNAME = 'UPDATE_SESSION_FORM_USERNAME';
export const UPDATE_SESSION_FORM_PASSWORD = 'UPDATE_SESSION_FORM_PASSWORD';
export const UPDATE_SESSION_FORM_ERROR = 'UPDATE_SESSION_FORM_ERROR';
export const RECEIVE_USER = 'RECEIVE_USER';
export const SET_LOCATION = 'SET_LOCATION';
export const CLEAR_QUERIES = 'CLEAR_QUERIES';

export const updateSessionFormUsername = username => {
    return {
        type: UPDATE_SESSION_FORM_USERNAME,
        username
    };
};
  
export const updateSessionFormPassword = password => {
    return {
        type: UPDATE_SESSION_FORM_PASSWORD,
        password
    };
};
  
export const updateSessionFormError = error => {
    return {
        type: UPDATE_SESSION_FORM_ERROR,
        error
    };
};

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    };
};

export const clearQueries = () => {
    return {
        type: CLEAR_QUERIES
    }
}

export const signIn = data => async dispatch => {
    try {
        let response = await $.signIn(data);
        dispatch(receiveUser(response.data));
    } catch (err) {
        console.log(err)
        return;
    }
}

export const signUp = data => async dispatch => {
    try {
        let response = await $.signUp(data);
        dispatch(receiveUser(response.data));
    } catch (err) {
        console.log(err)
        return;
    }
}

export const logout = () => async dispatch => {
    try {
        await $.logout();
        dispatch(receiveUser({username: null, id: null}));
        dispatch(clearQueries());
    } catch (err) {
        console.log(err)
        return;
    }
}

export const postQuery = query => async dispatch => {
    try {
        await $.postQuery(query);
        dispatch(addQuery(query));
    } catch (err) {
        console.log(err)
        return;
    }
}


export const setLocation = location => {
    // this might become a thunk which deals with the data
    return {
        type: SET_LOCATION,
        location
    }
}

export const addQuery = query => {
    // this might become a thunk
    return {
        type: ADD_QUERY,
        query,
    }
}

export const receiveCurrentWeather = (data, query) => {
    return {
        type: RECEIVE_CURRENT_WEATHER,
        data,
        query,
    };
}

export const receiveWeatherHistory = (data, query) => {
    return {
        type: RECEIVE_WEATHER_HISTORY,
        data,
        query,
    };
}

export const fetchCurrentWeather = (query) => async dispatch => {
    try {
        let response = await $.fetchCurrentWeather(query);
        dispatch(receiveCurrentWeather(response.data, query));
    } catch (err) {
        console.log(err)
        return;
    }
}

export const fetchWeatherHistory = (query, time) => async dispatch => {
    try {
        let response = await $.fetchWeatherHistory(query, time);
        dispatch(receiveWeatherHistory(response.data, query));
    } catch (err) {
        console.log(err)
        return;
    }
}
