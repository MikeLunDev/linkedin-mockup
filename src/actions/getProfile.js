import { FETCH_PROFILE_URL, FETCH_PARAMS } from "./fetchParameters";

export const handleGetProfile = () => {
  return async (dispatch, getState) => {
    var response = await fetch(FETCH_PROFILE_URL, FETCH_PARAMS);
    var json = await response.json();
    return response.ok
      ? dispatch({
          type: "LOAD_PROFILE",
          payload: json
        })
      : dispatch({
          type: "ERROR",
          message: json.message,
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};
