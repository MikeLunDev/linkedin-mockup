import { FETCH_POST_URL, FETCH_PARAMS } from "./fetchParameters";

export const handleGetAllPost = () => {
  return async (dispatch, getState) => {
    var response = await fetch(FETCH_POST_URL, FETCH_PARAMS);
    var json = await response.json();
    var toSend = json.reverse();
    return response.ok
      ? dispatch({
          type: "LOAD_ALL_POST",
          payload: toSend
        })
      : dispatch({
          type: "ERROR",
          message: json.message,
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};
