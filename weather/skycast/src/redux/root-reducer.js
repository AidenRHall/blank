import { combineReducers } from "redux";
import queries from './reducers/queries-reducer';
import session from './reducers/session-reducer';
import sessionForm from './reducers/session-form-reducer';
import weather from './reducers/weather-reducer';

const rootReducer = combineReducers({
  queries,
  session,
  sessionForm,
  weather,
});

export default rootReducer;