const RECEIVE_USER = 'RECEIVE_USER';
const ADD_QUERY = 'ADD_QUERY';
const CLEAR_QUERIES = 'CLEAR_QUERIES';
const defaultState = {
    userQueries: [], 
};

const queriesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CLEAR_QUERIES: 
            return {userQueries: []}

        case RECEIVE_USER:
            if (action.user.queries){
                return {...state, userQueries: action.user.queries};
            } else {
                // empty queries when user logs out
                return {...state, userQueries: []};
            }

        case ADD_QUERY:
            let userQueries = (state.userQueries || []).concat(action.query);
            return {...state, userQueries}

        default:
            return {...state};
    }
};

export default queriesReducer;