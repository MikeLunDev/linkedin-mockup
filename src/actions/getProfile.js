import { FETCH_BASE_URL, FETCH_PARAMS } from "./fetchParameters";

export const handleGetProfile = () => {
  return async (dispatch, getState) => {
    var response = await fetch(FETCH_BASE_URL, FETCH_PARAMS);
    var json = await response.json();
    return response.ok
      ? dispatch({
          type: "LOAD_PROFILES",
          payload: json
        })
      : dispatch({
          type: "ERROR",
          message: json.message,
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};

export const handleSelectedProfile = (user = "user4") => {
  return async (dispatch, getState) => {
    var response = await fetch(FETCH_BASE_URL + user, FETCH_PARAMS);
    var json = await response.json();
    return response.ok
      ? dispatch({
          type: "LOAD_SELECTED_PROFILE",
          payload: json
        })
      : dispatch({
          type: "ERROR",
          message: json.message,
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};
