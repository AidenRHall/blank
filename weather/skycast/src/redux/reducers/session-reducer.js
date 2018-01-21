import {RECEIVE_USER} from '../actions';

const defaultState = {
    username: null,
};

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return  {...state, username: action.user.username };

        default:
            return {...state};
    }
};

export default usersReducer;