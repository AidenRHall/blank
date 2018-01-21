import { RECEIVE_USER, UPDATE_SESSION_FORM_ERROR } from '../actions';

const defaultState = {
    error: '',
};

const sessionFormReducer = (state = defaultState, action) => {
    let newState = {...state};
    switch (action.type) {
        case RECEIVE_USER: 
            newState.error = action.user.error || '';
            return newState;

        case UPDATE_SESSION_FORM_ERROR:
            newState.error = action.error;
            return newState;
        default:
            return newState;
    }
};

export default sessionFormReducer;