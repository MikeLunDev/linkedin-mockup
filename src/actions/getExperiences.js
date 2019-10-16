import { FETCH_EXPERIENCE_URL, FETCH_PARAMS } from "./fetchParameters";

export const handleGetExperiences = () => {
  return async (dispatch, getState) => {
    const { experience } = getState();
    var response = await fetch(FETCH_EXPERIENCE_URL, FETCH_PARAMS);
    var json = await response.json();
    return response.ok
      ? dispatch({
          type: "LOAD_EXPERIENCE",
          payload: [...experience, ...json]
        })
      : dispatch({
          type: "ERROR",
          message: json.message,
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};
