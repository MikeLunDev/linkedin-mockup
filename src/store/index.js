import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import profileReducer from "../reducers/profile";
import errorReducer from "../reducers/error";
import experienceReducer from "../reducers/experience";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  profile: {},
  error: {
    fetchError: false,
    message: "",
    statusCode: null
  },
  experience: []
};

const bigReducer = combineReducers({
  profile: profileReducer,
  error: errorReducer,
  experience: experienceReducer
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
